var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { cosmiconfig } from "cosmiconfig";
import { TypeScriptLoader } from "cosmiconfig-typescript-loader";
import { ESLint } from "eslint";
const eslint = new ESLint({ fix: true });
export function startLint(...paths) {
    return __awaiter(this, void 0, void 0, function* () {
        const results = yield eslint.lintFiles(paths);
        yield ESLint.outputFixes(results);
    });
}
/**
 * @link https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/load/src/utils/load-config.ts#L11
 */
export function loadConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        const moduleName = "openapi-typescript-axios";
        const tsLoader = TypeScriptLoader();
        const explorer = cosmiconfig(moduleName, {
            searchPlaces: [
                `.${moduleName}rc`,
                `.${moduleName}rc.yaml`,
                `.${moduleName}rc.yml`,
                `.${moduleName}rc.json`,
                `.${moduleName}rc.js`,
                `.${moduleName}rc.cjs`,
                `${moduleName}.config.js`,
                `${moduleName}.config.cjs`,
                `.${moduleName}rc.ts`,
                `.${moduleName}rc.cts`,
                `${moduleName}.config.ts`,
                `${moduleName}.config.cts`,
            ],
            loaders: {
                ".ts": tsLoader,
                ".cts": tsLoader,
            },
        });
        return yield explorer.search(process.cwd());
    });
}
