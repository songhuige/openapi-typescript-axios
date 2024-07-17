import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  DeleteGroupUsingDeleteData,
  DeleteGroupUsingDeleteResponse,
  DeleteUsingDelete25Data,
  DeleteUsingDelete25Response,
  DeleteUsingDelete26Data,
  DeleteUsingDelete26Response,
  GetDetailUsingGet21Data,
  GetDetailUsingGet21Response,
  GetDetailUsingGet22Data,
  GetDetailUsingGet22Response,
  GroupListUsingGetData,
  GroupListUsingGetResponse,
  ListUsingGet28Data,
  ListUsingGet28Response,
  ListUsingGet29Data,
  ListUsingGet29Response,
  SaveGroupUsingPostData,
  SaveGroupUsingPostResponse,
  SaveUsingPost26Data,
  SaveUsingPost26Response,
  SaveUsingPost27Data,
  SaveUsingPost27Response,
  UpdateUsingPut24Data,
  UpdateUsingPut24Response,
  UpdateUsingPut25Data,
  UpdateUsingPut25Response,
} from "./types";

/**
 * 获取预案流程列表
 */
export function getHandingPlanStep(
  data: ListUsingGet28Data = {}
): Promise<AxiosResponse<ListUsingGet28Response>> {
  return request({
    method: "GET",
    url: "/handing-plan-step",
    query: {
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      preId: data.preId,
    },
  });
}

/**
 * 新增预案流程
 */
export function postHandingPlanStep(
  data: SaveUsingPost26Data
): Promise<AxiosResponse<SaveUsingPost26Response>> {
  return request({
    method: "POST",
    url: "/handing-plan-step",
    body: data.dto,
  });
}

/**
 * 更新预案流程
 */
export function putHandingPlanStep(
  data: UpdateUsingPut24Data
): Promise<AxiosResponse<UpdateUsingPut24Response>> {
  return request({
    method: "PUT",
    url: "/handing-plan-step",
    body: data.dto,
  });
}

/**
 * 删除预案流程
 */
export function deleteHandingPlanStep(
  data: DeleteUsingDelete25Data
): Promise<AxiosResponse<DeleteUsingDelete25Response>> {
  return request({
    method: "DELETE",
    url: "/handing-plan-step",
    body: data.ids,
  });
}

/**
 * 获取预案流程详情
 */
export function getHandingPlanStep_detail(
  data: GetDetailUsingGet21Data
): Promise<AxiosResponse<GetDetailUsingGet21Response>> {
  return request({
    method: "GET",
    url: "/handing-plan-step/detail",
    query: {
      id: data.id,
    },
  });
}

/**
 * 获取预案任务列表
 */
export function getHandingPlanTask(
  data: ListUsingGet29Data = {}
): Promise<AxiosResponse<ListUsingGet29Response>> {
  return request({
    method: "GET",
    url: "/handing-plan-task",
    query: {
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      stepId: data.stepId,
    },
  });
}

/**
 * 新增预案任务
 */
export function postHandingPlanTask(
  data: SaveUsingPost27Data
): Promise<AxiosResponse<SaveUsingPost27Response>> {
  return request({
    method: "POST",
    url: "/handing-plan-task",
    body: data.dto,
  });
}

/**
 * 更新预案任务
 */
export function putHandingPlanTask(
  data: UpdateUsingPut25Data
): Promise<AxiosResponse<UpdateUsingPut25Response>> {
  return request({
    method: "PUT",
    url: "/handing-plan-task",
    body: data.dto,
  });
}

/**
 * 删除预案任务
 */
export function deleteHandingPlanTask(
  data: DeleteUsingDelete26Data
): Promise<AxiosResponse<DeleteUsingDelete26Response>> {
  return request({
    method: "DELETE",
    url: "/handing-plan-task",
    body: data.ids,
  });
}

/**
 * 获取预案任务详情
 */
export function getHandingPlanTask_detail(
  data: GetDetailUsingGet22Data
): Promise<AxiosResponse<GetDetailUsingGet22Response>> {
  return request({
    method: "GET",
    url: "/handing-plan-task/detail",
    query: {
      id: data.id,
    },
  });
}

/**
 * 查询预案任务小组列表
 */
export function getHandingPlanTask_group(
  data: GroupListUsingGetData
): Promise<AxiosResponse<GroupListUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/handing-plan-task/group",
    query: {
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      taskId: data.taskId,
    },
  });
}

/**
 * 新增预案任务小组
 */
export function postHandingPlanTask_group(
  data: SaveGroupUsingPostData
): Promise<AxiosResponse<SaveGroupUsingPostResponse>> {
  return request({
    method: "POST",
    url: "/handing-plan-task/group",
    body: data.dto,
  });
}

/**
 * 删除预案任务小组
 */
export function deleteHandingPlanTask_group(
  data: DeleteGroupUsingDeleteData
): Promise<AxiosResponse<DeleteGroupUsingDeleteResponse>> {
  return request({
    method: "DELETE",
    url: "/handing-plan-task/group",
    body: data.dto,
  });
}
