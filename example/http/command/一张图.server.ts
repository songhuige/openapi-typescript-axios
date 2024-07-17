import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  DataCategoryBottomUsingGetResponse,
  DataCategoryUsingGet1Response,
  ListUsingGet35Response,
  ListUsingGet36Data,
  ListUsingGet36Response,
  StatisUsingGet1Response,
} from "./types";

/**
 * 一张图图层
 */
export function getOneMap_resourceDataCategory(): Promise<
  AxiosResponse<DataCategoryUsingGet1Response>
> {
  return request({
    method: "GET",
    url: "/one-map/resource-data-category",
  });
}

/**
 * 一张图(底部)主要分类图层
 */
export function getOneMap_resourceDataCategory_main(): Promise<
  AxiosResponse<DataCategoryBottomUsingGetResponse>
> {
  return request({
    method: "GET",
    url: "/one-map/resource-data-category/main",
  });
}

/**
 * 统计信息
 */
export function getOneMap_statics(): Promise<
  AxiosResponse<StatisUsingGet1Response>
> {
  return request({
    method: "GET",
    url: "/one-map/statics",
  });
}

/**
 * 今日值班
 */
export function getOneMap_todayDuty(): Promise<
  AxiosResponse<ListUsingGet35Response>
> {
  return request({
    method: "GET",
    url: "/one-map/today-duty",
  });
}

/**
 * 预警信息
 */
export function getOneMap_warning(
  data: ListUsingGet36Data = {}
): Promise<AxiosResponse<ListUsingGet36Response>> {
  return request({
    method: "GET",
    url: "/one-map/warning",
    query: {
      city: data.city,
      level: data.level,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      province: data.province,
      stationname: data.stationname,
      type: data.type,
    },
  });
}
