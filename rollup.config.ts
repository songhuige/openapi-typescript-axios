import typescript from "@rollup/plugin-typescript";
import path from "path";
import { defineConfig } from "rollup";

const __dirname = process.cwd();

const config = defineConfig({
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "module",
      sourcemap: false,
    },
    {
      file: "dist/index.cjs",
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
