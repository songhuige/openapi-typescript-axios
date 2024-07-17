import type { OperationParameters } from "@/common/interfaces/client";
import { getRef } from "@/common/parser/getRef";
import type { Client } from "@/types/client";

import type { OpenApi } from "../interfaces/OpenApi";
import type { OpenApiParameter } from "../interfaces/OpenApiParameter";
import { getOperationParameter } from "./getOperationParameter";

const allowedIn = ["cookie", "formData", "header", "path", "query"] as const;

export const getOperationParameters = ({
  debug,
  openApi,
  parameters,
  types,
}: {
  debug?: boolean;
  openApi: OpenApi;
  parameters: OpenApiParameter[];
  types: Client["types"];
}): OperationParameters => {
  const operationParameters: OperationParameters = {
    $refs: [],
    imports: [],
    parameters: [],
    parametersBody: null,
    parametersCookie: [],
    parametersForm: [],
    parametersHeader: [],
    parametersPath: [],
    parametersQuery: [], // Not used in v3 -> @see requestBody
  };

  parameters.forEach((parameterOrReference) => {
    const parameterDef = getRef<OpenApiParameter>(
      openApi,
      parameterOrReference
    );
    const parameter = getOperationParameter({
      debug,
      openApi,
      parameter: parameterDef,
      types,
    });

    // ignore the "api-version" param since we do not want to add it
    // as the first/default parameter for each of the service calls
    if (
      parameter.prop === "api-version" ||
      !allowedIn.includes(parameterDef.in)
    ) {
      return;
    }

    switch (parameterDef.in) {
      case "cookie":
        operationParameters.parametersCookie = [
          ...operationParameters.parametersCookie,
          parameter,
        ];
        break;
      case "formData":
        operationParameters.parametersForm = [
          ...operationParameters.parametersForm,
          parameter,
        ];
        break;
      case "header":
        operationParameters.parametersHeader = [
          ...operationParameters.parametersHeader,
          parameter,
        ];
        break;
      case "path":
        operationParameters.parametersPath = [
          ...operationParameters.parametersPath,
          parameter,
        ];
        break;
      case "query":
        operationParameters.parametersQuery = [
          ...operationParameters.parametersQuery,
          parameter,
        ];
        break;
    }

    operationParameters.$refs = [
      ...operationParameters.$refs,
      ...parameter.$refs,
    ];
    operationParameters.imports = [
      ...operationParameters.imports,
      ...parameter.imports,
    ];
    operationParameters.parameters = [
      ...operationParameters.parameters,
      parameter,
    ];
  });

  return operationParameters;
};
