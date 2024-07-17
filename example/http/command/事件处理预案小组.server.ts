import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  DeleteUsingDelete23Data,
  DeleteUsingDelete23Response,
  DeleteUsingDelete27Data,
  DeleteUsingDelete27Response,
  GetDetailUsingGet20Data,
  GetDetailUsingGet20Response,
  GetDetailUsingGet23Data,
  GetDetailUsingGet23Response,
  ListUsingGet27Data,
  ListUsingGet27Response,
  ListUsingGet30Data,
  ListUsingGet30Response,
  SaveUsingPost24Data,
  SaveUsingPost24Response,
  SaveUsingPost28Data,
  SaveUsingPost28Response,
  SaveUsingPost29Data,
  SaveUsingPost29Response,
  UpdateUsingPut23Data,
  UpdateUsingPut23Response,
  UpdateUsingPut26Data,
  UpdateUsingPut26Response,
} from "./types";

/**
 * 获取预案小组列表
 */
export function getHandingPlanGroup(
  data: ListUsingGet27Data = {}
): Promise<AxiosResponse<ListUsingGet27Response>> {
  return request({
    method: "GET",
    url: "/handing-plan-group",
    query: {
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      planId: data.planId,
    },
  });
}

/**
 * 新增预案小组
 */
export function postHandingPlanGroup(
  data: SaveUsingPost24Data
): Promise<AxiosResponse<SaveUsingPost24Response>> {
  return request({
    method: "POST",
    url: "/handing-plan-group",
    body: data.dto,
  });
}

/**
 * 更新预案小组
 */
export function putHandingPlanGroup(
  data: UpdateUsingPut23Data
): Promise<AxiosResponse<UpdateUsingPut23Response>> {
  return request({
    method: "PUT",
    url: "/handing-plan-group",
    body: data.dto,
  });
}

/**
 * 删除预案小组
 */
export function deleteHandingPlanGroup(
  data: DeleteUsingDelete23Data
): Promise<AxiosResponse<DeleteUsingDelete23Response>> {
  return request({
    method: "DELETE",
    url: "/handing-plan-group",
    body: data.ids,
  });
}

/**
 * 获取预案小组详情
 */
export function getHandingPlanGroup_detail(
  data: GetDetailUsingGet20Data
): Promise<AxiosResponse<GetDetailUsingGet20Response>> {
  return request({
    method: "GET",
    url: "/handing-plan-group/detail",
    query: {
      id: data.id,
    },
  });
}

/**
 * 获取预案小组人员列表
 */
export function getHandingPlanUser(
  data: ListUsingGet30Data = {}
): Promise<AxiosResponse<ListUsingGet30Response>> {
  return request({
    method: "GET",
    url: "/handing-plan-user",
    query: {
      groupId: data.groupId,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 新增预案小组人员
 */
export function postHandingPlanUser(
  data: SaveUsingPost29Data
): Promise<AxiosResponse<SaveUsingPost29Response>> {
  return request({
    method: "POST",
    url: "/handing-plan-user",
    body: data.dto,
  });
}

/**
 * 更新预案小组人员
 */
export function putHandingPlanUser(
  data: UpdateUsingPut26Data
): Promise<AxiosResponse<UpdateUsingPut26Response>> {
  return request({
    method: "PUT",
    url: "/handing-plan-user",
    body: data.dto,
  });
}

/**
 * 删除预案小组人员
 */
export function deleteHandingPlanUser(
  data: DeleteUsingDelete27Data
): Promise<AxiosResponse<DeleteUsingDelete27Response>> {
  return request({
    method: "DELETE",
    url: "/handing-plan-user",
    body: data.ids,
  });
}

/**
 * 批量保存预案小组人员
 */
export function postHandingPlanUser_batchSave(
  data: SaveUsingPost28Data
): Promise<AxiosResponse<SaveUsingPost28Response>> {
  return request({
    method: "POST",
    url: "/handing-plan-user/batch-save",
    body: data.dto,
  });
}

/**
 * 获取预案小组人员详情
 */
export function getHandingPlanUser_detail(
  data: GetDetailUsingGet23Data
): Promise<AxiosResponse<GetDetailUsingGet23Response>> {
  return request({
    method: "GET",
    url: "/handing-plan-user/detail",
    query: {
      id: data.id,
    },
  });
}
