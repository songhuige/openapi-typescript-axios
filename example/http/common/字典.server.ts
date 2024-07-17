import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type { QueryDictUsingGetData, QueryDictUsingGetResponse } from "./types";

/**
 * 查询字典
 */
export function getDict(
  data: QueryDictUsingGetData = {}
): Promise<AxiosResponse<QueryDictUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/dict",
    query: {
      blurry: data.blurry,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}
