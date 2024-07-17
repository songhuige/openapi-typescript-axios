import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  GetPicDetailsUsingGetData,
  GetPicDetailsUsingGetResponse,
  GetTableHeaderUsingGetData,
  GetTableHeaderUsingGetResponse,
  ListEntitiesUsingPostData,
  ListEntitiesUsingPostResponse,
  TreeInPointUsingGetData,
  TreeInPointUsingGetResponse,
  TreeUsingGetData,
  TreeUsingGetResponse,
} from "./types";

/**
 * 获取实体类数据列表
 */
export function postDataCategory_data(
  data: ListEntitiesUsingPostData
): Promise<AxiosResponse<ListEntitiesUsingPostResponse>> {
  return request({
    method: "POST",
    url: "/data-category/data",
    body: data.queryCriteria,
  });
}

/**
 * 获取资源分类数据详情
 */
export function getDataCategory_data_details(
  data: GetPicDetailsUsingGetData
): Promise<AxiosResponse<GetPicDetailsUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/data-category/data/details",
    query: {
      id: data.id,
      resId: data.resId,
    },
  });
}

/**
 * 获取资源分类列表表头
 */
export function getDataCategory_header(
  data: GetTableHeaderUsingGetData
): Promise<AxiosResponse<GetTableHeaderUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/data-category/header",
    query: {
      resId: data.resId,
    },
  });
}

/**
 * 获取资源分类树
 */
export function getDataCategory_tree(
  data: TreeUsingGetData
): Promise<AxiosResponse<TreeUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/data-category/tree",
    query: {
      configTypes: data.configTypes,
      scope: data.scope,
    },
  });
}

/**
 * 按点和距离获取资源分类树
 */
export function getDataCategory_tree_point(
  data: TreeInPointUsingGetData
): Promise<AxiosResponse<TreeInPointUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/data-category/tree/point",
    query: {
      configTypes: data.configTypes,
      distance: data.distance,
      point: data.point,
    },
  });
}
