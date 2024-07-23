export type GenConfig = {
  rootDir: string;
  services: Array<{
    input: string;
    output: string;
  }>;
};
