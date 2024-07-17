const config = {
  axiosInstPath: "@/http/axios-instance",
  services: [
    {
      input: "http://117.139.13.157:25031/api/command/v2/api-docs",
      output: "./http/command",
    },
    {
      input: "http://117.139.13.157:25031/api/common/v2/api-docs",
      output: "./http/common",
    },
  ],
};

module.exports = config;
