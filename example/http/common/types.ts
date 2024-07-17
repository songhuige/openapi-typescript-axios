/**
 * 通讯录分组视图对象
 */
export type AddressBookGroupVO = {
  /**
   * 子节点
   */
  children?: Array<AddressBookGroupVO>;
  /**
   * ID
   */
  id?: number;
  /**
   * 分组名称
   */
  name?: string;
  /**
   * 顺序
   */
  orderNo?: number;
  /**
   * 父级ID
   */
  parentId?: number;
};

export type CharSequence = unknown;

export type Comparable_object_ = unknown;

/**
 * 一张图数据详情
 */
export type DataCategoryDetailVo = {
  /**
   * 详情展示内容
   */
  content?: unknown;
  /**
   * 详情展示名称
   */
  name?: string;
};

/**
 * 数据类别
 */
export type DataCategoryVo = {
  /**
   * 数据记录总数
   */
  count?: number;
  /**
   * id
   */
  id?: string;
  /**
   * 层级
   */
  level?: number;
  /**
   * 子节点个数
   */
  num?: number;
  /**
   * 父级ID
   */
  parentId?: string;
  /**
   * 顺序
   */
  sort?: number;
  /**
   * 表名称
   */
  tableName?: string;
  /**
   * 类别编码
   */
  typeCode?: string;
  /**
   * 类别名称
   */
  typeName?: string;
  /**
   * 单位
   */
  unit?: string;
};

/**
 * 数据管理查询参数
 */
export type DataQueryCriteria = {
  /**
   * 距离(米)
   */
  distance?: number;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
  /**
   * 点(WKT), 按点+距离查询时，二者不能有空值
   */
  point?: string;
  /**
   * 查询参数
   */
  queryParams?: Array<QueryDto>;
  /**
   * 数据类别ID
   */
  resId: string;
};

export type DeptVO = {
  children?: Array<DeptVO>;
  deptSort?: number;
  enabled?: boolean;
  hasChildren?: boolean;
  id?: number;
  label?: string;
  leaf?: boolean;
  name?: string;
  pid?: number;
  subCount?: number;
};

/**
 * 行政区域信息
 */
export type DistinctAreaApiVo = {
  /**
   * 行政区编码
   */
  areaCode?: string;
  /**
   * 区划ID
   */
  areaId?: number;
  /**
   * 范围线
   */
  areaLine?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 行政区编码
   */
  parentId?: number;
  /**
   * 备注
   */
  remark?: string;
};

/**
 * 行政区域信息
 */
export type DistinctAreaTreeVo = {
  /**
   * 行政区编码
   */
  areaCode?: string;
  /**
   * 区划ID
   */
  areaId?: number;
  /**
   * 范围线
   */
  areaLine?: string;
  /**
   * 子级行政区划
   */
  children?: Array<DistinctAreaTreeVo>;
  /**
   * 名称
   */
  name?: string;
  /**
   * 父级行政区ID
   */
  parentId?: number;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 当前系统区划
   */
  sysArea?: boolean;
};

/**
 * 字段名称及描述
 */
export type FieldShowQueryVo = {
  /**
   * 字段名称
   */
  fieldName?: string;
  /**
   * 字段描述
   */
  fieldNote?: string;
};

export type PositionDto = {
  cityCode?: string;
  cityName?: string;
  countyCode?: string;
  countyName?: string;
  provinceCode?: string;
  provinceName?: string;
};

/**
 * 动态查询
 */
export type QueryDto = {
  /**
   * 查询内容
   */
  content?: string;
  /**
   * 查询字段
   */
  fieldName?: string;
  /**
   * 查询方式
   */
  queryWay?: string;
};

/**
 * 业务资源分类数据
 */
export type ResourceDataCategoryDataVo = {
  /**
   * 图标路径
   */
  iconPath?: string;
  /**
   * 数据ID
   */
  id?: string;
  /**
   * 距离
   */
  length?: number;
  /**
   * 展示名称
   */
  name?: string;
  /**
   * 位置(GeoJSON)
   */
  position?: unknown;
  /**
   * 资源ID
   */
  resId?: string;
};

/**
 * 短信发送记录
 */
export type SmsLogVO = {
  /**
   * 业务主键ID
   */
  bizId?: string;
  /**
   * 短信内容
   */
  content?: string;
  /**
   * 短信发送ID
   */
  id?: number;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 接收人
   */
  receiver?: string;
  /**
   * 状态
   */
  sendStatus?: string;
  /**
   * 短信模板ID
   */
  smsTemplateId?: number;
};

/**
 * 短信模板
 */
export type SmsTemplateVO = {
  /**
   * 模板内容
   */
  content?: string;
  /**
   * 是否默认
   */
  defaultTemplate?: boolean;
  /**
   * 短信模板ID
   */
  id?: number;
  /**
   * 模板名称
   */
  name?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 模板分类(字典)
   */
  templateType?: string;
};

export type Timestamp = {
  date?: number;
  day?: number;
  hours?: number;
  minutes?: number;
  month?: number;
  nanos?: number;
  seconds?: number;
  time?: number;
  timezoneOffset?: number;
  year?: number;
};

export type UnifiedFileUpdateDTO = {
  /**
   * 业务ID
   */
  bizId?: number;
  /**
   * 业务描述
   */
  description?: string;
  /**
   * 附件ID
   */
  id?: number;
};

export type UnifiedFileVO = {
  /**
   * 业务ID
   */
  bizId?: string;
  /**
   * 业务分类
   */
  catalog?: string;
  /**
   * 文件描述信息
   */
  description?: string;
  /**
   * 文件ID
   */
  fileId?: number;
  /**
   * 文件位置
   */
  filePath?: string;
  /**
   * 文件名称
   */
  name?: string;
  /**
   * 文件大小(byte)
   */
  size?: number;
  /**
   * 图表类型
   */
  type?: string;
  /**
   * 上传时间
   */
  uploadTime?: Timestamp;
  /**
   * 上传人
   */
  uploader?: string;
};

/**
 * 用户(融合)通讯信息简要视图对象
 */
export type UserRcsSmallVO = {
  /**
   * 通讯录ID
   */
  addressBookId?: number;
  /**
   * 用户ID
   */
  userId?: number;
  /**
   * 分机号
   */
  usrNumber?: string;
};

/**
 * 用户(融合)通讯信息视图对象
 */
export type UserRcsVO = {
  /**
   * 通讯录ID
   */
  addressBookId?: number;
  /**
   * ID
   */
  id?: number;
  /**
   * 元数据
   */
  metaData?: unknown;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 用户ID
   */
  userId?: number;
  /**
   * 分机号
   */
  usrNumber?: string;
  /**
   * 密码
   */
  usrPasswd?: string;
  /**
   * 类型
   */
  usrType?: string;
  /**
   * 融合通讯用户ID
   */
  usrUuid?: string;
};

export type 分页结果数据_AddressBookGroupVO_ = {
  /**
   * 数据集
   */
  list?: Array<AddressBookGroupVO>;
  /**
   * 当前页数
   */
  pageNum?: number;
  /**
   * 每页记录数
   */
  pageSize?: number;
  /**
   * 记录数
   */
  total?: number;
  /**
   * 总页数
   */
  totalPage?: number;
};

export type 分页结果数据_DistinctAreaApiVo_ = {
  /**
   * 数据集
   */
  list?: Array<DistinctAreaApiVo>;
  /**
   * 当前页数
   */
  pageNum?: number;
  /**
   * 每页记录数
   */
  pageSize?: number;
  /**
   * 记录数
   */
  total?: number;
  /**
   * 总页数
   */
  totalPage?: number;
};

export type 分页结果数据_List_DataCategoryDetailVo__ = {
  /**
   * 数据集
   */
  list?: Array<Array<DataCategoryDetailVo>>;
  /**
   * 当前页数
   */
  pageNum?: number;
  /**
   * 每页记录数
   */
  pageSize?: number;
  /**
   * 记录数
   */
  total?: number;
  /**
   * 总页数
   */
  totalPage?: number;
};

export type 分页结果数据_Map_string_object__ = {
  /**
   * 数据集
   */
  list?: Array<{
    [key: string]: unknown;
  }>;
  /**
   * 当前页数
   */
  pageNum?: number;
  /**
   * 每页记录数
   */
  pageSize?: number;
  /**
   * 记录数
   */
  total?: number;
  /**
   * 总页数
   */
  totalPage?: number;
};

export type 分页结果数据_ResourceDataCategoryDataVo_ = {
  /**
   * 数据集
   */
  list?: Array<ResourceDataCategoryDataVo>;
  /**
   * 当前页数
   */
  pageNum?: number;
  /**
   * 每页记录数
   */
  pageSize?: number;
  /**
   * 记录数
   */
  total?: number;
  /**
   * 总页数
   */
  totalPage?: number;
};

export type 分页结果数据_SmsLogVO_ = {
  /**
   * 数据集
   */
  list?: Array<SmsLogVO>;
  /**
   * 当前页数
   */
  pageNum?: number;
  /**
   * 每页记录数
   */
  pageSize?: number;
  /**
   * 记录数
   */
  total?: number;
  /**
   * 总页数
   */
  totalPage?: number;
};

export type 分页结果数据_SmsTemplateVO_ = {
  /**
   * 数据集
   */
  list?: Array<SmsTemplateVO>;
  /**
   * 当前页数
   */
  pageNum?: number;
  /**
   * 每页记录数
   */
  pageSize?: number;
  /**
   * 记录数
   */
  total?: number;
  /**
   * 总页数
   */
  totalPage?: number;
};

export type 分页结果数据_字典数据_ = {
  /**
   * 数据集
   */
  list?: Array<字典数据>;
  /**
   * 当前页数
   */
  pageNum?: number;
  /**
   * 每页记录数
   */
  pageSize?: number;
  /**
   * 记录数
   */
  total?: number;
  /**
   * 总页数
   */
  totalPage?: number;
};

export type 分页结果数据_通讯录_ = {
  /**
   * 数据集
   */
  list?: Array<通讯录>;
  /**
   * 当前页数
   */
  pageNum?: number;
  /**
   * 每页记录数
   */
  pageSize?: number;
  /**
   * 记录数
   */
  total?: number;
  /**
   * 总页数
   */
  totalPage?: number;
};

export type 子系统 = {
  /**
   * 应用授权码
   */
  code?: string;
  /**
   * 创建人(用户名)
   */
  createBy?: string;
  /**
   * 当前用户已选中
   */
  currentUserSelected?: boolean;
  /**
   * 名称
   */
  name?: string;
  /**
   * 打开方式: 字典(sub_module_opentype)
   */
  openType?: string;
  /**
   * 系统介绍
   */
  sysInfo?: string;
  /**
   * 系统图片
   */
  sysPic?: string;
  /**
   * 类型： 服务 三方 - 字典(sub_module_type)
   */
  type?: string;
  /**
   * 更新人(用户名)
   */
  updateBy?: string;
  /**
   * 链接地址URL
   */
  url?: string;
};

export type 字典数据 = {
  /**
   * 创建人(用户名)
   */
  createBy?: string;
  /**
   * 字典名称
   */
  description?: string;
  /**
   * 字典详细
   */
  dictDetails?: Array<字典详情>;
  /**
   * ID
   */
  id?: number;
  /**
   * 编码
   */
  name?: string;
  /**
   * 更新人(用户名)
   */
  updateBy?: string;
};

export type 字典详情 = {
  /**
   * 创建人(用户名)
   */
  createBy?: string;
  /**
   * 排序
   */
  dictSort?: number;
  /**
   * ID
   */
  id?: number;
  /**
   * 字典标签
   */
  label?: string;
  /**
   * 更新人(用户名)
   */
  updateBy?: string;
  /**
   * 字典值
   */
  value?: string;
};

export type 已上传文件信息 = {
  /**
   * 文件名称
   */
  fileId?: number;
  /**
   * 访问路径
   */
  uri?: string;
};

export type 接口返回结果 = {
  /**
   * 数据对象
   */
  data?: unknown;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_DataCategoryVo_ = {
  /**
   * 数据对象
   */
  data?: DataCategoryVo;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_DistinctAreaTreeVo_ = {
  /**
   * 数据对象
   */
  data?: DistinctAreaTreeVo;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_List_AddressBookGroupVO__ = {
  /**
   * 数据对象
   */
  data?: Array<AddressBookGroupVO>;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_List_DataCategoryDetailVo__ = {
  /**
   * 数据对象
   */
  data?: Array<DataCategoryDetailVo>;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_List_DeptVO__ = {
  /**
   * 数据对象
   */
  data?: Array<DeptVO>;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_List_DistinctAreaTreeVo__ = {
  /**
   * 数据对象
   */
  data?: Array<DistinctAreaTreeVo>;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_List_FieldShowQueryVo__ = {
  /**
   * 数据对象
   */
  data?: Array<FieldShowQueryVo>;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_List_Tree_string___ = {
  /**
   * 数据对象
   */
  data?: Array<{
    [key: string]: unknown;
  }>;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_List_已上传文件信息__ = {
  /**
   * 数据对象
   */
  data?: Array<已上传文件信息>;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_List_文件业务信息__ = {
  /**
   * 数据对象
   */
  data?: Array<文件业务信息>;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_List_文件详细信息__ = {
  /**
   * 数据对象
   */
  data?: Array<文件详细信息>;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_List_菜单信息__ = {
  /**
   * 数据对象
   */
  data?: Array<菜单信息>;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_List_通讯录__ = {
  /**
   * 数据对象
   */
  data?: Array<通讯录>;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_string_ = {
  /**
   * 数据对象
   */
  data?: string;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_AddressBookGroupVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_AddressBookGroupVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_DistinctAreaApiVo__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_DistinctAreaApiVo_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_List_DataCategoryDetailVo___ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_List_DataCategoryDetailVo__;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_Map_string_object___ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_Map_string_object__;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_ResourceDataCategoryDataVo__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_ResourceDataCategoryDataVo_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_SmsLogVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_SmsLogVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_SmsTemplateVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_SmsTemplateVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_字典数据__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_字典数据_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_通讯录__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_通讯录_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_用户信息_ = {
  /**
   * 数据对象
   */
  data?: 用户信息;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 文件业务信息 = {
  /**
   * 业务ID
   */
  bizId?: string;
  /**
   * 业务分类
   */
  catalog?: string;
  /**
   * 文件描述信息
   */
  description?: string;
  /**
   * 文件ID
   */
  fileId?: number;
  /**
   * 文件名称
   */
  name?: string;
  /**
   * 文件大小(byte)
   */
  size?: number;
  /**
   * 附件类型
   */
  type?: string;
  /**
   * 上传时间
   */
  uploadTime?: Timestamp;
  /**
   * 上传人
   */
  uploader?: string;
};

export type 文件详细信息 = {
  /**
   * 文件描述信息
   */
  description?: string;
  /**
   * 文件名称
   */
  name?: string;
  /**
   * 文件大小(byte)
   */
  size?: number;
  /**
   * 类型
   */
  type?: string;
  /**
   * 上传时间
   */
  uploadTime?: Timestamp;
  /**
   * 上传人
   */
  uploader?: string;
};

export type 用户信息 = {
  /**
   * 部门
   */
  department?: string;
  /**
   * 昵称
   */
  nickName?: string;
  /**
   * 电话
   */
  phone?: string;
  /**
   * 融合通讯信息
   */
  rcs?: UserRcsVO;
  /**
   * 单位
   */
  unit?: string;
  /**
   * 用户ID
   */
  userId?: string;
  /**
   * 用户名
   */
  userName?: string;
};

export type 短信内容 = {
  /**
   * 业务ID
   */
  bizId?: string;
  /**
   * 短信内容（使用模板时，该参数无效）
   */
  content?: string;
  /**
   * 内容参数
   */
  params?: Array<string>;
  /**
   * 接收手机号(1-100个)
   */
  phone: Array<string>;
  /**
   * 模板ID
   */
  templateId?: number;
};

export type 菜单信息 = {
  /**
   * 是否始终显示
   */
  alwaysShow?: boolean;
  /**
   * 子菜单
   */
  children?: Array<菜单信息>;
  /**
   * 组件路径
   */
  component?: string;
  /**
   * 是否隐藏
   */
  hidden?: boolean;
  /**
   * ID
   */
  id?: number;
  /**
   * 详细信息
   */
  meta?: 菜单元数据;
  /**
   * 名称
   */
  name?: string;
  /**
   * 路由地址
   */
  path?: string;
  /**
   * 跳转
   */
  redirect?: string;
  /**
   * 子系统模块
   */
  subModule?: 子系统;
};

export type 菜单元数据 = {
  /**
   * 菜单图标
   */
  icon?: string;
  /**
   * id
   */
  id?: number;
  /**
   * 无缓存
   */
  noCache?: boolean;
  /**
   * 菜单标题
   */
  title?: string;
};

export type 通讯录 = {
  /**
   * 头像地址
   */
  avatarName?: string;
  /**
   * 头像真实路径
   */
  avatarPath?: string;
  /**
   * 出生日期
   */
  birthday?: string;
  /**
   * 联系方式
   */
  contactInformation?: string;
  /**
   * 创建人(用户名)
   */
  createBy?: string;
  /**
   * 学历,字典(address_book_degree)
   */
  degree?: string;
  /**
   * 用户部门ID
   */
  deptId?: number;
  /**
   * 用户部门
   */
  deptName?: string;
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 状态：启用、禁用,字典(address_book_status)
   */
  enabled?: string;
  /**
   * 性别
   */
  gender?: string;
  /**
   * ID
   */
  id?: number;
  /**
   * 身份证
   */
  idCard?: string;
  /**
   * 职务
   */
  job?: string;
  /**
   * 婚姻状态
   */
  maritalStatus?: string;
  /**
   * 昵称
   */
  nickName?: string;
  /**
   * 手机号码
   */
  phone?: string;
  /**
   * 照片
   */
  photo?: string;
  /**
   * 融合通讯信息
   */
  rcs?: UserRcsSmallVO;
  /**
   * 真实名称
   */
  realname?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 用户所属单位
   */
  unitName?: string;
  /**
   * 更新人(用户名)
   */
  updateBy?: string;
  /**
   * 用户名称
   */
  username?: string;
};

export type ListUsingGet1Data = {
  /**
   * 部门ID
   */
  deptId?: number;
  /**
   * 通讯录分组ID
   */
  groupId?: number;
  /**
   * 模糊查询：名称
   */
  name?: string;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type ListUsingGet1Response = 接口返回结果_分页结果数据_通讯录__;

export type ListTreeUsingGetData = {
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type ListTreeUsingGetResponse = 接口返回结果_List_AddressBookGroupVO__;

export type ListUsingGet2Data = {
  /**
   * 融合通讯分机号集合
   */
  rcsExtension: Array<string>;
};

export type ListUsingGet2Response = 接口返回结果_List_通讯录__;

export type GetBizResourceTreeDataUsingGetData = {
  /**
   * id
   */
  id: string;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
  /**
   * 范围(WKT)
   */
  scope?: string;
};

export type GetBizResourceTreeDataUsingGetResponse =
  分页结果数据_ResourceDataCategoryDataVo_;

export type GetBizResourceTreeUsingGetData = {
  /**
   * categoryCode
   */
  categoryCode: Array<string>;
  /**
   * scope
   */
  scope?: string;
};

export type GetBizResourceTreeUsingGetResponse = Array<{
  [key: string]: unknown;
}>;

export type GetFileInfoUsingGetData = {
  /**
   * id
   */
  id: number;
};

export type GetFileInfoUsingGetResponse = 文件详细信息;

export type GetFileByBizIdUsingGetData = {
  /**
   * bizId
   */
  bizId: number;
};

export type GetFileByBizIdUsingGetResponse = Array<UnifiedFileVO>;

export type UpdateFileBizUsingPutData = {
  /**
   * bizId
   */
  bizId: number;
  /**
   * description
   */
  description: string;
  /**
   * id
   */
  id: number;
};

export type UpdateFileBizUsingPutResponse = unknown;

export type DeleteFileByBizIdUsingDeleteData = {
  /**
   * bizId
   */
  bizId: string;
};

export type DeleteFileByBizIdUsingDeleteResponse = boolean;

export type AddFileUsingPostData = {
  /**
   * 业务ID
   */
  bizId?: string;
  /**
   * 业务分类
   */
  catalog?: string;
  /**
   * 文件描述信息
   */
  description?: string;
  /**
   * 文件位置
   */
  filePath?: string;
  /**
   * 文件名称
   */
  name?: string;
  /**
   * 文件大小(byte)
   */
  size?: number;
};

export type AddFileUsingPostResponse = number;

export type GetFileUsingGetData = {
  /**
   * id
   */
  id: number;
};

export type GetFileUsingGetResponse = string;

export type UpdateFilesBizUsingPutData = {
  /**
   * unifiedFileUpdateList
   */
  unifiedFileUpdateList: Array<UnifiedFileUpdateDTO>;
};

export type UpdateFilesBizUsingPutResponse = unknown;

export type GetPositonUsingGetData = {
  /**
   * position
   */
  position: string;
};

export type GetPositonUsingGetResponse = PositionDto;

export type RcsInfoUsingGetData = {
  /**
   * addressBookIds
   */
  addressBookIds: Array<number>;
};

export type RcsInfoUsingGetResponse = Array<UserRcsVO>;

export type GetResourceTreeUsingGetData = {
  /**
   * configTypes
   */
  configTypes: Array<string>;
  /**
   * scope
   */
  scope?: string;
};

export type GetResourceTreeUsingGetResponse = Array<{
  [key: string]: unknown;
}>;

export type SendSmsUsingPostData = {
  /**
   * smsInfo
   */
  smsInfo: 短信内容;
};

export type SendSmsUsingPostResponse = number;

export type AreaInfoUsingGetResponse = 接口返回结果_List_DistinctAreaTreeVo__;

export type ListDistinctAreasUsingGetData = {
  /**
   * 当前页码，默认1
   */
  pageNum?: number;
  /**
   * 每页条数，默认50
   */
  pageSize?: number;
  /**
   * 父级区域ID
   */
  parentId?: number;
  /**
   * 父级区域ID为空
   */
  parentIdIsNull?: boolean;
};

export type ListDistinctAreasUsingGetResponse =
  接口返回结果_分页结果数据_DistinctAreaApiVo__;

export type SysUsingGetResponse = 接口返回结果_DistinctAreaTreeVo_;

export type DateUsingGetResponse = 接口返回结果_string_;

export type DateTimeUsingGetResponse = 接口返回结果_string_;

export type InitPointUsingGetResponse = 接口返回结果_string_;

export type ListEntitiesUsingPostData = {
  /**
   * queryCriteria
   */
  queryCriteria: DataQueryCriteria;
};

export type ListEntitiesUsingPostResponse =
  接口返回结果_分页结果数据_Map_string_object___;

export type GetPicDetailsUsingGetData = {
  /**
   * 数据ID
   */
  id: string;
  /**
   * 类别ID
   */
  resId: string;
};

export type GetPicDetailsUsingGetResponse =
  接口返回结果_List_DataCategoryDetailVo__;

export type GetTableHeaderUsingGetData = {
  /**
   * 数据类别ID
   */
  resId: string;
};

export type GetTableHeaderUsingGetResponse =
  接口返回结果_List_FieldShowQueryVo__;

export type TreeUsingGetData = {
  /**
   * 资源配置类别
   */
  configTypes: Array<string>;
  /**
   * 范围(WKT)
   */
  scope?: string;
};

export type TreeUsingGetResponse = 接口返回结果_DataCategoryVo_;

export type TreeInPointUsingGetData = {
  /**
   * 资源配置类别
   */
  configTypes: Array<string>;
  /**
   * 距离(米)
   */
  distance?: number;
  /**
   * 点(WKT), 按点+距离查询时，二者不能有空值
   */
  point?: string;
};

export type TreeInPointUsingGetResponse = 接口返回结果_DataCategoryVo_;

export type ListUsingGet3Data = {
  /**
   * 是否启用
   */
  enabled?: boolean;
  /**
   * 指定ID
   */
  ids?: Array<number>;
  /**
   * 部门名称
   */
  name?: string;
  /**
   * 上级部门
   */
  pid?: number;
  /**
   * 上级部门为空
   */
  pidIsNull?: boolean;
};

export type ListUsingGet3Response = 接口返回结果_List_DeptVO__;

export type ListTreeUsingGet1Response = 接口返回结果_List_DeptVO__;

export type QueryDictUsingGetData = {
  /**
   * 模糊查询： 名称,描述
   */
  blurry?: string;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type QueryDictUsingGetResponse = 接口返回结果_分页结果数据_字典数据__;

export type DownloadUsingGetData = {
  /**
   * 文件ID
   */
  id: number;
};

export type DownloadUsingGetResponse = unknown;

export type UploadUsingPostData = {
  /**
   * 业务ID
   */
  bizId?: string;
  /**
   * 业务分类
   */
  catalog?: string;
  /**
   * 文件描述
   */
  description?: string;
  file?: Array<Blob | File>;
};

export type UploadUsingPostResponse = 接口返回结果_List_已上传文件信息__;

export type DeleteUsingDeleteData = {
  /**
   * 文件ID(数组)
   */
  ids: Array<number>;
};

export type DeleteUsingDeleteResponse = 接口返回结果;

export type BizInfoUsingGetData = {
  /**
   * 业务ID
   */
  bizId: number;
};

export type BizInfoUsingGetResponse = 接口返回结果_List_文件业务信息__;

export type ListUsingGet6Data = {
  /**
   * 文件ID(数组)
   */
  ids: Array<number>;
};

export type ListUsingGet6Response = 接口返回结果_List_文件详细信息__;

export type BuildCurrentMenusUsingGetData = {
  /**
   * 模糊查询：菜单组件名称 组件路径 权限标识
   */
  blurry?: string;
  /**
   * 子系统ID
   */
  moduleId: number;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
  /**
   * 上级菜单
   */
  pid?: number;
  /**
   * 父级为空
   */
  pidIsNull?: boolean;
};

export type BuildCurrentMenusUsingGetResponse = 接口返回结果_List_菜单信息__;

export type GetDataUsingGetData = {
  /**
   * id
   */
  id: string;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
  /**
   * 范围(WKT)
   */
  scope?: string;
};

export type GetDataUsingGetResponse =
  接口返回结果_分页结果数据_ResourceDataCategoryDataVo__;

export type GetDataByPointUsingGetData = {
  /**
   * 距离
   */
  distance?: number;
  /**
   * id
   */
  id: string;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
  /**
   * 点(WKT)
   */
  point?: string;
};

export type GetDataByPointUsingGetResponse =
  接口返回结果_分页结果数据_ResourceDataCategoryDataVo__;

export type GetDataDetailsByPointUsingGetData = {
  /**
   * 距离
   */
  distance?: number;
  /**
   * id
   */
  id: string;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
  /**
   * 点(WKT)
   */
  point?: string;
};

export type GetDataDetailsByPointUsingGetResponse =
  接口返回结果_分页结果数据_List_DataCategoryDetailVo___;

export type DataCategoryUsingGet1Data = {
  /**
   * 业务资源目录编码
   */
  categoryCode: Array<string>;
  /**
   * 范围
   */
  scope?: string;
};

export type DataCategoryUsingGet1Response = 接口返回结果_List_Tree_string___;

export type DataCategoryUsingGetData = {
  /**
   * 业务资源目录编码
   */
  categoryCode: Array<string>;
  /**
   * 影响距离
   */
  distance?: number;
  /**
   * 点(WKT), 按点+距离查询时，二者不能有空值
   */
  point?: string;
};

export type DataCategoryUsingGetResponse = 接口返回结果_List_Tree_string___;

export type ListUsingGet5Data = {
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type ListUsingGet5Response = 接口返回结果_分页结果数据_SmsTemplateVO__;

export type ListUsingGet4Data = {
  /**
   * 模糊查询：接收人号码
   */
  blurry?: string;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
  /**
   * 短信模板ID
   */
  smsTemplateId?: number;
};

export type ListUsingGet4Response = 接口返回结果_分页结果数据_SmsLogVO__;

export type UserInfoUsingGetResponse = 接口返回结果_用户信息_;

export type $OpenApiTs = {
  "/address-book": {
    get: {
      req: ListUsingGet1Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_通讯录__;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/address-book/group/tree": {
    get: {
      req: ListTreeUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_List_AddressBookGroupVO__;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/address-book/rcs": {
    get: {
      req: ListUsingGet2Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_List_通讯录__;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/api/biz/resource/data": {
    get: {
      req: GetBizResourceTreeDataUsingGetData;
      res: {
        /**
         * OK
         */
        200: 分页结果数据_ResourceDataCategoryDataVo_;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/api/biz/resource/tree": {
    get: {
      req: GetBizResourceTreeUsingGetData;
      res: {
        /**
         * OK
         */
        200: Array<{
          [key: string]: unknown;
        }>;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/api/file": {
    get: {
      req: GetFileInfoUsingGetData;
      res: {
        /**
         * OK
         */
        200: 文件详细信息;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/api/file/biz": {
    get: {
      req: GetFileByBizIdUsingGetData;
      res: {
        /**
         * OK
         */
        200: Array<UnifiedFileVO>;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
    put: {
      req: UpdateFileBizUsingPutData;
      res: {
        /**
         * OK
         */
        200: unknown;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
    delete: {
      req: DeleteFileByBizIdUsingDeleteData;
      res: {
        /**
         * OK
         */
        200: boolean;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/api/file/local": {
    post: {
      req: AddFileUsingPostData;
      res: {
        /**
         * OK
         */
        200: number;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/api/file/path": {
    get: {
      req: GetFileUsingGetData;
      res: {
        /**
         * OK
         */
        200: string;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/api/files/biz": {
    put: {
      req: UpdateFilesBizUsingPutData;
      res: {
        /**
         * OK
         */
        200: unknown;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/api/getPosition": {
    get: {
      req: GetPositonUsingGetData;
      res: {
        /**
         * OK
         */
        200: PositionDto;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/api/rcs": {
    get: {
      req: RcsInfoUsingGetData;
      res: {
        /**
         * OK
         */
        200: Array<UserRcsVO>;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/api/resource/tree": {
    get: {
      req: GetResourceTreeUsingGetData;
      res: {
        /**
         * OK
         */
        200: Array<{
          [key: string]: unknown;
        }>;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/api/sms": {
    post: {
      req: SendSmsUsingPostData;
      res: {
        /**
         * OK
         */
        200: number;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/area": {
    get: {
      res: {
        /**
         * OK
         */
        200: 接口返回结果_List_DistinctAreaTreeVo__;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/area/list": {
    get: {
      req: ListDistinctAreasUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_DistinctAreaApiVo__;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/area/sys": {
    get: {
      res: {
        /**
         * OK
         */
        200: 接口返回结果_DistinctAreaTreeVo_;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/config/date": {
    get: {
      res: {
        /**
         * OK
         */
        200: 接口返回结果_string_;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/config/date-time": {
    get: {
      res: {
        /**
         * OK
         */
        200: 接口返回结果_string_;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/config/init-point": {
    get: {
      res: {
        /**
         * OK
         */
        200: 接口返回结果_string_;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/data-category/data": {
    post: {
      req: ListEntitiesUsingPostData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_Map_string_object___;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/data-category/data/details": {
    get: {
      req: GetPicDetailsUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_List_DataCategoryDetailVo__;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/data-category/header": {
    get: {
      req: GetTableHeaderUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_List_FieldShowQueryVo__;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/data-category/tree": {
    get: {
      req: TreeUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_DataCategoryVo_;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/data-category/tree/point": {
    get: {
      req: TreeInPointUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_DataCategoryVo_;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/dept": {
    get: {
      req: ListUsingGet3Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_List_DeptVO__;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/dept/tree": {
    get: {
      res: {
        /**
         * OK
         */
        200: 接口返回结果_List_DeptVO__;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/dict": {
    get: {
      req: QueryDictUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_字典数据__;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/file": {
    get: {
      req: DownloadUsingGetData;
      res: {
        /**
         * OK
         */
        200: unknown;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
    post: {
      req: UploadUsingPostData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_List_已上传文件信息__;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
    delete: {
      req: DeleteUsingDeleteData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/file/biz/info": {
    get: {
      req: BizInfoUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_List_文件业务信息__;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/file/info": {
    get: {
      req: ListUsingGet6Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_List_文件详细信息__;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/menus/build/current": {
    get: {
      req: BuildCurrentMenusUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_List_菜单信息__;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/resource-data-category/data": {
    get: {
      req: GetDataUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_ResourceDataCategoryDataVo__;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/resource-data-category/data/point": {
    get: {
      req: GetDataByPointUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_ResourceDataCategoryDataVo__;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/resource-data-category/data/point/details": {
    get: {
      req: GetDataDetailsByPointUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_List_DataCategoryDetailVo___;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/resource-data-category/tree": {
    get: {
      req: DataCategoryUsingGet1Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_List_Tree_string___;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/resource-data-category/tree/point": {
    get: {
      req: DataCategoryUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_List_Tree_string___;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/sms-template": {
    get: {
      req: ListUsingGet5Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_SmsTemplateVO__;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/sms/log": {
    get: {
      req: ListUsingGet4Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_SmsLogVO__;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
  "/user": {
    get: {
      res: {
        /**
         * OK
         */
        200: 接口返回结果_用户信息_;
        /**
         * 新建成功
         */
        201: unknown;
        /**
         * 错误的请求
         */
        400: unknown;
        /**
         * 未获得授权
         */
        401: unknown;
        /**
         * 操作不允许
         */
        403: unknown;
        /**
         * 未知操作
         */
        404: unknown;
      };
    };
  };
};
