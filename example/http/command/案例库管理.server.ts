import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  DeleteUsingDelete9Data,
  DeleteUsingDelete9Response,
  ListUsingGet10Data,
  ListUsingGet10Response,
  SaveUsingPost11Data,
  SaveUsingPost11Response,
  UpdateUsingPut9Data,
  UpdateUsingPut9Response,
} from "./types";

/**
 * 获取案例库列表
 */
export function getEventCase(
  data: ListUsingGet10Data = {}
): Promise<AxiosResponse<ListUsingGet10Response>> {
  return request({
    method: "GET",
    url: "/event-case",
    query: {
      blurry: data.blurry,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      type: data.type,
    },
  });
}

/**
 * 导入案例库
 */
export function postEventCase(
  data: SaveUsingPost11Data
): Promise<AxiosResponse<SaveUsingPost11Response>> {
  return request({
    method: "POST",
    url: "/event-case",
    body: data.dto,
  });
}

/**
 * 更新案例库
 */
export function putEventCase(
  data: UpdateUsingPut9Data
): Promise<AxiosResponse<UpdateUsingPut9Response>> {
  return request({
    method: "PUT",
    url: "/event-case",
    body: data.dto,
  });
}

/**
 * 删除案例库
 */
export function deleteEventCase(
  data: DeleteUsingDelete9Data
): Promise<AxiosResponse<DeleteUsingDelete9Response>> {
  return request({
    method: "DELETE",
    url: "/event-case",
    body: data.ids,
  });
}
