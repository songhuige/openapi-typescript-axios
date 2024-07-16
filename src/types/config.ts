export type GenConfig = {
  axiosInstPath?: string;
  services: Array<{
    input: string;
    output: string;
    axiosInstPath?: string;
  }>;
};
