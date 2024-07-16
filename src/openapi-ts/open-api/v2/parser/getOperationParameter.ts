import type { Client } from "../../../types/client";
import { getConfig, isStandaloneClient } from "../../../utils/config";
import type { OperationParameter } from "../../common/interfaces/client";
import { getDefault } from "../../common/parser/getDefault";
import { getEnums } from "../../common/parser/getEnums";
import { getPattern } from "../../common/parser/getPattern";
import { getRef } from "../../common/parser/getRef";
import { getType, transformTypeKeyName } from "../../common/parser/type";
import type { OpenApi } from "../interfaces/OpenApi";
import type { OpenApiParameter } from "../interfaces/OpenApiParameter";
import type { OpenApiSchema } from "../interfaces/OpenApiSchema";
import { getModel } from "./getModel";

export const getOperationParameter = ({
  openApi,
  parameter,
  types,
}: {
  openApi: OpenApi;
  parameter: OpenApiParameter;
  types: Client["types"];
}): OperationParameter => {
  const config = getConfig();

  const operationParameter: OperationParameter = {
    $refs: [],
    base: "unknown",
    description: parameter.description || null,
    enum: [],
    enums: [],
    exclusiveMaximum: parameter.exclusiveMaximum,
    exclusiveMinimum: parameter.exclusiveMinimum,
    export: "interface",
    format: parameter.format,
    imports: [],
    in: parameter.in,
    isDefinition: false,
    isNullable: parameter["x-nullable"] === true,
    isReadOnly: false,
    isRequired: parameter.required === true,
    link: null,
    maxItems: parameter.maxItems,
    maxLength: parameter.maxLength,
    maximum: parameter.maximum,
    mediaType: null,
    minItems: parameter.minItems,
    minLength: parameter.minLength,
    minimum: parameter.minimum,
    multipleOf: parameter.multipleOf,
    name: isStandaloneClient(config)
      ? parameter.name
      : transformTypeKeyName(parameter.name),
    pattern: getPattern(parameter.pattern),
    prop: parameter.name,
    properties: [],
    template: null,
    type: "unknown",
    uniqueItems: parameter.uniqueItems,
  };

  if (parameter.$ref) {
    const definitionRef = getType({ type: parameter.$ref });
    operationParameter.export = "reference";
    operationParameter.type = definitionRef.type;
    operationParameter.base = definitionRef.base;
    operationParameter.template = definitionRef.template;
    operationParameter.imports.push(...definitionRef.imports);
    operationParameter.default = getDefault(parameter, operationParameter);
    return operationParameter;
  }

  if (parameter.enum) {
    const enums = getEnums(parameter, parameter.enum);
    if (enums.length) {
      operationParameter.base = "string";
      operationParameter.enum.push(...enums);
      operationParameter.export = "enum";
      operationParameter.type = "string";
      operationParameter.default = getDefault(parameter, operationParameter);
      return operationParameter;
    }
  }

  if (parameter.type === "array" && parameter.items) {
    const items = getType({
      format: parameter.items.format,
      type: parameter.items.type,
    });
    operationParameter.export = "array";
    operationParameter.type = items.type;
    operationParameter.base = items.base;
    operationParameter.template = items.template;
    operationParameter.imports.push(...items.imports);
    operationParameter.default = getDefault(parameter, operationParameter);
    return operationParameter;
  }

  if (parameter.type === "object" && parameter.items) {
    const items = getType({
      format: parameter.items.format,
      type: parameter.items.type,
    });
    operationParameter.export = "dictionary";
    operationParameter.type = items.type;
    operationParameter.base = items.base;
    operationParameter.template = items.template;
    operationParameter.imports.push(...items.imports);
    operationParameter.default = getDefault(parameter, operationParameter);
    return operationParameter;
  }

  let schema = parameter.schema;
  if (schema) {
    if (schema.$ref?.startsWith("#/parameters/")) {
      schema = getRef<OpenApiSchema>(openApi, schema);
    }
    if (schema.$ref) {
      const model = getType({ type: schema.$ref });
      operationParameter.export = "reference";
      operationParameter.type = model.type;
      operationParameter.base = model.base;
      operationParameter.template = model.template;
      operationParameter.imports.push(...model.imports);
      operationParameter.default = getDefault(parameter, operationParameter);
      return operationParameter;
    } else {
      const model = getModel({ definition: schema, openApi, types });
      operationParameter.export = model.export;
      operationParameter.type = model.type;
      operationParameter.base = model.base;
      operationParameter.template = model.template;
      operationParameter.link = model.link;
      operationParameter.imports.push(...model.imports);
      operationParameter.enum.push(...model.enum);
      operationParameter.enums.push(...model.enums);
      operationParameter.properties.push(...model.properties);
      operationParameter.default = getDefault(parameter, operationParameter);
      return operationParameter;
    }
  }

  // If the parameter has a type than it can be a basic or generic type.
  if (parameter.type) {
    const definitionType = getType({
      format: parameter.format,
      type: parameter.type,
    });
    operationParameter.export = "generic";
    operationParameter.type = definitionType.type;
    operationParameter.base = definitionType.base;
    operationParameter.template = definitionType.template;
    operationParameter.imports.push(...definitionType.imports);
    operationParameter.default = getDefault(parameter, operationParameter);
    return operationParameter;
  }

  return operationParameter;
};
