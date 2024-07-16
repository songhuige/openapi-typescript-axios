import type { Client } from "../../../types/client";
import { getConfig, isStandaloneClient } from "../../../utils/config";
import { enumMeta } from "../../../utils/enum";
import type { OperationParameter } from "../../common/interfaces/client";
import { getDefault } from "../../common/parser/getDefault";
import { getPattern } from "../../common/parser/getPattern";
import { getRef } from "../../common/parser/getRef";
import { getType, transformTypeKeyName } from "../../common/parser/type";
import type { OpenApi } from "../interfaces/OpenApi";
import type { OpenApiParameter } from "../interfaces/OpenApiParameter";
import type { OpenApiSchema } from "../interfaces/OpenApiSchema";
import { getModel } from "./getModel";
import { isDefinitionNullable } from "./inferType";
import { getParameterSchema } from "./parameter";

export const getOperationParameter = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  debug,
  openApi,
  parameter,
  types,
}: {
  debug?: boolean;
  openApi: OpenApi;
  parameter: OpenApiParameter;
  types: Client["types"];
}): OperationParameter => {
  const config = getConfig();

  let operationParameter: OperationParameter = {
    $refs: [],
    base: "unknown",
    deprecated: parameter.deprecated === true,
    description: parameter.description || null,
    enum: [],
    enums: [],
    export: "interface",
    imports: [],
    in: parameter.in,
    isDefinition: false,
    isNullable: isDefinitionNullable(parameter),
    isReadOnly: false,
    isRequired: parameter.required === true,
    link: null,
    mediaType: null,
    name: isStandaloneClient(config)
      ? parameter.name
      : transformTypeKeyName(parameter.name),
    prop: parameter.name,
    properties: [],
    template: null,
    type: "unknown",
  };

  if (parameter.$ref) {
    const definitionRef = getType({ type: parameter.$ref });
    operationParameter.export = "reference";
    operationParameter.type = definitionRef.type;
    operationParameter.base = definitionRef.base;
    operationParameter.template = definitionRef.template;
    operationParameter.$refs = [
      ...operationParameter.$refs,
      ...definitionRef.$refs,
    ];
    operationParameter.imports = [
      ...operationParameter.imports,
      ...definitionRef.imports,
    ];
    return operationParameter;
  }

  let schema = getParameterSchema(parameter);
  if (schema) {
    if (schema.$ref?.startsWith("#/components/parameters/")) {
      schema = getRef<OpenApiSchema>(openApi, schema);
    }

    if (schema.$ref) {
      const model = getType({ type: schema.$ref });
      operationParameter.export = "reference";
      operationParameter.type = model.type;
      operationParameter.base = model.base;
      operationParameter.template = model.template;
      operationParameter.$refs = [...operationParameter.$refs, ...model.$refs];
      operationParameter.imports = [
        ...operationParameter.imports,
        ...model.imports,
      ];
      operationParameter.default = getDefault(schema);
      return operationParameter;
    }

    const model = getModel({ definition: schema, openApi, types });
    operationParameter = {
      ...operationParameter,
      $refs: [...operationParameter.$refs, ...model.$refs],
      base: model.base,
      enum: [...operationParameter.enum, ...model.enum],
      enums: [...operationParameter.enums, ...model.enums],
      exclusiveMaximum: model.exclusiveMaximum,
      exclusiveMinimum: model.exclusiveMinimum,
      export: model.export,
      format: model.format,
      imports: [...operationParameter.imports, ...model.imports],
      isNullable: operationParameter.isNullable || model.isNullable,
      isReadOnly: model.isReadOnly,
      isRequired: operationParameter.isRequired || model.isRequired,
      link: model.link,
      maxItems: model.maxItems,
      maxLength: model.maxLength,
      maxProperties: model.maxProperties,
      maximum: model.maximum,
      minItems: model.minItems,
      minLength: model.minLength,
      minProperties: model.minProperties,
      minimum: model.minimum,
      multipleOf: model.multipleOf,
      pattern: getPattern(model.pattern),
      properties: [...operationParameter.properties, ...model.properties],
      template: model.template,
      type: model.type,
      uniqueItems: model.uniqueItems,
    };
    if (
      (operationParameter.enum.length || operationParameter.enums.length) &&
      !operationParameter.meta
    ) {
      operationParameter.meta = enumMeta(operationParameter);
    }
    operationParameter.default = model.default;
    return operationParameter;
  }

  return operationParameter;
};
