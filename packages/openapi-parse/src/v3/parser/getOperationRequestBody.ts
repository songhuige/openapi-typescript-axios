import type { OperationParameter } from "@/common/interfaces/client";
import { getPattern } from "@/common/parser/getPattern";
import { getType } from "@/common/parser/type";
import type { Client } from "@/types/client";

import type { OpenApi } from "../interfaces/OpenApi";
import type { OpenApiRequestBody } from "../interfaces/OpenApiRequestBody";
import { getContent } from "./getContent";
import { getModel } from "./getModel";

export const getOperationRequestBody = ({
  body,
  openApi,
  types,
}: {
  body: OpenApiRequestBody;
  openApi: OpenApi;
  types: Client["types"];
}): OperationParameter => {
  const name = body["x-body-name"] ?? "requestBody";

  const requestBody: OperationParameter = {
    $refs: [],
    base: "unknown",
    default: undefined,
    description: body.description || null,
    enum: [],
    enums: [],
    export: "interface",
    imports: [],
    in: "body",
    isDefinition: false,
    isNullable: body.nullable === true,
    isReadOnly: false,
    isRequired: body.required === true,
    link: null,
    mediaType: null,
    name,
    prop: name,
    properties: [],
    template: null,
    type: "unknown",
  };

  if (body.content) {
    const content = getContent(openApi, body.content);
    if (content) {
      requestBody.mediaType = content.mediaType;
      switch (requestBody.mediaType) {
        case "application/x-www-form-urlencoded":
        case "multipart/form-data":
          requestBody.in = "formData";
          requestBody.name = "formData";
          requestBody.prop = "formData";
          break;
      }
      if (content.schema.$ref) {
        const model = getType({ type: content.schema.$ref });
        requestBody.export = "reference";
        requestBody.type = model.type;
        requestBody.base = model.base;
        requestBody.template = model.template;
        requestBody.$refs = [...requestBody.$refs, ...model.$refs];
        requestBody.imports = [...requestBody.imports, ...model.imports];
        return requestBody;
      } else {
        const model = getModel({ definition: content.schema, openApi, types });
        requestBody.export = model.export;
        requestBody.type = model.type;
        requestBody.base = model.base;
        requestBody.template = model.template;
        requestBody.link = model.link;
        requestBody.isReadOnly = model.isReadOnly;
        requestBody.isRequired = requestBody.isRequired || model.isRequired;
        requestBody.isNullable = requestBody.isNullable || model.isNullable;
        requestBody.format = model.format;
        requestBody.maximum = model.maximum;
        requestBody.exclusiveMaximum = model.exclusiveMaximum;
        requestBody.minimum = model.minimum;
        requestBody.exclusiveMinimum = model.exclusiveMinimum;
        requestBody.multipleOf = model.multipleOf;
        requestBody.maxLength = model.maxLength;
        requestBody.minLength = model.minLength;
        requestBody.maxItems = model.maxItems;
        requestBody.minItems = model.minItems;
        requestBody.uniqueItems = model.uniqueItems;
        requestBody.maxProperties = model.maxProperties;
        requestBody.minProperties = model.minProperties;
        requestBody.pattern = getPattern(model.pattern);
        requestBody.$refs = [...requestBody.$refs, ...model.$refs];
        requestBody.imports = [...requestBody.imports, ...model.imports];
        requestBody.enum.push(...model.enum);
        requestBody.enums.push(...model.enums);
        requestBody.properties.push(...model.properties);
        return requestBody;
      }
    }
  }

  return requestBody;
};
