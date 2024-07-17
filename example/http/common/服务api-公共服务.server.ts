import type { AxiosResponse } from "axios";

import { request } from "@/http/axios-instance";

import type {
  AddFileUsingPostData,
  AddFileUsingPostResponse,
  DeleteFileByBizIdUsingDeleteData,
  DeleteFileByBizIdUsingDeleteResponse,
  GetBizResourceTreeDataUsingGetData,
  GetBizResourceTreeDataUsingGetResponse,
  GetBizResourceTreeUsingGetData,
  GetBizResourceTreeUsingGetResponse,
  GetFileByBizIdUsingGetData,
  GetFileByBizIdUsingGetResponse,
  GetFileInfoUsingGetData,
  GetFileInfoUsingGetResponse,
  GetFileUsingGetData,
  GetFileUsingGetResponse,
  GetPositonUsingGetData,
  GetPositonUsingGetResponse,
  GetResourceTreeUsingGetData,
  GetResourceTreeUsingGetResponse,
  RcsInfoUsingGetData,
  RcsInfoUsingGetResponse,
  SendSmsUsingPostData,
  SendSmsUsingPostResponse,
  UpdateFileBizUsingPutData,
  UpdateFileBizUsingPutResponse,
  UpdateFilesBizUsingPutData,
  UpdateFilesBizUsingPutResponse,
} from "./types";

/**
 * 获取业务资源目录数据集合
 */
export function getApi_biz_resource_data(
  data: GetBizResourceTreeDataUsingGetData
): Promise<AxiosResponse<GetBizResourceTreeDataUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/api/biz/resource/data",
    query: {
      id: data.id,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      scope: data.scope,
    },
  });
}

/**
 * 获取业务资源分类
 */
export function getApi_biz_resource_tree(
  data: GetBizResourceTreeUsingGetData
): Promise<AxiosResponse<GetBizResourceTreeUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/api/biz/resource/tree",
    query: {
      categoryCode: data.categoryCode,
      scope: data.scope,
    },
  });
}

/**
 * 获取附件信息
 */
export function getApi_file(
  data: GetFileInfoUsingGetData
): Promise<AxiosResponse<GetFileInfoUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/api/file",
    query: {
      id: data.id,
    },
  });
}

/**
 * 根据业务ID获取文件列表
 */
export function getApi_file_biz(
  data: GetFileByBizIdUsingGetData
): Promise<AxiosResponse<GetFileByBizIdUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/api/file/biz",
    query: {
      bizId: data.bizId,
    },
  });
}

/**
 * 更新附件业务信息
 */
export function putApi_file_biz(
  data: UpdateFileBizUsingPutData
): Promise<AxiosResponse<UpdateFileBizUsingPutResponse>> {
  return request({
    method: "PUT",
    url: "/api/file/biz",
    query: {
      bizId: data.bizId,
      description: data.description,
      id: data.id,
    },
  });
}

/**
 * 删除业务附件
 */
export function deleteApi_file_biz(
  data: DeleteFileByBizIdUsingDeleteData
): Promise<AxiosResponse<DeleteFileByBizIdUsingDeleteResponse>> {
  return request({
    method: "DELETE",
    url: "/api/file/biz",
    query: {
      bizId: data.bizId,
    },
  });
}

/**
 * 添加生成的文件信息到统一附件管理
 */
export function postApi_file_local(
  data: AddFileUsingPostData = {}
): Promise<AxiosResponse<AddFileUsingPostResponse>> {
  return request({
    method: "POST",
    url: "/api/file/local",
    query: {
      bizId: data.bizId,
      catalog: data.catalog,
      description: data.description,
      filePath: data.filePath,
      name: data.name,
      size: data.size,
    },
  });
}

/**
 * 获取文件路径
 */
export function getApi_file_path(
  data: GetFileUsingGetData
): Promise<AxiosResponse<GetFileUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/api/file/path",
    query: {
      id: data.id,
    },
  });
}

/**
 * 批量更新附件业务信息
 */
export function putApi_files_biz(
  data: UpdateFilesBizUsingPutData
): Promise<AxiosResponse<UpdateFilesBizUsingPutResponse>> {
  return request({
    method: "PUT",
    url: "/api/files/biz",
    body: data.unifiedFileUpdateList,
  });
}

/**
 * 根据坐标获取区县位置
 */
export function getApi_getPosition(
  data: GetPositonUsingGetData
): Promise<AxiosResponse<GetPositonUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/api/getPosition",
    query: {
      position: data.position,
    },
  });
}

/**
 * 通过通讯录获取融合通讯信息
 */
export function getApi_rcs(
  data: RcsInfoUsingGetData
): Promise<AxiosResponse<RcsInfoUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/api/rcs",
    query: {
      addressBookIds: data.addressBookIds,
    },
  });
}

/**
 * 获取资源分类树
 */
export function getApi_resource_tree(
  data: GetResourceTreeUsingGetData
): Promise<AxiosResponse<GetResourceTreeUsingGetResponse>> {
  return request({
    method: "GET",
    url: "/api/resource/tree",
    query: {
      configTypes: data.configTypes,
      scope: data.scope,
    },
  });
}

/**
 * 发送短信,返回发送记录ID
 */
export function postApi_sms(
  data: SendSmsUsingPostData
): Promise<AxiosResponse<SendSmsUsingPostResponse>> {
  return request({
    method: "POST",
    url: "/api/sms",
    body: data.smsInfo,
  });
}
