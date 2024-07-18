import path from "node:path";

import type { ClientConfig, Config, UserConfig } from "./types/config";
import { setConfig } from "./utils/config";

export * from "openapi-parse";

const getOutput = (userConfig: ClientConfig): Config["output"] => {
  let output: Config["output"] = {
    format: false,
    lint: false,
    path: "",
  };
  if (typeof userConfig.output === "string") {
    output.path = userConfig.output;
  } else {
    output = {
      ...output,
      ...userConfig.output,
    };
  }
  return output;
};

const getSchemas = (userConfig: ClientConfig): Config["schemas"] => {
  let schemas: Config["schemas"] = {
    export: true,
    type: "json",
  };
  if (typeof userConfig.schemas === "boolean") {
    schemas.export = userConfig.schemas;
  } else {
    schemas = {
      ...schemas,
      ...userConfig.schemas,
    };
  }
  return schemas;
};

const getServices = (userConfig: ClientConfig): Config["services"] => {
  let services: Config["services"] = {
    asClass: false,
    export: true,
    name: "{{name}}Service",
    operationId: true,
    response: "body",
  };
  if (typeof userConfig.services === "boolean") {
    services.export = userConfig.services;
  } else if (typeof userConfig.services === "string") {
    services.include = userConfig.services;
  } else {
    services = {
      ...services,
      ...userConfig.services,
    };
  }
  return services;
};

const getTypes = (userConfig: ClientConfig): Config["types"] => {
  let types: Config["types"] = {
    dates: false,
    enums: false,
    export: true,
    name: "preserve",
  };
  if (typeof userConfig.types === "boolean") {
    types.export = userConfig.types;
  } else if (typeof userConfig.types === "string") {
    types.include = userConfig.types;
  } else {
    types = {
      ...types,
      ...userConfig.types,
    };
  }
  return types;
};

export const initConfigs = async (userConfig: UserConfig): Promise<Config> => {
  const {
    client = "fetch",
    configFile = "",
    debug = false,
    dryRun = false,
    input,
    request,
    axiosInstPath,
  } = userConfig;

  if (debug) {
    console.warn("userConfig:", userConfig);
  }

  const output = getOutput(userConfig);

  if (!input) {
    throw new Error(
      "🚫 input not provided - provide path to OpenAPI specification"
    );
  }

  if (!output.path) {
    throw new Error(
      "🚫 output not provided - provide path where we should generate your client"
    );
  }

  const schemas = getSchemas(userConfig);
  const services = getServices(userConfig);
  const types = getTypes(userConfig);

  output.path = path.resolve(process.cwd(), output.path);

  return setConfig({
    axiosInstPath,
    client,
    configFile,
    debug,
    dryRun,
    input,
    output,
    request,
    schemas,
    services,
    types,
    exportCore: false,
  });
};
