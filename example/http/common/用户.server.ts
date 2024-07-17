import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type { UserInfoUsingGetResponse } from "./types";

/**
 * 获取用户信息
 */
export function getUser(): Promise<AxiosResponse<UserInfoUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/user",
  });
}
