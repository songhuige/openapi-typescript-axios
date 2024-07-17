import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  ListUsingGet45Data,
  ListUsingGet45Response,
  TreeUsingGetData,
  TreeUsingGetResponse,
  VideodetailUsingGetData,
  VideodetailUsingGetResponse,
  VideoListUsingGetData,
  VideoListUsingGetResponse,
} from "./types";

/**
 * 获取分组列表
 */
export function getVideoSurveillanceGroup(
  data: ListUsingGet45Data = {}
): Promise<AxiosResponse<ListUsingGet45Response>> {
  return request({
    method: "GET",
    url: "/video-surveillance-group",
    query: {
      name: data.name,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      parentId: data.parentId,
      pidIsNull: data.pidIsNull,
    },
  });
}

/**
 * 获取分组树
 */
export function getVideoSurveillanceGroup_tree(
  data: TreeUsingGetData = {}
): Promise<AxiosResponse<TreeUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/video-surveillance-group/tree",
    query: {
      name: data.name,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      parentId: data.parentId,
      pidIsNull: data.pidIsNull,
    },
  });
}

/**
 * 获取设备列表
 */
export function getVideoSurveillanceGroup_video(
  data: VideoListUsingGetData = {}
): Promise<AxiosResponse<VideoListUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/video-surveillance-group/video",
    query: {
      groupId: data.groupId,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      videoName: data.videoName,
    },
  });
}

/**
 * 获取设备详情
 */
export function getVideoSurveillanceGroup_videodetail(
  data: VideodetailUsingGetData
): Promise<AxiosResponse<VideodetailUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/video-surveillance-group/videodetail",
    query: {
      id: data.id,
    },
  });
}
