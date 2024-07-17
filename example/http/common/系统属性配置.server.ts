import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  DateTimeUsingGetResponse,
  DateUsingGetResponse,
  InitPointUsingGetResponse,
} from "./types";

/**
 * 获取系统日期
 */
export function getConfig_date(): Promise<AxiosResponse<DateUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/config/date",
  });
}

/**
 * 获取系统时间
 */
export function getConfig_dateTime(): Promise<
  AxiosResponse<DateTimeUsingGetResponse>
> {
  return request({
    method: "GET",
    url: "/config/date-time",
  });
}

/**
 * 获取系统初始坐标
 */
export function getConfig_initPoint(): Promise<
  AxiosResponse<InitPointUsingGetResponse>
> {
  return request({
    method: "GET",
    url: "/config/init-point",
  });
}
