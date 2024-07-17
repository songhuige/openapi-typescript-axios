import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  DeleteUsingDelete30Data,
  DeleteUsingDelete30Response,
  GetDetailUsingGet26Data,
  GetDetailUsingGet26Response,
  ListUsingGet33Data,
  ListUsingGet33Response,
  SaveUsingPost32Data,
  SaveUsingPost32Response,
  UpdateUsingPut28Data,
  UpdateUsingPut28Response,
} from "./types";

/**
 * 获取知识库列表
 */
export function getKnowledgeBase(
  data: ListUsingGet33Data = {}
): Promise<AxiosResponse<ListUsingGet33Response>> {
  return request({
    method: "GET",
    url: "/knowledge-base",
    query: {
      name: data.name,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      tags: data.tags,
      type: data.type,
    },
  });
}

/**
 * 新增知识库
 */
export function postKnowledgeBase(
  data: SaveUsingPost32Data
): Promise<AxiosResponse<SaveUsingPost32Response>> {
  return request({
    method: "POST",
    url: "/knowledge-base",
    body: data.dto,
  });
}

/**
 * 更新知识库
 */
export function putKnowledgeBase(
  data: UpdateUsingPut28Data
): Promise<AxiosResponse<UpdateUsingPut28Response>> {
  return request({
    method: "PUT",
    url: "/knowledge-base",
    body: data.dto,
  });
}

/**
 * 删除知识库
 */
export function deleteKnowledgeBase(
  data: DeleteUsingDelete30Data
): Promise<AxiosResponse<DeleteUsingDelete30Response>> {
  return request({
    method: "DELETE",
    url: "/knowledge-base",
    body: data.ids,
  });
}

/**
 * 获取知识库详情
 */
export function getKnowledgeBase_detail(
  data: GetDetailUsingGet26Data
): Promise<AxiosResponse<GetDetailUsingGet26Response>> {
  return request({
    method: "GET",
    url: "/knowledge-base/detail",
    query: {
      id: data.id,
    },
  });
}
