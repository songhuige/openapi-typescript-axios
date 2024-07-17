import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  DeleteUsingDelete5Data,
  DeleteUsingDelete5Response,
  GetDetailUsingGet5Data,
  GetDetailUsingGet5Response,
  GetIconListUsingGetResponse,
  GetSmallTypeListUsingGetData,
  GetSmallTypeListUsingGetResponse,
  ListUsingGet6Data,
  ListUsingGet6Response,
  SaveUsingPost6Data,
  SaveUsingPost6Response,
  SaveUsingPost7Data,
  SaveUsingPost7Response,
  UpdateUsingPut5Data,
  UpdateUsingPut5Response,
} from "./types";

/**
 * 获取预警管理详情
 */
export function getEarlyWarningManage(
  data: GetDetailUsingGet5Data
): Promise<AxiosResponse<GetDetailUsingGet5Response>> {
  return request({
    method: "GET",
    url: "/early-warning-manage",
    query: {
      id: data.id,
    },
  });
}

/**
 * 新增预警管理
 */
export function postEarlyWarningManage(
  data: SaveUsingPost6Data
): Promise<AxiosResponse<SaveUsingPost6Response>> {
  return request({
    method: "POST",
    url: "/early-warning-manage",
    body: data.dto,
  });
}

/**
 * 更新预警管理
 */
export function putEarlyWarningManage(
  data: UpdateUsingPut5Data
): Promise<AxiosResponse<UpdateUsingPut5Response>> {
  return request({
    method: "PUT",
    url: "/early-warning-manage",
    body: data.dto,
  });
}

/**
 * 删除预警管理
 */
export function deleteEarlyWarningManage(
  data: DeleteUsingDelete5Data
): Promise<AxiosResponse<DeleteUsingDelete5Response>> {
  return request({
    method: "DELETE",
    url: "/early-warning-manage",
    body: data.ids,
  });
}

/**
 * 获取图标列表
 */
export function getEarlyWarningManage_icon(): Promise<
  AxiosResponse<GetIconListUsingGetResponse>
> {
  return request({
    method: "GET",
    url: "/early-warning-manage/icon",
  });
}

/**
 * 获取预警管理列表
 */
export function getEarlyWarningManage_list(
  data: ListUsingGet6Data = {}
): Promise<AxiosResponse<ListUsingGet6Response>> {
  return request({
    method: "GET",
    url: "/early-warning-manage/list",
    query: {
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      smallType: data.smallType,
      type: data.type,
    },
  });
}

/**
 * 新增预警发布
 */
export function postEarlyWarningManage_release(
  data: SaveUsingPost7Data
): Promise<AxiosResponse<SaveUsingPost7Response>> {
  return request({
    method: "POST",
    url: "/early-warning-manage/release",
    body: data.dto,
  });
}

/**
 * 获取预警小类列表
 */
export function getEarlyWarningManage_type(
  data: GetSmallTypeListUsingGetData
): Promise<AxiosResponse<GetSmallTypeListUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/early-warning-manage/type",
    query: {
      type: data.type,
    },
  });
}
