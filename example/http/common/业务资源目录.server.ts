import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  DataCategoryUsingGet1Data,
  DataCategoryUsingGet1Response,
  DataCategoryUsingGetData,
  DataCategoryUsingGetResponse,
  GetDataByPointUsingGetData,
  GetDataByPointUsingGetResponse,
  GetDataDetailsByPointUsingGetData,
  GetDataDetailsByPointUsingGetResponse,
  GetDataUsingGetData,
  GetDataUsingGetResponse,
} from "./types";

/**
 * 获取业务资源目录数据集合
 */
export function getResourceDataCategory_data(
  data: GetDataUsingGetData
): Promise<AxiosResponse<GetDataUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/resource-data-category/data",
    query: {
      id: data.id,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      scope: data.scope,
    },
  });
}

/**
 * 根据点+距离，获取业务资源目录数据集合
 */
export function getResourceDataCategory_data_point(
  data: GetDataByPointUsingGetData
): Promise<AxiosResponse<GetDataByPointUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/resource-data-category/data/point",
    query: {
      distance: data.distance,
      id: data.id,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      point: data.point,
    },
  });
}

/**
 * 根据点+距离，获取业务资源目录数据详情集合
 */
export function getResourceDataCategory_data_point_details(
  data: GetDataDetailsByPointUsingGetData
): Promise<AxiosResponse<GetDataDetailsByPointUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/resource-data-category/data/point/details",
    query: {
      distance: data.distance,
      id: data.id,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      point: data.point,
    },
  });
}

/**
 * 获取业务资源目录-图层
 */
export function getResourceDataCategory_tree(
  data: DataCategoryUsingGet1Data
): Promise<AxiosResponse<DataCategoryUsingGet1Response>> {
  return request({
    method: "GET",
    url: "/resource-data-category/tree",
    query: {
      categoryCode: data.categoryCode,
      scope: data.scope,
    },
  });
}

/**
 * 根据点+距离，获取业务资源目录-图层
 */
export function getResourceDataCategory_tree_point(
  data: DataCategoryUsingGetData
): Promise<AxiosResponse<DataCategoryUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/resource-data-category/tree/point",
    query: {
      categoryCode: data.categoryCode,
      distance: data.distance,
      point: data.point,
    },
  });
}
