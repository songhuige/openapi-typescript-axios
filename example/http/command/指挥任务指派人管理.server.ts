import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  DeleteUsingDelete35Data,
  DeleteUsingDelete35Response,
  GetDetailUsingGet30Data,
  GetDetailUsingGet30Response,
  ListUsingGet42Data,
  ListUsingGet42Response,
  SaveUsingPost38Data,
  SaveUsingPost38Response,
  UpdateUsingPut33Data,
  UpdateUsingPut33Response,
} from "./types";

/**
 * 获取指挥任务指派人分页列表
 */
export function getTaskAssign(
  data: ListUsingGet42Data = {}
): Promise<AxiosResponse<ListUsingGet42Response>> {
  return request({
    method: "GET",
    url: "/task-assign",
    query: {
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 新增指挥任务指派人
 */
export function postTaskAssign(
  data: SaveUsingPost38Data
): Promise<AxiosResponse<SaveUsingPost38Response>> {
  return request({
    method: "POST",
    url: "/task-assign",
    body: data.dto,
  });
}

/**
 * 更新指挥任务指派人
 */
export function putTaskAssign(
  data: UpdateUsingPut33Data
): Promise<AxiosResponse<UpdateUsingPut33Response>> {
  return request({
    method: "PUT",
    url: "/task-assign",
    body: data.dto,
  });
}

/**
 * 删除指挥任务指派人
 */
export function deleteTaskAssign(
  data: DeleteUsingDelete35Data
): Promise<AxiosResponse<DeleteUsingDelete35Response>> {
  return request({
    method: "DELETE",
    url: "/task-assign",
    body: data.ids,
  });
}

/**
 * 获取指挥任务指派人详情
 */
export function getTaskAssign_detail(
  data: GetDetailUsingGet30Data
): Promise<AxiosResponse<GetDetailUsingGet30Response>> {
  return request({
    method: "GET",
    url: "/task-assign/detail",
    query: {
      assignId: data.assignId,
    },
  });
}
