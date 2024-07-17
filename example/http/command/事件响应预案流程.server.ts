import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  DeleteUsingDelete16Data,
  DeleteUsingDelete16Response,
  GetDetailUsingGet13Data,
  GetDetailUsingGet13Response,
  ListUsingGet19Data,
  ListUsingGet19Response,
  SaveUsingPost18Data,
  SaveUsingPost18Response,
  UpdateUsingPut15Data,
  UpdateUsingPut15Response,
} from "./types";

/**
 * 获取事件响应流程列表
 */
export function getEventPlanStep(
  data: ListUsingGet19Data = {}
): Promise<AxiosResponse<ListUsingGet19Response>> {
  return request({
    method: "GET",
    url: "/event-plan-step",
    query: {
      eventId: data.eventId,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 新增事件响应流程
 */
export function postEventPlanStep(
  data: SaveUsingPost18Data
): Promise<AxiosResponse<SaveUsingPost18Response>> {
  return request({
    method: "POST",
    url: "/event-plan-step",
    body: data.dto,
  });
}

/**
 * 更新事件响应流程
 */
export function putEventPlanStep(
  data: UpdateUsingPut15Data
): Promise<AxiosResponse<UpdateUsingPut15Response>> {
  return request({
    method: "PUT",
    url: "/event-plan-step",
    body: data.dto,
  });
}

/**
 * 删除事件响应流程
 */
export function deleteEventPlanStep(
  data: DeleteUsingDelete16Data
): Promise<AxiosResponse<DeleteUsingDelete16Response>> {
  return request({
    method: "DELETE",
    url: "/event-plan-step",
    body: data.ids,
  });
}

/**
 * 获取事件响应流程详情
 */
export function getEventPlanStep_detail(
  data: GetDetailUsingGet13Data
): Promise<AxiosResponse<GetDetailUsingGet13Response>> {
  return request({
    method: "GET",
    url: "/event-plan-step/detail",
    query: {
      id: data.id,
    },
  });
}
