import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  CopyFromUsingPostData,
  CopyFromUsingPostResponse,
  DeleteUsingDelete22Data,
  DeleteUsingDelete22Response,
  GetDetailUsingGet19Data,
  GetDetailUsingGet19Response,
  HandingPlanStaticsUsingGetResponse,
  HandingPlanYearStaticsUsingGetData,
  HandingPlanYearStaticsUsingGetResponse,
  ListUsingGet26Data,
  ListUsingGet26Response,
  ResponseUsingPostData,
  ResponseUsingPostResponse,
  SaveUsingPost23Data,
  SaveUsingPost23Response,
  SetTemplateUsingPostData,
  SetTemplateUsingPostResponse,
  StatusUsingGetData,
  StatusUsingGetResponse,
  UpdateUsingPut21Data,
  UpdateUsingPut21Response,
  UpdateUsingPut22Data,
  UpdateUsingPut22Response,
} from "./types";

/**
 * 获取事件处理预案列表
 */
export function getHandingPlan(
  data: ListUsingGet26Data = {}
): Promise<AxiosResponse<ListUsingGet26Response>> {
  return request({
    method: "GET",
    url: "/handing-plan",
    query: {
      blurry: data.blurry,
      eventType: data.eventType,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      templated: data.templated,
      type: data.type,
    },
  });
}

/**
 * 新增预案
 */
export function postHandingPlan(
  data: SaveUsingPost23Data
): Promise<AxiosResponse<SaveUsingPost23Response>> {
  return request({
    method: "POST",
    url: "/handing-plan",
    body: data.dto,
  });
}

/**
 * 更新预案
 */
export function putHandingPlan(
  data: UpdateUsingPut22Data
): Promise<AxiosResponse<UpdateUsingPut22Response>> {
  return request({
    method: "PUT",
    url: "/handing-plan",
    body: data.dto,
  });
}

/**
 * 删除预案
 */
export function deleteHandingPlan(
  data: DeleteUsingDelete22Data
): Promise<AxiosResponse<DeleteUsingDelete22Response>> {
  return request({
    method: "DELETE",
    url: "/handing-plan",
    body: data.ids,
  });
}

/**
 * （从预案模板）创建预案
 */
export function postHandingPlan_copy(
  data: CopyFromUsingPostData
): Promise<AxiosResponse<CopyFromUsingPostResponse>> {
  return request({
    method: "POST",
    url: "/handing-plan/copy",
    body: data.dto,
  });
}

/**
 * 获取详情
 */
export function getHandingPlan_detail(
  data: GetDetailUsingGet19Data
): Promise<AxiosResponse<GetDetailUsingGet19Response>> {
  return request({
    method: "GET",
    url: "/handing-plan/detail",
    query: {
      id: data.id,
    },
  });
}

/**
 * 更新预案流程节点数据
 */
export function putHandingPlan_flow(
  data: UpdateUsingPut21Data
): Promise<AxiosResponse<UpdateUsingPut21Response>> {
  return request({
    method: "PUT",
    url: "/handing-plan/flow",
    body: data.dto,
  });
}

/**
 * 启动预案
 */
export function postHandingPlan_response(
  data: ResponseUsingPostData
): Promise<AxiosResponse<ResponseUsingPostResponse>> {
  return request({
    method: "POST",
    url: "/handing-plan/response",
    body: data.dto,
  });
}

/**
 * 预案统计
 */
export function getHandingPlan_statics(): Promise<
  AxiosResponse<HandingPlanStaticsUsingGetResponse>
> {
  return request({
    method: "GET",
    url: "/handing-plan/statics",
  });
}

/**
 * 执行中的预案-获取预案(状态)列表
 */
export function getHandingPlan_status(
  data: StatusUsingGetData = {}
): Promise<AxiosResponse<StatusUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/handing-plan/status",
    query: {
      blurry: data.blurry,
      eventStatus: data.eventStatus,
      eventType: data.eventType,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 设为(新增)模板
 */
export function postHandingPlan_template(
  data: SetTemplateUsingPostData
): Promise<AxiosResponse<SetTemplateUsingPostResponse>> {
  return request({
    method: "POST",
    url: "/handing-plan/template",
    body: data.dto,
  });
}

/**
 * 预案年度统计
 */
export function getHandingPlan_yearstatics(
  data: HandingPlanYearStaticsUsingGetData
): Promise<AxiosResponse<HandingPlanYearStaticsUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/handing-plan/yearstatics",
    query: {
      year: data.year,
    },
  });
}
