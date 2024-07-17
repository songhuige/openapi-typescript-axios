import type { Client } from "@/types/client";
import { parse as parseV2 } from "@/v2/index";
import { parse as parseV3 } from "@/v3/index";

import { getOpenApiSpec } from "./utils/getOpenApiSpec";

/**
 * Parse the OpenAPI specification to a Client model that contains
 * all the models, services and schema's we should output.
 * @param openApi The OpenAPI spec that we have loaded from disk.
 */
export async function parse(input: string, asClass = true): Promise<Client> {
  const openApi = await getOpenApiSpec(input);
  if ("openapi" in openApi) {
    return parseV3(openApi, asClass);
  }

  if ("swagger" in openApi) {
    return parseV2(openApi, asClass);
  }

  throw new Error(
    `Unsupported Open API specification: ${JSON.stringify(openApi, null, 2)}`
  );
}
