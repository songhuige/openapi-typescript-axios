import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  DeleteUsingDelete33Data,
  DeleteUsingDelete33Response,
  GetDetailUsingGet28Data,
  GetDetailUsingGet28Response,
  ListUsingGet38Data,
  ListUsingGet38Response,
  SaveUsingPost35Data,
  SaveUsingPost35Response,
  UpdateUsingPut31Data,
  UpdateUsingPut31Response,
} from "./types";

/**
 * 获取物资调度记录列表
 */
export function getResourceSchedule(
  data: ListUsingGet38Data = {}
): Promise<AxiosResponse<ListUsingGet38Response>> {
  return request({
    method: "GET",
    url: "/resource-schedule",
    query: {
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 新增物资调度记录
 */
export function postResourceSchedule(
  data: SaveUsingPost35Data
): Promise<AxiosResponse<SaveUsingPost35Response>> {
  return request({
    method: "POST",
    url: "/resource-schedule",
    body: data.dto,
  });
}

/**
 * 更新物资调度记录
 */
export function putResourceSchedule(
  data: UpdateUsingPut31Data
): Promise<AxiosResponse<UpdateUsingPut31Response>> {
  return request({
    method: "PUT",
    url: "/resource-schedule",
    body: data.dto,
  });
}

/**
 * 删除物资调度记录
 */
export function deleteResourceSchedule(
  data: DeleteUsingDelete33Data
): Promise<AxiosResponse<DeleteUsingDelete33Response>> {
  return request({
    method: "DELETE",
    url: "/resource-schedule",
    body: data.ids,
  });
}

/**
 * 获取物资调度记录详情
 */
export function getResourceSchedule_detail(
  data: GetDetailUsingGet28Data
): Promise<AxiosResponse<GetDetailUsingGet28Response>> {
  return request({
    method: "GET",
    url: "/resource-schedule/detail",
    query: {
      id: data.id,
    },
  });
}
