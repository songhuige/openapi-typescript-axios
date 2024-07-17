import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  AreaInfoUsingGetResponse,
  ListDistinctAreasUsingGetData,
  ListDistinctAreasUsingGetResponse,
  SysUsingGetResponse,
} from "./types";

/**
 * 获取全国行政区划(树)
 */
export function getArea(): Promise<AxiosResponse<AreaInfoUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/area",
  });
}

/**
 * 获取行政区划管理列表
 */
export function getArea_list(
  data: ListDistinctAreasUsingGetData = {}
): Promise<AxiosResponse<ListDistinctAreasUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/area/list",
    query: {
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      parentId: data.parentId,
      parentIdIsNull: data.parentIdIsNull,
    },
  });
}

/**
 * 获取系统当前行政区划
 */
export function getArea_sys(): Promise<AxiosResponse<SysUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/area/sys",
  });
}
