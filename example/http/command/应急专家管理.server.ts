import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  DeleteUsingDelete7Data,
  DeleteUsingDelete7Response,
  GetDetailUsingGet7Data,
  GetDetailUsingGet7Response,
  ListUsingGet8Data,
  ListUsingGet8Response,
  SaveUsingPost9Data,
  SaveUsingPost9Response,
  UpdateUsingPut7Data,
  UpdateUsingPut7Response,
} from "./types";

/**
 * 获取应急专家列表
 */
export function getEmergencyExpert(
  data: ListUsingGet8Data = {}
): Promise<AxiosResponse<ListUsingGet8Response>> {
  return request({
    method: "GET",
    url: "/emergency-expert",
    query: {
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 新增应急专家
 */
export function postEmergencyExpert(
  data: SaveUsingPost9Data
): Promise<AxiosResponse<SaveUsingPost9Response>> {
  return request({
    method: "POST",
    url: "/emergency-expert",
    body: data.dto,
  });
}

/**
 * 更新应急专家
 */
export function putEmergencyExpert(
  data: UpdateUsingPut7Data
): Promise<AxiosResponse<UpdateUsingPut7Response>> {
  return request({
    method: "PUT",
    url: "/emergency-expert",
    body: data.dto,
  });
}

/**
 * 删除应急专家
 */
export function deleteEmergencyExpert(
  data: DeleteUsingDelete7Data
): Promise<AxiosResponse<DeleteUsingDelete7Response>> {
  return request({
    method: "DELETE",
    url: "/emergency-expert",
    body: data.ids,
  });
}

/**
 * 获取应急专家详情
 */
export function getEmergencyExpert_detail(
  data: GetDetailUsingGet7Data
): Promise<AxiosResponse<GetDetailUsingGet7Response>> {
  return request({
    method: "GET",
    url: "/emergency-expert/detail",
    query: {
      id: data.id,
    },
  });
}
