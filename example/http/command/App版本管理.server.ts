import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  DeleteUsingDelete31Data,
  DeleteUsingDelete31Response,
  GetMobileVersionDetailUsingGetData,
  GetMobileVersionDetailUsingGetResponse,
  ListUsingGet34Data,
  ListUsingGet34Response,
  SaveUsingPost33Data,
  SaveUsingPost33Response,
  UpdateUsingPut29Data,
  UpdateUsingPut29Response,
} from "./types";

/**
 * 获取APP版本详情
 */
export function getMobileVersion(
  data: GetMobileVersionDetailUsingGetData
): Promise<AxiosResponse<GetMobileVersionDetailUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/mobile-version",
    query: {
      id: data.id,
    },
  });
}

/**
 * 新增APP版本
 */
export function postMobileVersion(
  data: SaveUsingPost33Data
): Promise<AxiosResponse<SaveUsingPost33Response>> {
  return request({
    method: "POST",
    url: "/mobile-version",
    body: data.dto,
  });
}

/**
 * 更新APP版本
 */
export function putMobileVersion(
  data: UpdateUsingPut29Data
): Promise<AxiosResponse<UpdateUsingPut29Response>> {
  return request({
    method: "PUT",
    url: "/mobile-version",
    body: data.dto,
  });
}

/**
 * 删除APP版本
 */
export function deleteMobileVersion(
  data: DeleteUsingDelete31Data
): Promise<AxiosResponse<DeleteUsingDelete31Response>> {
  return request({
    method: "DELETE",
    url: "/mobile-version",
    body: data.ids,
  });
}

/**
 * 获取APP版本列表
 */
export function getMobileVersion_list(
  data: ListUsingGet34Data = {}
): Promise<AxiosResponse<ListUsingGet34Response>> {
  return request({
    method: "GET",
    url: "/mobile-version/list",
    query: {
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      version: data.version,
    },
  });
}
