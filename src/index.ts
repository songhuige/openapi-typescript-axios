import { initConfigs } from "./openapi-ts";
import { parse } from "./openapi-ts/open-api";
import type { UserConfig } from "./openapi-ts/types/config";
import { getOpenApiSpec } from "./openapi-ts/utils/getOpenApiSpec";
import { postProcessClient } from "./openapi-ts/utils/postprocess";
import { writeClient } from "./openapi-ts/write/client";
import type { GenConfig } from "./types/config";
import { startLint, toPascalCasePath } from "./utils";

// const __dirname = process.cwd();

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

export function main() {
  gen();
}

main();
