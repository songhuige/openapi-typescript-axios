import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  ListTreeUsingGetData,
  ListTreeUsingGetResponse,
  ListUsingGet1Data,
  ListUsingGet1Response,
  ListUsingGet2Data,
  ListUsingGet2Response,
} from "./types";

/**
 * 获取成员列表
 */
export function getAddressBook(
  data: ListUsingGet1Data = {}
): Promise<AxiosResponse<ListUsingGet1Response>> {
  return request({
    method: "GET",
    url: "/address-book",
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
 * 获取通讯录分组树结构
 */
export function getAddressBook_group_tree(
  data: ListTreeUsingGetData = {}
): Promise<AxiosResponse<ListTreeUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/address-book/group/tree",
    query: {
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 获取(融合通讯)通讯录成员列表
 */
export function getAddressBook_rcs(
  data: ListUsingGet2Data
): Promise<AxiosResponse<ListUsingGet2Response>> {
  return request({
    method: "GET",
    url: "/address-book/rcs",
    query: {
      rcsExtension: data.rcsExtension,
    },
  });
}
