import type { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import axios from "axios";

export type ClientError = {
  status: number;
  msg?: string;
};

const axiosInstance = axios.create({
  timeout: 30000,
});

axiosInstance.interceptors.request.use(function (
  config: InternalAxiosRequestConfig
) {
  return config;
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    const data = response.data;
    if (data.status !== 200 && data.status !== 201) {
      throw { status: data.status, msg: data.msg };
    }
    return response;
  },
  (err: any) => {
    const unknownError: ClientError = { msg: "未知错误", status: -1 };

    return err.response
      ? Promise.reject<ClientError>(err.response.data || unknownError)
      : Promise.reject<ClientError>({ status: err.code, msg: err.message });
  }
);

export const Axios = axiosInstance;
