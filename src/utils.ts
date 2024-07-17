import { cosmiconfig } from "cosmiconfig";
import { TypeScriptLoader } from "cosmiconfig-typescript-loader";
import { ESLint } from "eslint";

import type { GenConfig } from "./types/config";

const eslint = new ESLint({ fix: true });

export async function startLint(paths: string[]) {
  const results = await eslint.lintFiles(paths);
  await ESLint.outputFixes(results);
}

export interface LoadConfigResult {
  config: GenConfig;
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

export function camelCase(str: string) {
  return str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ""));
}

export function toPascalCase(str: string) {
  return str.replace(/(^\w)|-(\w)/g, (m, p1, p2) =>
    p1 ? p1.toUpperCase() : p2 ? p2.toUpperCase() : ""
  );
}

// 将url的path部分转大驼峰
export function toPascalCasePath(str: string) {
  return str
    .split("/")
    .filter((i) => !!i)
    .map((path) => toPascalCase(path))
    .map((path) => replaceNonIdentifier(path))
    .filter((i) => !!i)
    .join("");
}

// 替换掉除标识符以外的字符
export function replaceNonIdentifier(str: string) {
  return str.replace(/[^a-zA-Z0-9_]/g, "");
}
