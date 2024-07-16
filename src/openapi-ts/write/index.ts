import type { TypeScriptFile } from "../compiler";
import { compiler } from "../compiler";

export const processIndex = async ({
  file,
  serviceFiles,
  type,
}: {
  file: TypeScriptFile;
  serviceFiles: TypeScriptFile[];
  type: TypeScriptFile;
}): Promise<void> => {
  serviceFiles.forEach((service) => {
    if (service && !service.isEmpty()) {
      file.add(compiler.export.all(`./${service.getName(false)}`));
    }
  });

  if (type && !type.isEmpty()) {
    file.add(compiler.export.all(`./${type.getName(false)}`));
  }
};
