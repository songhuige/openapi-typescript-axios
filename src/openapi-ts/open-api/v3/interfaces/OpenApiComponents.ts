import type { Dictionary } from "../../common/interfaces/Dictionary";
import type { OpenApiCallback } from "./OpenApiCallback";
import type { OpenApiExample } from "./OpenApiExample";
import type { OpenApiHeader } from "./OpenApiHeader";
import type { OpenApiLink } from "./OpenApiLink";
import type { OpenApiParameter } from "./OpenApiParameter";
import type { OpenApiRequestBody } from "./OpenApiRequestBody";
import type { OpenApiResponses } from "./OpenApiResponses";
import type { OpenApiSchema } from "./OpenApiSchema";
import type { OpenApiSecurityScheme } from "./OpenApiSecurityScheme";

/**
 * {@link} https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.1.0.md#components-object
 */
export interface OpenApiComponents {
  schemas?: Dictionary<OpenApiSchema>;
  responses?: Dictionary<OpenApiResponses>;
  parameters?: Dictionary<OpenApiParameter>;
  examples?: Dictionary<OpenApiExample>;
  requestBodies?: Dictionary<OpenApiRequestBody>;
  headers?: Dictionary<OpenApiHeader>;
  securitySchemes?: Dictionary<OpenApiSecurityScheme>;
  links?: Dictionary<OpenApiLink>;
  callbacks?: Dictionary<OpenApiCallback>;
}
