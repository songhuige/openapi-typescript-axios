import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type { ListUsingGet5Data, ListUsingGet5Response } from "./types";

/**
 * 获取短信模板分页列表
 */
export function getSmsTemplate(
  data: ListUsingGet5Data = {}
): Promise<AxiosResponse<ListUsingGet5Response>> {
  return request({
    method: "GET",
    url: "/sms-template",
    query: {
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}
