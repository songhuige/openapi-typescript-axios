import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  ListDataUsingGetData,
  ListDataUsingGetResponse,
  ListGroupUsingGetData,
  ListGroupUsingGetResponse,
  ListUsingGetData,
  ListUsingGetResponse,
} from "./types";

/**
 * 获取列表
 */
export function getAddressBook(
  data: ListUsingGetData = {}
): Promise<AxiosResponse<ListUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/address-book",
    query: {
      groupId: data.groupId,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 获取通讯录列表
 */
export function getAddressBook_data(
  data: ListDataUsingGetData = {}
): Promise<AxiosResponse<ListDataUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/address-book/data",
    query: {
      groupId: data.groupId,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 获取分组列表
 */
export function getAddressBook_group(
  data: ListGroupUsingGetData = {}
): Promise<AxiosResponse<ListGroupUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/address-book/group",
    query: {
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}
