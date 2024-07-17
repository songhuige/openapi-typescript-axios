import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  DeleteUsingDelete34Data,
  DeleteUsingDelete34Response,
  GetDetailUsingGet29Data,
  GetDetailUsingGet29Response,
  ListUsingGet39Data,
  ListUsingGet39Response,
  SaveUsingPost36Data,
  SaveUsingPost36Response,
  UpdateUsingPut32Data,
  UpdateUsingPut32Response,
} from "./types";

/**
 * 获取避难场所调度记录列表
 */
export function getShelterSchedule(
  data: ListUsingGet39Data = {}
): Promise<AxiosResponse<ListUsingGet39Response>> {
  return request({
    method: "GET",
    url: "/shelter-schedule",
    query: {
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 新增避难场所调度记录
 */
export function postShelterSchedule(
  data: SaveUsingPost36Data
): Promise<AxiosResponse<SaveUsingPost36Response>> {
  return request({
    method: "POST",
    url: "/shelter-schedule",
    body: data.dto,
  });
}

/**
 * 更新避难场所调度记录
 */
export function putShelterSchedule(
  data: UpdateUsingPut32Data
): Promise<AxiosResponse<UpdateUsingPut32Response>> {
  return request({
    method: "PUT",
    url: "/shelter-schedule",
    body: data.dto,
  });
}

/**
 * 删除避难场所调度记录
 */
export function deleteShelterSchedule(
  data: DeleteUsingDelete34Data
): Promise<AxiosResponse<DeleteUsingDelete34Response>> {
  return request({
    method: "DELETE",
    url: "/shelter-schedule",
    body: data.ids,
  });
}

/**
 * 获取避难场所调度记录详情
 */
export function getShelterSchedule_detail(
  data: GetDetailUsingGet29Data
): Promise<AxiosResponse<GetDetailUsingGet29Response>> {
  return request({
    method: "GET",
    url: "/shelter-schedule/detail",
    query: {
      id: data.id,
    },
  });
}
