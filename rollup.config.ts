import typescript from "@rollup/plugin-typescript";
import path from "path";
import { defineConfig } from "rollup";

const __dirname = process.cwd();

const config = defineConfig({
  input: "src/node.ts",
  output: [
    {
      file: "dist/openapi-typescript-gen.cjs",
      format: "cjs",
      sourcemap: false,
    },
  ],
  plugins: [
    typescript({
      declaration: true,
      tsconfig: path.resolve(__dirname, "./tsconfig.json"),
      sourceMap: false,
      declarationDir: path.resolve(__dirname, "./dist"),
    }),
  ],
});

// eslint-disable-next-line import/no-default-export
export default config;
