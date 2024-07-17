import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  DeleteUsingDelete8Data,
  DeleteUsingDelete8Response,
  GetDetailUsingGet8Data,
  GetDetailUsingGet8Response,
  ListUsingGet9Data,
  ListUsingGet9Response,
  SaveUsingPost10Data,
  SaveUsingPost10Response,
  UpdateUsingPut8Data,
  UpdateUsingPut8Response,
} from "./types";

/**
 * 获取应急队伍调度记录列表
 */
export function getEmergencyTeamSchedule(
  data: ListUsingGet9Data = {}
): Promise<AxiosResponse<ListUsingGet9Response>> {
  return request({
    method: "GET",
    url: "/emergency-team-schedule",
    query: {
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 新增应急队伍调度记录
 */
export function postEmergencyTeamSchedule(
  data: SaveUsingPost10Data
): Promise<AxiosResponse<SaveUsingPost10Response>> {
  return request({
    method: "POST",
    url: "/emergency-team-schedule",
    body: data.dto,
  });
}

/**
 * 更新应急队伍调度记录
 */
export function putEmergencyTeamSchedule(
  data: UpdateUsingPut8Data
): Promise<AxiosResponse<UpdateUsingPut8Response>> {
  return request({
    method: "PUT",
    url: "/emergency-team-schedule",
    body: data.dto,
  });
}

/**
 * 删除应急队伍调度记录
 */
export function deleteEmergencyTeamSchedule(
  data: DeleteUsingDelete8Data
): Promise<AxiosResponse<DeleteUsingDelete8Response>> {
  return request({
    method: "DELETE",
    url: "/emergency-team-schedule",
    body: data.ids,
  });
}

/**
 * 获取应急队伍调度记录详情
 */
export function getEmergencyTeamSchedule_detail(
  data: GetDetailUsingGet8Data
): Promise<AxiosResponse<GetDetailUsingGet8Response>> {
  return request({
    method: "GET",
    url: "/emergency-team-schedule/detail",
    query: {
      recordId: data.recordId,
    },
  });
}
