import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  AddFormalDataUsingPostData,
  AddFormalDataUsingPostResponse,
  AddFormalUsingPostData,
  AddFormalUsingPostResponse,
  CountByStatusUsingGetResponse,
  DataCategoryUsingGetData,
  DataCategoryUsingGetResponse,
  DeleteUsingDelete10Data,
  DeleteUsingDelete10Response,
  DeleteUsingDelete11Data,
  DeleteUsingDelete11Response,
  DeleteUsingDeleteData,
  DeleteUsingDeleteResponse,
  EventStepGroupUsingGetData,
  EventStepGroupUsingGetResponse,
  EventStepTaskUsingGetData,
  EventStepTaskUsingGetResponse,
  FinishUsingPutData,
  FinishUsingPutResponse,
  GetDetailUsingGet9Data,
  GetDetailUsingGet9Response,
  GetDetailUsingGet10Data,
  GetDetailUsingGet10Response,
  GetDetailUsingGetData,
  GetDetailUsingGetResponse,
  LeaderUsingGetData,
  LeaderUsingGetResponse,
  ListByEventUsingGetData,
  ListByEventUsingGetResponse,
  ListUsingGet1Data,
  ListUsingGet1Response,
  ListUsingGet11Data,
  ListUsingGet11Response,
  ListUsingGet12Data,
  ListUsingGet12Response,
  ListUsingGet13Data,
  ListUsingGet13Response,
  ListUsingGet14Data,
  ListUsingGet14Response,
  PlanUsingGetData,
  PlanUsingGetResponse,
  SaveLeaderUsingPostData,
  SaveLeaderUsingPostResponse,
  SaveUsingPost12Data,
  SaveUsingPost12Response,
  SaveUsingPost13Data,
  SaveUsingPost13Response,
  SaveUsingPostData,
  SaveUsingPostResponse,
  StartUsingPut1Data,
  StartUsingPut1Response,
  StartUsingPutData,
  StartUsingPutResponse,
  StatisUsingGetData,
  StatisUsingGetResponse,
  UpdateUsingPut10Data,
  UpdateUsingPut10Response,
  UpdateUsingPut11Data,
  UpdateUsingPut11Response,
  UpdateUsingPutData,
  UpdateUsingPutResponse,
} from "./types";

/**
 * 获取灾情信息列表
 */
export function getDisaster(
  data: ListUsingGet1Data = {}
): Promise<AxiosResponse<ListUsingGet1Response>> {
  return request({
    method: "GET",
    url: "/disaster",
    query: {
      eventId: data.eventId,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 新增灾情信息
 */
export function postDisaster(
  data: SaveUsingPostData
): Promise<AxiosResponse<SaveUsingPostResponse>> {
  return request({
    method: "POST",
    url: "/disaster",
    body: data.dto,
  });
}

/**
 * 更新灾情信息
 */
export function putDisaster(
  data: UpdateUsingPutData
): Promise<AxiosResponse<UpdateUsingPutResponse>> {
  return request({
    method: "PUT",
    url: "/disaster",
    body: data.dto,
  });
}

/**
 * 删除灾情信息
 */
export function deleteDisaster(
  data: DeleteUsingDeleteData
): Promise<AxiosResponse<DeleteUsingDeleteResponse>> {
  return request({
    method: "DELETE",
    url: "/disaster",
    body: data.ids,
  });
}

/**
 * 获取灾情信息详情
 */
export function getDisaster_detail(
  data: GetDetailUsingGetData
): Promise<AxiosResponse<GetDetailUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/disaster/detail",
    query: {
      id: data.id,
    },
  });
}

/**
 * 通过事件获取事件灾情信息
 */
export function getDisaster_event(
  data: ListByEventUsingGetData
): Promise<AxiosResponse<ListByEventUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/disaster/event",
    query: {
      eventId: data.eventId,
    },
  });
}

/**
 * 灾情信息数据分析
 */
export function getDisaster_resourceDataCategory(
  data: DataCategoryUsingGetData
): Promise<AxiosResponse<DataCategoryUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/disaster/resource-data-category",
    query: {
      distance: data.distance,
      eventId: data.eventId,
    },
  });
}

/**
 * 获取事件列表
 */
export function getEvent(
  data: ListUsingGet12Data = {}
): Promise<AxiosResponse<ListUsingGet12Response>> {
  return request({
    method: "GET",
    url: "/event",
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
 * 新增事件
 */
export function postEvent(
  data: SaveUsingPost12Data
): Promise<AxiosResponse<SaveUsingPost12Response>> {
  return request({
    method: "POST",
    url: "/event",
    body: data.dto,
  });
}

/**
 * 更新事件
 */
export function putEvent(
  data: UpdateUsingPut10Data
): Promise<AxiosResponse<UpdateUsingPut10Response>> {
  return request({
    method: "PUT",
    url: "/event",
    body: data.dto,
  });
}

/**
 * 删除事件
 */
export function deleteEvent(
  data: DeleteUsingDelete10Data
): Promise<AxiosResponse<DeleteUsingDelete10Response>> {
  return request({
    method: "DELETE",
    url: "/event",
    body: data.ids,
  });
}

/**
 * 获取事件动态进展列表
 */
export function getEventDynamics(
  data: ListUsingGet14Data = {}
): Promise<AxiosResponse<ListUsingGet14Response>> {
  return request({
    method: "GET",
    url: "/event-dynamics",
    query: {
      dynamicsType: data.dynamicsType,
      eventId: data.eventId,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 新增事件动态进展
 */
export function postEventDynamics(
  data: SaveUsingPost13Data
): Promise<AxiosResponse<SaveUsingPost13Response>> {
  return request({
    method: "POST",
    url: "/event-dynamics",
    body: data.dto,
  });
}

/**
 * 更新事件动态进展
 */
export function putEventDynamics(
  data: UpdateUsingPut11Data
): Promise<AxiosResponse<UpdateUsingPut11Response>> {
  return request({
    method: "PUT",
    url: "/event-dynamics",
    body: data.dto,
  });
}

/**
 * 删除事件动态进展
 */
export function deleteEventDynamics(
  data: DeleteUsingDelete11Data
): Promise<AxiosResponse<DeleteUsingDelete11Response>> {
  return request({
    method: "DELETE",
    url: "/event-dynamics",
    body: data.ids,
  });
}

/**
 * 获取事件动态进展详情
 */
export function getEventDynamics_detail(
  data: GetDetailUsingGet10Data
): Promise<AxiosResponse<GetDetailUsingGet10Response>> {
  return request({
    method: "GET",
    url: "/event-dynamics/detail",
    query: {
      id: data.id,
    },
  });
}

/**
 * 获取领导批示列表
 */
export function getEventDynamics_leader(
  data: LeaderUsingGetData = {}
): Promise<AxiosResponse<LeaderUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/event-dynamics/leader",
    query: {
      dynamicsType: data.dynamicsType,
      eventId: data.eventId,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 新增领导批示
 */
export function postEventDynamics_leader(
  data: SaveLeaderUsingPostData
): Promise<AxiosResponse<SaveLeaderUsingPostResponse>> {
  return request({
    method: "POST",
    url: "/event-dynamics/leader",
    body: data.dto,
  });
}

/**
 * 获取事件详情
 */
export function getEvent_detail(
  data: GetDetailUsingGet9Data
): Promise<AxiosResponse<GetDetailUsingGet9Response>> {
  return request({
    method: "GET",
    url: "/event/detail",
    query: {
      id: data.id,
    },
  });
}

/**
 * 结束事件
 */
export function putEvent_end(
  data: StartUsingPut1Data
): Promise<AxiosResponse<StartUsingPut1Response>> {
  return request({
    method: "PUT",
    url: "/event/end",
    query: {
      id: data.id,
    },
  });
}

/**
 * 处置完成
 */
export function putEvent_finish(
  data: FinishUsingPutData
): Promise<AxiosResponse<FinishUsingPutResponse>> {
  return request({
    method: "PUT",
    url: "/event/finish",
    query: {
      id: data.id,
    },
  });
}

/**
 * 新增正式事件
 */
export function postEvent_formal(
  data: AddFormalUsingPostData
): Promise<AxiosResponse<AddFormalUsingPostResponse>> {
  return request({
    method: "POST",
    url: "/event/formal",
    body: data.dto,
  });
}

/**
 * 点击预警新增正式事件
 */
export function postEvent_formalData(
  data: AddFormalDataUsingPostData
): Promise<AxiosResponse<AddFormalDataUsingPostResponse>> {
  return request({
    method: "POST",
    url: "/event/formalData",
    body: data.dto,
  });
}

/**
 * 获取事件响应预案分组列表
 */
export function getEvent_group(
  data: ListUsingGet13Data = {}
): Promise<AxiosResponse<ListUsingGet13Response>> {
  return request({
    method: "GET",
    url: "/event/group",
    query: {
      eventId: data.eventId,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 事件数量状态分组
 */
export function getEvent_groups(): Promise<
  AxiosResponse<CountByStatusUsingGetResponse>
> {
  return request({
    method: "GET",
    url: "/event/groups",
  });
}

/**
 * 获取事件预案执行详情信息
 */
export function getEvent_plan(
  data: PlanUsingGetData
): Promise<AxiosResponse<PlanUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/event/plan",
    query: {
      id: data.id,
    },
  });
}

/**
 * 获取事件响应流程-小组
 */
export function getEvent_plan_group(
  data: EventStepGroupUsingGetData
): Promise<AxiosResponse<EventStepGroupUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/event/plan/group",
    query: {
      id: data.id,
    },
  });
}

/**
 * 获取事件响应流程-详细
 */
export function getEvent_plan_step(
  data: EventStepTaskUsingGetData
): Promise<AxiosResponse<EventStepTaskUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/event/plan/step",
    query: {
      id: data.id,
    },
  });
}

/**
 * 获取事件响应流程列表
 */
export function getEvent_plan_summary(
  data: ListUsingGet11Data
): Promise<AxiosResponse<ListUsingGet11Response>> {
  return request({
    method: "GET",
    url: "/event/plan/summary",
    query: {
      id: data.id,
    },
  });
}

/**
 * 启动响应
 */
export function putEvent_start(
  data: StartUsingPutData
): Promise<AxiosResponse<StartUsingPutResponse>> {
  return request({
    method: "PUT",
    url: "/event/start",
    body: data.dto,
  });
}

/**
 * 事件统计
 */
export function getEvent_statics(
  data: StatisUsingGetData
): Promise<AxiosResponse<StatisUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/event/statics",
    query: {
      year: data.year,
    },
  });
}
