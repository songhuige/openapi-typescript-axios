import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  DeleteUsingDelete17Data,
  DeleteUsingDelete17Response,
  DeleteUsingDelete18Data,
  DeleteUsingDelete18Response,
  DeleteUsingDelete20Data,
  DeleteUsingDelete20Response,
  DeleteUsingDelete21Data,
  DeleteUsingDelete21Response,
  GetDetailUsingGet14Data,
  GetDetailUsingGet14Response,
  GetDetailUsingGet15Data,
  GetDetailUsingGet15Response,
  GetDetailUsingGet17Data,
  GetDetailUsingGet17Response,
  GetDetailUsingGet18Data,
  GetDetailUsingGet18Response,
  ListUsingGet20Data,
  ListUsingGet20Response,
  ListUsingGet21Data,
  ListUsingGet21Response,
  ListUsingGet24Data,
  ListUsingGet24Response,
  ListUsingGet25Data,
  ListUsingGet25Response,
  SaveUsingPost19Data,
  SaveUsingPost19Response,
  SaveUsingPost20Data,
  SaveUsingPost20Response,
  SaveUsingPost21Data,
  SaveUsingPost21Response,
  SaveUsingPost22Data,
  SaveUsingPost22Response,
  UpdateUsingPut16Data,
  UpdateUsingPut16Response,
  UpdateUsingPut17Data,
  UpdateUsingPut17Response,
  UpdateUsingPut19Data,
  UpdateUsingPut19Response,
  UpdateUsingPut20Data,
  UpdateUsingPut20Response,
} from "./types";

/**
 * 获取事件响应任务列表
 */
export function getEventPlanTask(
  data: ListUsingGet20Data = {}
): Promise<AxiosResponse<ListUsingGet20Response>> {
  return request({
    method: "GET",
    url: "/event-plan-task",
    query: {
      eventStepId: data.eventStepId,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 新增事件响应任务
 */
export function postEventPlanTask(
  data: SaveUsingPost19Data
): Promise<AxiosResponse<SaveUsingPost19Response>> {
  return request({
    method: "POST",
    url: "/event-plan-task",
    body: data.dto,
  });
}

/**
 * 更新事件响应任务
 */
export function putEventPlanTask(
  data: UpdateUsingPut16Data
): Promise<AxiosResponse<UpdateUsingPut16Response>> {
  return request({
    method: "PUT",
    url: "/event-plan-task",
    body: data.dto,
  });
}

/**
 * 删除事件响应任务
 */
export function deleteEventPlanTask(
  data: DeleteUsingDelete17Data
): Promise<AxiosResponse<DeleteUsingDelete17Response>> {
  return request({
    method: "DELETE",
    url: "/event-plan-task",
    body: data.ids,
  });
}

/**
 * 获取事件响应任务详情
 */
export function getEventPlanTask_detail(
  data: GetDetailUsingGet14Data
): Promise<AxiosResponse<GetDetailUsingGet14Response>> {
  return request({
    method: "GET",
    url: "/event-plan-task/detail",
    query: {
      id: data.id,
    },
  });
}

/**
 * 获取事件响应列表
 */
export function getEventResponse(
  data: ListUsingGet21Data = {}
): Promise<AxiosResponse<ListUsingGet21Response>> {
  return request({
    method: "GET",
    url: "/event-response",
    query: {
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 新增事件响应
 */
export function postEventResponse(
  data: SaveUsingPost20Data
): Promise<AxiosResponse<SaveUsingPost20Response>> {
  return request({
    method: "POST",
    url: "/event-response",
    body: data.dto,
  });
}

/**
 * 更新事件响应
 */
export function putEventResponse(
  data: UpdateUsingPut17Data
): Promise<AxiosResponse<UpdateUsingPut17Response>> {
  return request({
    method: "PUT",
    url: "/event-response",
    body: data.dto,
  });
}

/**
 * 删除事件响应
 */
export function deleteEventResponse(
  data: DeleteUsingDelete18Data
): Promise<AxiosResponse<DeleteUsingDelete18Response>> {
  return request({
    method: "DELETE",
    url: "/event-response",
    body: data.ids,
  });
}

/**
 * 获取事件响应详情
 */
export function getEventResponse_detail(
  data: GetDetailUsingGet15Data
): Promise<AxiosResponse<GetDetailUsingGet15Response>> {
  return request({
    method: "GET",
    url: "/event-response/detail",
    query: {
      id: data.id,
    },
  });
}

/**
 * 获取事件响应预案小组列表
 */
export function getHandingEventGroup(
  data: ListUsingGet24Data = {}
): Promise<AxiosResponse<ListUsingGet24Response>> {
  return request({
    method: "GET",
    url: "/handing-event-group",
    query: {
      eventId: data.eventId,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 新增事件响应预案小组
 */
export function postHandingEventGroup(
  data: SaveUsingPost21Data
): Promise<AxiosResponse<SaveUsingPost21Response>> {
  return request({
    method: "POST",
    url: "/handing-event-group",
    body: data.dto,
  });
}

/**
 * 更新事件响应预案小组
 */
export function putHandingEventGroup(
  data: UpdateUsingPut19Data
): Promise<AxiosResponse<UpdateUsingPut19Response>> {
  return request({
    method: "PUT",
    url: "/handing-event-group",
    body: data.dto,
  });
}

/**
 * 删除事件响应预案小组
 */
export function deleteHandingEventGroup(
  data: DeleteUsingDelete20Data
): Promise<AxiosResponse<DeleteUsingDelete20Response>> {
  return request({
    method: "DELETE",
    url: "/handing-event-group",
    body: data.ids,
  });
}

/**
 * 获取事件响应预案小组详情
 */
export function getHandingEventGroup_detail(
  data: GetDetailUsingGet17Data
): Promise<AxiosResponse<GetDetailUsingGet17Response>> {
  return request({
    method: "GET",
    url: "/handing-event-group/detail",
    query: {
      id: data.id,
    },
  });
}

/**
 * 获取事件预案小组人员列表
 */
export function getHandingEventUser(
  data: ListUsingGet25Data = {}
): Promise<AxiosResponse<ListUsingGet25Response>> {
  return request({
    method: "GET",
    url: "/handing-event-user",
    query: {
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 新增事件预案小组人员
 */
export function postHandingEventUser(
  data: SaveUsingPost22Data
): Promise<AxiosResponse<SaveUsingPost22Response>> {
  return request({
    method: "POST",
    url: "/handing-event-user",
    body: data.dto,
  });
}

/**
 * 更新事件预案小组人员
 */
export function putHandingEventUser(
  data: UpdateUsingPut20Data
): Promise<AxiosResponse<UpdateUsingPut20Response>> {
  return request({
    method: "PUT",
    url: "/handing-event-user",
    body: data.dto,
  });
}

/**
 * 删除事件预案小组人员
 */
export function deleteHandingEventUser(
  data: DeleteUsingDelete21Data
): Promise<AxiosResponse<DeleteUsingDelete21Response>> {
  return request({
    method: "DELETE",
    url: "/handing-event-user",
    body: data.ids,
  });
}

/**
 * 获取事件预案小组人员详情
 */
export function getHandingEventUser_detail(
  data: GetDetailUsingGet18Data
): Promise<AxiosResponse<GetDetailUsingGet18Response>> {
  return request({
    method: "GET",
    url: "/handing-event-user/detail",
    query: {
      id: data.id,
    },
  });
}
