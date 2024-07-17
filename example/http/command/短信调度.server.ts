import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  GetSendDetailUsingGetData,
  GetSendDetailUsingGetResponse,
  ListGroupUsingGet1Data,
  ListGroupUsingGet1Response,
  ListUsingGet40Response,
  ListUsingGet41Data,
  ListUsingGet41Response,
  SaveUsingPost37Data,
  SaveUsingPost37Response,
} from "./types";

/**
 * 获取短信调度分页列表
 */
export function getSmsSchedule(
  data: ListUsingGet41Data = {}
): Promise<AxiosResponse<ListUsingGet41Response>> {
  return request({
    method: "GET",
    url: "/sms-schedule",
    query: {
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 发送短信
 */
export function postSmsSchedule(
  data: SaveUsingPost37Data
): Promise<AxiosResponse<SaveUsingPost37Response>> {
  return request({
    method: "POST",
    url: "/sms-schedule",
    body: data.dto,
  });
}

/**
 * 获取短信调度事件列表
 */
export function getSmsSchedule_event(): Promise<
  AxiosResponse<ListUsingGet40Response>
> {
  return request({
    method: "GET",
    url: "/sms-schedule/event",
  });
}

/**
 * 获取事件响应预案小组列表
 */
export function getSmsSchedule_event_group(
  data: ListGroupUsingGet1Data = {}
): Promise<AxiosResponse<ListGroupUsingGet1Response>> {
  return request({
    method: "GET",
    url: "/sms-schedule/event/group",
    query: {
      eventId: data.eventId,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 获取短信发送详情
 */
export function getSmsSchedule_send_detail(
  data: GetSendDetailUsingGetData
): Promise<AxiosResponse<GetSendDetailUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/sms-schedule/send/detail",
    query: {
      id: data.id,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      phone: data.phone,
    },
  });
}
