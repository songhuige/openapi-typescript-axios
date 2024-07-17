import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  DeleteUsingDelete19Data,
  DeleteUsingDelete19Response,
  GetDetailUsingGet16Data,
  GetDetailUsingGet16Response,
  ListUsingGet22Data,
  ListUsingGet22Response,
  ListUsingGet23Data,
  ListUsingGet23Response,
  UpdateUsingPut18Data,
  UpdateUsingPut18Response,
} from "./types";

/**
 * 获取总结评估分页列表
 */
export function getEventSummaryEvaluation(
  data: ListUsingGet22Data = {}
): Promise<AxiosResponse<ListUsingGet22Response>> {
  return request({
    method: "GET",
    url: "/event-summary-evaluation",
    query: {
      eventId: data.eventId,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 保存更新总结评估
 */
export function putEventSummaryEvaluation(
  data: UpdateUsingPut18Data
): Promise<AxiosResponse<UpdateUsingPut18Response>> {
  return request({
    method: "PUT",
    url: "/event-summary-evaluation",
    body: data.dto,
  });
}

/**
 * 删除总结评估
 */
export function deleteEventSummaryEvaluation(
  data: DeleteUsingDelete19Data
): Promise<AxiosResponse<DeleteUsingDelete19Response>> {
  return request({
    method: "DELETE",
    url: "/event-summary-evaluation",
    body: data.ids,
  });
}

/**
 * 获取事件列表
 */
export function getEventSummaryEvaluation_event(
  data: ListUsingGet23Data = {}
): Promise<AxiosResponse<ListUsingGet23Response>> {
  return request({
    method: "GET",
    url: "/event-summary-evaluation/event",
    query: {
      areaWkt: data.areaWkt,
      eventStatus: data.eventStatus,
      eventStatusIn: data.eventStatusIn,
      happenTimeEnd: data.happenTimeEnd,
      happenTimeStart: data.happenTimeStart,
      name: data.name,
      orderByHappenTime: data.orderByHappenTime,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      planName: data.planName,
      type: data.type,
    },
  });
}

/**
 * 获取(编辑)事件总结评估详情
 */
export function getEventSummaryEvaluation_event_details(
  data: GetDetailUsingGet16Data
): Promise<AxiosResponse<GetDetailUsingGet16Response>> {
  return request({
    method: "GET",
    url: "/event-summary-evaluation/event/details",
    query: {
      eventId: data.eventId,
    },
  });
}
