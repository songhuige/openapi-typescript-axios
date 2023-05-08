import * as fs from "fs";
import openapiTS from "openapi-typescript";
import path from "path";

import { loadConfig, startLint } from "./utils.js";

const __dirname = process.cwd();

async function gen() {
  const config = await loadConfig();

  if (config === null || config.isEmpty) {
    console.log("请先配置'openapi-typescript-axios'文件");
    return;
  }

  const services = config.config;

  services.forEach(async ({ name, url }) => {
    const output = await openapiTS(url, { version: 3 }).catch(console.log);
    if (output) {
      const filePath = path.join(__dirname, `../schema/${name}.ts`);
      if (!fs.existsSync(path.join(__dirname, `../schema`))) {
        fs.mkdirSync(path.join(__dirname, `../schema`));
      }
      fs.writeFileSync(filePath, output);
      await startLint(filePath);
      await genSchemaWrapper(name);
      console.log(`dts: ${filePath}`);
    }
  });
}

async function genSchemaWrapper(module: string) {
  const camelCase = `${module.substring(0, 1).toUpperCase()}${module.substring(
    1
  )}`;
  const text = `import type { paths } from "./${module}";

type P1 = keyof paths;

type M1<P extends P1> = APIMethod<paths, P>;

type S1<P extends P1, M extends M1<P>> = APIStates<paths, P, M>;

export type ${camelCase}API<
  P extends P1,
  M extends M1<P> = any,
  S extends S1<P, M> = any
> = API<paths, P, M, S>;

export type ${camelCase}Param<P extends P1, M extends M1<P> = any> = RequestParam<
  paths,
  P,
  M
>;

export type ${camelCase}Response<
  P extends P1,
  M extends M1<P> = any,
  S extends S1<P, M> = any
> = ResponseBody<paths, P, M, S>;
  `;

  const filePath = path.join(__dirname, `../schema/${module}-wrapper.ts`);
  fs.writeFileSync(filePath, text);
  await startLint(filePath);
}

export function main() {
  gen();
}
