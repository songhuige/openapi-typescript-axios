import { cosmiconfig } from "cosmiconfig";
import { TypeScriptLoader } from "cosmiconfig-typescript-loader";

export async function loadConfig() {
  const moduleName = "openapi-gen-vue3";
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
