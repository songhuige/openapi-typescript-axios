import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type { ListUsingGet4Data, ListUsingGet4Response } from "./types";

/**
 * 获取短信发送记录分页列表
 */
export function getSms_log(
  data: ListUsingGet4Data = {}
): Promise<AxiosResponse<ListUsingGet4Response>> {
  return request({
    method: "GET",
    url: "/sms/log",
    query: {
      blurry: data.blurry,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      smsTemplateId: data.smsTemplateId,
    },
  });
}
