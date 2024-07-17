import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  BuildCurrentMenusUsingGetData,
  BuildCurrentMenusUsingGetResponse,
} from "./types";

/**
 * 获取当前用户(树型)菜单
 */
export function getMenus_build_current(
  data: BuildCurrentMenusUsingGetData
): Promise<AxiosResponse<BuildCurrentMenusUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/menus/build/current",
    query: {
      blurry: data.blurry,
      moduleId: data.moduleId,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      pid: data.pid,
      pidIsNull: data.pidIsNull,
    },
  });
}
