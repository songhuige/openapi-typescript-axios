import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  DeleteUsingDelete1Data,
  DeleteUsingDelete1Response,
  DeleteUsingDelete2Data,
  DeleteUsingDelete2Response,
  DeleteUsingDelete3Data,
  DeleteUsingDelete3Response,
  DeleteUsingDelete4Data,
  DeleteUsingDelete4Response,
  DeptListUsingGetData,
  DeptListUsingGetResponse,
  DeptUserListUsingGetData,
  DeptUserListUsingGetResponse,
  ExportUsingGetData,
  ExportUsingGetResponse,
  GetDetailUsingGet1Data,
  GetDetailUsingGet1Response,
  GetDetailUsingGet2Data,
  GetDetailUsingGet2Response,
  GetDetailUsingGet3Data,
  GetDetailUsingGet3Response,
  GetDetailUsingGet4Data,
  GetDetailUsingGet4Response,
  ListMonthUsingGetData,
  ListMonthUsingGetResponse,
  ListUsingGet2Data,
  ListUsingGet2Response,
  ListUsingGet3Data,
  ListUsingGet3Response,
  ListUsingGet4Data,
  ListUsingGet4Response,
  ListUsingGet5Data,
  ListUsingGet5Response,
  SaveUsingPost1Data,
  SaveUsingPost1Response,
  SaveUsingPost2Data,
  SaveUsingPost2Response,
  SaveUsingPost3Data,
  SaveUsingPost3Response,
  SaveUsingPost4Data,
  SaveUsingPost4Response,
  SaveUsingPost5Data,
  SaveUsingPost5Response,
  SelectUsingPostData,
  SelectUsingPostResponse,
  UpdateUsingPut1Data,
  UpdateUsingPut1Response,
  UpdateUsingPut2Data,
  UpdateUsingPut2Response,
  UpdateUsingPut3Data,
  UpdateUsingPut3Response,
  UpdateUsingPut4Data,
  UpdateUsingPut4Response,
} from "./types";

/**
 * 获取班组列表
 */
export function getDutyGroup(
  data: ListUsingGet2Data = {}
): Promise<AxiosResponse<ListUsingGet2Response>> {
  return request({
    method: "GET",
    url: "/duty-group",
    query: {
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 新增班组
 */
export function postDutyGroup(
  data: SaveUsingPost1Data
): Promise<AxiosResponse<SaveUsingPost1Response>> {
  return request({
    method: "POST",
    url: "/duty-group",
    body: data.dto,
  });
}

/**
 * 更新班组
 */
export function putDutyGroup(
  data: UpdateUsingPut1Data
): Promise<AxiosResponse<UpdateUsingPut1Response>> {
  return request({
    method: "PUT",
    url: "/duty-group",
    body: data.dto,
  });
}

/**
 * 删除班组
 */
export function deleteDutyGroup(
  data: DeleteUsingDelete1Data
): Promise<AxiosResponse<DeleteUsingDelete1Response>> {
  return request({
    method: "DELETE",
    url: "/duty-group",
    body: data.ids,
  });
}

/**
 * 获取班组详情
 */
export function getDutyGroup_detail(
  data: GetDetailUsingGet1Data
): Promise<AxiosResponse<GetDetailUsingGet1Response>> {
  return request({
    method: "GET",
    url: "/duty-group/detail",
    query: {
      id: data.id,
    },
  });
}

/**
 * 获取值班日志列表
 */
export function getDutyLog(
  data: ListUsingGet3Data = {}
): Promise<AxiosResponse<ListUsingGet3Response>> {
  return request({
    method: "GET",
    url: "/duty-log",
    query: {
      logsTime: data.logsTime,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 新增值班日志
 */
export function postDutyLog(
  data: SaveUsingPost2Data
): Promise<AxiosResponse<SaveUsingPost2Response>> {
  return request({
    method: "POST",
    url: "/duty-log",
    body: data.dto,
  });
}

/**
 * 更新值班日志
 */
export function putDutyLog(
  data: UpdateUsingPut2Data
): Promise<AxiosResponse<UpdateUsingPut2Response>> {
  return request({
    method: "PUT",
    url: "/duty-log",
    body: data.dto,
  });
}

/**
 * 删除值班日志
 */
export function deleteDutyLog(
  data: DeleteUsingDelete2Data
): Promise<AxiosResponse<DeleteUsingDelete2Response>> {
  return request({
    method: "DELETE",
    url: "/duty-log",
    body: data.ids,
  });
}

/**
 * 获取值班日志详情
 */
export function getDutyLog_detail(
  data: GetDetailUsingGet2Data
): Promise<AxiosResponse<GetDetailUsingGet2Response>> {
  return request({
    method: "GET",
    url: "/duty-log/detail",
    query: {
      id: data.id,
    },
  });
}

/**
 * 导出值班日志
 */
export function getDutyLog_export(
  data: ExportUsingGetData
): Promise<AxiosResponse<ExportUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/duty-log/export",
    query: {
      logsTime: data.logsTime,
    },
  });
}

/**
 * 获取值班信息列表
 */
export function getDutyScheduling(
  data: ListUsingGet4Data = {}
): Promise<AxiosResponse<ListUsingGet4Response>> {
  return request({
    method: "GET",
    url: "/duty-scheduling",
    query: {
      onDutyUser: data.onDutyUser,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      schedulingTime: data.schedulingTime,
      schedulingTimeEnd: data.schedulingTimeEnd,
      schedulingTimeStart: data.schedulingTimeStart,
    },
  });
}

/**
 * 新增值班
 */
export function postDutyScheduling(
  data: SaveUsingPost4Data
): Promise<AxiosResponse<SaveUsingPost4Response>> {
  return request({
    method: "POST",
    url: "/duty-scheduling",
    body: data.dto,
  });
}

/**
 * 换班
 */
export function putDutyScheduling(
  data: UpdateUsingPut3Data
): Promise<AxiosResponse<UpdateUsingPut3Response>> {
  return request({
    method: "PUT",
    url: "/duty-scheduling",
    body: data.dto,
  });
}

/**
 * 删除值班信息
 */
export function deleteDutyScheduling(
  data: DeleteUsingDelete3Data
): Promise<AxiosResponse<DeleteUsingDelete3Response>> {
  return request({
    method: "DELETE",
    url: "/duty-scheduling",
    body: data.ids,
  });
}

/**
 * 智能排班
 */
export function postDutyScheduling_batch(
  data: SaveUsingPost3Data
): Promise<AxiosResponse<SaveUsingPost3Response>> {
  return request({
    method: "POST",
    url: "/duty-scheduling/batch",
    body: data.dto,
  });
}

/**
 * 获取值班信息详情
 */
export function getDutyScheduling_detail(
  data: GetDetailUsingGet3Data
): Promise<AxiosResponse<GetDetailUsingGet3Response>> {
  return request({
    method: "GET",
    url: "/duty-scheduling/detail",
    query: {
      id: data.id,
    },
  });
}

/**
 * (按月)获取值班信息列表
 */
export function getDutyScheduling_month(
  data: ListMonthUsingGetData = {}
): Promise<AxiosResponse<ListMonthUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/duty-scheduling/month",
    query: {
      onDutyUser: data.onDutyUser,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      schedulingTime: data.schedulingTime,
    },
  });
}

/**
 * 获取值班人员列表
 */
export function getDutyUser(
  data: ListUsingGet5Data = {}
): Promise<AxiosResponse<ListUsingGet5Response>> {
  return request({
    method: "GET",
    url: "/duty-user",
    query: {
      groupId: data.groupId,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 新增值班人员
 */
export function postDutyUser(
  data: SaveUsingPost5Data
): Promise<AxiosResponse<SaveUsingPost5Response>> {
  return request({
    method: "POST",
    url: "/duty-user",
    body: data.dto,
  });
}

/**
 * 更新值班人员
 */
export function putDutyUser(
  data: UpdateUsingPut4Data
): Promise<AxiosResponse<UpdateUsingPut4Response>> {
  return request({
    method: "PUT",
    url: "/duty-user",
    body: data.dto,
  });
}

/**
 * 删除值班人员
 */
export function deleteDutyUser(
  data: DeleteUsingDelete4Data
): Promise<AxiosResponse<DeleteUsingDelete4Response>> {
  return request({
    method: "DELETE",
    url: "/duty-user",
    body: data.ids,
  });
}

/**
 * 获取部门列表
 */
export function getDutyUser_dept_list(
  data: DeptListUsingGetData = {}
): Promise<AxiosResponse<DeptListUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/duty-user/dept/list",
    query: {
      enabled: data.enabled,
      ids: data.ids,
      name: data.name,
      pid: data.pid,
      pidIsNull: data.pidIsNull,
    },
  });
}

/**
 * 获取部门列表
 */
export function getDutyUser_dept_users(
  data: DeptUserListUsingGetData = {}
): Promise<AxiosResponse<DeptUserListUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/duty-user/dept/users",
    query: {
      deptId: data.deptId,
      groupId: data.groupId,
      name: data.name,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 获取值班人员详情
 */
export function getDutyUser_detail(
  data: GetDetailUsingGet4Data
): Promise<AxiosResponse<GetDetailUsingGet4Response>> {
  return request({
    method: "GET",
    url: "/duty-user/detail",
    query: {
      id: data.id,
    },
  });
}

/**
 * 选择添加值班人员
 */
export function postDutyUser_select(
  data: SelectUsingPostData
): Promise<AxiosResponse<SelectUsingPostResponse>> {
  return request({
    method: "POST",
    url: "/duty-user/select",
    body: data.dto,
  });
}
