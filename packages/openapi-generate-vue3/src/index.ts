import type { GenConfig } from "openapi-generate-client";
import { start as startClient } from "openapi-generate-client";

import { loadConfig } from "./utils";

export interface GenConfigForVue3 extends GenConfig {
  hooksPath: string;
  pagePath: string;
}

export async function start() {
  const config = await loadConfig();

  if (!config || config?.isEmpty || !config.config) {
    console.error("缺少配置文件");
    throw new Error("缺少配置文件");
  }
  startClient(config?.config);
}
