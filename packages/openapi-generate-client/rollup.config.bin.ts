import typescript from "@rollup/plugin-typescript";
import path from "path";
import { defineConfig } from "rollup";

const __dirname = process.cwd();

const config = defineConfig({
  input: "src/node.ts",
  output: [
    {
      file: "dist/openapi-gen-cli.cjs",
      format: "cjs",
      sourcemap: false,
    },
  ],
  plugins: [
    typescript({
      declaration: false,
      tsconfig: path.resolve(__dirname, "./tsconfig.json"),
      sourceMap: false,
    }),
  ],
});

// eslint-disable-next-line import/no-default-export
export default config;
