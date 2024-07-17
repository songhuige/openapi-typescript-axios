import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  DeleteUsingDelete6Data,
  DeleteUsingDelete6Response,
  GetDetailUsingGet6Data,
  GetDetailUsingGet6Response,
  ListUsingGet7Data,
  ListUsingGet7Response,
  SaveUsingPost8Data,
  SaveUsingPost8Response,
  UpdateUsingPut6Data,
  UpdateUsingPut6Response,
} from "./types";

/**
 * 获取预警发布详情
 */
export function getEarlyWarningRelease(
  data: GetDetailUsingGet6Data
): Promise<AxiosResponse<GetDetailUsingGet6Response>> {
  return request({
    method: "GET",
    url: "/early-warning-release",
    query: {
      id: data.id,
    },
  });
}

/**
 * 新增预警发布
 */
export function postEarlyWarningRelease(
  data: SaveUsingPost8Data
): Promise<AxiosResponse<SaveUsingPost8Response>> {
  return request({
    method: "POST",
    url: "/early-warning-release",
    body: data.dto,
  });
}

/**
 * 更新预警发布
 */
export function putEarlyWarningRelease(
  data: UpdateUsingPut6Data
): Promise<AxiosResponse<UpdateUsingPut6Response>> {
  return request({
    method: "PUT",
    url: "/early-warning-release",
    body: data.dto,
  });
}

/**
 * 删除预警发布
 */
export function deleteEarlyWarningRelease(
  data: DeleteUsingDelete6Data
): Promise<AxiosResponse<DeleteUsingDelete6Response>> {
  return request({
    method: "DELETE",
    url: "/early-warning-release",
    body: data.ids,
  });
}

/**
 * 获取预警发布列表
 */
export function getEarlyWarningRelease_list(
  data: ListUsingGet7Data = {}
): Promise<AxiosResponse<ListUsingGet7Response>> {
  return request({
    method: "GET",
    url: "/early-warning-release/list",
    query: {
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}
