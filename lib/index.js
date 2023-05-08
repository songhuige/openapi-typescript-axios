var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as fs from "fs";
import openapiTS from "openapi-typescript";
import path from "path";
import { loadConfig, startLint } from "./utils.js";
const __dirname = process.cwd();
function gen() {
    return __awaiter(this, void 0, void 0, function* () {
        const config = yield loadConfig();
        if (config === null || config.isEmpty) {
            console.log("请先配置'openapi-typescript-axios'文件");
            return;
        }
        const services = config.config;
        services.forEach(({ name, url }) => __awaiter(this, void 0, void 0, function* () {
            const output = yield openapiTS(url, { version: 3 }).catch(console.log);
            if (output) {
                const filePath = path.join(__dirname, `./schema/${name}.ts`);
                if (!fs.existsSync(path.join(__dirname, `./schema`))) {
                    fs.mkdirSync(path.join(__dirname, `./schema`));
                }
                fs.writeFileSync(filePath, output);
                console.log(`ts: ${filePath}`);
                yield startLint(filePath);
                yield genSchemaWrapper(name);
            }
        }));
    });
}
function genSchemaWrapper(module) {
    return __awaiter(this, void 0, void 0, function* () {
        const camelCase = `${module.substring(0, 1).toUpperCase()}${module.substring(1)}`;
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
        const fileName = `./schema/${module}-wrapper.ts`;
        const filePath = path.join(__dirname, fileName);
        fs.writeFileSync(filePath, text);
        console.log(`dts: ${fileName}`);
        yield startLint(filePath);
    });
}
export function main() {
    gen();
}
