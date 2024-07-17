import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  DeleteUsingDelete28Data,
  DeleteUsingDelete28Response,
  GetDetailUsingGet24Data,
  GetDetailUsingGet24Response,
  GetMonthStaticsUsingGetData,
  GetMonthStaticsUsingGetResponse,
  GetStaticsUsingGetResponse,
  GetTemplateListUsingGetResponse,
  ListUsingGet31Data,
  ListUsingGet31Response,
  SaveUsingPost30Data,
  SaveUsingPost30Response,
} from "./types";

/**
 * 获取消息发布详情
 */
export function getInformationRelease(
  data: GetDetailUsingGet24Data
): Promise<AxiosResponse<GetDetailUsingGet24Response>> {
  return request({
    method: "GET",
    url: "/information-release",
    query: {
      id: data.id,
    },
  });
}

/**
 * 新增消息发布
 */
export function postInformationRelease(
  data: SaveUsingPost30Data
): Promise<AxiosResponse<SaveUsingPost30Response>> {
  return request({
    method: "POST",
    url: "/information-release",
    body: data.dto,
  });
}

/**
 * 删除消息发布
 */
export function deleteInformationRelease(
  data: DeleteUsingDelete28Data
): Promise<AxiosResponse<DeleteUsingDelete28Response>> {
  return request({
    method: "DELETE",
    url: "/information-release",
    body: data.ids,
  });
}

/**
 * 获取消息发布列表
 */
export function getInformationRelease_list(
  data: ListUsingGet31Data = {}
): Promise<AxiosResponse<ListUsingGet31Response>> {
  return request({
    method: "GET",
    url: "/information-release/list",
    query: {
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      releaseType: data.releaseType,
    },
  });
}

/**
 * 获取年度消息统计数据
 */
export function getInformationRelease_month(
  data: GetMonthStaticsUsingGetData
): Promise<AxiosResponse<GetMonthStaticsUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/information-release/month",
    query: {
      year: data.year,
    },
  });
}

/**
 * 获取消息管理统计数据
 */
export function getInformationRelease_statics(): Promise<
  AxiosResponse<GetStaticsUsingGetResponse>
> {
  return request({
    method: "GET",
    url: "/information-release/statics",
  });
}

/**
 * 获取消息模板列表
 */
export function getInformationRelease_template(): Promise<
  AxiosResponse<GetTemplateListUsingGetResponse>
> {
  return request({
    method: "GET",
    url: "/information-release/template",
  });
}
