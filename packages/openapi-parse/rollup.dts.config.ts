import { defineConfig } from "rollup";
import dts from "rollup-plugin-dts";

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  input: {
    index: "./temp/index.d.ts",
  },
  output: {
    dir: "./dist",
    format: "cjs",
  },
  plugins: [dts({ respectExternal: true })],
});
