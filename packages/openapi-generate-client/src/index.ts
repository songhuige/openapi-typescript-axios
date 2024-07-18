import type { Client, OpenApi, Operation } from "openapi-parse";
import { parse } from "openapi-parse";

import { initConfigs } from "./openapi-ts";
import type { UserConfig } from "./openapi-ts/types/config";
import { writeClient } from "./openapi-ts/write/client";
import type { HttpModule } from "./openapi-ts/write/types";
import type { GenConfig } from "./types/config";
import { loadConfig, startLint, toPascalCasePath } from "./utils";

export interface OpenApiGenerateClient {
  client: Client;
  openApi: OpenApi;
  httpModules: Array<HttpModule>;
}

async function gen(option?: GenConfig) {
  const options: GenConfig = await getConfig(option);

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

  const clients: Array<OpenApiGenerateClient> = [];

  for await (const option of clientOptions) {
    initConfigs(option);
    const { client, openApi } = await parse(option.input);
    const [files, httpModules] = await writeClient(openApi, client);
    clients.push({ client, openApi, httpModules });
    await startLint(files.map((i) => i.getPath()));
  }

  return clients;
}

async function getConfig(option?: GenConfig) {
  if (option) return option;

  const config = await loadConfig();
  if (!config || config?.isEmpty) {
    console.error("Error：未找到配置文件，使用默认配置");
    process.exit();
  }

  return config!.config;
}

export function methodNameBuilder(operation: Operation) {
  const { method, path } = operation;
  return `${method.toLowerCase()}${toPascalCasePath(path)}`;
}

export function start(option?: GenConfig) {
  return gen(option);
}

export function defineConfig(option: GenConfig) {
  return option;
}
