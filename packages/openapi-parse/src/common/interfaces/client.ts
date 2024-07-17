import type { OpenApiParameter } from "@/v3/interfaces/OpenApiParameter";

export interface ModelComposition
  extends Pick<Model, "$refs" | "enums" | "imports" | "properties"> {
  export: Extract<Model["export"], "all-of" | "any-of" | "one-of">;
}

export interface Enum {
  customDescription?: string;
  customName?: string;
  description?: string;
  value: string | number;
}

export interface OperationParameter extends Model {
  in: "body" | "cookie" | "formData" | "header" | "path" | "query";
  prop: string;
  mediaType: string | null;
}

export interface OperationParameters extends Pick<Model, "$refs" | "imports"> {
  parameters: OperationParameter[];
  parametersBody: OperationParameter | null;
  parametersCookie: OperationParameter[];
  parametersForm: OperationParameter[];
  parametersHeader: OperationParameter[];
  parametersPath: OperationParameter[];
  parametersQuery: OperationParameter[];
}

export interface OperationResponse extends Model {
  in: "header" | "response";
  code: number | "default" | "1XX" | "2XX" | "3XX" | "4XX" | "5XX";
  responseTypes: Array<"error" | "success">;
}

export type Method =
  | "CONNECT"
  | "DELETE"
  | "GET"
  | "HEAD"
  | "OPTIONS"
  | "PATCH"
  | "POST"
  | "PUT"
  | "TRACE";

export interface Operation extends OperationParameters {
  deprecated: boolean;
  description: string | null;
  /**
   * The operationId from OpenAPI specification.
   */
  id: string | null;
  method: Method;
  /**
   * Method name. Methods contain the request logic.
   */
  name: string;
  path: string;
  responseHeader: string | null;
  /**
   * All operation responses defined in OpenAPI specification.
   * Sorted by status code.
   */
  responses: OperationResponse[];
  /**
   * Service name, might be without postfix. This will be used to name the
   * exported class.
   */
  service: string;
  summary: string | null;
}

export interface Schema {
  default?: unknown;
  exclusiveMaximum?: boolean;
  exclusiveMinimum?: boolean;
  format?:
    | "binary"
    | "boolean"
    | "byte"
    | "date-time"
    | "date"
    | "double"
    | "float"
    | "int32"
    | "int64"
    | "password"
    | "string";
  isDefinition: boolean;
  isNullable: boolean;
  isReadOnly: boolean;
  isRequired: boolean;
  maximum?: number;
  maxItems?: number;
  maxLength?: number;
  maxProperties?: number;
  minimum?: number;
  minItems?: number;
  minLength?: number;
  minProperties?: number;
  multipleOf?: number;
  pattern?: string;
  uniqueItems?: boolean;
}

export interface ModelMeta {
  /**
   * Ref to the type in OpenAPI specification.
   */
  $ref: string;
  /**
   * Name passed to the initial `getModel()` call.
   */
  name: string;
}

export interface Model extends Schema {
  /**
   * **Experimental.** Contains list of original refs so they can be used
   * to access the schema from anywhere instead of relying on string name.
   * This allows us to do things like detect type of ref.
   */
  $refs: string[];
  base: string;
  deprecated?: boolean;
  description: string | null;
  enum: Enum[];
  enums: Model[];
  export:
    | "all-of"
    | "any-of"
    | "array"
    | "const"
    | "dictionary"
    | "enum"
    | "generic"
    | "interface"
    | "one-of"
    | "reference";
  imports: string[];
  in:
    | OperationParameter["in"]
    | OpenApiParameter["in"]
    | OperationResponse["in"]
    | "";
  link: Model | Model[] | null;
  meta?: ModelMeta;
  /**
   * @deprecated use `meta.name` instead
   */
  name: string;
  properties: Model[];
  template: string | null;
  type: string;
}

export interface Service extends Pick<Model, "$refs" | "imports" | "name"> {
  operations: Operation[];
}
