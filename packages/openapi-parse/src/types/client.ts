import type { Model, ModelMeta, Service } from "@/common/interfaces/client";

export interface Client {
  models: Model[];
  server: string;
  services: Service[];
  /**
   * Map of generated types where type names are keys. This is used to track
   * uniquely generated types as we may want to deduplicate if there are
   * multiple definitions with the same name but different value, or if we
   * want to transform names.
   */
  types: Record<string, ModelMeta>;
  version: string;
}
