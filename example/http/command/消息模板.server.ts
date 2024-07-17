import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  DeleteUsingDelete29Data,
  DeleteUsingDelete29Response,
  GetDetailUsingGet25Data,
  GetDetailUsingGet25Response,
  ListUsingGet32Data,
  ListUsingGet32Response,
  SaveUsingPost31Data,
  SaveUsingPost31Response,
  UpdateUsingPut27Data,
  UpdateUsingPut27Response,
} from "./types";

/**
 * 获取消息模板详情
 */
export function getInformationTemplate(
  data: GetDetailUsingGet25Data
): Promise<AxiosResponse<GetDetailUsingGet25Response>> {
  return request({
    method: "GET",
    url: "/information-template",
    query: {
      id: data.id,
    },
  });
}

/**
 * 新增消息模板
 */
export function postInformationTemplate(
  data: SaveUsingPost31Data
): Promise<AxiosResponse<SaveUsingPost31Response>> {
  return request({
    method: "POST",
    url: "/information-template",
    body: data.dto,
  });
}

/**
 * 更新消息模板
 */
export function putInformationTemplate(
  data: UpdateUsingPut27Data
): Promise<AxiosResponse<UpdateUsingPut27Response>> {
  return request({
    method: "PUT",
    url: "/information-template",
    body: data.dto,
  });
}

/**
 * 删除消息模板
 */
export function deleteInformationTemplate(
  data: DeleteUsingDelete29Data
): Promise<AxiosResponse<DeleteUsingDelete29Response>> {
  return request({
    method: "DELETE",
    url: "/information-template",
    body: data.ids,
  });
}

/**
 * 获取消息模板列表
 */
export function getInformationTemplate_list(
  data: ListUsingGet32Data = {}
): Promise<AxiosResponse<ListUsingGet32Response>> {
  return request({
    method: "GET",
    url: "/information-template/list",
    query: {
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      title: data.title,
    },
  });
}
