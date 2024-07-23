import { defineConfig } from "openapi-generate-client";

const config = defineConfig({
  rootDir: "./src/http",
  services: [
    {
      input: "http://117.139.13.157:25031/api/command/v2/api-docs",
      output: "./src/http/command",
    },
    {
      input: "http://117.139.13.157:25031/api/common/v2/api-docs",
      output: "./src/http/common",
    },
  ],
});

module.exports = config;
