import { existsSync } from "node:fs";
import path from "node:path";

import $RefParser from "@apidevtools/json-schema-ref-parser";

import type { OpenApi } from "../open-api";
import type { UserConfig } from "../types/config";
import { getOutputPath } from "./config";

/**
 * Load and parse te open api spec. If the file extension is ".yml" or ".yaml"
 * we will try to parse the file as a YAML spec, otherwise we will fall back
 * on parsing the file as JSON.
 * @param location: Path or url
 */
export const getOpenApiSpec = async (location: UserConfig["output"]) => {
  const op = getOutputPath(location);
  const absolutePathOrUrl = existsSync(op) ? path.resolve(op) : op;
  const schema = (await $RefParser.bundle(
    absolutePathOrUrl,
    absolutePathOrUrl,
    {}
  )) as OpenApi;
  return schema;
};
