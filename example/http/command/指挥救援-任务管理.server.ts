import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  AssignUsingPostData,
  AssignUsingPostResponse,
  CompleteStepUsingPutData,
  CompleteStepUsingPutResponse,
  DeleteUsingDelete36Data,
  DeleteUsingDelete36Response,
  GetDetailUsingGet31Data,
  GetDetailUsingGet31Response,
  ListDetailsUsingGetData,
  ListDetailsUsingGetResponse,
  ListEventUsingGetData,
  ListEventUsingGetResponse,
  ListUsingGet43Data,
  ListUsingGet43Response,
  RestartByGroupUsingPutData,
  RestartByGroupUsingPutResponse,
  RestartStepUsingPutData,
  RestartStepUsingPutResponse,
  RestartUsingPutData,
  RestartUsingPutResponse,
  SaveUsingPost39Data,
  SaveUsingPost39Response,
  StatisUsingGet2Data,
  StatisUsingGet2Response,
  StopUsingPut1Data,
  StopUsingPut1Response,
  StopUsingPutData,
  StopUsingPutResponse,
  UpdateUsingPut34Data,
  UpdateUsingPut34Response,
} from "./types";

/**
 * 获取任务清单列表
 */
export function getTask(
  data: ListUsingGet43Data
): Promise<AxiosResponse<ListUsingGet43Response>> {
  return request({
    method: "GET",
    url: "/task",
    query: {
      eventId: data.eventId,
      eventTaskId: data.eventTaskId,
      groupId: data.groupId,
      manualTask: data.manualTask,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 新增(通讯录人员)任务
 */
export function postTask(
  data: SaveUsingPost39Data
): Promise<AxiosResponse<SaveUsingPost39Response>> {
  return request({
    method: "POST",
    url: "/task",
    body: data.dto,
  });
}

/**
 * 更新指挥任务
 */
export function putTask(
  data: UpdateUsingPut34Data
): Promise<AxiosResponse<UpdateUsingPut34Response>> {
  return request({
    method: "PUT",
    url: "/task",
    body: data.dto,
  });
}

/**
 * 删除指挥任务
 */
export function deleteTask(
  data: DeleteUsingDelete36Data
): Promise<AxiosResponse<DeleteUsingDelete36Response>> {
  return request({
    method: "DELETE",
    url: "/task",
    body: data.ids,
  });
}

/**
 * (预案)指派任务
 */
export function postTask_assign(
  data: AssignUsingPostData
): Promise<AxiosResponse<AssignUsingPostResponse>> {
  return request({
    method: "POST",
    url: "/task/assign",
    body: data.dto,
  });
}

/**
 * 获取指挥任务详情
 */
export function getTask_detail(
  data: GetDetailUsingGet31Data
): Promise<AxiosResponse<GetDetailUsingGet31Response>> {
  return request({
    method: "GET",
    url: "/task/detail",
    query: {
      id: data.id,
    },
  });
}

/**
 * 获取预案-事件任务清单-详情列表
 */
export function getTask_details_all(
  data: ListEventUsingGetData
): Promise<AxiosResponse<ListEventUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/task/details/all",
    query: {
      eventId: data.eventId,
      eventTaskId: data.eventTaskId,
      groupId: data.groupId,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 获取预案-指定小组任务清单-详情列表
 */
export function getTask_details_list(
  data: ListDetailsUsingGetData
): Promise<AxiosResponse<ListDetailsUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/task/details/list",
    query: {
      eventId: data.eventId,
      eventTaskId: data.eventTaskId,
      groupId: data.groupId,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 结束任务(本组所有任务)
 */
export function putTask_groupTask_complete(
  data: StopUsingPutData
): Promise<AxiosResponse<StopUsingPutResponse>> {
  return request({
    method: "PUT",
    url: "/task/group-task/complete",
    body: data.taskStopDto,
  });
}

/**
 * 重启任务(本组所有任务)
 */
export function putTask_groupTask_restart(
  data: RestartByGroupUsingPutData
): Promise<AxiosResponse<RestartByGroupUsingPutResponse>> {
  return request({
    method: "PUT",
    url: "/task/group-task/restart",
    body: data.taskStopDto,
  });
}

/**
 * 重启任务
 */
export function putTask_restart(
  data: RestartUsingPutData
): Promise<AxiosResponse<RestartUsingPutResponse>> {
  return request({
    method: "PUT",
    url: "/task/restart",
    query: {
      id: data.id,
    },
  });
}

/**
 * 任务统计
 */
export function getTask_statis(
  data: StatisUsingGet2Data
): Promise<AxiosResponse<StatisUsingGet2Response>> {
  return request({
    method: "GET",
    url: "/task/statis",
    query: {
      eventId: data.eventId,
    },
  });
}

/**
 * 完成处置(预案流程)
 */
export function putTask_step_complete(
  data: CompleteStepUsingPutData
): Promise<AxiosResponse<CompleteStepUsingPutResponse>> {
  return request({
    method: "PUT",
    url: "/task/step/complete",
    body: data.taskStepCompleteDto,
  });
}

/**
 * 重新启动(预案流程)
 */
export function putTask_step_restart(
  data: RestartStepUsingPutData
): Promise<AxiosResponse<RestartStepUsingPutResponse>> {
  return request({
    method: "PUT",
    url: "/task/step/restart",
    body: data.taskStopDto,
  });
}

/**
 * 结束任务
 */
export function putTask_stop(
  data: StopUsingPut1Data
): Promise<AxiosResponse<StopUsingPut1Response>> {
  return request({
    method: "PUT",
    url: "/task/stop",
    query: {
      id: data.id,
    },
  });
}
