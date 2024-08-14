import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { join, resolve } from "path";

import type { GenConfig } from "@/types/config";

export function copyAxios(config: GenConfig) {
  const rootDir = config.rootDir;
  const targetDir = resolve(rootDir);
  const axiosSourcePath = resolve(__dirname, "./template/axios-instance.ts");
  const target = join(targetDir, "./axios-instance.ts");

  // 如果axios-instance.ts存在，则不覆盖
  if (existsSync(target)) {
    return target;
  }

  mkdirSync(targetDir, { recursive: true });
  const text = readFileSync(axiosSourcePath, "utf-8");
  writeFileSync(target, text, "utf-8");
  return target;
}
