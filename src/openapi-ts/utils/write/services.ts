import camelcase from "camelcase";

import type {
  Comments,
  FunctionParameter,
  Node,
  TypeScriptFile,
} from "../../compiler";
import { compiler } from "../../compiler";
import type { ObjectValue } from "../../compiler/types";
import type {
  Model,
  Operation,
  OperationParameter,
  Service,
} from "../../open-api";
import type { Client } from "../../types/client";
import { getConfig, isStandaloneClient } from "../config";
import { escapeComment, escapeName } from "../escape";
import { unique } from "../unique";
import { setUniqueTypeName } from "./type";

type OnNode = (node: Node) => void;
type OnImport = (name: string) => void;

const generateImport = ({
  meta,
  onImport,
  ...setUniqueTypeNameArgs
}: Pick<Parameters<typeof setUniqueTypeName>[0], "client" | "nameTransformer"> &
  Pick<Model, "meta"> & {
    onImport: OnImport;
  }) => {
  // generate imports only for top-level models
  if (!meta) {
    return;
  }

  const { name } = setUniqueTypeName({ meta, ...setUniqueTypeNameArgs });
  if (name) {
    onImport(name);
  }
};

export const modelResponseTransformerTypeName = (name: string) =>
  `${name}ModelResponseTransformer`;

export const operationDataTypeName = (name: string) =>
  `${camelcase(name, { pascalCase: true })}Data`;

export const operationErrorTypeName = (name: string) =>
  `${camelcase(name, { pascalCase: true })}Error`;

// operation response type ends with "Response", it's enough to append "Transformer"
export const operationResponseTransformerTypeName = (name: string) =>
  `${name}Transformer`;

export const operationResponseTypeName = (name: string) =>
  `${camelcase(name, { pascalCase: true })}Response`;

const toOperationParamType = (
  client: Client,
  operation: Operation
): FunctionParameter[] => {
  const config = getConfig();

  const { name: importedType } = setUniqueTypeName({
    client,
    meta: {
      // TODO: this should be exact ref to operation for consistency,
      // but name should work too as operation ID is unique
      $ref: operation.name,
      name: operation.name,
    },
    nameTransformer: operationDataTypeName,
  });

  const isRequired = operation.parameters.some(
    (parameter) => parameter.isRequired
  );

  if (isStandaloneClient(config)) {
    return [
      {
        isRequired,
        name: "options",
        type: importedType ? `Options<${importedType}>` : "Options",
      },
    ];
  }

  if (!operation.parameters.length) {
    return [];
  }

  const getDefaultPrintable = (
    p: OperationParameter | Model
  ): string | undefined => {
    if (p.default === undefined) {
      return undefined;
    }
    return JSON.stringify(p.default, null, 4);
  };

  // legacy configuration
  if (!config.useOptions) {
    return operation.parameters.map((p) => {
      const typePath = `${importedType}['${p.name}']`;
      return {
        default: p?.default,
        isRequired:
          (!p.isRequired && !getDefaultPrintable(p) ? "?" : "") === "",
        name: p.name,
        type: typePath,
      };
    });
  }

  return [
    {
      default: isRequired ? undefined : {},
      name: "data",
      type: importedType,
    },
  ];
};

const toOperationReturnType = (client: Client, operation: Operation) => {
  const config = getConfig();

  let returnType = compiler.typedef.basic("void");

  const successResponses = operation.responses.filter((response) =>
    response.responseTypes.includes("success")
  );

  // TODO: we should return nothing when successes don't exist
  // can't remove this logic without removing request/name config
  // as it complicates things
  if (successResponses.length) {
    const { name: importedType } = setUniqueTypeName({
      client,
      meta: {
        // TODO: this should be exact ref to operation for consistency,
        // but name should work too as operation ID is unique
        $ref: operation.name,
        name: operation.name,
      },
      nameTransformer: operationResponseTypeName,
    });
    returnType = compiler.typedef.union([importedType]);
  }

  returnType = compiler.typedef.basic("CancelablePromise", [returnType]);
  return returnType;
};

const toOperationComment = (operation: Operation): Comments => {
  const config = getConfig();

  if (isStandaloneClient(config)) {
    const comment = [
      operation.deprecated && "@deprecated",
      operation.summary && escapeComment(operation.summary),
      operation.description && escapeComment(operation.description),
    ];
    return comment;
  }

  let params: string[] = [];

  if (operation.parameters.length) {
    if (config.useOptions) {
      params = [
        "@param data The data for the request.",
        ...operation.parameters.map(
          (parameter) =>
            `@param data.${parameter.name} ${
              parameter.description ? escapeComment(parameter.description) : ""
            }`
        ),
      ];
    } else {
      params = operation.parameters.map(
        (parameter) =>
          `@param ${parameter.name} ${
            parameter.description ? escapeComment(parameter.description) : ""
          }`
      );
    }
  }

  const successResponses = operation.responses.filter((response) =>
    response.responseTypes.includes("success")
  );

  const comment = [
    operation.deprecated && "@deprecated",
    operation.summary && escapeComment(operation.summary),
    operation.description && escapeComment(operation.description),
    ...params,
    ...successResponses.map(
      (response) =>
        `@returns ${response.type} ${
          response.description ? escapeComment(response.description) : ""
        }`
    ),
    "@throws ApiError",
  ];
  return comment;
};

const toRequestOptions = (
  client: Client,
  operation: Operation,
  onImport: OnImport,
  onClientImport: OnImport | undefined
) => {
  const config = getConfig();

  const operationName = operationResponseTypeName(operation.name);
  const { name: responseTransformerName } = setUniqueTypeName({
    client,
    meta: {
      $ref: `transformers/${operationName}`,
      name: operationName,
    },
    nameTransformer: operationResponseTransformerTypeName,
  });

  if (responseTransformerName) {
    onImport(responseTransformerName);
  }

  if (isStandaloneClient(config)) {
    let obj: ObjectValue[] = [
      {
        spread: "options",
      },
    ];

    const bodyParameters = operation.parameters.filter(
      (parameter) => parameter.in === "body" || parameter.in === "formData"
    );
    const contents = bodyParameters
      .map((parameter) => parameter.mediaType)
      .filter(Boolean)
      .filter(unique);
    if (contents.length === 1 && contents[0] === "multipart/form-data") {
      obj = [
        ...obj,
        {
          spread: "formDataBodySerializer",
        },
      ];
      onClientImport?.("formDataBodySerializer");
    }

    // TODO: set parseAs to skip inference if every result has the same
    // content type. currently impossible because successes do not contain
    // header information

    obj = [
      ...obj,
      {
        key: "url",
        value: operation.path,
      },
    ];

    if (responseTransformerName) {
      obj = [
        ...obj,
        {
          key: "responseTransformer",
          value: responseTransformerName,
        },
      ];
    }

    return compiler.types.object({
      identifiers: ["responseTransformer"],
      obj,
    });
  }

  const toObj = (parameters: OperationParameter[]) =>
    parameters.reduce((prev, curr) => {
      const key = curr.prop;
      const value = config.useOptions ? `data.${curr.name}` : curr.name;
      if (key === value) {
        prev[key] = key;
      } else if (escapeName(key) === key) {
        prev[key] = value;
      } else {
        prev[`'${key}'`] = value;
      }
      return prev;
    }, {} as Record<string, unknown>);

  const obj: Record<string, any> = {
    method: operation.method,
    url: operation.path,
  };

  if (operation.parametersPath.length) {
    obj.path = toObj(operation.parametersPath);
  }

  if (operation.parametersCookie.length) {
    obj.cookies = toObj(operation.parametersCookie);
  }

  if (operation.parametersHeader.length) {
    obj.headers = toObj(operation.parametersHeader);
  }

  if (operation.parametersQuery.length) {
    obj.query = toObj(operation.parametersQuery);
  }

  if (operation.parametersForm.length) {
    obj.formData = toObj(operation.parametersForm);
  }

  if (operation.parametersBody) {
    if (operation.parametersBody.in === "formData") {
      if (config.useOptions) {
        obj.formData = `data.${operation.parametersBody.name}`;
      } else {
        obj.formData = operation.parametersBody.name;
      }
    }
    if (operation.parametersBody.in === "body") {
      if (config.useOptions) {
        obj.body = `data.${operation.parametersBody.name}`;
      } else {
        obj.body = operation.parametersBody.name;
      }
    }
  }

  if (operation.parametersBody?.mediaType) {
    obj.mediaType = operation.parametersBody?.mediaType;
  }

  if (operation.responseHeader) {
    obj.responseHeader = operation.responseHeader;
  }

  if (responseTransformerName) {
    obj.responseTransformer = responseTransformerName;
  }

  const errorResponses = operation.responses.filter((response) =>
    response.responseTypes.includes("error")
  );
  if (errorResponses.length > 0) {
    const errors: Record<number | string, string> = {};
    errorResponses.forEach((response) => {
      errors[response.code] = response.description ?? "";
    });
    obj.errors = errors;
  }

  return compiler.types.object({
    identifiers: [
      "body",
      "cookies",
      "formData",
      "headers",
      "path",
      "query",
      "responseTransformer",
    ],
    obj,
    shorthand: true,
  });
};

const toOperationStatements = (
  client: Client,
  operation: Operation,
  onImport: OnImport,
  onClientImport?: OnImport
) => {
  const config = getConfig();

  const options = toRequestOptions(client, operation, onImport, onClientImport);

  if (isStandaloneClient(config)) {
    const errorType = setUniqueTypeName({
      client,
      meta: {
        // TODO: this should be exact ref to operation for consistency,
        // but name should work too as operation ID is unique
        $ref: operation.name,
        name: operation.name,
      },
      nameTransformer: operationErrorTypeName,
    }).name;
    const successResponses = operation.responses.filter((response) =>
      response.responseTypes.includes("success")
    );
    const responseType = successResponses.length
      ? setUniqueTypeName({
          client,
          meta: {
            // TODO: this should be exact ref to operation for consistency,
            // but name should work too as operation ID is unique
            $ref: operation.name,
            name: operation.name,
          },
          nameTransformer: operationResponseTypeName,
        }).name
      : "void";
    return [
      compiler.return.functionCall({
        args: [options],
        name: `(options?.client ?? client).${operation.method.toLocaleLowerCase()}`,
        types:
          errorType && responseType
            ? [responseType, errorType]
            : errorType
            ? ["unknown", errorType]
            : responseType
            ? [responseType]
            : [],
      }),
    ];
  }

  if (config.name) {
    return [
      compiler.return.functionCall({
        args: [options],
        name: "this.httpRequest.request",
      }),
    ];
  }

  if (config.client === "angular") {
    return [
      compiler.return.functionCall({
        args: ["OpenAPI", "this.http", options],
        name: "__request",
      }),
    ];
  }

  return [
    compiler.return.functionCall({
      args: ["OpenAPI", options],
      name: "__request",
    }),
  ];
};

export const processService = (
  client: Client,
  service: Service,
  onNode: OnNode,
  onImport: OnImport,
  onClientImport: OnImport
) => {
  const config = getConfig();

  service.operations.forEach((operation) => {
    if (operation.parameters.length) {
      generateImport({
        client,
        meta: {
          // TODO: this should be exact ref to operation for consistency,
          // but name should work too as operation ID is unique
          $ref: operation.name,
          name: operation.name,
        },
        nameTransformer: operationDataTypeName,
        onImport,
      });
    }

    const successResponses = operation.responses.filter((response) =>
      response.responseTypes.includes("success")
    );
    if (successResponses.length) {
      generateImport({
        client,
        meta: {
          // TODO: this should be exact ref to operation for consistency,
          // but name should work too as operation ID is unique
          $ref: operation.name,
          name: operation.name,
        },
        nameTransformer: operationResponseTypeName,
        onImport,
      });
    }
  });

  service.operations.forEach((operation) => {
    const expression = compiler.types.function({
      parameters: toOperationParamType(client, operation),
      returnType: toOperationReturnType(client, operation),
      statements: toOperationStatements(
        client,
        operation,
        onImport,
        onClientImport
      ),
    });
    const statement = compiler.export.const({
      comment: toOperationComment(operation),
      expression,
      name: operation.name,
    });
    onNode(statement);
  });
  return;
};

export const processServices = async ({
  client,
  files,
  type,
}: {
  client: Client;
  files: Array<{ serviceName: string; file: TypeScriptFile }>;
  type: TypeScriptFile;
}): Promise<void> => {
  if (!files || !files.length) {
    return;
  }

  const config = getConfig();

  for (const service of client.services) {
    let imports: string[] = [];
    let clientImports: string[] = [];
    const serviceFile = files.find((i) => i.serviceName === service.name)?.file;
    processService(
      client,
      service,
      (node) => {
        serviceFile?.add(node);
      },
      (imported) => {
        imports = [...imports, imported];
      },
      (imported) => {
        clientImports = [...clientImports, imported];
      }
    );
    if (config.axiosInstPath) {
      serviceFile?.addImport([{ name: "Axios" }], config.axiosInstPath);
    }
    // Import all models required by the services.
    if (type && !type.isEmpty()) {
      const importedTypes = imports.filter(unique).map((name) => ({
        // this detection could be done safer, but it shouldn't cause any issues
        asType: !name.endsWith("Transformer"),
        name,
      }));
      serviceFile?.addImport(importedTypes, `./${type.getName(false)}`);
    }
  }
};
