import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  AllocateUsingPostData,
  AllocateUsingPostResponse,
  AnalyzeDataByLatLonUsingGetData,
  AnalyzeDataByLatLonUsingGetResponse,
  AnalyzeDataUsingGetData,
  AnalyzeDataUsingGetResponse,
  AnalyzeListUsingGetData,
  AnalyzeListUsingGetResponse,
  AnalyzeUsingGetData,
  AnalyzeUsingGetResponse,
  ArriveUsingPost1Data,
  ArriveUsingPost1Response,
  ArriveUsingPostData,
  ArriveUsingPostResponse,
  CurrentUsingGetData,
  CurrentUsingGetResponse,
  DeleteUsingDelete12Data,
  DeleteUsingDelete12Response,
  DeleteUsingDelete13Data,
  DeleteUsingDelete13Response,
  DeleteUsingDelete14Data,
  DeleteUsingDelete14Response,
  DispatchUsingPostData,
  DispatchUsingPostResponse,
  ExportUsingPostData,
  ExportUsingPostResponse,
  FinishUsingPostData,
  FinishUsingPostResponse,
  GetDetailUsingGet11Data,
  GetDetailUsingGet11Response,
  LatestUsingGetData,
  LatestUsingGetResponse,
  ListUsingGet15Data,
  ListUsingGet15Response,
  ListUsingGet16Data,
  ListUsingGet16Response,
  ListUsingGet17Data,
  ListUsingGet17Response,
  MaterialDispatchStatisticsUsingGetData,
  MaterialDispatchStatisticsUsingGetResponse,
  RescueForceTeamUsingGetData,
  RescueForceTeamUsingGetResponse,
  RescueForceTeaStatisticsUsingGetData,
  RescueForceTeaStatisticsUsingGetResponse,
  SaveUsingPost14Data,
  SaveUsingPost14Response,
  SaveUsingPost15Data,
  SaveUsingPost15Response,
  SaveUsingPost16Data,
  SaveUsingPost16Response,
  ShelterListUsingGetData,
  ShelterListUsingGetResponse,
  ShelterStatisticsUsingGetData,
  ShelterStatisticsUsingGetResponse,
  TransferUsingPostData,
  TransferUsingPostResponse,
  UpdateUsingPut12Data,
  UpdateUsingPut12Response,
} from "./types";

/**
 * 获取救援力量分析列表
 */
export function getEventForceAnalysis(
  data: ListUsingGet15Data = {}
): Promise<AxiosResponse<ListUsingGet15Response>> {
  return request({
    method: "GET",
    url: "/event-force-analysis",
    query: {
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 新增救援力量分析
 */
export function postEventForceAnalysis(
  data: SaveUsingPost14Data
): Promise<AxiosResponse<SaveUsingPost14Response>> {
  return request({
    method: "POST",
    url: "/event-force-analysis",
    body: data.dto,
  });
}

/**
 * 更新救援力量分析
 */
export function putEventForceAnalysis(
  data: UpdateUsingPut12Data
): Promise<AxiosResponse<UpdateUsingPut12Response>> {
  return request({
    method: "PUT",
    url: "/event-force-analysis",
    body: data.dto,
  });
}

/**
 * 删除救援力量分析
 */
export function deleteEventForceAnalysis(
  data: DeleteUsingDelete12Data
): Promise<AxiosResponse<DeleteUsingDelete12Response>> {
  return request({
    method: "DELETE",
    url: "/event-force-analysis",
    body: data.ids,
  });
}

/**
 * 获取救援力量分析详情
 */
export function getEventForceAnalysis_detail(
  data: GetDetailUsingGet11Data
): Promise<AxiosResponse<GetDetailUsingGet11Response>> {
  return request({
    method: "GET",
    url: "/event-force-analysis/detail",
    query: {
      id: data.id,
    },
  });
}

/**
 * 物资调度-列表
 */
export function getEventForceAnalysis_materialDispatch(
  data: ListUsingGet16Data
): Promise<AxiosResponse<ListUsingGet16Response>> {
  return request({
    method: "GET",
    url: "/event-force-analysis/material-dispatch",
    query: {
      distance: data.distance,
      eventId: data.eventId,
      scheduleStatus: data.scheduleStatus,
      sortByDistance: data.sortByDistance,
    },
  });
}

/**
 * 物资调度-物资调拨
 */
export function postEventForceAnalysis_materialDispatch_allocation(
  data: AllocateUsingPostData
): Promise<AxiosResponse<AllocateUsingPostResponse>> {
  return request({
    method: "POST",
    url: "/event-force-analysis/material-dispatch/allocation",
    body: data.allocateDto,
  });
}

/**
 * 物资调度-物资到达
 */
export function postEventForceAnalysis_materialDispatch_arrive(
  data: ArriveUsingPost1Data
): Promise<AxiosResponse<ArriveUsingPost1Response>> {
  return request({
    method: "POST",
    url: "/event-force-analysis/material-dispatch/arrive",
    body: data.arriveDto,
  });
}

/**
 * 已调度物资统计
 */
export function getEventForceAnalysis_materialDispatch_statis(
  data: MaterialDispatchStatisticsUsingGetData
): Promise<AxiosResponse<MaterialDispatchStatisticsUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/event-force-analysis/material-dispatch/statis",
    query: {
      eventId: data.eventId,
    },
  });
}

/**
 * 应急队伍列表
 */
export function getEventForceAnalysis_rescueTeam(
  data: RescueForceTeamUsingGetData
): Promise<AxiosResponse<RescueForceTeamUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/event-force-analysis/rescue-team",
    query: {
      distance: data.distance,
      eventId: data.eventId,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      scheduleStatus: data.scheduleStatus,
      sortByDistance: data.sortByDistance,
    },
  });
}

/**
 * 应急队伍-队伍到达
 */
export function postEventForceAnalysis_rescueTeam_arrive(
  data: ArriveUsingPostData
): Promise<AxiosResponse<ArriveUsingPostResponse>> {
  return request({
    method: "POST",
    url: "/event-force-analysis/rescue-team/arrive",
    body: data.arriveDto,
  });
}

/**
 * 应急队伍-调度
 */
export function postEventForceAnalysis_rescueTeam_dispatch(
  data: DispatchUsingPostData
): Promise<AxiosResponse<DispatchUsingPostResponse>> {
  return request({
    method: "POST",
    url: "/event-force-analysis/rescue-team/dispatch",
    body: data.dispatchDto,
  });
}

/**
 * 应急队伍-完成任务
 */
export function postEventForceAnalysis_rescueTeam_finish(
  data: FinishUsingPostData
): Promise<AxiosResponse<FinishUsingPostResponse>> {
  return request({
    method: "POST",
    url: "/event-force-analysis/rescue-team/finish",
    body: data.finishDto,
  });
}

/**
 * 已调度应急队伍统计
 */
export function getEventForceAnalysis_rescueTeam_statis(
  data: RescueForceTeaStatisticsUsingGetData
): Promise<AxiosResponse<RescueForceTeaStatisticsUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/event-force-analysis/rescue-team/statis",
    query: {
      eventId: data.eventId,
    },
  });
}

/**
 * 应急避难场所-列表
 */
export function getEventForceAnalysis_shelter(
  data: ShelterListUsingGetData
): Promise<AxiosResponse<ShelterListUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/event-force-analysis/shelter",
    query: {
      distance: data.distance,
      eventId: data.eventId,
      scheduleStatus: data.scheduleStatus,
      sortByDistance: data.sortByDistance,
    },
  });
}

/**
 * 应急避难场所已安置统计
 */
export function getEventForceAnalysis_shelter_statis(
  data: ShelterStatisticsUsingGetData
): Promise<AxiosResponse<ShelterStatisticsUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/event-force-analysis/shelter/statis",
    query: {
      eventId: data.eventId,
    },
  });
}

/**
 * 应急避难场所-转移安置
 */
export function postEventForceAnalysis_shelter_transfer(
  data: TransferUsingPostData
): Promise<AxiosResponse<TransferUsingPostResponse>> {
  return request({
    method: "POST",
    url: "/event-force-analysis/shelter/transfer",
    body: data.transferDto,
  });
}

/**
 * 新增事件影响分析
 */
export function postEventImpactAnalysis(
  data: SaveUsingPost15Data
): Promise<AxiosResponse<SaveUsingPost15Response>> {
  return request({
    method: "POST",
    url: "/event-impact-analysis",
    body: data.dto,
  });
}

/**
 * 删除事件影响分析
 */
export function deleteEventImpactAnalysis(
  data: DeleteUsingDelete13Data
): Promise<AxiosResponse<DeleteUsingDelete13Response>> {
  return request({
    method: "DELETE",
    url: "/event-impact-analysis",
    body: data.ids,
  });
}

/**
 * 影响范围分析
 */
export function getEventImpactAnalysis_analyze(
  data: AnalyzeUsingGetData
): Promise<AxiosResponse<AnalyzeUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/event-impact-analysis/analyze",
    query: {
      distance: data.distance,
      eventId: data.eventId,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 影响范围分析图层数据
 */
export function getEventImpactAnalysis_analyze_data(
  data: AnalyzeDataUsingGetData
): Promise<AxiosResponse<AnalyzeDataUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/event-impact-analysis/analyze/data",
    query: {
      distance: data.distance,
      eventId: data.eventId,
      id: data.id,
      latitude: data.latitude,
      longitude: data.longitude,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 根据经纬度查询影响范围分析图层数据
 */
export function getEventImpactAnalysis_analyze_dataByLatLon(
  data: AnalyzeDataByLatLonUsingGetData
): Promise<AxiosResponse<AnalyzeDataByLatLonUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/event-impact-analysis/analyze/dataByLatLon",
    query: {
      distance: data.distance,
      eventId: data.eventId,
      id: data.id,
      latitude: data.latitude,
      longitude: data.longitude,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 影响范围分析图层列表
 */
export function getEventImpactAnalysis_analyze_list(
  data: AnalyzeListUsingGetData
): Promise<AxiosResponse<AnalyzeListUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/event-impact-analysis/analyze/list",
    query: {
      planId: data.planId,
    },
  });
}

/**
 * 导出调度报告
 */
export function postEventImpactAnalysis_export(
  data: ExportUsingPostData
): Promise<AxiosResponse<ExportUsingPostResponse>> {
  return request({
    method: "POST",
    url: "/event-impact-analysis/export",
    body: data.query,
  });
}

/**
 * 获取事件上次影响分析结果
 */
export function getEventImpactAnalysis_latest(
  data: LatestUsingGetData
): Promise<AxiosResponse<LatestUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/event-impact-analysis/latest",
    query: {
      eventId: data.eventId,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 获取事件综合研判状态
 */
export function getEventImpactStatus(
  data: ListUsingGet17Data
): Promise<AxiosResponse<ListUsingGet17Response>> {
  return request({
    method: "GET",
    url: "/event-impact-status",
    query: {
      eventId: data.eventId,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}

/**
 * 新增事件综合研判状态
 */
export function postEventImpactStatus(
  data: SaveUsingPost16Data
): Promise<AxiosResponse<SaveUsingPost16Response>> {
  return request({
    method: "POST",
    url: "/event-impact-status",
    body: data.dto,
  });
}

/**
 * 删除事件综合研判状态
 */
export function deleteEventImpactStatus(
  data: DeleteUsingDelete14Data
): Promise<AxiosResponse<DeleteUsingDelete14Response>> {
  return request({
    method: "DELETE",
    url: "/event-impact-status",
    body: data.ids,
  });
}

/**
 * 获取(当前用户)事件综合研判状态
 */
export function getEventImpactStatus_current(
  data: CurrentUsingGetData
): Promise<AxiosResponse<CurrentUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/event-impact-status/current",
    query: {
      eventId: data.eventId,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
    },
  });
}
