import { cosmiconfig } from "cosmiconfig";
import { TypeScriptLoader } from "cosmiconfig-typescript-loader";
import { ESLint } from "eslint";

const eslint = new ESLint({ fix: true });

export async function startLint(...paths: string[]) {
  const results = await eslint.lintFiles(paths);
  await ESLint.outputFixes(results);
}

export interface LoadConfigResult {
  config: OpenAPIConfig;
  filepath: string;
  isEmpty?: boolean;
}

/**
 * @link https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/load/src/utils/load-config.ts#L11
 */
export async function loadConfig(): Promise<LoadConfigResult | null> {
  const moduleName = "openapi-gen";
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

  return await explorer.search(process.cwd());
}
