import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  DeleteUsingDelete37Data,
  DeleteUsingDelete37Response,
  GetDetailUsingGet32Data,
  GetDetailUsingGet32Response,
  ListUsingGet44Data,
  ListUsingGet44Response,
  SaveUsingPost40Data,
  SaveUsingPost40Response,
  UpdateUsingPut35Data,
  UpdateUsingPut35Response,
} from "./types";

/**
 * 获取指挥任务日志分页列表
 */
export function getTaskLogs(
  data: ListUsingGet44Data = {}
): Promise<AxiosResponse<ListUsingGet44Response>> {
  return request({
    method: "GET",
    url: "/task-logs",
    query: {
      assignId: data.assignId,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      taskId: data.taskId,
    },
  });
}

/**
 * 新增指挥任务日志
 */
export function postTaskLogs(
  data: SaveUsingPost40Data
): Promise<AxiosResponse<SaveUsingPost40Response>> {
  return request({
    method: "POST",
    url: "/task-logs",
    body: data.dto,
  });
}

/**
 * 更新指挥任务日志
 */
export function putTaskLogs(
  data: UpdateUsingPut35Data
): Promise<AxiosResponse<UpdateUsingPut35Response>> {
  return request({
    method: "PUT",
    url: "/task-logs",
    body: data.dto,
  });
}

/**
 * 删除指挥任务日志
 */
export function deleteTaskLogs(
  data: DeleteUsingDelete37Data
): Promise<AxiosResponse<DeleteUsingDelete37Response>> {
  return request({
    method: "DELETE",
    url: "/task-logs",
    body: data.ids,
  });
}

/**
 * 获取指挥任务日志详情
 */
export function getTaskLogs_detail(
  data: GetDetailUsingGet32Data
): Promise<AxiosResponse<GetDetailUsingGet32Response>> {
  return request({
    method: "GET",
    url: "/task-logs/detail",
    query: {
      id: data.id,
    },
  });
}
