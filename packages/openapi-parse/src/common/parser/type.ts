import camelcase from "camelcase";

import { transformTypeName } from "@/utils/transform";
import { isDefinitionTypeNullable } from "@/v3/parser/inferType";

import type { Type } from "../interfaces/Type";
import { reservedWords } from "./reservedWords";
import {
  ensureValidTypeScriptJavaScriptIdentifier,
  sanitizeOperationParameterName,
} from "./sanitize";
import { stripNamespace } from "./stripNamespace";

/**
 * Get mapped type for given type to basic Typescript/Javascript type.
 */
export const getMappedType = (
  type: string,
  format?: string
): string | undefined => {
  if (format === "binary") {
    return "binary";
  }
  switch (type) {
    case "any":
    case "object":
      return "unknown";
    case "array":
      return "unknown[]";
    case "boolean":
      return "boolean";
    case "byte":
    case "double":
    case "float":
    case "int":
    case "integer":
    case "long":
    case "number":
    case "short":
      return "number";
    case "char":
    case "date":
    case "date-time":
    case "password":
    case "string":
      return "string";
    case "file":
      return "binary";
    case "null":
      return "null";
    case "void":
      return "void";
  }
};

/**
 * Parse any string value into a type object.
 * @param type String or String[] value like "integer", "Link[Model]" or ["string", "null"].
 * @param format String value like "binary" or "date".
 */
export const getType = ({
  format,
  type = "unknown",
}: {
  format?: string;
  type?: string | string[];
}): Type => {
  const result: Type = {
    $refs: [],
    base: "unknown",
    imports: [],
    isNullable: false,
    template: null,
    type: "unknown",
  };

  // Special case for JSON Schema spec (december 2020, page 17),
  // that allows type to be an array of primitive types...
  if (Array.isArray(type)) {
    const joinedType = type
      .filter((value) => value !== "null")
      .map((value) => getMappedType(value, format))
      .filter(Boolean)
      .join(" | ");
    result.type = joinedType;
    result.base = joinedType;
    result.isNullable = isDefinitionTypeNullable({ type });
    return result;
  }

  const mapped = getMappedType(type, format);
  if (mapped) {
    result.type = mapped;
    result.base = mapped;
    return result;
  }

  const typeWithoutNamespace = decodeURIComponent(stripNamespace(type));

  if (/\[.*\]$/g.test(typeWithoutNamespace)) {
    const matches = typeWithoutNamespace.match(/(.*?)\[(.*)\]$/);
    if (matches?.length) {
      const match1 = getType({
        type: ensureValidTypeScriptJavaScriptIdentifier(matches[1]),
      });
      const match2 = getType({
        type: ensureValidTypeScriptJavaScriptIdentifier(matches[2]),
      });

      if (match1.type === "unknown[]") {
        result.type = `${match2.type}[]`;
        result.base = `${match2.type}`;
        match1.$refs = [];
        match1.imports = [];
      } else if (match2.type) {
        result.type = `${match1.type}<${match2.type}>`;
        result.base = match1.type;
        result.template = match2.type;
      } else {
        result.type = match1.type;
        result.base = match1.type;
        result.template = match1.type;
      }

      result.$refs = [...result.$refs, ...match1.$refs, ...match2.$refs];
      result.imports = [
        ...result.imports,
        ...match1.imports,
        ...match2.imports,
      ];
      return result;
    }
  }

  if (typeWithoutNamespace) {
    let encodedType = transformTypeName(
      ensureValidTypeScriptJavaScriptIdentifier(typeWithoutNamespace)
    );
    if (type.startsWith("#/components/parameters/")) {
      // prefix parameter names to avoid conflicts, assuming people are mostly
      // interested in importing schema types and don't care about this naming
      encodedType = `Parameter${encodedType}`;
    }
    result.type = encodedType;
    result.base = encodedType;
    if (type.startsWith("#")) {
      result.$refs = [...result.$refs, decodeURIComponent(type)];
    }
    result.imports = [...result.imports, encodedType];
    return result;
  }

  return result;
};

/**
 * Replaces any invalid characters from a parameter name.
 * For example: 'filter.someProperty' becomes 'filterSomeProperty'.
 */
export const transformTypeKeyName = (value: string): string => {
  const clean = sanitizeOperationParameterName(value).trim();
  return camelcase(clean).replace(reservedWords, "_$1");
};
