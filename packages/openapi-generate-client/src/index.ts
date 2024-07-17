import { initConfigs } from "./openapi-ts";
import { parse } from "./openapi-ts/open-api";
import type { UserConfig } from "./openapi-ts/types/config";
import { getOpenApiSpec } from "./openapi-ts/utils/getOpenApiSpec";
import { postProcessClient } from "./openapi-ts/utils/postprocess";
import { writeClient } from "./openapi-ts/write/client";
import type { GenConfig } from "./types/config";
import { loadConfig, startLint, toPascalCasePath } from "./utils";

// const __dirname = process.cwd();

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
        methodNameBuilder(operation) {
          const { method, path } = operation;
          return `${method.toLowerCase()}${toPascalCasePath(path)}`;
        },
      },
    };
  });

  for await (const option of clientOptions) {
    initConfigs(option);
    console.log("正在生成schema ts文件...");
    const openApi = await getOpenApiSpec(option.input);
    console.log("生成schema ts文件完成...");
    console.log("正在生成http client文件...");
    const client = postProcessClient(parse(openApi));
    const files = await writeClient(openApi, client);
    console.log("生成http client文件完成...");
    console.log("正在格式化代码...");
    await startLint(files.map((i) => i.getPath()));
    console.log("已完成格式化...");
  }
}

export function generateSchema() {
  gen();
}

export function defineConfig(option: GenConfig) {
  return option;
}
