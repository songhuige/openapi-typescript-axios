import type { Operation } from "openapi-parse";
import { parse } from "openapi-parse";

import { initConfigs } from "./openapi-ts";
import type { UserConfig } from "./openapi-ts/types/config";
import { writeClient } from "./openapi-ts/write/client";
import type { GenConfig } from "./types/config";
import { loadConfig, startLint, toPascalCasePath } from "./utils";

async function gen() {
  const config = await loadConfig();
  if (!config || config?.isEmpty) {
    console.error("Error：未找到配置文件，使用默认配置");
    process.exit();
  }

  const options: GenConfig = config!.config;

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
        methodNameBuilder,
      },
    };
  });

  for await (const option of clientOptions) {
    initConfigs(option);
    const { client, openApi } = await parse(option.input);
    const files = await writeClient(openApi, client);
    await startLint(files.map((i) => i.getPath()));
  }
}

export function methodNameBuilder(operation: Operation) {
  const { method, path } = operation;
  return `${method.toLowerCase()}${toPascalCasePath(path)}`;
}

export function start() {
  gen();
}

export function defineConfig(option: GenConfig) {
  return option;
}
