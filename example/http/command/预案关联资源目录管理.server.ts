import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  DeleteUsingDelete24Data,
  DeleteUsingDelete24Response,
  GetTreeDataPositionUsingGetData,
  GetTreeDataPositionUsingGetResponse,
  GettreedataUsingGetData,
  GettreedataUsingGetResponse,
  GettreeUsingGetResponse,
  SaveUsingGetData,
  SaveUsingGetResponse,
  SaveUsingPost25Data,
  SaveUsingPost25Response,
} from "./types";

/**
 * 获取预案关联资源数据列表
 */
export function getHandingPlanResourse(
  data: SaveUsingGetData
): Promise<AxiosResponse<SaveUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/handing-plan-resourse",
    query: {
      planId: data.planId,
    },
  });
}

/**
 * 新增预案关联资源数据
 */
export function postHandingPlanResourse(
  data: SaveUsingPost25Data
): Promise<AxiosResponse<SaveUsingPost25Response>> {
  return request({
    method: "POST",
    url: "/handing-plan-resourse",
    body: data.handingPlanResourceDto,
  });
}

/**
 * 删除预案关联资源数据
 */
export function deleteHandingPlanResourse(
  data: DeleteUsingDelete24Data
): Promise<AxiosResponse<DeleteUsingDelete24Response>> {
  return request({
    method: "DELETE",
    url: "/handing-plan-resourse",
    body: data.handingPlanResourceDto,
  });
}

/**
 * 获取预案关联资源数据树
 */
export function getHandingPlanResourse_tree(): Promise<
  AxiosResponse<GettreeUsingGetResponse>
> {
  return request({
    method: "GET",
    url: "/handing-plan-resourse/tree",
  });
}

/**
 * 获取预案关联资源数据配置树
 */
export function getHandingPlanResourse_tree_data(
  data: GettreedataUsingGetData
): Promise<AxiosResponse<GettreedataUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/handing-plan-resourse/tree/data",
    query: {
      distance: data.distance,
      eventId: data.eventId,
    },
  });
}

/**
 * 获取预案关联资源数据配置树
 */
export function getHandingPlanResourse_tree_data_position(
  data: GetTreeDataPositionUsingGetData
): Promise<AxiosResponse<GetTreeDataPositionUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/handing-plan-resourse/tree/data/position",
    query: {
      categoryCode: data.categoryCode,
      distance: data.distance,
      latitude: data.latitude,
      longitude: data.longitude,
    },
  });
}
