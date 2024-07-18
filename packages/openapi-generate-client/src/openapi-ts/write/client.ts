import { existsSync, mkdirSync } from "node:fs";
import path from "node:path";

import type { Client, OpenApi } from "openapi-parse";

import { TypeScriptFile } from "../compiler";
import { getConfig } from "../utils/config";
// import type { Templates } from "../handlebars";
import { processIndex } from "./index";
import { processServices } from "./services";
import { processResponseTransformers } from "./transformers";
import type { HttpModule } from "./types";
import { processTypes } from "./types";

/**
 * Write our OpenAPI client, using the given templates at the given output
 * @param openApi {@link OpenApi} Dereferenced OpenAPI specification
 * @param client Client containing models, schemas, and services
 * @param templates Templates wrapper with all loaded Handlebars templates
 */
export const writeClient = async (
  openApi: OpenApi,
  client: Client
  // templates: Templates
): Promise<[TypeScriptFile[], HttpModule[]]> => {
  const config = getConfig();

  if (config.services.include && config.services.asClass) {
    const regexp = new RegExp(config.services.include);
    client.services = client.services.filter((service) =>
      regexp.test(service.name)
    );
  }

  if (config.types.include) {
    const regexp = new RegExp(config.types.include);
    client.models = client.models.filter((model) => regexp.test(model.name));
  }

  const outputPath = path.resolve(config.output.path);

  if (!existsSync(outputPath)) {
    mkdirSync(outputPath, { recursive: true });
  }

  const files = {
    index: new TypeScriptFile({
      dir: config.output.path,
      name: "index.ts",
    }),
    types: new TypeScriptFile({
      dir: config.output.path,
      name: "types.ts",
    }),
    services: client.services.map((service) => {
      return {
        serviceName: service.name,
        file: new TypeScriptFile({
          dir: config.output.path,
          name: `${service.name}.server.ts`,
        }),
      };
    }),
  };

  // types
  await processTypes({ client, file: files.types });

  // transformers
  if (
    files.services &&
    client.services.length &&
    config.types.dates === "types+transform"
  ) {
    await processResponseTransformers({
      client,
      onNode: (node) => {
        files.types?.add(node);
      },
      onRemoveNode: () => {
        files.types?.removeNode();
      },
    });
  }

  // services
  const httpModules = await processServices({
    client,
    files: files.services,
    type: files.types,
  });

  // deprecated files
  // await writeClientClass(openApi, outputPath, client, templates);
  // await writeCore(path.resolve(config.output.path, "core"), client, templates);

  await processIndex({
    file: files.index,
    serviceFiles: files.services.map((service) => service.file),
    type: files.types,
  });

  files.services.forEach((service) => {
    service?.file?.write("\n\n");
  });
  files.types?.write("\n\n");
  files.index.write();

  const _files = files.services
    .map((service) => service.file)
    .concat(files.types, files.index);

  return [_files, httpModules || []];
};
