import type { Operation } from "@/openapi-ts";

export type GenConfig = {
  rootDir: string;
  services: Array<{
    input: string;
    output: string;
    methodNameBuilder?: (operation: Operation) => string;
  }>;
};
