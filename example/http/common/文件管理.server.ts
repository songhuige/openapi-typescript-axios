import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  BizInfoUsingGetData,
  BizInfoUsingGetResponse,
  DeleteUsingDeleteData,
  DeleteUsingDeleteResponse,
  DownloadUsingGetData,
  DownloadUsingGetResponse,
  ListUsingGet6Data,
  ListUsingGet6Response,
  UploadUsingPostData,
  UploadUsingPostResponse,
} from "./types";

/**
 * 下载
 */
export function getFile(
  data: DownloadUsingGetData
): Promise<AxiosResponse<DownloadUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/file",
    query: {
      id: data.id,
    },
  });
}

/**
 * 上传
 */
export function postFile(
  data: UploadUsingPostData = {}
): Promise<AxiosResponse<UploadUsingPostResponse>> {
  return request({
    method: "POST",
    url: "/file",
    query: {
      bizId: data.bizId,
      catalog: data.catalog,
      description: data.description,
    },
    formData: {
      file: data.file,
    },
  });
}

/**
 * 删除文件
 */
export function deleteFile(
  data: DeleteUsingDeleteData
): Promise<AxiosResponse<DeleteUsingDeleteResponse>> {
  return request({
    method: "DELETE",
    url: "/file",
    body: data.ids,
  });
}

/**
 * 获取业务文件详情
 */
export function getFile_biz_info(
  data: BizInfoUsingGetData
): Promise<AxiosResponse<BizInfoUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/file/biz/info",
    query: {
      bizId: data.bizId,
    },
  });
}

/**
 * 查看文件信息
 */
export function getFile_info(
  data: ListUsingGet6Data
): Promise<AxiosResponse<ListUsingGet6Response>> {
  return request({
    method: "GET",
    url: "/file/info",
    query: {
      ids: data.ids,
    },
  });
}
