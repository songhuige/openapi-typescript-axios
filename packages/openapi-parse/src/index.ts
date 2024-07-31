import { parse as parseV2 } from "@/v2/index";
import { parse as parseV3 } from "@/v3/index";

import type { OpenApi } from "./common/interfaces";
import type { Client } from "./types/client";
import { getOpenApiSpec } from "./utils/getOpenApiSpec";

export type * from "./common/interfaces";
export * from "./types/client";
export * from "@/common/parser/sanitize";
export * from "@/common/parser/type";
export * from "@/utils";

/**
 * Parse the OpenAPI specification to a Client model that contains
 * all the models, services and schema's we should output.
 * @param openApi The OpenAPI spec that we have loaded from disk.
 */
export async function parse(
  input: string,
  asClass = true
): Promise<{
  client: Client;
  openApi: OpenApi;
}> {
  const openApi = await getOpenApiSpec(input);
  if ("openapi" in openApi) {
    return {
      client: parseV3(openApi, asClass),
      openApi,
    };
  }

  if ("swagger" in openApi) {
    return {
      client: parseV2(openApi, asClass),
      openApi,
    };
  }

  throw new Error(
    `Unsupported Open API specification: ${JSON.stringify(openApi, null, 2)}`
  );
}
