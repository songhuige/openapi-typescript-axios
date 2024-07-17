import type { Model } from "@/common/interfaces/client";
import { getRef } from "@/common/parser/getRef";
import { getType } from "@/common/parser/type";
import type { Client } from "@/types/client";

import type { GetModelFn } from "../interfaces/Model";
import type { OpenApi } from "../interfaces/OpenApi";
import type { OpenApiSchema } from "../interfaces/OpenApiSchema";

export const getRequiredPropertiesFromComposition = ({
  definitions,
  getModel,
  openApi,
  required,
  types,
}: {
  openApi: OpenApi;
  required: string[];
  definitions: OpenApiSchema[];
  getModel: GetModelFn;
  types: Client["types"];
}): Model[] => {
  const requiredProperties = definitions
    .reduce((properties, definition) => {
      if (definition.$ref) {
        const type = getType({ type: definition.$ref });
        // avoid circular references if two refs reference each other
        // if (types[type.base] && types[type.base].$ref === definition.$ref) {
        //   const schema = getRef<OpenApiSchema>(openApi, definition);
        //   return [...properties]
        // }

        const meta = {
          $ref: definition.$ref,
          name: type.base,
        };
        types[type.base] = meta;
        const schema = getRef<OpenApiSchema>(openApi, definition);
        return [
          ...properties,
          ...getModel({
            definition: schema,
            meta,
            openApi,
            types,
          }).properties,
        ];
      }

      return [
        ...properties,
        ...getModel({
          definition,
          openApi,
          parentDefinition: definition,
          types,
        }).properties,
      ];
    }, [] as Model[])
    .filter(
      (property) => !property.isRequired && required.includes(property.name)
    )
    .map((property) => ({
      ...property,
      isRequired: true,
    }));
  return requiredProperties;
};
