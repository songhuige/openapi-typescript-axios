import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  DeleteUsingDelete32Data,
  DeleteUsingDelete32Response,
  ListUsingGet37Data,
  ListUsingGet37Response,
  SaveUsingPost34Data,
  SaveUsingPost34Response,
  UpdateUsingPut30Data,
  UpdateUsingPut30Response,
} from "./types";

/**
 * 获取标绘测量分页列表
 */
export function getPlotMeasuring(
  data: ListUsingGet37Data
): Promise<AxiosResponse<ListUsingGet37Response>> {
  return request({
    method: "GET",
    url: "/plot-measuring",
    query: {
      eventId: data.eventId,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 新增标绘测量
 */
export function postPlotMeasuring(
  data: SaveUsingPost34Data
): Promise<AxiosResponse<SaveUsingPost34Response>> {
  return request({
    method: "POST",
    url: "/plot-measuring",
    body: data.dto,
  });
}

/**
 * 更新标绘测量
 */
export function putPlotMeasuring(
  data: UpdateUsingPut30Data
): Promise<AxiosResponse<UpdateUsingPut30Response>> {
  return request({
    method: "PUT",
    url: "/plot-measuring",
    body: data.dto,
  });
}

/**
 * 删除标绘测量
 */
export function deletePlotMeasuring(
  data: DeleteUsingDelete32Data
): Promise<AxiosResponse<DeleteUsingDelete32Response>> {
  return request({
    method: "DELETE",
    url: "/plot-measuring",
    body: data.ids,
  });
}
