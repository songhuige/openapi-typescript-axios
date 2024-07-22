import camelcase from "camelcase";
import type {
  Client,
  Model,
  Operation,
  OperationParameter,
  Service,
} from "openapi-parse";
import { escapeComment, escapeName, unique } from "openapi-parse";
import type ts from "typescript";

import type { Comments, FunctionParameter, TypeScriptFile } from "../compiler";
import { compiler } from "../compiler";
import { getConfig, isStandaloneClient } from "../utils/config";
import { setUniqueTypeName } from "./type";
import type { HttpModule } from "./types";

type OnNode = (node: ts.Node) => void;
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

  return [
    {
      default: isRequired ? undefined : {},
      name: "data",
      type: importedType,
    },
  ];
};

const toOperationReturnType = (client: Client, operation: Operation) => {
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

  returnType = compiler.typedef.basic("Promise", [
    compiler.typedef.basic("AxiosResponse", [returnType]),
  ]);
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

  // const successResponses = operation.responses.filter((response) =>
  //   response.responseTypes.includes("success")
  // );

  const comment = [
    operation.deprecated && "@deprecated",
    operation.summary && escapeComment(operation.summary),
    operation.description && escapeComment(operation.description),
    // ...params,
    // ...successResponses.map(
    //   (response) =>
    //     `@returns ${response.type} ${
    //       response.description ? escapeComment(response.description) : ""
    //     }`
    // ),
  ];
  return comment;
};

const toRequestOptions = (
  client: Client,
  operation: Operation,
  onImport: OnImport
) => {
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

  const toObj = (parameters: OperationParameter[]) =>
    parameters.reduce((prev, curr) => {
      const key = curr.prop;
      const value = `data.${curr.name}`;
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
      obj.formData = `data.${operation.parametersBody.name}`;
    }
    if (operation.parametersBody.in === "body") {
      obj.body = `data.${operation.parametersBody.name}`;
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

  // const errorResponses = operation.responses.filter((response) =>
  //   response.responseTypes.includes("error")
  // );
  // if (errorResponses.length > 0) {
  //   const errors: Record<number | string, string> = {};
  //   errorResponses.forEach((response) => {
  //     errors[response.code] = response.description ?? "";
  //   });
  //   obj.errors = errors;
  // }

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
  onImport: OnImport
) => {
  const options = toRequestOptions(client, operation, onImport);

  return [
    compiler.return.functionCall({
      args: [options],
      name: `request`,
    }),
  ];
};

export const processService = (
  client: Client,
  service: Service,
  onNode: OnNode,
  onImport: OnImport
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

  const methodNameBuilder = config.services.methodNameBuilder;

  const httpModule: HttpModule = {
    name: service.name,
    httpFn: [],
  };

  service.operations.forEach((operation) => {
    const name = methodNameBuilder?.(operation) ?? operation.name;
    const expression = compiler.types.functionDeclaration({
      name: name,
      parameters: toOperationParamType(client, operation),
      returnType: toOperationReturnType(client, operation),
      statements: toOperationStatements(client, operation, onImport),
      comment: toOperationComment(operation),
    });
    httpModule.httpFn.push(name);
    onNode(expression);
  });
  return httpModule;
};

export const processServices = async ({
  client,
  files,
  type,
}: {
  client: Client;
  files: Array<{ serviceName: string; file: TypeScriptFile }>;
  type: TypeScriptFile;
}): Promise<Array<HttpModule> | undefined> => {
  if (!files || !files.length) {
    return;
  }

  const config = getConfig();

  const httpModules: Array<HttpModule> = [];

  for (const service of client.services) {
    let imports: string[] = [];
    const serviceFile = files.find((i) => i.serviceName === service.name)?.file;
    const httpModule = processService(
      client,
      service,
      (node) => {
        serviceFile?.add(node);
      },
      (imported) => {
        imports = [...imports, imported];
      }
    );
    httpModules.push(httpModule);
    if (config.axiosInstPath) {
      serviceFile?.addImport([{ name: "request" }], config.axiosInstPath);
    }
    serviceFile?.addImport([{ name: "AxiosResponse", asType: true }], "axios");

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
  return httpModules;
};
