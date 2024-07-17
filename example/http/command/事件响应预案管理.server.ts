import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  DeleteUsingDelete15Data,
  DeleteUsingDelete15Response,
  GetDetailUsingGet12Data,
  GetDetailUsingGet12Response,
  ListUsingGet18Data,
  ListUsingGet18Response,
  SaveUsingPost17Data,
  SaveUsingPost17Response,
  UpdateUsingPut14Data,
  UpdateUsingPut14Response,
} from "./types";

/**
 * 获取事件响应预案分页列表
 */
export function getEventPlan(
  data: ListUsingGet18Data = {}
): Promise<AxiosResponse<ListUsingGet18Response>> {
  return request({
    method: "GET",
    url: "/event-plan",
    query: {
      eventId: data.eventId,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 新增事件响应预案
 */
export function postEventPlan(
  data: SaveUsingPost17Data
): Promise<AxiosResponse<SaveUsingPost17Response>> {
  return request({
    method: "POST",
    url: "/event-plan",
    body: data.dto,
  });
}

/**
 * 更新事件响应预案
 */
export function putEventPlan(
  data: UpdateUsingPut14Data
): Promise<AxiosResponse<UpdateUsingPut14Response>> {
  return request({
    method: "PUT",
    url: "/event-plan",
    body: data.dto,
  });
}

/**
 * 删除事件响应预案
 */
export function deleteEventPlan(
  data: DeleteUsingDelete15Data
): Promise<AxiosResponse<DeleteUsingDelete15Response>> {
  return request({
    method: "DELETE",
    url: "/event-plan",
    body: data.ids,
  });
}

/**
 * 获取事件响应预案详情
 */
export function getEventPlan_detail(
  data: GetDetailUsingGet12Data
): Promise<AxiosResponse<GetDetailUsingGet12Response>> {
  return request({
    method: "GET",
    url: "/event-plan/detail",
    query: {
      eventPlanId: data.eventPlanId,
    },
  });
}
