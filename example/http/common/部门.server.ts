import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  ListTreeUsingGet1Response,
  ListUsingGet3Data,
  ListUsingGet3Response,
} from "./types";

/**
 * 获取部门列表
 */
export function getDept(
  data: ListUsingGet3Data = {}
): Promise<AxiosResponse<ListUsingGet3Response>> {
  return request({
    method: "GET",
    url: "/dept",
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
 * 获取部门组织树
 */
export function getDept_tree(): Promise<
  AxiosResponse<ListTreeUsingGet1Response>
> {
  return request({
    method: "GET",
    url: "/dept/tree",
  });
}
