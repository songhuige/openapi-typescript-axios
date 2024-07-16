import { writeFileSync } from "fs";

import { initConfigs } from "./openapi-ts";
import { parse } from "./openapi-ts/open-api";
import type { UserConfig } from "./openapi-ts/types/config";
import { getOutputPath } from "./openapi-ts/utils/config";
import { getOpenApiSpec } from "./openapi-ts/utils/getOpenApiSpec";
import { postProcessClient } from "./openapi-ts/utils/postprocess";
import { writeClient } from "./openapi-ts/write/client";
import type { GenConfig } from "./types/config";

const __dirname = process.cwd();

async function gen() {
  const options: GenConfig = {
    axiosInstPath: "@/http/axios-instance",
    services: [
      {
        input: "http://117.139.13.157:25031/api/command/v2/api-docs",
        output: "./src/http/command",
      },
      {
        input: "http://117.139.13.157:25031/api/common/v2/api-docs",
        output: "./src/http/common",
      },
    ],
  };

  const clientOptions: UserConfig[] = options.services.map((service) => {
    const axiosInstPath = options.axiosInstPath || service.axiosInstPath || "";
    return {
      axiosInstPath: axiosInstPath,
      input: service.input,
      output: {
        lint: "eslint",
        format: "prettier",
        path: service.output,
      },
      services: {
        asClass: true,
      },
    };
  });

  for await (const option of clientOptions) {
    initConfigs(option);

    const openApi = await getOpenApiSpec(option.input);
    const client = postProcessClient(parse(openApi));
    await writeClient(openApi, client);
    await writeFileSync(
      `${getOutputPath(option.output)}/client.json`,
      JSON.stringify(client, null, 2),
      "utf-8"
    );
  }
}

export function main() {
  gen();
}

main();
