/**
 * 通讯录分组视图对象
 */
export type AddressBookGroupVO = {
  /**
   * 分组ID
   */
  groupId?: number;
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

/**
 * 通讯录对象
 */
export type AddressBookSmallVO = {
  /**
   * 联系方式
   */
  contactInformation?: string;
  /**
   * 部门
   */
  deptId?: number;
  /**
   * 部门
   */
  deptName?: string;
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 状态：启用、禁用
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
   * 职务
   */
  job?: string;
  /**
   * 昵称
   */
  nickName?: string;
  /**
   * 手机号码
   */
  phone?: string;
  /**
   * 姓名
   */
  realname?: string;
  /**
   * 单位
   */
  unitName?: string;
  /**
   * 用户名
   */
  username?: string;
};

/**
 * 图标管理列表
 */
export type AddressBookVO = {
  /**
   * ID
   */
  addressBookId?: number;
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
   * 学历
   */
  degree?: string;
  /**
   * 部门
   */
  deptId?: number;
  /**
   * 部门
   */
  deptName?: string;
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 状态：启用、禁用
   */
  enabled?: string;
  /**
   * 性别
   */
  gender?: string;
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
   * 姓名
   */
  realname?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 是否已选择
   */
  selected?: boolean;
  /**
   * 单位
   */
  unitName?: string;
  /**
   * 用户名
   */
  username?: string;
};

export type CharSequence = unknown;

export type Comparable_object_ = unknown;

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
 * 灾情信息-数据传输对象-新增
 */
export type DisasterSaveDTO = {
  /**
   * 波及影响人数
   */
  affected?: number;
  /**
   * 倒塌房屋
   */
  collapsedHouses?: number;
  /**
   * 任务创建人
   */
  creater?: string;
  /**
   * 损坏房屋
   */
  damageHouse?: number;
  /**
   * 死亡人数
   */
  dead?: number;
  /**
   * 直接经济损失
   */
  directEconomicLoss?: number;
  /**
   * 事件ID
   */
  eventId: number;
  /**
   * 间接经济损失
   */
  indirectEconomicLoss?: number;
  /**
   * 受伤人数
   */
  injured?: number;
  /**
   * 失踪人数
   */
  missing?: number;
  /**
   * 转移安置人数
   */
  transferredRelocated?: number;
  /**
   * 被困人数
   */
  trapped?: number;
};

/**
 * 灾情信息-数据传输对象-更新
 */
export type DisasterUpdateDTO = {
  /**
   * 波及影响人数
   */
  affected?: number;
  /**
   * 倒塌房屋
   */
  collapsedHouses?: number;
  /**
   * 任务创建人
   */
  creater?: string;
  /**
   * 损坏房屋
   */
  damageHouse?: number;
  /**
   * 死亡人数
   */
  dead?: number;
  /**
   * 直接经济损失
   */
  directEconomicLoss?: number;
  /**
   * 事件ID
   */
  eventId: number;
  /**
   * 灾情ID
   */
  id: number;
  /**
   * 间接经济损失
   */
  indirectEconomicLoss?: number;
  /**
   * 受伤人数
   */
  injured?: number;
  /**
   * 失踪人数
   */
  missing?: number;
  /**
   * 转移安置人数
   */
  transferredRelocated?: number;
  /**
   * 被困人数
   */
  trapped?: number;
};

/**
 * 灾情信息视图对象
 */
export type DisasterVO = {
  /**
   * 波及影响人数
   */
  affected?: number;
  /**
   * 倒塌房屋
   */
  collapsedHouses?: number;
  /**
   * 任务创建人
   */
  creater?: string;
  /**
   * 损坏房屋
   */
  damageHouse?: number;
  /**
   * 死亡人数
   */
  dead?: number;
  /**
   * 直接经济损失
   */
  directEconomicLoss?: number;
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * 灾情ID
   */
  id?: number;
  /**
   * 间接经济损失
   */
  indirectEconomicLoss?: number;
  /**
   * 受伤人数
   */
  injured?: number;
  /**
   * 失踪人数
   */
  missing?: number;
  /**
   * 转移安置人数
   */
  transferredRelocated?: number;
  /**
   * 被困人数
   */
  trapped?: number;
};

/**
 * 值班分组-数据传输对象-新增
 */
export type DutyGroupSaveDTO = {
  /**
   * 所属部门
   */
  deptId?: number;
  /**
   * 班组名称
   */
  name?: string;
  /**
   * 排序
   */
  orderNo?: number;
};

/**
 * 值班分组-数据传输对象-更新
 */
export type DutyGroupUpdateDTO = {
  /**
   * 所属部门
   */
  deptId?: number;
  /**
   * 班组ID
   */
  id: number;
  /**
   * 班组名称
   */
  name?: string;
  /**
   * 排序
   */
  orderNo?: number;
};

/**
 * 值班分组视图对象
 */
export type DutyGroupVO = {
  /**
   * 所属部门
   */
  deptId?: number;
  /**
   * 班组ID
   */
  id?: number;
  /**
   * 小组成员人数
   */
  memberNum?: number;
  /**
   * 班组名称
   */
  name?: string;
  /**
   * 排序
   */
  orderNo?: number;
};

/**
 * 值班日志-数据传输对象-新增
 */
export type DutyLogSaveDTO = {
  /**
   * 日志内容
   */
  logs?: string;
  /**
   * 日志时间
   */
  logsTime?: string;
  /**
   * 排班ID
   */
  schedulingId?: number;
};

/**
 * 值班日志-数据传输对象-更新
 */
export type DutyLogUpdateDTO = {
  /**
   * 日志ID
   */
  id: number;
  /**
   * 日志内容
   */
  logs?: string;
  /**
   * 日志时间
   */
  logsTime?: string;
  /**
   * 排班ID
   */
  schedulingId?: number;
};

/**
 * 值班日志视图对象
 */
export type DutyLogVO = {
  /**
   * 日志ID
   */
  id?: number;
  /**
   * 日志内容
   */
  logs?: string;
  /**
   * 日志时间
   */
  logsTime?: string;
  /**
   * 排班ID
   */
  schedulingId?: number;
};

/**
 * 值班信息-数据传输对象-新增
 */
export type DutySchedulingBatchSaveDTO = {
  /**
   * 值班列表
   */
  dutyList: Array<DutySchedulingIntelligentSaveDTO>;
  /**
   * 排班时间(结束)
   */
  schedulingTimeEnd: string;
  /**
   * 排班时间(开始)
   */
  schedulingTimeStart: string;
};

/**
 * 值班信息-换班-新增
 */
export type DutySchedulingChangeDTO = {
  /**
   * 通讯录ID
   */
  addressBookId?: Array<number>;
  /**
   * 班组ID
   */
  groupId: number;
  id: number;
  /**
   * 排班时间(按天)
   */
  schedulingTime: string;
};

/**
 * 值班信息-智能排班对象-新增
 */
export type DutySchedulingIntelligentSaveDTO = {
  /**
   * 分组ID
   */
  groupId: number;
  /**
   * 用户ID
   */
  userId: number;
};

/**
 * 值班信息-数据传输对象-新增
 */
export type DutySchedulingSaveDTO = {
  /**
   * 通讯录ID
   */
  addressBookId?: Array<number>;
  /**
   * 班组ID
   */
  groupId: number;
  /**
   * 排班时间(按天)
   */
  schedulingTime: string;
};

/**
 * 值班信息视图对象
 */
export type DutySchedulingVO = {
  addressBookId?: number;
  dutyUserId?: number;
  groupId?: number;
  /**
   * 排班ID
   */
  id?: number;
  /**
   * 值班组
   */
  onDutyGroup?: string;
  /**
   * 值班状态
   */
  onDutyStatus?: string;
  /**
   * 值班人
   */
  onDutyUser?: string;
  /**
   * 排班时间(按天)
   */
  schedulingTime?: string;
  /**
   * 联系方式
   */
  telphone?: string;
};

/**
 * 值班人员-数据传输对象-新增
 */
export type DutyUserSaveDTO = {
  /**
   * 通讯录ID
   */
  addressBookId?: number;
  /**
   * 所属部门
   */
  deptId?: number;
  /**
   * 分组ID
   */
  groupId: number;
  /**
   * 值班状态
   */
  onDutyStatus?: string;
  /**
   * 值班人员名称
   */
  onDutyUser?: string;
  /**
   * 联系方式
   */
  telphone?: string;
};

/**
 * 值班人员-数据传输对象-选中新增
 */
export type DutyUserSelectDTO = {
  /**
   * 分组ID
   */
  groupId: number;
  /**
   * 选中人员列表
   */
  users: Array<选中人员>;
};

/**
 * 值班人员-数据传输对象-更新
 */
export type DutyUserUpdateDTO = {
  /**
   * 通讯录ID
   */
  addressBookId?: number;
  /**
   * 所属部门
   */
  deptId?: number;
  /**
   * 分组ID
   */
  groupId?: number;
  /**
   * 值班人ID
   */
  id: number;
  /**
   * 值班状态
   */
  onDutyStatus?: string;
  /**
   * 值班人员名称
   */
  onDutyUser?: string;
  /**
   * 联系方式
   */
  telphone?: string;
};

/**
 * 值班人员视图对象
 */
export type DutyUserVO = {
  /**
   * 通讯录ID
   */
  addressBookId?: number;
  /**
   * 所属部门
   */
  deptId?: number;
  /**
   * 所属部门名称
   */
  deptName?: string;
  /**
   * 分组ID
   */
  groupId?: number;
  /**
   * 所属分组名称
   */
  groupName?: string;
  /**
   * 值班人ID
   */
  id?: number;
  /**
   * 值班状态
   */
  onDutyStatus?: string;
  /**
   * 值班人员名称
   */
  onDutyUser?: string;
  /**
   * 联系方式
   */
  telphone?: string;
};

/**
 * 预警分类视图对象
 */
export type EarlyWaringTypeVo = {
  /**
   * 字典标签
   */
  label?: string;
  /**
   * 字典值
   */
  value?: string;
};

/**
 * 预警管理详情
 */
export type EarlyWarningManageDetailVo = {
  /**
   * 内容
   */
  content?: string;
  /**
   * 预警图标
   */
  iconVo?: IconVo;
  /**
   * id
   */
  id?: number;
  /**
   * 预警名称
   */
  name?: string;
  /**
   * 预警小类
   */
  smallType?: string;
  /**
   * 预警大类
   */
  type?: string;
};

/**
 * 更新预警管理
 */
export type EarlyWarningManageSaveDto = {
  /**
   * 内容
   */
  content: string;
  /**
   * 预警图标ID
   */
  icon?: number;
  /**
   * 预警名称
   */
  name: string;
  /**
   * 预警小类
   */
  smallType: string;
  /**
   * 预警大类
   */
  type: string;
};

/**
 * 更新预警管理
 */
export type EarlyWarningManageUpdateDto = {
  /**
   * 内容
   */
  content: string;
  /**
   * 预警图标ID
   */
  icon?: number;
  /**
   * id
   */
  id: number;
  /**
   * 预警名称
   */
  name: string;
  /**
   * 预警小类
   */
  smallType: string;
  /**
   * 预警大类
   */
  type: string;
};

/**
 * 预警发布管理
 */
export type EarlyWarningManageVo = {
  /**
   * 内容
   */
  content?: string;
  /**
   * 预警图标ID
   */
  icon?: number;
  /**
   * id
   */
  id?: number;
  /**
   * 预警名称
   */
  name?: string;
  /**
   * 预警小类
   */
  smallType?: string;
  /**
   * 预警大类
   */
  type?: string;
};

/**
 * 预警发布管理详情
 */
export type EarlyWarningReleaseDetailVo = {
  /**
   * id
   */
  id?: number;
  /**
   * 发送方式
   */
  sendWay?: string;
  /**
   * 预警小类
   */
  smallType?: string;
  /**
   * 预警大类
   */
  type?: string;
  /**
   * 接收人ID列表
   */
  userList?: Array<AddressBookSmallVO>;
};

/**
 * 数据传输对象 预警发布
 */
export type EarlyWarningReleaseSaveDto = {
  /**
   * 发送方式
   */
  sendWay?: string;
  /**
   * 预警小类
   */
  smallType?: string;
  /**
   * 预警大类
   */
  type?: string;
  /**
   * 接收人ID列表
   */
  userIdList?: Array<number>;
};

/**
 * 数据传输对象 预警发布
 */
export type EarlyWarningReleaseUpdateDto = {
  /**
   * id
   */
  id?: number;
  /**
   * 发送方式
   */
  sendWay?: string;
  /**
   * 预警小类
   */
  smallType?: string;
  /**
   * 预警大类
   */
  type?: string;
  /**
   * 接收人ID列表
   */
  userIdList?: Array<number>;
};

/**
 * 预警发布管理
 */
export type EarlyWarningReleaseVo = {
  /**
   * id
   */
  id?: number;
  /**
   * 发送方式
   */
  sendWay?: string;
  /**
   * 预警小类
   */
  smallType?: string;
  /**
   * 预警大类
   */
  type?: string;
};

/**
 * 预警信息
 */
export type EarlyWarningVO = {
  /**
   * 预警图标
   */
  alarmImg?: string;
  /**
   * 市
   */
  city?: string;
  /**
   * 防御指南
   */
  guide?: string;
  /**
   * 预警ID
   */
  id?: number;
  /**
   * 内容
   */
  info?: string;
  /**
   * 预警时间
   */
  issueTime?: string;
  /**
   * 级别
   */
  level?: string;
  /**
   * 本地图片地址
   */
  localImg?: string;
  /**
   * 原始数据
   */
  metaData?: unknown;
  /**
   * 省
   */
  province?: string;
  /**
   * 标准
   */
  standard?: string;
  /**
   * 县
   */
  stationname?: string;
  /**
   * 标题
   */
  title?: string;
  /**
   * 类型
   */
  type?: string;
  warningPosition?: unknown;
};

/**
 * 应急专家-数据传输对象-新增
 */
export type EmergencyExpertSaveDTO = {
  /**
   * 市代码
   */
  cityCode?: string;
  /**
   * 市名称
   */
  cityName?: string;
  /**
   * 联系人
   */
  contactName?: string;
  /**
   * 联系电话
   */
  contactNumber?: string;
  /**
   * 区县代码
   */
  countyCode?: string;
  /**
   * 区县名称
   */
  countyName?: string;
  /**
   * 出生日期
   */
  csrq?: string;
  /**
   * 从事专业
   */
  cszy?: string;
  /**
   * 点空间数据
   */
  dotGeometry?: unknown;
  /**
   * 填报人ID
   */
  fillId?: string;
  /**
   * 填报人名称
   */
  fillName?: string;
  /**
   * 填报时间
   */
  fillTime?: string;
  /**
   * 面空间数据
   */
  geometry?: unknown;
  /**
   * 行业
   */
  hy?: string;
  /**
   * 介绍
   */
  js?: string;
  /**
   * 线空间数据
   */
  lineGeometry?: unknown;
  /**
   * 名称
   */
  name?: string;
  /**
   * 省代码
   */
  provinceCode?: string;
  /**
   * 省名称
   */
  provinceName?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 所在单位
   */
  szdw?: string;
  /**
   * 通过专业
   */
  tgzy?: string;
  /**
   * 乡镇代码
   */
  townshipCode?: string;
  /**
   * 乡镇名称
   */
  townshipName?: string;
  /**
   * 村组代码
   */
  villageCode?: string;
  /**
   * 村组名称
   */
  villageName?: string;
  /**
   * 性别
   */
  xb?: string;
  /**
   * 学历
   */
  xl?: string;
  /**
   * 专业领域
   */
  zyly?: string;
};

/**
 * 应急专家-数据传输对象-更新
 */
export type EmergencyExpertUpdateDTO = {
  /**
   * 市代码
   */
  cityCode?: string;
  /**
   * 市名称
   */
  cityName?: string;
  /**
   * 联系人
   */
  contactName?: string;
  /**
   * 联系电话
   */
  contactNumber?: string;
  /**
   * 区县代码
   */
  countyCode?: string;
  /**
   * 区县名称
   */
  countyName?: string;
  /**
   * 出生日期
   */
  csrq?: string;
  /**
   * 从事专业
   */
  cszy?: string;
  /**
   * 点空间数据
   */
  dotGeometry?: unknown;
  /**
   * 填报人ID
   */
  fillId?: string;
  /**
   * 填报人名称
   */
  fillName?: string;
  /**
   * 填报时间
   */
  fillTime?: string;
  /**
   * 面空间数据
   */
  geometry?: unknown;
  /**
   * 行业
   */
  hy?: string;
  /**
   * id
   */
  id: string;
  /**
   * 介绍
   */
  js?: string;
  /**
   * 线空间数据
   */
  lineGeometry?: unknown;
  /**
   * 名称
   */
  name?: string;
  /**
   * 省代码
   */
  provinceCode?: string;
  /**
   * 省名称
   */
  provinceName?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 所在单位
   */
  szdw?: string;
  /**
   * 通过专业
   */
  tgzy?: string;
  /**
   * 乡镇代码
   */
  townshipCode?: string;
  /**
   * 乡镇名称
   */
  townshipName?: string;
  /**
   * 村组代码
   */
  villageCode?: string;
  /**
   * 村组名称
   */
  villageName?: string;
  /**
   * 性别
   */
  xb?: string;
  /**
   * 学历
   */
  xl?: string;
  /**
   * 专业领域
   */
  zyly?: string;
};

/**
 * 应急专家
 */
export type EmergencyExpertVO = {
  /**
   * 市代码
   */
  cityCode?: string;
  /**
   * 市名称
   */
  cityName?: string;
  /**
   * 联系人
   */
  contactName?: string;
  /**
   * 联系电话
   */
  contactNumber?: string;
  /**
   * 区县代码
   */
  countyCode?: string;
  /**
   * 区县名称
   */
  countyName?: string;
  /**
   * 出生日期
   */
  csrq?: string;
  /**
   * 从事专业
   */
  cszy?: string;
  /**
   * 点空间数据
   */
  dotGeometry?: unknown;
  /**
   * 填报人ID
   */
  fillId?: string;
  /**
   * 填报人名称
   */
  fillName?: string;
  /**
   * 填报时间
   */
  fillTime?: string;
  /**
   * 面空间数据
   */
  geometry?: unknown;
  /**
   * 行业
   */
  hy?: string;
  /**
   * id
   */
  id?: string;
  /**
   * 介绍
   */
  js?: string;
  /**
   * 线空间数据
   */
  lineGeometry?: unknown;
  /**
   * 名称
   */
  name?: string;
  /**
   * 省代码
   */
  provinceCode?: string;
  /**
   * 省名称
   */
  provinceName?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 所在单位
   */
  szdw?: string;
  /**
   * 通过专业
   */
  tgzy?: string;
  /**
   * 乡镇代码
   */
  townshipCode?: string;
  /**
   * 乡镇名称
   */
  townshipName?: string;
  /**
   * 村组代码
   */
  villageCode?: string;
  /**
   * 村组名称
   */
  villageName?: string;
  /**
   * 性别
   */
  xb?: string;
  /**
   * 学历
   */
  xl?: string;
  /**
   * 专业领域
   */
  zyly?: string;
};

/**
 * 应急避难场所已安置统计对象
 */
export type EmergencyShelterStatisVO = {
  /**
   * 数量
   */
  num?: number;
};

/**
 * 应急队伍调度记录-数据传输对象-新增
 */
export type EmergencyTeamScheduleSaveDTO = {
  /**
   * 调度记录信息
   */
  context?: unknown;
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * 调派位置
   */
  position?: unknown;
  /**
   * 调派地址
   */
  positionName?: string;
  /**
   * 调度状态
   */
  scheduleStatus?: string;
  /**
   * 队伍ID
   */
  teamId?: string;
  /**
   * 队伍表
   */
  teamTablename?: string;
};

/**
 * 应急队伍调度记录-数据传输对象-更新
 */
export type EmergencyTeamScheduleUpdateDTO = {
  /**
   * 调度记录信息
   */
  context?: unknown;
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * 调派位置
   */
  position?: unknown;
  /**
   * 调派地址
   */
  positionName?: string;
  /**
   * 记录ID
   */
  recordId: number;
  /**
   * 调度状态
   */
  scheduleStatus?: string;
  /**
   * 队伍ID
   */
  teamId?: string;
  /**
   * 队伍表
   */
  teamTablename?: string;
};

/**
 * 应急队伍调度记录
 */
export type EmergencyTeamScheduleVO = {
  /**
   * 调度记录信息
   */
  context?: unknown;
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * 记录ID
   */
  id?: number;
  /**
   * 调派位置
   */
  position?: string;
  /**
   * 调派位置名称
   */
  positionName?: string;
  /**
   * 调度状态: 0-未调度   1-已调度 2-已到达 3-已完成
   */
  scheduleStatus?: string;
  /**
   * 队伍ID
   */
  teamId?: string;
  /**
   * 队伍表
   */
  teamTablename?: string;
};

/**
 * 案例库-数据传输对象-新增
 */
export type EventCaseSaveDTO = {
  /**
   * 事件ID
   */
  eventId?: number;
};

/**
 * 案例库-数据传输对象-更新
 */
export type EventCaseUpdateDTO = {
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * ID
   */
  id: number;
};

/**
 * 案例库
 */
export type EventCaseVO = {
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * 名称
   */
  eventName?: string;
  /**
   * 事件响应等级
   */
  eventResponseLevel?: string;
  /**
   * 事件发生时间
   */
  happenTime?: unknown;
  /**
   * ID
   */
  id?: number;
  /**
   * 预案名称
   */
  planName?: string;
};

/**
 * 事件详细视图对象
 */
export type EventDetailsVO = {
  /**
   * 历时
   */
  duration?: string;
  /**
   * 事件结束时间
   */
  endTime?: string;
  /**
   * 情况描述
   */
  eventDescription?: string;
  /**
   * 事件等级
   */
  eventLevel?: string;
  /**
   * 事件来源
   */
  eventSource?: string;
  /**
   * 状态
   */
  eventStatus?: string;
  /**
   * 发生位置
   */
  happenPosition?: string;
  /**
   * 事件发生时间
   */
  happenTime?: string;
  /**
   * 事件ID
   */
  id?: number;
  /**
   * 事件影响地理范围
   */
  impactArea?: unknown;
  /**
   * 事件影响距离
   */
  impactDistance?: number;
  /**
   * 事件接报人
   */
  incidentReceiver?: string;
  /**
   * 事件经纬度
   */
  latitudeLongitude?: unknown;
  /**
   * 名称
   */
  name?: string;
  /**
   * 关联预案
   */
  plan?: Array<HandingPlanVO>;
  /**
   * 接报时间
   */
  receiveTime?: string;
  /**
   * 分析报告文件ID
   */
  reportId?: number;
  /**
   * 事件响应等级
   */
  responseLevel?: string;
  /**
   * 事件总结
   */
  summary?: string;
  /**
   * 类型
   */
  type?: string;
};

export type EventDynamics = {
  createBy?: number;
  createTime?: string;
  deleted?: boolean;
  dynamics?: string;
  dynamicsNote?: string;
  dynamicsTime?: string;
  dynamicsType?: string;
  eventId?: number;
  id?: number;
  leadersInstructions?: string;
  orderNo?: number;
  relatedId?: number;
  taskInformation?: string;
  updateBy?: number;
  updateTime?: string;
};

/**
 * 事件动态进展-数据传输对象-新增
 */
export type EventDynamicsSaveDTO = {
  /**
   * 事件动态
   */
  dynamics?: string;
  /**
   * 事件动态说明
   */
  dynamicsNote?: string;
  /**
   * 动态发生时间
   */
  dynamicsTime?: string;
  /**
   * 动态类型
   */
  dynamicsType?: string;
  /**
   * 事件ID
   */
  eventId: number;
  /**
   * 领导批示
   */
  leadersInstructions?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 关联记录ID
   */
  relatedId?: number;
  /**
   * 任务信息
   */
  taskInformation?: string;
};

/**
 * 事件动态进展-数据传输对象-更新
 */
export type EventDynamicsUpdateDTO = {
  /**
   * 事件动态
   */
  dynamics?: string;
  /**
   * 事件动态说明
   */
  dynamicsNote?: string;
  /**
   * 动态发生时间
   */
  dynamicsTime?: string;
  /**
   * 动态类型
   */
  dynamicsType?: string;
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * 事件动态ID
   */
  id: number;
  /**
   * 领导批示
   */
  leadersInstructions?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 关联记录ID
   */
  relatedId?: number;
  /**
   * 任务信息
   */
  taskInformation?: string;
};

/**
 * 事件动态进展
 */
export type EventDynamicsVO = {
  /**
   * 事件动态
   */
  dynamics?: string;
  /**
   * 事件动态说明
   */
  dynamicsNote?: string;
  /**
   * 动态发生时间
   */
  dynamicsTime?: string;
  /**
   * 动态类型
   */
  dynamicsType?: string;
  /**
   * 事件ID
   */
  eventId?: number;
  files?: Array<UnifiedFileVO>;
  /**
   * 事件动态ID
   */
  id?: number;
  /**
   * 领导批示
   */
  leadersInstructions?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 关联记录ID
   */
  relatedId?: number;
  /**
   * 任务信息
   */
  taskInformation?: string;
};

/**
 * 救援力量分析-数据传输对象-新增
 */
export type EventForceAnalysisSaveDTO = {
  /**
   * 分析结果数据来源说明
   */
  analysiser?: string;
  /**
   * 分析距离(km)
   */
  distance?: number;
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * 分析结果
   */
  geographicAnalysisData?: unknown;
};

/**
 * 救援力量分析-数据传输对象-更新
 */
export type EventForceAnalysisUpdateDTO = {
  /**
   * 分析结果数据来源说明
   */
  analysiser?: string;
  /**
   * 分析距离(km)
   */
  distance?: number;
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * 分析结果
   */
  geographicAnalysisData?: unknown;
  /**
   * 影响分析ID
   */
  id: number;
};

/**
 * 救援力量分析
 */
export type EventForceAnalysisVO = {
  /**
   * 分析结果数据来源说明
   */
  analysiser?: string;
  /**
   * 分析距离(km)
   */
  distance?: number;
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * 分析结果
   */
  geographicAnalysisData?: unknown;
  /**
   * 影响分析ID
   */
  id?: number;
};

/**
 * 正式事件-数据传输对象-新增
 */
export type EventFormalSaveDTO = {
  /**
   * 附件ID
   */
  attachmentIds?: Array<number>;
  /**
   * 灾情信息
   */
  disaster?: DisasterSaveDTO;
  /**
   * 情况描述
   */
  eventDescription?: string;
  /**
   * 事件等级
   */
  eventLevel: string;
  /**
   * 事件来源
   */
  eventSource?: string;
  /**
   * 发生位置
   */
  happenPosition?: string;
  /**
   * 事件发生时间
   */
  happenTime: string;
  /**
   * 事件影响地理范围(面WKT)
   */
  impactArea?: string;
  /**
   * 事件影响距离(km)
   */
  impactDistance?: number;
  /**
   * 事件接报人
   */
  incidentReceiver?: string;
  /**
   * 事件经纬度(点WKT)
   */
  latitudeLongitude: string;
  /**
   * 响应级别
   */
  level: string;
  /**
   * 名称
   */
  name: string;
  /**
   * 关联预案ID
   */
  planId: number;
  /**
   * 接报时间
   */
  receiveTime?: string;
  /**
   * 分析报告文件ID
   */
  reportId?: number;
  /**
   * 事件总结
   */
  summary?: string;
  /**
   * 类型
   */
  type: string;
  /**
   * 预警id
   */
  weatherWarningId: number;
};

/**
 * 事件影响分析-数据传输对象-新增
 */
export type EventImpactAnalysisSaveDTO = {
  /**
   * 人员密集场所
   */
  crowdedPlaces?: unknown;
  /**
   * 分析距离(km)
   */
  distance?: number;
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * 影响分析结果
   */
  impactAnalysisData?: unknown;
  /**
   * 分析结果数据来源说明
   */
  impactRemark?: string;
  /**
   * 分析结果
   */
  populationAnalysisData?: unknown;
  /**
   * 人口分析结果说明
   */
  populationRemark?: string;
  /**
   * 重点隐患
   */
  potentialRisks?: unknown;
};

/**
 * 事件影响分析
 */
export type EventImpactAnalysisVO = {
  /**
   * 人员密集场所
   */
  crowdedPlaces?: unknown;
  /**
   * 分析距离(km)
   */
  distance?: number;
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * 影响分析ID
   */
  id?: number;
  /**
   * 影响分析结果
   */
  impactAnalysisData?: unknown;
  /**
   * 分析结果数据来源说明
   */
  impactRemark?: string;
  /**
   * 分析结果
   */
  populationAnalysisData?: unknown;
  /**
   * 人口分析结果说明
   */
  populationRemark?: string;
  /**
   * 重点隐患
   */
  potentialRisks?: unknown;
};

/**
 * 事件综合研判状态-数据传输对象-新增
 */
export type EventImpactStatusSaveDTO = {
  /**
   * 分析距离(km)
   */
  distance?: number;
  /**
   * 事件ID
   */
  eventId: number;
  /**
   * 研判状态数据
   */
  impactStatusData?: unknown;
};

/**
 * 事件综合研判状态-数据传输对象-更新
 */
export type EventImpactStatusUpdateDTO = {
  /**
   * 分析距离(km)
   */
  distance?: number;
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * 影响状态ID
   */
  id: number;
  /**
   * 研判状态数据
   */
  impactStatusData?: unknown;
};

/**
 * 事件综合研判状态
 */
export type EventImpactStatusVO = {
  /**
   * 分析距离(km)
   */
  distance?: number;
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * 影响状态ID
   */
  id?: number;
  /**
   * 研判状态数据
   */
  impactStatusData?: unknown;
};

/**
 * 事件响应预案-数据传输对象-新增
 */
export type EventPlanSaveDTO = {
  /**
   * 预案文本
   */
  content?: string;
  /**
   * 事件类型(字典)
   */
  eventType?: string;
  /**
   * 流程流向数据
   */
  flowData?: unknown;
  /**
   * 事件响应ID
   */
  id?: number;
  /**
   * 预案名称
   */
  name?: string;
  /**
   * 预案ID
   */
  planId?: number;
  /**
   * 预案标签
   */
  tags?: string;
  /**
   * 模板ID
   */
  templateId?: number;
  /**
   * 是否是模板
   */
  templated?: boolean;
  /**
   * 预案分类(字典)
   */
  type?: string;
};

/**
 * 事件响应流程
 */
export type EventPlanStartStepVO = {
  /**
   * 措施内容
   */
  content?: string;
  /**
   * 流程任务列表
   */
  eventPlanTasks?: Array<EventPlanStartTaskVO>;
  /**
   * 已完成任务数
   */
  finishTaskNum?: number;
  /**
   * 预案流程ID
   */
  id?: number;
  /**
   * 措施名称
   */
  name?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 事件响应ID
   */
  responseId?: number;
  /**
   * 预案流程ID
   */
  stepId?: number;
  /**
   * 流程状态
   */
  stepStatus?: string;
  /**
   * 总任务数
   */
  totalTaskNum?: number;
};

/**
 * 事件响应任务
 */
export type EventPlanStartTaskVO = {
  /**
   * 任务描述
   */
  description?: string;
  /**
   * 预案流程ID
   */
  eventStepId?: number;
  /**
   * 执行者
   */
  executor?: string;
  /**
   * 任务预案小组
   */
  handingEventGroups?: Array<HandingEventGroupStartVO>;
  /**
   * 事件响应任务ID
   */
  id?: number;
  /**
   * 任务名称
   */
  name?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 预案任务ID
   */
  planTaskId?: number;
  /**
   * 预案流程ID
   */
  stepId?: number;
  /**
   * 任务个数
   */
  taskCount?: number;
  /**
   * 任务创建人
   */
  taskCreate?: string;
  /**
   * 任务实际执行人
   */
  taskExecutor?: string;
  /**
   * 执行者类型： 个人/预案小组
   */
  taskExecutorType?: string;
  /**
   * 任务状态
   */
  taskStatus?: string;
  /**
   * 任务类型：(字典)
   */
  taskType?: string;
};

/**
 * 事件响应流程-数据传输对象-新增
 */
export type EventPlanStepSaveDTO = {
  /**
   * 措施内容
   */
  content?: string;
  eventPlanId?: number;
  /**
   * 措施名称
   */
  name?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 事件响应ID
   */
  responseId?: number;
  /**
   * 预案流程ID
   */
  stepId?: number;
  /**
   * 流程状态
   */
  stepStatus?: string;
};

/**
 * 事件响应流程-数据传输对象-更新
 */
export type EventPlanStepUpdateDTO = {
  /**
   * 措施内容
   */
  content?: string;
  eventPlanId?: number;
  /**
   * 预案流程ID
   */
  id: number;
  /**
   * 措施名称
   */
  name?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 事件响应ID
   */
  responseId?: number;
  /**
   * 预案流程ID
   */
  stepId?: number;
  /**
   * 流程状态
   */
  stepStatus?: string;
};

/**
 * 事件响应流程
 */
export type EventPlanStepVO = {
  /**
   * 措施内容
   */
  content?: string;
  /**
   * 事件响应预案ID
   */
  eventPlanId?: number;
  /**
   * 预案流程ID
   */
  id?: number;
  /**
   * 措施名称
   */
  name?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 事件响应ID
   */
  responseId?: number;
  /**
   * 预案流程ID
   */
  stepId?: number;
  /**
   * 流程状态
   */
  stepStatus?: string;
};

/**
 * 事件响应任务-数据传输对象-新增
 */
export type EventPlanTaskSaveDTO = {
  /**
   * 任务描述
   */
  description?: string;
  /**
   * 预案流程ID
   */
  eventStepId?: number;
  /**
   * 执行者
   */
  executor?: string;
  /**
   * 任务名称
   */
  name?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 预案任务ID
   */
  planTaskId?: number;
  /**
   * 预案流程ID
   */
  stepId?: number;
  /**
   * 任务创建人
   */
  taskCreate?: string;
  /**
   * 任务实际执行人
   */
  taskExecutor?: string;
  /**
   * 执行者类型： 个人/预案小组
   */
  taskExecutorType?: string;
  /**
   * 任务状态
   */
  taskStatus?: string;
  /**
   * 任务类型：(字典)
   */
  taskType?: string;
};

/**
 * 事件响应任务-数据传输对象-更新
 */
export type EventPlanTaskUpdateDTO = {
  /**
   * 任务描述
   */
  description?: string;
  /**
   * 预案流程ID
   */
  eventStepId?: number;
  /**
   * 执行者
   */
  executor?: string;
  /**
   * 事件响应任务ID
   */
  id: number;
  /**
   * 任务名称
   */
  name?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 预案任务ID
   */
  planTaskId?: number;
  /**
   * 预案流程ID
   */
  stepId?: number;
  /**
   * 任务创建人
   */
  taskCreate?: string;
  /**
   * 任务实际执行人
   */
  taskExecutor?: string;
  /**
   * 执行者类型： 个人/预案小组
   */
  taskExecutorType?: string;
  /**
   * 任务状态
   */
  taskStatus?: string;
  /**
   * 任务类型：(字典)
   */
  taskType?: string;
};

/**
 * 事件响应任务
 */
export type EventPlanTaskVO = {
  /**
   * 任务描述
   */
  description?: string;
  /**
   * 预案流程ID
   */
  eventStepId?: number;
  /**
   * 执行者
   */
  executor?: string;
  /**
   * 事件响应任务ID
   */
  id?: number;
  /**
   * 任务名称
   */
  name?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 预案任务ID
   */
  planTaskId?: number;
  /**
   * 预案流程ID
   */
  stepId?: number;
  /**
   * 任务创建人
   */
  taskCreate?: string;
  /**
   * 任务实际执行人
   */
  taskExecutor?: string;
  /**
   * 执行者类型： 个人/预案小组
   */
  taskExecutorType?: string;
  /**
   * 任务状态
   */
  taskStatus?: string;
  /**
   * 任务类型：(字典)
   */
  taskType?: string;
};

/**
 * 事件响应预案-数据传输对象-更新
 */
export type EventPlanUpdateDTO = {
  /**
   * 预案文本
   */
  content?: string;
  /**
   * 事件类型(字典)
   */
  eventType?: string;
  /**
   * 流程流向数据
   */
  flowData?: unknown;
  /**
   * 事件响应预案ID
   */
  id: number;
  /**
   * 预案名称
   */
  name?: string;
  /**
   * 预案ID
   */
  planId?: number;
  /**
   * 事件响应ID
   */
  responseId?: number;
  /**
   * 预案标签
   */
  tags?: string;
  /**
   * 模板ID
   */
  templateId?: number;
  /**
   * 是否是模板
   */
  templated?: boolean;
  /**
   * 预案分类(字典)
   */
  type?: string;
};

/**
 * 事件响应预案
 */
export type EventPlanVO = {
  /**
   * 预案文本
   */
  content?: string;
  /**
   * 事件类型(字典)
   */
  eventType?: string;
  /**
   * 流程流向数据
   */
  flowData?: unknown;
  /**
   * 事件响应预案ID
   */
  id?: number;
  /**
   * 预案名称
   */
  name?: string;
  /**
   * 预案ID
   */
  planId?: number;
  /**
   * 事件响应ID
   */
  responseId?: number;
  /**
   * 事件响应流程
   */
  stepList?: Array<EventPlanStepVO>;
  /**
   * 预案标签
   */
  tags?: string;
  /**
   * 模板ID
   */
  templateId?: number;
  /**
   * 是否是模板
   */
  templated?: boolean;
  /**
   * 预案分类(字典)
   */
  type?: string;
};

/**
 * 已调度物资统计对象
 */
export type EventResourceStatisVO = {
  /**
   * 数量
   */
  num?: number;
  /**
   * 物资
   */
  resource?: string;
  /**
   * 单位
   */
  unit?: string;
};

/**
 * 事件响应-数据传输对象-新增
 */
export type EventResponseSaveDTO = {
  /**
   * 描述
   */
  descrption?: string;
  /**
   * 事件ID
   */
  eventId: number;
  /**
   * 响应级别
   */
  level?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 关联预案ID
   */
  planId?: number;
};

/**
 * 事件响应-数据传输对象-更新
 */
export type EventResponseUpdateDTO = {
  /**
   * 描述
   */
  descrption?: string;
  /**
   * 事件ID
   */
  eventId: number;
  /**
   * 事件响应ID
   */
  id: number;
  /**
   * 响应级别
   */
  level?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 关联预案ID
   */
  planId?: number;
};

/**
 * 事件响应视图对象
 */
export type EventResponseVO = {
  /**
   * 描述
   */
  descrption?: string;
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * 事件响应ID
   */
  id?: number;
  /**
   * 响应级别
   */
  level?: string;
  /**
   * 名称
   */
  name?: string;
};

/**
 * 事件-数据传输对象-新增
 */
export type EventSaveDTO = {
  /**
   * 附件ID
   */
  attachmentIds?: Array<number>;
  /**
   * 灾情信息
   */
  disaster?: DisasterSaveDTO;
  /**
   * 情况描述
   */
  eventDescription?: string;
  /**
   * 事件等级
   */
  eventLevel?: string;
  /**
   * 事件来源
   */
  eventSource?: string;
  /**
   * 事件来源ID
   */
  eventSourceId?: string;
  /**
   * 发生位置
   */
  happenPosition?: string;
  /**
   * 事件发生时间
   */
  happenTime?: string;
  /**
   * 事件影响地理范围(面WKT)
   */
  impactArea?: string;
  /**
   * 事件影响距离(km)
   */
  impactDistance?: number;
  /**
   * 事件接报人
   */
  incidentReceiver?: string;
  /**
   * 事件经纬度(点WKT)
   */
  latitudeLongitude: string;
  /**
   * 名称
   */
  name: string;
  /**
   * 接报时间
   */
  receiveTime?: string;
  /**
   * 分析报告文件ID
   */
  reportId?: number;
  /**
   * 事件总结
   */
  summary?: string;
  /**
   * 类型
   */
  type?: string;
  /**
   * 预警id
   */
  weatherWarningId: number;
};

/**
 * 事件预案启动详细
 */
export type EventStartDetailsVO = {
  /**
   * 情况描述
   */
  eventDescription?: string;
  /**
   * 事件等级
   */
  eventLevel?: string;
  /**
   * 关联预案流程
   */
  eventPlanStep?: Array<EventPlanStartStepVO>;
  /**
   * 事件来源
   */
  eventSource?: string;
  /**
   * 状态
   */
  eventStatus?: string;
  /**
   * 发生位置
   */
  happenPosition?: string;
  /**
   * 事件发生时间
   */
  happenTime?: string;
  /**
   * 事件ID
   */
  id?: number;
  /**
   * 事件影响地理范围
   */
  impactArea?: unknown;
  /**
   * 事件影响距离
   */
  impactDistance?: number;
  /**
   * 事件接报人
   */
  incidentReceiver?: string;
  /**
   * 事件经纬度
   */
  latitudeLongitude?: unknown;
  /**
   * 名称
   */
  name?: string;
  /**
   * 关联预案
   */
  plan?: Array<HandingPlanVO>;
  /**
   * 关联预案分组
   */
  planGroup?: unknown;
  /**
   * 接报时间
   */
  receiveTime?: string;
  /**
   * 分析报告文件ID
   */
  reportId?: number;
  /**
   * 事件总结
   */
  summary?: string;
  /**
   * 类型
   */
  type?: string;
};

/**
 * 事件状态数量统计
 */
export type EventStatusCountVO = {
  /**
   * 数量
   */
  count?: number;
  /**
   * 名称
   */
  name?: string;
  /**
   * 状态值
   */
  status?: string;
};

/**
 * 总结评估-数据传输对象-更新
 */
export type EventSummaryEvaluationUpdateDTO = {
  /**
   * 评估情况
   */
  assessSituation?: string;
  /**
   * 基本情况
   */
  basicInfo?: string;
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * 总结ID
   */
  id: number;
  /**
   * 专题图层
   */
  thematicLayers?: string;
  /**
   * 专题图层附件ID
   */
  thematicLayersAttachmentId?: number;
};

/**
 * 总结评估
 */
export type EventSummaryEvaluationVO = {
  /**
   * 评估情况
   */
  assessSituation?: string;
  /**
   * 基本情况
   */
  basicInfo?: string;
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * 研判状态
   */
  eventImpactStatus?: EventImpactStatusVO;
  /**
   * 处置记录数据
   */
  handingRecordData?: Array<TaskDetailsVO>;
  /**
   * 总结ID
   */
  id?: number;
  /**
   * 影响分析
   */
  impactAnalysis?: Array<{
    [key: string]: unknown;
  }>;
  /**
   * 影响分析距离
   */
  impactAnalysisDistance?: number;
  /**
   * 领导批示数据
   */
  leadersInstructionsData?: Array<EventDynamics>;
  /**
   * 生成报告ID
   */
  reportId?: number;
  /**
   * 专题图层
   */
  thematicLayers?: string;
};

/**
 * 事件-数据传输对象-更新
 */
export type EventUpdateDTO = {
  /**
   * 附件ID
   */
  attachmentIds?: Array<number>;
  /**
   * 灾情信息
   */
  disaster?: DisasterSaveDTO;
  /**
   * 情况描述
   */
  eventDescription?: string;
  /**
   * 事件等级
   */
  eventLevel?: string;
  /**
   * 事件来源
   */
  eventSource?: string;
  /**
   * 事件来源ID
   */
  eventSourceId?: string;
  /**
   * 发生位置
   */
  happenPosition?: string;
  /**
   * 事件发生时间
   */
  happenTime?: string;
  /**
   * 事件ID
   */
  id: number;
  /**
   * 事件影响地理范围
   */
  impactArea?: string;
  /**
   * 事件影响距离(km)
   */
  impactDistance?: number;
  /**
   * 事件接报人
   */
  incidentReceiver?: string;
  /**
   * 事件经纬度
   */
  latitudeLongitude: string;
  /**
   * 名称
   */
  name: string;
  /**
   * 接报时间
   */
  receiveTime?: string;
  /**
   * 分析报告文件ID
   */
  reportId?: number;
  /**
   * 事件总结
   */
  summary?: string;
  /**
   * 类型
   */
  type?: string;
};

/**
 * 事件视图对象
 */
export type EventVO = {
  /**
   * 事件灾情信息
   */
  disasterVO?: DisasterVO;
  /**
   * 事件结束时间
   */
  endTime?: string;
  /**
   * 情况描述
   */
  eventDescription?: string;
  /**
   * 事件等级
   */
  eventLevel?: string;
  /**
   * 事件关联预案
   */
  eventPlans?: Array<HandingPlanVO>;
  /**
   * 事件来源
   */
  eventSource?: string;
  /**
   * 状态: 0-待执行 1-未指派 2-进行中 3-执行完成 4-执行失败 5-已取消 6-已结束
   */
  eventStatus?: string;
  /**
   * 发生位置
   */
  happenPosition?: string;
  /**
   * 事件发生时间
   */
  happenTime?: string;
  /**
   * 事件ID
   */
  id?: number;
  /**
   * 事件影响地理范围
   */
  impactArea?: unknown;
  /**
   * 事件影响距离
   */
  impactDistance?: number;
  /**
   * 事件接报人
   */
  incidentReceiver?: string;
  /**
   * 事件经纬度
   */
  latitudeLongitude?: unknown;
  /**
   * 名称
   */
  name?: string;
  /**
   * 接报时间
   */
  receiveTime?: string;
  /**
   * 分析报告文件ID
   */
  reportId?: number;
  /**
   * 事件响应等级
   */
  responseLevel?: string;
  /**
   * 事件总结
   */
  summary?: string;
  /**
   * 类型
   */
  type?: string;
};

/**
 * 事件响应预案小组详情
 */
export type HandingEventGroupDetailsVO = {
  /**
   * 小组描述
   */
  description?: string;
  /**
   * 小组总人数
   */
  groupNum?: number;
  /**
   * 小组主要人员
   */
  handingEventUsers?: Array<HandingEventUserVO>;
  /**
   * 响应预案小组ID
   */
  id?: number;
  /**
   * 名称
   */
  name?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 预案小组ID
   */
  planGroupId?: number;
  /**
   * 事件响应任务ID
   */
  taskId?: number;
};

/**
 * 事件响应预案小组-数据传输对象-新增
 */
export type HandingEventGroupSaveDTO = {
  /**
   * 小组描述
   */
  description?: string;
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * 名称
   */
  name?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 预案小组ID
   */
  planGroupId?: number;
};

/**
 * 事件响应预案小组
 */
export type HandingEventGroupStartVO = {
  /**
   * 事件预案处理人员信息
   */
  handingEventUsers?: Array<HandingEventUserVO>;
  /**
   * 响应预案小组ID
   */
  id?: number;
  /**
   * 名称
   */
  name?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 预案小组ID
   */
  planGroupId?: number;
  /**
   * 小组任务个数
   */
  taskCount?: number;
  /**
   * 事件响应任务ID
   */
  taskId?: number;
  /**
   * 小组任务状态
   */
  taskStatus?: string;
  /**
   * 小组人员数量
   */
  userCount?: number;
};

/**
 * 事件响应预案小组-数据传输对象-更新
 */
export type HandingEventGroupUpdateDTO = {
  /**
   * 小组描述
   */
  description?: string;
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * 响应预案小组ID
   */
  id: number;
  /**
   * 名称
   */
  name?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 预案小组ID
   */
  planGroupId: number;
};

/**
 * 事件响应预案小组
 */
export type HandingEventGroupVO = {
  /**
   * 小组描述
   */
  description?: string;
  /**
   * 小组主要人员
   */
  groupMember?: Array<HandingEventUserVO>;
  /**
   * 小组总人数
   */
  groupNum?: number;
  /**
   * 响应预案小组ID
   */
  id?: number;
  /**
   * 名称
   */
  name?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 预案小组ID
   */
  planGroupId?: number;
  /**
   * 事件响应任务ID
   */
  taskId?: number;
};

/**
 * 事件预案小组人员-数据传输对象-新增
 */
export type HandingEventUserSaveDTO = {
  /**
   * 所属部门
   */
  dept?: string;
  /**
   * 小组角色(字典:group_role)
   */
  groupRole?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 联系电话
   */
  telphone?: string;
};

/**
 * 事件预案小组人员-数据传输对象-更新
 */
export type HandingEventUserUpdateDTO = {
  /**
   * 所属部门
   */
  dept?: string;
  /**
   * 小组角色(字典:group_role)
   */
  groupRole?: string;
  /**
   * 事件预案小组人员ID
   */
  id: number;
  /**
   * 名称
   */
  name?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 联系电话
   */
  telphone?: string;
};

/**
 * 事件预案小组人员
 */
export type HandingEventUserVO = {
  /**
   * 关联通讯录ID
   */
  addressBookId?: number;
  /**
   * 所属部门
   */
  dept?: string;
  /**
   * 小组角色(字典:group_role)
   */
  groupRole?: string;
  /**
   * 事件预案小组人员ID
   */
  id?: number;
  /**
   * 名称
   */
  name?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 融合通讯信息
   */
  rcs?: UserRcsSmallVO;
  /**
   * 联系电话
   */
  telphone?: string;
};

/**
 * 事件处理预案-数据传输对象-从模板复制
 */
export type HandingPlanCopyDTO = {
  /**
   * 预案名称
   */
  name?: string;
  /**
   * 模板预案ID
   */
  templateId: number;
};

/**
 * 预案小组-数据传输对象-新增
 */
export type HandingPlanGroupSaveDTO = {
  /**
   * 副组长ID(通讯录ID)
   */
  deputyLeaderId?: number;
  /**
   * 小组描述
   */
  description?: string;
  /**
   * 组长ID(通讯录ID)
   */
  leaderId: number;
  /**
   * 小组人员
   */
  members?: Array<HandingPlanGroupUserSaveDTO>;
  /**
   * 名称
   */
  name: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 预案ID
   */
  planId: number;
};

/**
 * 预案小组-数据传输对象-更新
 */
export type HandingPlanGroupUpdateDTO = {
  /**
   * 副组长(小组成员ID)
   */
  deputyLeaderId?: number;
  /**
   * 小组描述
   */
  description?: string;
  /**
   * 预案小组ID
   */
  id: number;
  /**
   * 组长ID(小组成员ID)
   */
  leaderId: number;
  /**
   * 名称
   */
  name?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 预案ID
   */
  planId: number;
};

/**
 * 预案小组绑定人员-数据传输对象-新增
 */
export type HandingPlanGroupUserSaveDTO = {
  /**
   * 关联通讯录ID(如果设置了通讯录ID, 则从通讯录获取相关属性)
   */
  addressBookId?: number;
  /**
   * 所属部门
   */
  dept?: string;
  /**
   * 所属部门单位
   */
  deptUnit?: string;
  /**
   * 小组角色(字典:group_role)
   */
  groupRole?: string;
  /**
   * 预案小组人员ID
   */
  id?: number;
  /**
   * 名称
   */
  name?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 联系电话
   */
  telphone?: string;
};

/**
 * 预案小组视图对象
 */
export type HandingPlanGroupVO = {
  /**
   * 小组描述
   */
  description?: string;
  /**
   * 预案小组ID
   */
  id?: number;
  /**
   * 小组人员
   */
  members?: Array<HandingPlanUserVO>;
  /**
   * 名称
   */
  name?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 预案ID
   */
  planId?: number;
};

/**
 * 预案关联资源目录-数据传输对象-新增
 */
export type HandingPlanResourceDto = {
  /**
   * 预案ID
   */
  planId: number;
  /**
   * 资源目录ID列表
   */
  resourceIds?: Array<string>;
};

/**
 * 事件处理预案-数据传输对象-新增
 */
export type HandingPlanSaveDTO = {
  /**
   * 预案文本
   */
  content?: string;
  /**
   * 事件类型(字典)
   */
  eventType?: string;
  flowData?: string;
  /**
   * 预案名称
   */
  name: string;
  /**
   * 预案标签
   */
  tags?: string;
  /**
   * 模板ID
   */
  templateId?: number;
  /**
   * 是否是模板，默认为false
   */
  templated?: boolean;
  /**
   * 预案分类(字典)
   */
  type?: string;
};

/**
 * 预案流程-流程节点数据-更新
 */
export type HandingPlanStepFlowDataUpdateDTO = {
  /**
   * 流程流向数据
   */
  flowData?: string;
  /**
   * 事件预案ID
   */
  id: number;
};

/**
 * 预案流程-数据传输对象-新增
 */
export type HandingPlanStepSaveDTO = {
  /**
   * 措施内容
   */
  content?: string;
  /**
   * 流程流向数据
   */
  flowData?: string;
  /**
   * 措施名称
   */
  name?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 预案ID
   */
  preId: number;
};

/**
 * 预案流程-数据传输对象-更新
 */
export type HandingPlanStepUpdateDTO = {
  /**
   * 措施内容
   */
  content?: string;
  /**
   * 流程流向数据
   */
  flowData?: string;
  /**
   * 预案流程ID
   */
  id: number;
  /**
   * 措施名称
   */
  name?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 预案ID
   */
  preId: number;
};

/**
 * 预案流程视图对象
 */
export type HandingPlanStepVO = {
  /**
   * 措施内容
   */
  content?: string;
  /**
   * 流程流向数据
   */
  flowData?: string;
  /**
   * 预案流程ID
   */
  id?: number;
  /**
   * 措施名称
   */
  name?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 预案ID
   */
  preId?: number;
};

/**
 * 预案任务-数据传输对象-新增小组
 */
export type HandingPlanTaskGroupDeleteDTO = {
  /**
   * 预案小组ID
   */
  groupId: number;
  /**
   * 预案任务ID
   */
  taskId: number;
};

/**
 * 预案任务-数据传输对象-新增小组
 */
export type HandingPlanTaskGroupSaveDTO = {
  /**
   * 预案小组ID
   */
  groupIds: Array<number>;
  /**
   * 预案任务ID
   */
  taskId: number;
};

/**
 * 预案任务-数据传输对象-新增
 */
export type HandingPlanTaskSaveDTO = {
  /**
   * 任务描述
   */
  description?: string;
  /**
   * 执行者
   */
  executor?: string;
  /**
   * 任务名称
   */
  name?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 预案流程ID
   */
  stepId: number;
  /**
   * 任务创建人
   */
  taskCreate?: string;
  /**
   * 任务实际执行人
   */
  taskExecutor?: string;
  /**
   * 执行者类型： 个人/预案小组
   */
  taskExecutorType?: string;
  /**
   * 任务类型：(字典)
   */
  taskType?: string;
};

/**
 * 预案任务-数据传输对象-更新
 */
export type HandingPlanTaskUpdateDTO = {
  /**
   * 任务描述
   */
  description?: string;
  /**
   * 执行者
   */
  executor?: string;
  /**
   * 任务ID
   */
  id: number;
  /**
   * 任务名称
   */
  name?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 预案流程ID
   */
  stepId: number;
  /**
   * 任务创建人
   */
  taskCreate?: string;
  /**
   * 任务实际执行人
   */
  taskExecutor?: string;
  /**
   * 执行者类型： 个人/预案小组
   */
  taskExecutorType?: string;
  /**
   * 任务类型：(字典)
   */
  taskType?: string;
};

/**
 * 预案任务视图对象
 */
export type HandingPlanTaskVO = {
  /**
   * 任务描述
   */
  description?: string;
  /**
   * 执行者
   */
  executor?: string;
  /**
   * 任务ID
   */
  id?: number;
  /**
   * 任务名称
   */
  name?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 预案流程ID
   */
  stepId?: number;
  /**
   * 任务创建人
   */
  taskCreate?: string;
  /**
   * 任务实际执行人
   */
  taskExecutor?: string;
  /**
   * 执行者类型： 个人/预案小组
   */
  taskExecutorType?: string;
  /**
   * 任务类型：(字典)
   */
  taskType?: string;
};

/**
 * 事件处理预案-数据传输对象-更新
 */
export type HandingPlanUpdateDTO = {
  /**
   * 预案文本
   */
  content?: string;
  /**
   * 事件类型(字典)
   */
  eventType?: string;
  flowData?: string;
  /**
   * 预案ID
   */
  id: number;
  /**
   * 预案名称
   */
  name: string;
  /**
   * 预案标签
   */
  tags?: string;
  /**
   * 模板ID
   */
  templateId?: number;
  /**
   * 预案分类(字典)
   */
  type?: string;
};

/**
 * 预案小组人员-数据传输对象-批量新增
 */
export type HandingPlanUserBatchSaveDTO = {
  /**
   * 预案小组ID
   */
  handingPlanGroupId?: number;
  /**
   * 预案小组人员信息
   */
  list?: Array<HandingPlanUserSaveDTO>;
};

/**
 * 预案小组人员-数据传输对象-新增
 */
export type HandingPlanUserSaveDTO = {
  /**
   * 关联通讯录ID(如果设置了通讯录ID, 则从通讯录获取相关属性)
   */
  addressBookId?: number;
  /**
   * 所属部门
   */
  dept?: string;
  /**
   * 所属部门单位
   */
  deptUnit?: string;
  /**
   * 小组角色(字典:group_role)
   */
  groupRole?: string;
  /**
   * 预案小组ID
   */
  handingPlanGroupId: number;
  /**
   * 预案小组人员ID
   */
  id?: number;
  /**
   * 名称
   */
  name?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 联系电话
   */
  telphone?: string;
};

/**
 * 预案小组人员-数据传输对象-更新
 */
export type HandingPlanUserUpdateDTO = {
  /**
   * 关联通讯录ID
   */
  addressBookId?: number;
  /**
   * 所属部门
   */
  dept?: string;
  /**
   * 所属部门单位
   */
  deptUnit?: string;
  /**
   * 小组角色(字典:group_role)
   */
  groupRole?: string;
  /**
   * 预案小组人员ID
   */
  id: number;
  /**
   * 名称
   */
  name?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 联系电话
   */
  telphone?: string;
};

/**
 * 预案小组人员视图对象
 */
export type HandingPlanUserVO = {
  /**
   * 关联通讯录ID
   */
  addressBookId?: number;
  /**
   * 所属部门
   */
  dept?: string;
  /**
   * 所属部门单位
   */
  deptUnit?: string;
  /**
   * 小组角色(字典:group_role)
   */
  groupRole?: string;
  /**
   * 预案小组人员ID
   */
  id?: number;
  /**
   * 名称
   */
  name?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 融合通讯信息
   */
  rcs?: UserRcsVO;
  /**
   * 联系电话
   */
  telphone?: string;
};

/**
 * 事件处理预案视图对象
 */
export type HandingPlanVO = {
  /**
   * 预案文本
   */
  content?: string;
  /**
   * 事件类型(字典)
   */
  eventType?: string;
  /**
   * 流程流向数据
   */
  flowData?: string;
  /**
   * 预案ID
   */
  id?: number;
  /**
   * 预案名称
   */
  name?: string;
  /**
   * 预案标签
   */
  tags?: string;
  /**
   * 模板ID
   */
  templateId?: number;
  /**
   * 是否是模板
   */
  templated?: boolean;
  /**
   * 预案分类(字典)
   */
  type?: string;
};

/**
 * 图标对象
 */
export type IconVo = {
  /**
   * ID
   */
  iconId?: number;
  /**
   * 图标
   */
  image?: string;
  /**
   * 图标名称
   */
  name?: string;
  /**
   * 图标类型
   */
  type?: string;
};

/**
 * 数据传输对象 新增消息发布对象
 */
export type InformationReleaseSaveDto = {
  /**
   * 信息内容
   */
  content?: string;
  /**
   * 发送方式
   */
  sendWay?: string;
  /**
   * 模板ID
   */
  templateId?: number;
  /**
   * 发布种类
   */
  type?: string;
  /**
   * 接收人列表
   */
  userList?: Array<number>;
};

/**
 * 新增消息视图对象
 */
export type InformationReleaseVo = {
  /**
   * 信息内容
   */
  content?: string;
  /**
   * id
   */
  releaseId?: number;
  /**
   * 发布来源(预警发布(1)，信息发布(2))
   */
  releaseType?: string;
  /**
   * 发送方式
   */
  sendWay?: string;
  /**
   * 模板ID
   */
  templateId?: number;
  /**
   * 发布种类
   */
  type?: string;
  /**
   * 接收人列表
   */
  userList?: string;
};

/**
 * 数据传输对象 APP版本入口
 */
export type InformationTemplateSaveDto = {
  /**
   * 内容
   */
  content?: string;
  /**
   * 标题
   */
  title?: string;
};

/**
 * 数据传输对象 APP版本入口
 */
export type InformationTemplateUpdateDto = {
  /**
   * 内容
   */
  content?: string;
  /**
   * 序号
   */
  id?: number;
  /**
   * 标题
   */
  title?: string;
};

/**
 * 消息模板管理
 */
export type InformationTemplateVo = {
  /**
   * 内容
   */
  content?: string;
  /**
   * 序号
   */
  id?: number;
  /**
   * 标题
   */
  title?: string;
};

/**
 * 消息模板
 */
export type InformationTemplate对象 = {
  /**
   * 内容
   */
  content?: string;
  /**
   * 创建人
   */
  createBy?: string;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 是否已删除
   */
  deleted?: boolean;
  /**
   * 序号
   */
  id?: number;
  /**
   * 标题
   */
  title?: string;
  /**
   * 更新人
   */
  updateBy?: string;
  /**
   * 更新时间
   */
  updateTime?: string;
};

/**
 * 知识库-数据传输对象-新增
 */
export type KnowledgeBaseSaveDTO = {
  /**
   * 内容
   */
  content?: string;
  /**
   * 附件ID
   */
  fileId: number;
  /**
   * 名称（默认文件名称）
   */
  name: string;
  /**
   * 标签
   */
  tags?: string;
  /**
   * 类型
   */
  type: string;
};

/**
 * 知识库-数据传输对象-更新
 */
export type KnowledgeBaseUpdateDTO = {
  /**
   * 内容
   */
  content?: string;
  /**
   * 附件ID
   */
  fileId: number;
  /**
   * 知识库ID
   */
  id: number;
  /**
   * 名称（默认文件名称）
   */
  name: string;
  /**
   * 标签
   */
  tags?: string;
  /**
   * 类型
   */
  type: string;
};

/**
 * 知识库视图对象
 */
export type KnowledgeBaseVO = {
  /**
   * 内容
   */
  content?: string;
  /**
   * 文件ID
   */
  fileId?: number;
  /**
   * 文件路径
   */
  filePath?: string;
  /**
   * 知识库ID
   */
  id?: number;
  /**
   * 名称
   */
  name?: string;
  /**
   * 标签
   */
  tags?: string;
  /**
   * 类型
   */
  type?: string;
  /**
   * 上传时间
   */
  uploadTime?: string;
};

/**
 * APP版本详情
 */
export type MobileVersionDetailVo = {
  /**
   * 附件
   */
  attachment?: UnifiedFileVO;
  /**
   * 升级内容
   */
  content?: string;
  /**
   * ID
   */
  id?: number;
  /**
   * 是否必须更新
   */
  isUpdated?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 平台种类
   */
  type?: string;
  /**
   * 版本号
   */
  version?: string;
};

/**
 * 数据传输对象 APP版本入口
 */
export type MobileVersionSaveDto = {
  /**
   * 附件ID
   */
  attachmentId: number;
  /**
   * 升级内容
   */
  content: string;
  /**
   * 是否必须更新
   */
  isUpdated: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 平台种类
   */
  type?: string;
  /**
   * 版本号
   */
  version: string;
};

/**
 * 数据传输对象 APP版本入口
 */
export type MobileVersionUpdateDto = {
  /**
   * 附件ID
   */
  attachmentId: number;
  /**
   * 升级内容
   */
  content: string;
  /**
   * ID
   */
  id: number;
  /**
   * 是否必须更新
   */
  isUpdated: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 平台种类
   */
  type?: string;
  /**
   * 版本号
   */
  version: string;
};

/**
 * APP版本管理
 */
export type MobileVersionVo = {
  /**
   * 升级内容
   */
  content?: string;
  /**
   * ID
   */
  id?: number;
  /**
   * 是否必须更新
   */
  isUpdated?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 平台种类
   */
  type?: string;
  /**
   * 版本号
   */
  version?: string;
};

/**
 * 标绘测量-数据传输对象-新增
 */
export type PlotMeasuringSaveDTO = {
  /**
   * 是否选中
   */
  checked?: boolean;
  /**
   * 事件ID
   */
  eventId: number;
  /**
   * 业务ID
   */
  featureId?: string;
  /**
   * 内容
   */
  label?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 图形
   */
  plot?: unknown;
  /**
   * 类型
   */
  type?: string;
};

/**
 * 标绘测量-数据传输对象-更新
 */
export type PlotMeasuringUpdateDTO = {
  /**
   * 是否选中
   */
  checked?: boolean;
  /**
   * 事件ID
   */
  eventId: number;
  /**
   * 业务ID
   */
  featureId?: string;
  /**
   * 标绘测量ID
   */
  id: number;
  /**
   * 内容
   */
  label?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 图形
   */
  plot?: unknown;
  /**
   * 类型
   */
  type?: string;
};

/**
 * 标绘测量
 */
export type PlotMeasuringVO = {
  /**
   * 是否选中
   */
  checked?: boolean;
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * 业务ID
   */
  featureId?: string;
  /**
   * 标绘测量ID
   */
  id?: number;
  /**
   * 内容
   */
  label?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 图形
   */
  plot?: unknown;
  /**
   * 类型
   */
  type?: string;
};

/**
 * 应急队伍调度统计对象
 */
export type RescueForceTeamStatisVO = {
  /**
   * 力量
   */
  force?: string;
  /**
   * 数量
   */
  num?: number;
  /**
   * 单位
   */
  unit?: string;
};

/**
 * 应急队伍视图对象
 */
export type RescueForceTeamVO = {
  /**
   * 已调度资源统计
   */
  alreadyScheduleNum?: {
    [key: string]: string;
  };
  /**
   * 消防车数量
   */
  carNum?: number;
  /**
   * 联系人
   */
  contactName?: string;
  /**
   * 电话
   */
  contactNumber?: string;
  /**
   * 调派位置
   */
  dispatchLocation?: string;
  /**
   * 调派位置名称
   */
  dispatchLocationName?: string;
  /**
   * 距离事件直线距离,单位：米
   */
  distance?: number;
  /**
   * 资源调度数据
   */
  emergencyTeamSchedule?: EmergencyTeamScheduleVO;
  /**
   * 队伍ID
   */
  id?: string;
  /**
   * 队伍名称
   */
  name?: string;
  /**
   * 人员数量
   */
  peopleNum?: number;
  /**
   * 所在位置
   */
  position?: string;
  /**
   * 资源ID
   */
  resId?: string;
  /**
   * 调度记录ID
   */
  scheduleId?: number;
};

/**
 * 资源数据类别
 */
export type ResourceDataCategory = {
  /**
   * ID全路径
   */
  allPathId?: string;
  /**
   * 名称全路径
   */
  allPathName?: string;
  /**
   * 设置分类
   */
  configType?: string;
  /**
   * 创建者
   */
  createBy?: string;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 图标
   */
  icon?: number;
  /**
   * id
   */
  id?: string;
  /**
   * 是否有效
   */
  inUse?: number;
  /**
   * 图层配置
   */
  layerStyle?: string;
  /**
   * 层级
   */
  level?: number;
  /**
   * 主表名称
   */
  masterTableName?: string;
  /**
   * 父级ID
   */
  parentId?: string;
  /**
   * 展示图标
   */
  showIconId?: number;
  /**
   * 数据展示类型
   */
  showType?: string;
  /**
   * 顺序
   */
  sort: number;
  /**
   * 表单配置
   */
  tableConfig?: string;
  /**
   * 表名称
   */
  tableName?: string;
  /**
   * 类别编码
   */
  typeCode: string;
  /**
   * 类别名称
   */
  typeName: string;
  /**
   * 单位
   */
  unit?: string;
  /**
   * 更新者
   */
  updateBy?: string;
  /**
   * 更新时间
   */
  updateTime?: string;
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
 * 影响分析图层视图对象
 */
export type ResourceDataCategorySmallVo = {
  /**
   * ID全路径
   */
  allPathId?: string;
  /**
   * 名称全路径
   */
  allPathName?: string;
  /**
   * id
   */
  id?: string;
  /**
   * 层级
   */
  level?: number;
  /**
   * 父级ID
   */
  parentId?: string;
  /**
   * 顺序
   */
  sort?: number;
  /**
   * 类别编码
   */
  typeCode?: string;
  /**
   * 类别名称
   */
  typeName?: string;
};

/**
 * 物资调度记录-数据传输对象-新增
 */
export type ResourceScheduleSaveDTO = {
  /**
   * 调度记录信息
   */
  context?: unknown;
  /**
   * 事件ID
   */
  eventId: number;
  /**
   * 调拨位置
   */
  position?: unknown;
  /**
   * 调派地址
   */
  positionName?: string;
  /**
   * 调度物资ID
   */
  resourceId?: string;
  /**
   * 调度物资来源表
   */
  resourceTablename?: string;
  /**
   * 调度状态
   */
  scheduleStatus?: string;
};

/**
 * 物资调度记录-数据传输对象-更新
 */
export type ResourceScheduleUpdateDTO = {
  /**
   * 调度记录信息
   */
  context?: unknown;
  /**
   * 事件ID
   */
  eventId: number;
  /**
   * 记录ID
   */
  id: number;
  /**
   * 调拨位置
   */
  position?: unknown;
  /**
   * 调派地址
   */
  positionName?: string;
  /**
   * 调度物资ID
   */
  resourceId?: string;
  /**
   * 调度物资来源表
   */
  resourceTablename?: string;
  /**
   * 调度状态
   */
  scheduleStatus?: string;
};

/**
 * 物资调度记录
 */
export type ResourceScheduleVO = {
  /**
   * 调度记录信息
   */
  context?: unknown;
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * 记录ID
   */
  id?: number;
  /**
   * 调拨位置
   */
  position?: string;
  /**
   * 调拨位置名称
   */
  positionName?: string;
  /**
   * 调度物资ID
   */
  resourceId?: string;
  /**
   * 调度物资来源表
   */
  resourceTablename?: string;
  /**
   * 调度状态:  0-未调拨   1-已调拨 2-已到达
   */
  scheduleStatus?: string;
};

/**
 * 避难场所调度记录-数据传输对象-新增
 */
export type ShelterScheduleSaveDTO = {
  /**
   * 调度记录信息
   */
  context?: unknown;
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * 避难场所ID
   */
  placeId?: string;
  /**
   * 避难场所来源表
   */
  placeTablename?: string;
  /**
   * 安置人员
   */
  placement?: string;
};

/**
 * 避难场所调度记录-数据传输对象-更新
 */
export type ShelterScheduleUpdateDTO = {
  /**
   * 调度记录信息
   */
  context?: unknown;
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * 记录ID
   */
  id: number;
  /**
   * 避难场所ID
   */
  placeId?: string;
  /**
   * 避难场所来源表
   */
  placeTablename?: string;
  /**
   * 安置人员
   */
  placement?: string;
};

/**
 * 避难场所调度记录
 */
export type ShelterScheduleVO = {
  /**
   * 调度记录信息
   */
  context?: unknown;
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * 记录ID
   */
  id?: number;
  /**
   * 避难场所ID
   */
  placeId?: string;
  /**
   * 避难场所来源表
   */
  placeTablename?: string;
  /**
   * 安置人员
   */
  placement?: string;
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
 * 短信调度-数据传输对象-新增
 */
export type SmsScheduleSaveDTO = {
  /**
   * 接收通讯录ID
   */
  addressBookId?: Array<number>;
  /**
   * 事件ID
   */
  eventId: number;
  /**
   * 外部用户电话
   */
  externUserPhone?: Array<string>;
  /**
   * 预案小组ID
   */
  planGroupId?: Array<number>;
  /**
   * 短信模板ID
   */
  smsTemplateId: number;
};

/**
 * 短信调度
 */
export type SmsScheduleVO = {
  /**
   * 接收用户
   */
  addressBook?: string;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * 外部号码
   */
  externUserPhone?: string;
  /**
   * 短信调度ID
   */
  id?: number;
  /**
   * 接收小组
   */
  planGroup?: string;
  /**
   * 发送内容
   */
  sendContent?: string;
  /**
   * 短信模板
   */
  smsTemplateId?: number;
};

/**
 * 总结评估-事件视图对象
 */
export type SummaryEvaluationEventVO = {
  /**
   * 事件灾情信息
   */
  disasterVO?: DisasterVO;
  /**
   * 事件结束时间
   */
  endTime?: string;
  /**
   * 情况描述
   */
  eventDescription?: string;
  /**
   * 事件等级
   */
  eventLevel?: string;
  /**
   * 事件关联预案
   */
  eventPlans?: Array<HandingPlanVO>;
  /**
   * 事件来源
   */
  eventSource?: string;
  /**
   * 状态: 0-待执行 1-未指派 2-进行中 3-执行完成 4-执行失败 5-已取消 6-已结束
   */
  eventStatus?: string;
  /**
   * 发生位置
   */
  happenPosition?: string;
  /**
   * 事件发生时间
   */
  happenTime?: string;
  /**
   * 事件ID
   */
  id?: number;
  /**
   * 事件影响地理范围
   */
  impactArea?: unknown;
  /**
   * 事件影响距离
   */
  impactDistance?: number;
  /**
   * 事件接报人
   */
  incidentReceiver?: string;
  /**
   * 事件经纬度
   */
  latitudeLongitude?: unknown;
  /**
   * 名称
   */
  name?: string;
  /**
   * 接报时间
   */
  receiveTime?: string;
  /**
   * 分析报告文件ID
   */
  reportId?: number;
  /**
   * 事件响应等级
   */
  responseLevel?: string;
  /**
   * 事件总结
   */
  summary?: string;
  /**
   * 总结评估ID
   */
  summaryEvaluationId?: number;
  /**
   * 类型
   */
  type?: string;
};

/**
 * 指挥任务-任务指派数据
 */
export type TaskAssignDTO = {
  /**
   * 指派人员ID
   */
  assignIds?: Array<number>;
  /**
   * 任务内容描述
   */
  description?: string;
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * 事件响应任务ID
   */
  eventTaskId?: number;
  /**
   * 小组ID
   */
  groupId?: number;
};

/**
 * 指挥任务指派人详情
 */
export type TaskAssignDetailsVO = {
  /**
   * 记录ID
   */
  id?: number;
  /**
   * 任务ID
   */
  taskId?: number;
  /**
   * 任务执行日志
   */
  taskLog?: Array<TaskLogsDetailsVO>;
  /**
   * 指派人ID
   */
  userId?: number;
  /**
   * 指派人员名称
   */
  userName?: string;
};

/**
 * 指挥任务指派人-数据传输对象-新增
 */
export type TaskAssignSaveDTO = {
  addressBookId?: number;
  /**
   * 事件预案小组人员ID
   */
  planUserId?: number;
  /**
   * 任务ID
   */
  taskId?: number;
};

/**
 * 指挥任务指派人-数据传输对象-更新
 */
export type TaskAssignUpdateDTO = {
  addressBookId?: number;
  /**
   * 记录ID
   */
  id: number;
  /**
   * 事件预案小组人员ID
   */
  planUserId?: number;
  /**
   * 任务ID
   */
  taskId?: number;
};

/**
 * 指挥任务指派人
 */
export type TaskAssignVO = {
  /**
   * 记录ID
   */
  id?: number;
  /**
   * 事件预案小组人员ID
   */
  planUserId?: number;
  /**
   * 任务ID
   */
  taskId?: number;
};

/**
 * 指挥任务详情
 */
export type TaskDetailsVO = {
  /**
   * 任务指派人列表
   */
  assigneeList?: Array<TaskAssignDetailsVO>;
  /**
   * 任务创建时间
   */
  createTime?: string;
  /**
   * 任务内容描述
   */
  description?: string;
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * 执行情况
   */
  executCondition?: string;
  /**
   * 执行者
   */
  executor?: string;
  /**
   * 任务ID
   */
  id?: number;
  /**
   * 下发方式
   */
  issueType?: string;
  /**
   * 任务名称
   */
  name?: string;
  /**
   * 任务创建人
   */
  taskCreate?: string;
  /**
   * 任务实际执行人
   */
  taskExecutor?: string;
  /**
   * 执行者类型： 个人/预案小组
   */
  taskExecutorType?: string;
  /**
   * 任务完成时间
   */
  taskFinishTime?: string;
  /**
   * 事件响应任务ID
   */
  taskId?: number;
  /**
   * 任务状态(0-待执行 1-执行中 2-执行完成 3-执行失败 4-已取消)
   */
  taskStatus?: string;
  /**
   * 执行时间
   */
  taskTime?: string;
  /**
   * 任务类型：预案任务、信息上报、信息更新等(字典)
   */
  taskType?: string;
};

/**
 * 指挥任务-任务小组所有任务参数
 */
export type TaskGroupDTO = {
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * 事件响应任务ID
   */
  eventTaskId?: number;
  /**
   * 任务小组ID
   */
  groupId?: number;
};

/**
 * 指挥任务-停止预案流程-更新
 */
export type TaskGroupStepDTO = {
  /**
   * 事件预案流程ID
   */
  eventStepId?: number;
};

/**
 * 指挥任务详情日志
 */
export type TaskLogsDetailsVO = {
  /**
   * 指派记录ID
   */
  assignId?: number;
  /**
   * 附件
   */
  attachment?: Array<UnifiedFileVO>;
  /**
   * 反馈时间
   */
  createTime?: string;
  /**
   * 情况反馈
   */
  feedback?: string;
  /**
   * 日志ID
   */
  id?: number;
  /**
   * 任务日志记录
   */
  logs?: string;
  /**
   * 任务ID
   */
  taskId?: number;
};

/**
 * 指挥任务日志-数据传输对象-新增
 */
export type TaskLogsSaveDTO = {
  /**
   * 指派记录ID
   */
  assignId?: number;
  /**
   * 情况反馈
   */
  feedback?: string;
  /**
   * 任务日志记录
   */
  logs?: string;
  /**
   * 任务ID
   */
  taskId?: number;
};

/**
 * 指挥任务日志-数据传输对象-更新
 */
export type TaskLogsUpdateDTO = {
  /**
   * 指派记录ID
   */
  assignId?: number;
  /**
   * 情况反馈
   */
  feedback?: string;
  /**
   * 日志ID
   */
  id: number;
  /**
   * 任务日志记录
   */
  logs?: string;
  /**
   * 任务ID
   */
  taskId?: number;
};

/**
 * 指挥任务日志
 */
export type TaskLogsVO = {
  /**
   * 指派记录ID
   */
  assignId?: number;
  /**
   * 反馈时间
   */
  createTime?: string;
  /**
   * 情况反馈
   */
  feedback?: string;
  /**
   * 日志ID
   */
  id?: number;
  /**
   * 任务日志记录
   */
  logs?: string;
  /**
   * 任务ID
   */
  taskId?: number;
};

/**
 * 指挥任务-数据传输对象-新增
 */
export type TaskSaveDTO = {
  /**
   * 指派人员ID
   */
  assignIds?: Array<number>;
  /**
   * 任务内容描述
   */
  description?: string;
  /**
   * 事件ID
   */
  eventId: number;
  eventTaskId?: number;
  /**
   * 执行情况
   */
  executCondition?: string;
  /**
   * 执行者, 如果不指定则为指派人员名称(多个人员用逗号隔开)
   */
  executor?: string;
  /**
   * 指派小组ID
   */
  groupId?: number;
  /**
   * 下发方式
   */
  issueType?: string;
  /**
   * 任务名称
   */
  name?: string;
  /**
   * 调度任务ID
   */
  scheduleId?: number;
  /**
   * 任务创建人
   */
  taskCreate?: string;
  /**
   * 任务执行人
   */
  taskExecutor?: string;
  /**
   * 执行者类型： 个人/预案小组
   */
  taskExecutorType?: string;
  /**
   * 任务完成时间
   */
  taskFinishTime?: string;
  /**
   * 执行时间
   */
  taskTime?: string;
  /**
   * 任务类型：预案任务、信息上报、信息更新
   */
  taskType?: string;
};

/**
 * 指挥任务统计信息
 */
export type TaskStatisVO = {
  /**
   * 已结束
   */
  stop?: number;
  /**
   * 任务总数
   */
  total?: number;
};

/**
 * 指挥任务-数据传输对象-更新
 */
export type TaskUpdateDTO = {
  /**
   * 指派人员ID
   */
  assignIds?: Array<number>;
  /**
   * 任务内容描述
   */
  description?: string;
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * 执行情况
   */
  executCondition?: string;
  /**
   * 执行者
   */
  executor?: string;
  /**
   * 指派小组ID
   */
  groupId?: number;
  /**
   * 任务ID
   */
  id: number;
  /**
   * 下发方式
   */
  issueType?: string;
  /**
   * 任务名称
   */
  name?: string;
  /**
   * 调度任务ID
   */
  scheduleId?: number;
  /**
   * 任务创建人
   */
  taskCreate?: string;
  /**
   * 任务实际执行人
   */
  taskExecutor?: string;
  /**
   * 执行者类型： 个人/预案小组
   */
  taskExecutorType?: string;
  /**
   * 任务完成时间
   */
  taskFinishTime?: string;
  /**
   * 执行时间
   */
  taskTime?: string;
  /**
   * 任务类型：预案任务、信息上报、信息更新等(字典)
   */
  taskType?: string;
};

/**
 * 指挥任务
 */
export type TaskVO = {
  /**
   * 任务创建时间
   */
  createTime?: string;
  /**
   * 任务内容描述
   */
  description?: string;
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * 执行情况
   */
  executCondition?: string;
  /**
   * 执行者
   */
  executor?: string;
  /**
   * 指派小组ID
   */
  groupId?: number;
  /**
   * 任务ID
   */
  id?: number;
  /**
   * 下发方式
   */
  issueType?: string;
  /**
   * 任务名称
   */
  name?: string;
  /**
   * 调度任务ID
   */
  scheduleId?: number;
  /**
   * 任务创建人
   */
  taskCreate?: string;
  /**
   * 任务实际执行人
   */
  taskExecutor?: string;
  /**
   * 执行者类型： 个人/预案小组
   */
  taskExecutorType?: string;
  /**
   * 任务完成时间
   */
  taskFinishTime?: string;
  /**
   * 事件响应任务ID
   */
  taskId?: number;
  /**
   * 任务状态(0-待执行 1-执行中 2-执行完成 3-执行失败 4-已取消)
   */
  taskStatus?: string;
  /**
   * 执行时间
   */
  taskTime?: string;
  /**
   * 任务类型：预案任务、信息上报、信息更新等(字典)
   */
  taskType?: string;
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

export type TreeNodeConfig = {
  childrenKey?: string;
  deep?: number;
  idKey?: string;
  nameKey?: string;
  parentIdKey?: string;
  weightKey?: string;
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
   * 统一文件夹ID
   */
  folderId?: number;
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

export type VideoSurveillance = {
  administrator?: string;
  administratorNum?: string;
  company?: string;
  createBy?: string;
  createTime?: Timestamp;
  deleted?: boolean;
  groupId?: number;
  id: number;
  ip?: string;
  passageway?: number;
  password?: string;
  port?: number;
  remark?: string;
  updateBy?: string;
  updateTime?: Timestamp;
  username?: string;
  videoLocation?: string;
  videoName?: string;
  videoNumber: string;
  videoPosition?: string;
  videoStreamAddress?: string;
};

/**
 * 视频监控分组视图对象
 */
export type VideoSurveillanceGroupVo = {
  /**
   * 子节点
   */
  children?: Array<VideoSurveillanceGroupVo>;
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

/**
 * 视频监控视图对象
 */
export type VideoSurveillanceVo = {
  /**
   * 管理员
   */
  administrator?: string;
  /**
   * 管理员电话
   */
  administratorNum?: string;
  /**
   * 所属单位
   */
  company?: string;
  /**
   * 分组ID
   */
  groupId?: number;
  /**
   * 设备ID
   */
  id?: number;
  /**
   * IP地址
   */
  ip?: string;
  /**
   * 通道
   */
  passageway?: number;
  /**
   * 密码
   */
  password?: string;
  /**
   * 端口号
   */
  port?: number;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 用户名
   */
  username?: string;
  /**
   * 设备位置
   */
  videoLocation?: string;
  /**
   * 设备名称
   */
  videoName?: string;
  /**
   * 设备编号
   */
  videoNumber?: string;
  /**
   * 设备坐标
   */
  videoPosition?: string;
  /**
   * 视频流地址
   */
  videoStreamAddress?: string;
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

export type 分页结果数据_AddressBookVO_ = {
  /**
   * 数据集
   */
  list?: Array<AddressBookVO>;
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

export type 分页结果数据_DeptVO_ = {
  /**
   * 数据集
   */
  list?: Array<DeptVO>;
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

export type 分页结果数据_DisasterVO_ = {
  /**
   * 数据集
   */
  list?: Array<DisasterVO>;
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

export type 分页结果数据_DutyGroupVO_ = {
  /**
   * 数据集
   */
  list?: Array<DutyGroupVO>;
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

export type 分页结果数据_DutyLogVO_ = {
  /**
   * 数据集
   */
  list?: Array<DutyLogVO>;
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

export type 分页结果数据_DutySchedulingVO_ = {
  /**
   * 数据集
   */
  list?: Array<DutySchedulingVO>;
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

export type 分页结果数据_DutyUserVO_ = {
  /**
   * 数据集
   */
  list?: Array<DutyUserVO>;
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

export type 分页结果数据_EarlyWarningManageVo_ = {
  /**
   * 数据集
   */
  list?: Array<EarlyWarningManageVo>;
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

export type 分页结果数据_EarlyWarningReleaseVo_ = {
  /**
   * 数据集
   */
  list?: Array<EarlyWarningReleaseVo>;
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

export type 分页结果数据_EarlyWarningVO_ = {
  /**
   * 数据集
   */
  list?: Array<EarlyWarningVO>;
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

export type 分页结果数据_EmergencyExpertVO_ = {
  /**
   * 数据集
   */
  list?: Array<EmergencyExpertVO>;
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

export type 分页结果数据_EmergencyTeamScheduleVO_ = {
  /**
   * 数据集
   */
  list?: Array<EmergencyTeamScheduleVO>;
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

export type 分页结果数据_EventCaseVO_ = {
  /**
   * 数据集
   */
  list?: Array<EventCaseVO>;
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

export type 分页结果数据_EventDetailsVO_ = {
  /**
   * 数据集
   */
  list?: Array<EventDetailsVO>;
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

export type 分页结果数据_EventDynamicsVO_ = {
  /**
   * 数据集
   */
  list?: Array<EventDynamicsVO>;
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

export type 分页结果数据_EventForceAnalysisVO_ = {
  /**
   * 数据集
   */
  list?: Array<EventForceAnalysisVO>;
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

export type 分页结果数据_EventImpactStatusVO_ = {
  /**
   * 数据集
   */
  list?: Array<EventImpactStatusVO>;
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

export type 分页结果数据_EventPlanStepVO_ = {
  /**
   * 数据集
   */
  list?: Array<EventPlanStepVO>;
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

export type 分页结果数据_EventPlanTaskVO_ = {
  /**
   * 数据集
   */
  list?: Array<EventPlanTaskVO>;
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

export type 分页结果数据_EventPlanVO_ = {
  /**
   * 数据集
   */
  list?: Array<EventPlanVO>;
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

export type 分页结果数据_EventResponseVO_ = {
  /**
   * 数据集
   */
  list?: Array<EventResponseVO>;
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

export type 分页结果数据_EventSummaryEvaluationVO_ = {
  /**
   * 数据集
   */
  list?: Array<EventSummaryEvaluationVO>;
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

export type 分页结果数据_EventVO_ = {
  /**
   * 数据集
   */
  list?: Array<EventVO>;
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

export type 分页结果数据_HandingEventGroupVO_ = {
  /**
   * 数据集
   */
  list?: Array<HandingEventGroupVO>;
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

export type 分页结果数据_HandingEventUserVO_ = {
  /**
   * 数据集
   */
  list?: Array<HandingEventUserVO>;
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

export type 分页结果数据_HandingPlanGroupVO_ = {
  /**
   * 数据集
   */
  list?: Array<HandingPlanGroupVO>;
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

export type 分页结果数据_HandingPlanStepVO_ = {
  /**
   * 数据集
   */
  list?: Array<HandingPlanStepVO>;
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

export type 分页结果数据_HandingPlanTaskVO_ = {
  /**
   * 数据集
   */
  list?: Array<HandingPlanTaskVO>;
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

export type 分页结果数据_HandingPlanUserVO_ = {
  /**
   * 数据集
   */
  list?: Array<HandingPlanUserVO>;
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

export type 分页结果数据_HandingPlanVO_ = {
  /**
   * 数据集
   */
  list?: Array<HandingPlanVO>;
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

export type 分页结果数据_InformationReleaseVo_ = {
  /**
   * 数据集
   */
  list?: Array<InformationReleaseVo>;
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

export type 分页结果数据_InformationTemplateVo_ = {
  /**
   * 数据集
   */
  list?: Array<InformationTemplateVo>;
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

export type 分页结果数据_KnowledgeBaseVO_ = {
  /**
   * 数据集
   */
  list?: Array<KnowledgeBaseVO>;
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

export type 分页结果数据_MobileVersionVo_ = {
  /**
   * 数据集
   */
  list?: Array<MobileVersionVo>;
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

export type 分页结果数据_PlotMeasuringVO_ = {
  /**
   * 数据集
   */
  list?: Array<PlotMeasuringVO>;
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

export type 分页结果数据_ResourceScheduleVO_ = {
  /**
   * 数据集
   */
  list?: Array<ResourceScheduleVO>;
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

export type 分页结果数据_ShelterScheduleVO_ = {
  /**
   * 数据集
   */
  list?: Array<ShelterScheduleVO>;
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

export type 分页结果数据_SmsScheduleVO_ = {
  /**
   * 数据集
   */
  list?: Array<SmsScheduleVO>;
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

export type 分页结果数据_SummaryEvaluationEventVO_ = {
  /**
   * 数据集
   */
  list?: Array<SummaryEvaluationEventVO>;
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

export type 分页结果数据_TaskAssignVO_ = {
  /**
   * 数据集
   */
  list?: Array<TaskAssignVO>;
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

export type 分页结果数据_TaskDetailsVO_ = {
  /**
   * 数据集
   */
  list?: Array<TaskDetailsVO>;
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

export type 分页结果数据_TaskLogsVO_ = {
  /**
   * 数据集
   */
  list?: Array<TaskLogsVO>;
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

export type 分页结果数据_TaskVO_ = {
  /**
   * 数据集
   */
  list?: Array<TaskVO>;
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

export type 分页结果数据_VideoSurveillanceGroupVo_ = {
  /**
   * 数据集
   */
  list?: Array<VideoSurveillanceGroupVo>;
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

export type 分页结果数据_VideoSurveillanceVo_ = {
  /**
   * 数据集
   */
  list?: Array<VideoSurveillanceVo>;
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

export type 完成任务 = {
  /**
   * 队伍调度ID
   */
  scheduleId: number;
};

export type 应急避难场所 = {
  /**
   * 容纳人数
   */
  capacity?: number;
  /**
   * 联系人
   */
  contactName?: string;
  /**
   * 电话
   */
  contactNumber?: string;
  /**
   * 距离事件直线距离,单位：米
   */
  distance?: number;
  /**
   * 应急避难场所ID
   */
  id?: string;
  /**
   * 避难场所名称
   */
  name?: string;
  /**
   * 已安置统计
   */
  peopleAlreadyScheduleNum?: {
    [key: string]: string;
  };
  /**
   * 已安置
   */
  placed?: number;
  /**
   * 所在位置
   */
  position?: string;
  /**
   * 资源ID
   */
  resId?: string;
  /**
   * 调度数据
   */
  shelterSchedules?: Array<ShelterScheduleVO>;
  /**
   * 总面积
   */
  totalArea?: number;
};

export type 应急队伍_调度参数 = {
  /**
   * 调派力量
   */
  context?: Array<调派力量>;
  /**
   * 事件ID
   */
  eventId: number;
  /**
   * 调派位置
   */
  position?: string;
  /**
   * 调派地址
   */
  positionName?: string;
  /**
   * 队伍ID
   */
  teamId: string;
};

/**
 * 影响分析人口
 */
export type 影响分析人口 = {
  /**
   * 名称
   */
  name?: string;
  /**
   * 数值
   */
  value?: number;
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

export type 接口返回结果_DisasterVO_ = {
  /**
   * 数据对象
   */
  data?: DisasterVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_DutyGroupVO_ = {
  /**
   * 数据对象
   */
  data?: DutyGroupVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_DutyLogVO_ = {
  /**
   * 数据对象
   */
  data?: DutyLogVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_DutySchedulingVO_ = {
  /**
   * 数据对象
   */
  data?: DutySchedulingVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_DutyUserVO_ = {
  /**
   * 数据对象
   */
  data?: DutyUserVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_EarlyWarningManageDetailVo_ = {
  /**
   * 数据对象
   */
  data?: EarlyWarningManageDetailVo;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_EarlyWarningReleaseDetailVo_ = {
  /**
   * 数据对象
   */
  data?: EarlyWarningReleaseDetailVo;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_EmergencyExpertVO_ = {
  /**
   * 数据对象
   */
  data?: EmergencyExpertVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_EmergencyShelterStatisVO_ = {
  /**
   * 数据对象
   */
  data?: EmergencyShelterStatisVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_EmergencyTeamScheduleVO_ = {
  /**
   * 数据对象
   */
  data?: EmergencyTeamScheduleVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_EventDynamicsVO_ = {
  /**
   * 数据对象
   */
  data?: EventDynamicsVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_EventForceAnalysisVO_ = {
  /**
   * 数据对象
   */
  data?: EventForceAnalysisVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_EventImpactAnalysisVO_ = {
  /**
   * 数据对象
   */
  data?: EventImpactAnalysisVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_EventImpactStatusVO_ = {
  /**
   * 数据对象
   */
  data?: EventImpactStatusVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_EventPlanStartStepVO_ = {
  /**
   * 数据对象
   */
  data?: EventPlanStartStepVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_EventPlanStepVO_ = {
  /**
   * 数据对象
   */
  data?: EventPlanStepVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_EventPlanTaskVO_ = {
  /**
   * 数据对象
   */
  data?: EventPlanTaskVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_EventPlanVO_ = {
  /**
   * 数据对象
   */
  data?: EventPlanVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_EventResponseVO_ = {
  /**
   * 数据对象
   */
  data?: EventResponseVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_EventStartDetailsVO_ = {
  /**
   * 数据对象
   */
  data?: EventStartDetailsVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_EventSummaryEvaluationVO_ = {
  /**
   * 数据对象
   */
  data?: EventSummaryEvaluationVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_EventVO_ = {
  /**
   * 数据对象
   */
  data?: EventVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_HandingEventGroupDetailsVO_ = {
  /**
   * 数据对象
   */
  data?: HandingEventGroupDetailsVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_HandingEventGroupVO_ = {
  /**
   * 数据对象
   */
  data?: HandingEventGroupVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_HandingEventUserVO_ = {
  /**
   * 数据对象
   */
  data?: HandingEventUserVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_HandingPlanGroupVO_ = {
  /**
   * 数据对象
   */
  data?: HandingPlanGroupVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_HandingPlanStepVO_ = {
  /**
   * 数据对象
   */
  data?: HandingPlanStepVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_HandingPlanTaskVO_ = {
  /**
   * 数据对象
   */
  data?: HandingPlanTaskVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_HandingPlanUserVO_ = {
  /**
   * 数据对象
   */
  data?: HandingPlanUserVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_HandingPlanVO_ = {
  /**
   * 数据对象
   */
  data?: HandingPlanVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_InformationReleaseVo_ = {
  /**
   * 数据对象
   */
  data?: InformationReleaseVo;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_InformationTemplate对象_ = {
  /**
   * 数据对象
   */
  data?: InformationTemplate对象;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_KnowledgeBaseVO_ = {
  /**
   * 数据对象
   */
  data?: KnowledgeBaseVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_List_EarlyWaringTypeVo__ = {
  /**
   * 数据对象
   */
  data?: Array<EarlyWaringTypeVo>;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_List_EventResourceStatisVO__ = {
  /**
   * 数据对象
   */
  data?: Array<EventResourceStatisVO>;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_List_EventStatusCountVO__ = {
  /**
   * 数据对象
   */
  data?: Array<EventStatusCountVO>;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_List_IconVo__ = {
  /**
   * 数据对象
   */
  data?: Array<IconVo>;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_List_InformationTemplateVo__ = {
  /**
   * 数据对象
   */
  data?: Array<InformationTemplateVo>;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_List_RescueForceTeamStatisVO__ = {
  /**
   * 数据对象
   */
  data?: Array<RescueForceTeamStatisVO>;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_List_RescueForceTeamVO__ = {
  /**
   * 数据对象
   */
  data?: Array<RescueForceTeamVO>;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_List_ResourceDataCategorySmallVo__ = {
  /**
   * 数据对象
   */
  data?: Array<ResourceDataCategorySmallVo>;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_List_ResourceDataCategory__ = {
  /**
   * 数据对象
   */
  data?: Array<ResourceDataCategory>;
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

export type 接口返回结果_List_VideoSurveillanceGroupVo__ = {
  /**
   * 数据对象
   */
  data?: Array<VideoSurveillanceGroupVo>;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_List_应急避难场所__ = {
  /**
   * 数据对象
   */
  data?: Array<应急避难场所>;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_List_物资调拨__ = {
  /**
   * 数据对象
   */
  data?: Array<物资调拨>;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_List_统计分析元数据__ = {
  /**
   * 数据对象
   */
  data?: Array<统计分析元数据>;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_MobileVersionDetailVo_ = {
  /**
   * 数据对象
   */
  data?: MobileVersionDetailVo;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_PlotMeasuringVO_ = {
  /**
   * 数据对象
   */
  data?: PlotMeasuringVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_ResourceScheduleVO_ = {
  /**
   * 数据对象
   */
  data?: ResourceScheduleVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_ShelterScheduleVO_ = {
  /**
   * 数据对象
   */
  data?: ShelterScheduleVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_TaskAssignVO_ = {
  /**
   * 数据对象
   */
  data?: TaskAssignVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_TaskDetailsVO_ = {
  /**
   * 数据对象
   */
  data?: TaskDetailsVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_TaskLogsVO_ = {
  /**
   * 数据对象
   */
  data?: TaskLogsVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_TaskStatisVO_ = {
  /**
   * 数据对象
   */
  data?: TaskStatisVO;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_VideoSurveillance_ = {
  /**
   * 数据对象
   */
  data?: VideoSurveillance;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_Void_ = {
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_long_ = {
  /**
   * 数据对象
   */
  data?: number;
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

export type 接口返回结果_分页结果数据_AddressBookVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_AddressBookVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_DeptVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_DeptVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_DisasterVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_DisasterVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_DutyGroupVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_DutyGroupVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_DutyLogVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_DutyLogVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_DutySchedulingVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_DutySchedulingVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_DutyUserVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_DutyUserVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_EarlyWarningManageVo__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_EarlyWarningManageVo_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_EarlyWarningReleaseVo__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_EarlyWarningReleaseVo_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_EarlyWarningVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_EarlyWarningVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_EmergencyExpertVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_EmergencyExpertVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_EmergencyTeamScheduleVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_EmergencyTeamScheduleVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_EventCaseVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_EventCaseVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_EventDetailsVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_EventDetailsVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_EventDynamicsVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_EventDynamicsVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_EventForceAnalysisVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_EventForceAnalysisVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_EventImpactStatusVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_EventImpactStatusVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_EventPlanStepVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_EventPlanStepVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_EventPlanTaskVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_EventPlanTaskVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_EventPlanVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_EventPlanVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_EventResponseVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_EventResponseVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_EventSummaryEvaluationVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_EventSummaryEvaluationVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_EventVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_EventVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_HandingEventGroupVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_HandingEventGroupVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_HandingEventUserVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_HandingEventUserVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_HandingPlanGroupVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_HandingPlanGroupVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_HandingPlanStepVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_HandingPlanStepVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_HandingPlanTaskVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_HandingPlanTaskVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_HandingPlanUserVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_HandingPlanUserVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_HandingPlanVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_HandingPlanVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_InformationReleaseVo__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_InformationReleaseVo_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_InformationTemplateVo__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_InformationTemplateVo_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_KnowledgeBaseVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_KnowledgeBaseVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_MobileVersionVo__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_MobileVersionVo_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_PlotMeasuringVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_PlotMeasuringVO_;
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

export type 接口返回结果_分页结果数据_ResourceScheduleVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_ResourceScheduleVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_ShelterScheduleVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_ShelterScheduleVO_;
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

export type 接口返回结果_分页结果数据_SmsScheduleVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_SmsScheduleVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_SummaryEvaluationEventVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_SummaryEvaluationEventVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_TaskAssignVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_TaskAssignVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_TaskDetailsVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_TaskDetailsVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_TaskLogsVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_TaskLogsVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_TaskVO__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_TaskVO_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_VideoSurveillanceGroupVo__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_VideoSurveillanceGroupVo_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_分页结果数据_VideoSurveillanceVo__ = {
  /**
   * 数据对象
   */
  data?: 分页结果数据_VideoSurveillanceVo_;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 接口返回结果_统计分析元数据_ = {
  /**
   * 数据对象
   */
  data?: 统计分析元数据;
  /**
   * 说明
   */
  msg?: string;
  /**
   * 状态码
   */
  status?: number;
};

export type 物资调拨 = {
  /**
   * 已调度资源统计
   */
  alreadyScheduleNum?: {
    [key: string]: string;
  };
  /**
   * 联系人
   */
  contactName?: string;
  /**
   * 电话
   */
  contactNumber?: string;
  /**
   * 距离事件直线距离,单位：米
   */
  distance?: number;
  /**
   * 折叠床数量
   */
  foldBed?: number;
  /**
   * 储备库ID
   */
  id?: string;
  /**
   * 物资储备库名称
   */
  name?: string;
  /**
   * 所在位置
   */
  position?: string;
  /**
   * 资源ID
   */
  resId?: string;
  /**
   * 调度数据
   */
  resourceSchedule?: ResourceScheduleVO;
  /**
   * 调度记录ID
   */
  scheduleId?: number;
  /**
   * 救灾帐篷数量
   */
  tent?: number;
};

export type 物资调拨0 = {
  /**
   * 调拨物资
   */
  context: Array<调拨物资>;
  /**
   * 事件ID
   */
  eventId: number;
  /**
   * 储备库ID
   */
  libId: string;
  /**
   * 调派位置
   */
  position?: string;
  /**
   * 调派地址
   */
  positionName?: string;
};

export type 物资调拨到达 = {
  /**
   * 调度ID
   */
  scheduleId: number;
};

export type 统计分析元数据 = {
  /**
   * 统计详细
   */
  details?: Array<统计分析元数据>;
  /**
   * 名称
   */
  name?: string;
  /**
   * 排序
   */
  sort?: number;
  /**
   * 类型, 值类型/集合类型(包含详细统计信息)
   */
  type?: string;
  /**
   * 单位
   */
  unit?: string;
  /**
   * 值
   */
  val?: unknown;
};

export type 调度报告查询参数 = {
  /**
   * 事件ID
   */
  eventId: number;
  /**
   * 影响范围查询距离
   */
  influenceDistance: number;
  /**
   * 影响人口
   */
  influencePopulation: number;
  /**
   * 影响人口列表
   */
  populationList: Array<影响分析人口>;
  /**
   * 物资调拨查询距离
   */
  resourceDistance: number;
  /**
   * 避难场所查询距离
   */
  shelterDistance: number;
  /**
   * 应急队伍查询距离
   */
  teamDistance: number;
};

export type 调拨物资 = {
  /**
   * 数量
   */
  num?: string;
  /**
   * 物资
   */
  resource?: string;
  /**
   * 单位
   */
  unit?: string;
};

export type 调派力量 = {
  /**
   * 力量
   */
  force?: string;
  /**
   * 数量
   */
  num?: string;
  /**
   * 单位
   */
  unit?: string;
};

export type 转移安置人员 = {
  /**
   * 安置人员
   */
  num?: number;
};

export type 转移安置参数 = {
  /**
   * 转移安置人员
   */
  context?: Array<转移安置人员>;
  /**
   * 事件ID
   */
  eventId: number;
  /**
   * 避难场所ID
   */
  shelterId: string;
  /**
   * 转移安置时间
   */
  time?: string;
};

export type 选中人员 = {
  /**
   * 通讯录ID
   */
  addressBookId?: number;
};

export type 队伍到达 = {
  /**
   * 队伍调度ID
   */
  scheduleId: number;
};

export type ListUsingGetData = {
  /**
   * 通讯录分组ID
   */
  groupId?: number;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type ListUsingGetResponse = 接口返回结果_分页结果数据_AddressBookVO__;

export type ListDataUsingGetData = {
  /**
   * 通讯录分组ID
   */
  groupId?: number;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type ListDataUsingGetResponse =
  接口返回结果_分页结果数据_AddressBookVO__;

export type ListGroupUsingGetData = {
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type ListGroupUsingGetResponse =
  接口返回结果_分页结果数据_AddressBookGroupVO__;

export type ListUsingGet1Data = {
  /**
   * 事件id
   */
  eventId?: number;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type ListUsingGet1Response = 接口返回结果_分页结果数据_DisasterVO__;

export type SaveUsingPostData = {
  /**
   * dto
   */
  dto: DisasterSaveDTO;
};

export type SaveUsingPostResponse = 接口返回结果_Void_;

export type UpdateUsingPutData = {
  /**
   * dto
   */
  dto: DisasterUpdateDTO;
};

export type UpdateUsingPutResponse = 接口返回结果_Void_;

export type DeleteUsingDeleteData = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDeleteResponse = 接口返回结果_Void_;

export type GetDetailUsingGetData = {
  /**
   * id
   */
  id: number;
};

export type GetDetailUsingGetResponse = 接口返回结果_DisasterVO_;

export type ListByEventUsingGetData = {
  /**
   * 事件ID
   */
  eventId: number;
};

export type ListByEventUsingGetResponse = 接口返回结果_DisasterVO_;

export type DataCategoryUsingGetData = {
  /**
   * 影响距离
   */
  distance: number;
  /**
   * 事件ID
   */
  eventId: number;
};

export type DataCategoryUsingGetResponse = 接口返回结果_List_Tree_string___;

export type ListUsingGet12Data = {
  /**
   * 按wkt范围搜索事件
   */
  areaWkt?: string;
  /**
   * 状态:0(待处置)、1(处置中)、2(已完结)
   */
  eventStatus?: string;
  /**
   * 事件状态
   */
  eventStatusIn?: Array<string>;
  /**
   * 事件发生时间
   */
  happenTimeEnd?: string;
  /**
   * 事件发生时间
   */
  happenTimeStart?: string;
  /**
   * 事件名称
   */
  name?: string;
  /**
   * 按照事件发生时间排序(顺序：asc;倒叙:desc)
   */
  orderByHappenTime?: string;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
  /**
   * 预案名称
   */
  planName?: string;
  /**
   * 事件类型(字典:event_type)
   */
  type?: string;
};

export type ListUsingGet12Response = 接口返回结果_分页结果数据_EventVO__;

export type SaveUsingPost12Data = {
  /**
   * dto
   */
  dto: EventSaveDTO;
};

export type SaveUsingPost12Response = 接口返回结果_long_;

export type UpdateUsingPut10Data = {
  /**
   * dto
   */
  dto: EventUpdateDTO;
};

export type UpdateUsingPut10Response = 接口返回结果_Void_;

export type DeleteUsingDelete10Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete10Response = 接口返回结果_Void_;

export type ListUsingGet14Data = {
  /**
   * 动态类型
   */
  dynamicsType?: string;
  /**
   * 事件id
   */
  eventId?: number;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type ListUsingGet14Response =
  接口返回结果_分页结果数据_EventDynamicsVO__;

export type SaveUsingPost13Data = {
  /**
   * dto
   */
  dto: EventDynamicsSaveDTO;
};

export type SaveUsingPost13Response = 接口返回结果_Void_;

export type UpdateUsingPut11Data = {
  /**
   * dto
   */
  dto: EventDynamicsUpdateDTO;
};

export type UpdateUsingPut11Response = 接口返回结果_Void_;

export type DeleteUsingDelete11Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete11Response = 接口返回结果_Void_;

export type GetDetailUsingGet10Data = {
  /**
   * id
   */
  id: number;
};

export type GetDetailUsingGet10Response = 接口返回结果_EventDynamicsVO_;

export type LeaderUsingGetData = {
  /**
   * 动态类型
   */
  dynamicsType?: string;
  /**
   * 事件id
   */
  eventId?: number;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type LeaderUsingGetResponse =
  接口返回结果_分页结果数据_EventDynamicsVO__;

export type SaveLeaderUsingPostData = {
  /**
   * dto
   */
  dto: EventDynamicsSaveDTO;
};

export type SaveLeaderUsingPostResponse = 接口返回结果_Void_;

export type GetDetailUsingGet9Data = {
  /**
   * id
   */
  id: number;
};

export type GetDetailUsingGet9Response = 接口返回结果_EventVO_;

export type StartUsingPut1Data = {
  /**
   * 事件ID
   */
  id: number;
};

export type StartUsingPut1Response = 接口返回结果_Void_;

export type FinishUsingPutData = {
  /**
   * id
   */
  id: number;
};

export type FinishUsingPutResponse = 接口返回结果_Void_;

export type AddFormalUsingPostData = {
  /**
   * dto
   */
  dto: EventFormalSaveDTO;
};

export type AddFormalUsingPostResponse = 接口返回结果_long_;

export type AddFormalDataUsingPostData = {
  /**
   * dto
   */
  dto: EventFormalSaveDTO;
};

export type AddFormalDataUsingPostResponse = 接口返回结果_long_;

export type ListUsingGet13Data = {
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type ListUsingGet13Response =
  接口返回结果_分页结果数据_HandingEventGroupVO__;

export type CountByStatusUsingGetResponse =
  接口返回结果_List_EventStatusCountVO__;

export type PlanUsingGetData = {
  /**
   * 事件id
   */
  id: number;
};

export type PlanUsingGetResponse = 接口返回结果_EventStartDetailsVO_;

export type EventStepGroupUsingGetData = {
  /**
   * 预案流程ID
   */
  id: number;
};

export type EventStepGroupUsingGetResponse =
  接口返回结果_HandingEventGroupDetailsVO_;

export type EventStepTaskUsingGetData = {
  /**
   * 预案流程ID
   */
  id: number;
};

export type EventStepTaskUsingGetResponse = 接口返回结果_EventPlanStartStepVO_;

export type ListUsingGet11Data = {
  /**
   * 事件ID
   */
  id: number;
};

export type ListUsingGet11Response = 接口返回结果_分页结果数据_EventPlanVO__;

export type StartUsingPutData = {
  /**
   * dto
   */
  dto: EventResponseSaveDTO;
};

export type StartUsingPutResponse = 接口返回结果_Void_;

export type StatisUsingGetData = {
  /**
   * year
   */
  year: number;
};

export type StatisUsingGetResponse = 接口返回结果_统计分析元数据_;

export type ListUsingGet2Data = {
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type ListUsingGet2Response = 接口返回结果_分页结果数据_DutyGroupVO__;

export type SaveUsingPost1Data = {
  /**
   * dto
   */
  dto: DutyGroupSaveDTO;
};

export type SaveUsingPost1Response = 接口返回结果_Void_;

export type UpdateUsingPut1Data = {
  /**
   * dto
   */
  dto: DutyGroupUpdateDTO;
};

export type UpdateUsingPut1Response = 接口返回结果_Void_;

export type DeleteUsingDelete1Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete1Response = 接口返回结果_Void_;

export type GetDetailUsingGet1Data = {
  /**
   * id
   */
  id: number;
};

export type GetDetailUsingGet1Response = 接口返回结果_DutyGroupVO_;

export type ListUsingGet3Data = {
  /**
   * 日志时间
   */
  logsTime?: string;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type ListUsingGet3Response = 接口返回结果_分页结果数据_DutyLogVO__;

export type SaveUsingPost2Data = {
  /**
   * dto
   */
  dto: DutyLogSaveDTO;
};

export type SaveUsingPost2Response = 接口返回结果_Void_;

export type UpdateUsingPut2Data = {
  /**
   * dto
   */
  dto: DutyLogUpdateDTO;
};

export type UpdateUsingPut2Response = 接口返回结果_Void_;

export type DeleteUsingDelete2Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete2Response = 接口返回结果_Void_;

export type GetDetailUsingGet2Data = {
  /**
   * id
   */
  id: number;
};

export type GetDetailUsingGet2Response = 接口返回结果_DutyLogVO_;

export type ExportUsingGetData = {
  /**
   * 日志时间
   */
  logsTime: string;
};

export type ExportUsingGetResponse = unknown;

export type ListUsingGet4Data = {
  /**
   * 值班人员
   */
  onDutyUser?: string;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
  /**
   * 排班时间(按天)
   */
  schedulingTime?: string;
  /**
   * 排班范围结束时间(按天)
   */
  schedulingTimeEnd?: string;
  /**
   * 排班范围开始时间(按天)
   */
  schedulingTimeStart?: string;
};

export type ListUsingGet4Response =
  接口返回结果_分页结果数据_DutySchedulingVO__;

export type SaveUsingPost4Data = {
  /**
   * dto
   */
  dto: DutySchedulingSaveDTO;
};

export type SaveUsingPost4Response = 接口返回结果_Void_;

export type UpdateUsingPut3Data = {
  /**
   * dto
   */
  dto: DutySchedulingChangeDTO;
};

export type UpdateUsingPut3Response = 接口返回结果_Void_;

export type DeleteUsingDelete3Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete3Response = 接口返回结果_Void_;

export type SaveUsingPost3Data = {
  /**
   * dto
   */
  dto: DutySchedulingBatchSaveDTO;
};

export type SaveUsingPost3Response = 接口返回结果_Void_;

export type GetDetailUsingGet3Data = {
  /**
   * id
   */
  id: number;
};

export type GetDetailUsingGet3Response = 接口返回结果_DutySchedulingVO_;

export type ListMonthUsingGetData = {
  /**
   * 值班人员
   */
  onDutyUser?: string;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
  /**
   * 排班时间(月份)
   */
  schedulingTime?: string;
};

export type ListMonthUsingGetResponse =
  接口返回结果_分页结果数据_DutySchedulingVO__;

export type ListUsingGet5Data = {
  /**
   * 值班小组ID
   */
  groupId?: number;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type ListUsingGet5Response = 接口返回结果_分页结果数据_DutyUserVO__;

export type SaveUsingPost5Data = {
  /**
   * dto
   */
  dto: DutyUserSaveDTO;
};

export type SaveUsingPost5Response = 接口返回结果_Void_;

export type UpdateUsingPut4Data = {
  /**
   * dto
   */
  dto: DutyUserUpdateDTO;
};

export type UpdateUsingPut4Response = 接口返回结果_Void_;

export type DeleteUsingDelete4Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete4Response = 接口返回结果_Void_;

export type DeptListUsingGetData = {
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

export type DeptListUsingGetResponse = 接口返回结果_分页结果数据_DeptVO__;

export type DeptUserListUsingGetData = {
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

export type DeptUserListUsingGetResponse =
  接口返回结果_分页结果数据_AddressBookVO__;

export type GetDetailUsingGet4Data = {
  /**
   * id
   */
  id: number;
};

export type GetDetailUsingGet4Response = 接口返回结果_DutyUserVO_;

export type SelectUsingPostData = {
  /**
   * dto
   */
  dto: DutyUserSelectDTO;
};

export type SelectUsingPostResponse = 接口返回结果_Void_;

export type GetDetailUsingGet5Data = {
  /**
   * 预警管理ID
   */
  id: number;
};

export type GetDetailUsingGet5Response =
  接口返回结果_EarlyWarningManageDetailVo_;

export type SaveUsingPost6Data = {
  /**
   * dto
   */
  dto: EarlyWarningManageSaveDto;
};

export type SaveUsingPost6Response = 接口返回结果_Void_;

export type UpdateUsingPut5Data = {
  /**
   * dto
   */
  dto: EarlyWarningManageUpdateDto;
};

export type UpdateUsingPut5Response = 接口返回结果_Void_;

export type DeleteUsingDelete5Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete5Response = 接口返回结果_Void_;

export type GetIconListUsingGetResponse = 接口返回结果_List_IconVo__;

export type ListUsingGet6Data = {
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
  /**
   * 预警小类
   */
  smallType?: string;
  /**
   * 预警大类
   */
  type?: string;
};

export type ListUsingGet6Response =
  接口返回结果_分页结果数据_EarlyWarningManageVo__;

export type SaveUsingPost7Data = {
  /**
   * dto
   */
  dto: InformationReleaseSaveDto;
};

export type SaveUsingPost7Response = 接口返回结果_Void_;

export type GetSmallTypeListUsingGetData = {
  /**
   * 预警大类
   */
  type: string;
};

export type GetSmallTypeListUsingGetResponse =
  接口返回结果_List_EarlyWaringTypeVo__;

export type GetDetailUsingGet6Data = {
  /**
   * 预警发布ID
   */
  id: number;
};

export type GetDetailUsingGet6Response =
  接口返回结果_EarlyWarningReleaseDetailVo_;

export type SaveUsingPost8Data = {
  /**
   * dto
   */
  dto: EarlyWarningReleaseSaveDto;
};

export type SaveUsingPost8Response = 接口返回结果_Void_;

export type UpdateUsingPut6Data = {
  /**
   * dto
   */
  dto: EarlyWarningReleaseUpdateDto;
};

export type UpdateUsingPut6Response = 接口返回结果_Void_;

export type DeleteUsingDelete6Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete6Response = 接口返回结果_Void_;

export type ListUsingGet7Data = {
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type ListUsingGet7Response =
  接口返回结果_分页结果数据_EarlyWarningReleaseVo__;

export type ListUsingGet8Data = {
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type ListUsingGet8Response =
  接口返回结果_分页结果数据_EmergencyExpertVO__;

export type SaveUsingPost9Data = {
  /**
   * dto
   */
  dto: EmergencyExpertSaveDTO;
};

export type SaveUsingPost9Response = 接口返回结果_Void_;

export type UpdateUsingPut7Data = {
  /**
   * dto
   */
  dto: EmergencyExpertUpdateDTO;
};

export type UpdateUsingPut7Response = 接口返回结果_Void_;

export type DeleteUsingDelete7Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete7Response = 接口返回结果_Void_;

export type GetDetailUsingGet7Data = {
  /**
   * id
   */
  id: number;
};

export type GetDetailUsingGet7Response = 接口返回结果_EmergencyExpertVO_;

export type ListUsingGet9Data = {
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type ListUsingGet9Response =
  接口返回结果_分页结果数据_EmergencyTeamScheduleVO__;

export type SaveUsingPost10Data = {
  /**
   * dto
   */
  dto: EmergencyTeamScheduleSaveDTO;
};

export type SaveUsingPost10Response = 接口返回结果_Void_;

export type UpdateUsingPut8Data = {
  /**
   * dto
   */
  dto: EmergencyTeamScheduleUpdateDTO;
};

export type UpdateUsingPut8Response = 接口返回结果_Void_;

export type DeleteUsingDelete8Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete8Response = 接口返回结果_Void_;

export type GetDetailUsingGet8Data = {
  /**
   * recordId
   */
  recordId: number;
};

export type GetDetailUsingGet8Response = 接口返回结果_EmergencyTeamScheduleVO_;

export type ListUsingGet10Data = {
  /**
   * 模糊查询
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
   * 事件分类
   */
  type?: string;
};

export type ListUsingGet10Response = 接口返回结果_分页结果数据_EventCaseVO__;

export type SaveUsingPost11Data = {
  /**
   * dto
   */
  dto: EventCaseSaveDTO;
};

export type SaveUsingPost11Response = 接口返回结果_Void_;

export type UpdateUsingPut9Data = {
  /**
   * dto
   */
  dto: EventCaseUpdateDTO;
};

export type UpdateUsingPut9Response = 接口返回结果_Void_;

export type DeleteUsingDelete9Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete9Response = 接口返回结果_Void_;

export type ListUsingGet15Data = {
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type ListUsingGet15Response =
  接口返回结果_分页结果数据_EventForceAnalysisVO__;

export type SaveUsingPost14Data = {
  /**
   * dto
   */
  dto: EventForceAnalysisSaveDTO;
};

export type SaveUsingPost14Response = 接口返回结果_Void_;

export type UpdateUsingPut12Data = {
  /**
   * dto
   */
  dto: EventForceAnalysisUpdateDTO;
};

export type UpdateUsingPut12Response = 接口返回结果_Void_;

export type DeleteUsingDelete12Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete12Response = 接口返回结果_Void_;

export type GetDetailUsingGet11Data = {
  /**
   * id
   */
  id: number;
};

export type GetDetailUsingGet11Response = 接口返回结果_EventForceAnalysisVO_;

export type ListUsingGet16Data = {
  /**
   * 距离(0-1000KM):单位(千米)
   */
  distance?: number;
  /**
   * 事件ID
   */
  eventId: number;
  /**
   * 调度状态: 0-未调拨   1-已调拨 2-已到达
   */
  scheduleStatus?: string;
  /**
   * 按距离排序：asc 顺序(默认)， desc 倒叙
   */
  sortByDistance?: string;
};

export type ListUsingGet16Response = 接口返回结果_List_物资调拨__;

export type AllocateUsingPostData = {
  /**
   * allocateDTO
   */
  allocateDto: 物资调拨0;
};

export type AllocateUsingPostResponse = 接口返回结果_Void_;

export type ArriveUsingPost1Data = {
  /**
   * arriveDTO
   */
  arriveDto: 物资调拨到达;
};

export type ArriveUsingPost1Response = 接口返回结果_Void_;

export type MaterialDispatchStatisticsUsingGetData = {
  /**
   * 事件id
   */
  eventId: number;
};

export type MaterialDispatchStatisticsUsingGetResponse =
  接口返回结果_List_EventResourceStatisVO__;

export type RescueForceTeamUsingGetData = {
  /**
   * 距离(0-1000KM):单位(千米)
   */
  distance?: number;
  /**
   * 事件ID
   */
  eventId: number;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
  /**
   * 调度状态: 0-未调度   1-已调度 2-已到达 3-已完成
   */
  scheduleStatus?: string;
  /**
   * 按距离排序：asc 顺序(默认)， desc 倒叙
   */
  sortByDistance?: string;
};

export type RescueForceTeamUsingGetResponse =
  接口返回结果_List_RescueForceTeamVO__;

export type ArriveUsingPostData = {
  /**
   * arriveDTO
   */
  arriveDto: 队伍到达;
};

export type ArriveUsingPostResponse = 接口返回结果_Void_;

export type DispatchUsingPostData = {
  /**
   * dispatchDTO
   */
  dispatchDto: 应急队伍_调度参数;
};

export type DispatchUsingPostResponse = 接口返回结果_Void_;

export type FinishUsingPostData = {
  /**
   * finishDTO
   */
  finishDto: 完成任务;
};

export type FinishUsingPostResponse = 接口返回结果_Void_;

export type RescueForceTeaStatisticsUsingGetData = {
  /**
   * 事件id
   */
  eventId: number;
};

export type RescueForceTeaStatisticsUsingGetResponse =
  接口返回结果_List_RescueForceTeamStatisVO__;

export type ShelterListUsingGetData = {
  /**
   * 距离(0-1000KM):单位(千米)
   */
  distance?: number;
  /**
   * 事件ID
   */
  eventId: number;
  /**
   * 调度状态
   */
  scheduleStatus?: string;
  /**
   * 按距离排序：asc 顺序(默认)， desc 倒叙
   */
  sortByDistance?: string;
};

export type ShelterListUsingGetResponse = 接口返回结果_List_应急避难场所__;

export type ShelterStatisticsUsingGetData = {
  /**
   * 事件id
   */
  eventId: number;
};

export type ShelterStatisticsUsingGetResponse =
  接口返回结果_EmergencyShelterStatisVO_;

export type TransferUsingPostData = {
  /**
   * transferDTO
   */
  transferDto: 转移安置参数;
};

export type TransferUsingPostResponse = 接口返回结果_Void_;

export type SaveUsingPost15Data = {
  /**
   * dto
   */
  dto: EventImpactAnalysisSaveDTO;
};

export type SaveUsingPost15Response = 接口返回结果_Void_;

export type DeleteUsingDelete13Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete13Response = 接口返回结果_Void_;

export type AnalyzeUsingGetData = {
  /**
   * 距离(0-1000KM):单位(千米)
   */
  distance: number;
  /**
   * 事件ID
   */
  eventId: number;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type AnalyzeUsingGetResponse = 接口返回结果_List_Tree_string___;

export type AnalyzeDataUsingGetData = {
  /**
   * 距离(0-1000KM):单位(千米)
   */
  distance: number;
  /**
   * 事件ID
   */
  eventId: number;
  /**
   * 资源ID
   */
  id: string;
  /**
   * 纬度
   */
  latitude?: string;
  /**
   * 经度
   */
  longitude?: string;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type AnalyzeDataUsingGetResponse =
  接口返回结果_分页结果数据_ResourceDataCategoryDataVo__;

export type AnalyzeDataByLatLonUsingGetData = {
  /**
   * 距离(0-1000KM):单位(千米)
   */
  distance: number;
  /**
   * 事件ID
   */
  eventId: number;
  /**
   * 资源ID
   */
  id: string;
  /**
   * 纬度
   */
  latitude?: string;
  /**
   * 经度
   */
  longitude?: string;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type AnalyzeDataByLatLonUsingGetResponse =
  接口返回结果_分页结果数据_ResourceDataCategoryDataVo__;

export type AnalyzeListUsingGetData = {
  /**
   * 事件ID
   */
  planId: number;
};

export type AnalyzeListUsingGetResponse =
  接口返回结果_List_ResourceDataCategorySmallVo__;

export type ExportUsingPostData = {
  /**
   * query
   */
  query: 调度报告查询参数;
};

export type ExportUsingPostResponse = unknown;

export type LatestUsingGetData = {
  /**
   * 事件ID
   */
  eventId: number;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type LatestUsingGetResponse = 接口返回结果_EventImpactAnalysisVO_;

export type ListUsingGet17Data = {
  /**
   * 事件ID
   */
  eventId: number;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type ListUsingGet17Response =
  接口返回结果_分页结果数据_EventImpactStatusVO__;

export type SaveUsingPost16Data = {
  /**
   * dto
   */
  dto: EventImpactStatusSaveDTO;
};

export type SaveUsingPost16Response = 接口返回结果_Void_;

export type DeleteUsingDelete14Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete14Response = 接口返回结果_Void_;

export type CurrentUsingGetData = {
  /**
   * 事件ID
   */
  eventId: number;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type CurrentUsingGetResponse = 接口返回结果_EventImpactStatusVO_;

export type ListUsingGet18Data = {
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type ListUsingGet18Response = 接口返回结果_分页结果数据_EventPlanVO__;

export type SaveUsingPost17Data = {
  /**
   * dto
   */
  dto: EventPlanSaveDTO;
};

export type SaveUsingPost17Response = 接口返回结果_Void_;

export type UpdateUsingPut14Data = {
  /**
   * dto
   */
  dto: EventPlanUpdateDTO;
};

export type UpdateUsingPut14Response = 接口返回结果_Void_;

export type DeleteUsingDelete15Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete15Response = 接口返回结果_Void_;

export type GetDetailUsingGet12Data = {
  /**
   * eventPlanId
   */
  eventPlanId: number;
};

export type GetDetailUsingGet12Response = 接口返回结果_EventPlanVO_;

export type ListUsingGet19Data = {
  /**
   * 事件id
   */
  eventId?: number;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type ListUsingGet19Response =
  接口返回结果_分页结果数据_EventPlanStepVO__;

export type SaveUsingPost18Data = {
  /**
   * dto
   */
  dto: EventPlanStepSaveDTO;
};

export type SaveUsingPost18Response = 接口返回结果_Void_;

export type UpdateUsingPut15Data = {
  /**
   * dto
   */
  dto: EventPlanStepUpdateDTO;
};

export type UpdateUsingPut15Response = 接口返回结果_Void_;

export type DeleteUsingDelete16Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete16Response = 接口返回结果_Void_;

export type GetDetailUsingGet13Data = {
  /**
   * id
   */
  id: number;
};

export type GetDetailUsingGet13Response = 接口返回结果_EventPlanStepVO_;

export type ListUsingGet20Data = {
  /**
   * 预案流程ID
   */
  eventStepId?: number;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type ListUsingGet20Response =
  接口返回结果_分页结果数据_EventPlanTaskVO__;

export type SaveUsingPost19Data = {
  /**
   * dto
   */
  dto: EventPlanTaskSaveDTO;
};

export type SaveUsingPost19Response = 接口返回结果_Void_;

export type UpdateUsingPut16Data = {
  /**
   * dto
   */
  dto: EventPlanTaskUpdateDTO;
};

export type UpdateUsingPut16Response = 接口返回结果_Void_;

export type DeleteUsingDelete17Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete17Response = 接口返回结果_Void_;

export type GetDetailUsingGet14Data = {
  /**
   * id
   */
  id: number;
};

export type GetDetailUsingGet14Response = 接口返回结果_EventPlanTaskVO_;

export type ListUsingGet21Data = {
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type ListUsingGet21Response =
  接口返回结果_分页结果数据_EventResponseVO__;

export type SaveUsingPost20Data = {
  /**
   * dto
   */
  dto: EventResponseSaveDTO;
};

export type SaveUsingPost20Response = 接口返回结果_Void_;

export type UpdateUsingPut17Data = {
  /**
   * dto
   */
  dto: EventResponseUpdateDTO;
};

export type UpdateUsingPut17Response = 接口返回结果_Void_;

export type DeleteUsingDelete18Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete18Response = 接口返回结果_Void_;

export type GetDetailUsingGet15Data = {
  /**
   * id
   */
  id: number;
};

export type GetDetailUsingGet15Response = 接口返回结果_EventResponseVO_;

export type ListUsingGet24Data = {
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type ListUsingGet24Response =
  接口返回结果_分页结果数据_HandingEventGroupVO__;

export type SaveUsingPost21Data = {
  /**
   * dto
   */
  dto: HandingEventGroupSaveDTO;
};

export type SaveUsingPost21Response = 接口返回结果_Void_;

export type UpdateUsingPut19Data = {
  /**
   * dto
   */
  dto: HandingEventGroupUpdateDTO;
};

export type UpdateUsingPut19Response = 接口返回结果_Void_;

export type DeleteUsingDelete20Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete20Response = 接口返回结果_Void_;

export type GetDetailUsingGet17Data = {
  /**
   * id
   */
  id: number;
};

export type GetDetailUsingGet17Response = 接口返回结果_HandingEventGroupVO_;

export type ListUsingGet25Data = {
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type ListUsingGet25Response =
  接口返回结果_分页结果数据_HandingEventUserVO__;

export type SaveUsingPost22Data = {
  /**
   * dto
   */
  dto: HandingEventUserSaveDTO;
};

export type SaveUsingPost22Response = 接口返回结果_Void_;

export type UpdateUsingPut20Data = {
  /**
   * dto
   */
  dto: HandingEventUserUpdateDTO;
};

export type UpdateUsingPut20Response = 接口返回结果_Void_;

export type DeleteUsingDelete21Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete21Response = 接口返回结果_Void_;

export type GetDetailUsingGet18Data = {
  /**
   * id
   */
  id: number;
};

export type GetDetailUsingGet18Response = 接口返回结果_HandingEventUserVO_;

export type ListUsingGet22Data = {
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type ListUsingGet22Response =
  接口返回结果_分页结果数据_EventSummaryEvaluationVO__;

export type UpdateUsingPut18Data = {
  /**
   * dto
   */
  dto: EventSummaryEvaluationUpdateDTO;
};

export type UpdateUsingPut18Response = 接口返回结果_long_;

export type DeleteUsingDelete19Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete19Response = 接口返回结果_Void_;

export type ListUsingGet23Data = {
  /**
   * 按wkt范围搜索事件
   */
  areaWkt?: string;
  /**
   * 状态:0(待处置)、1(处置中)、2(已完结)
   */
  eventStatus?: string;
  /**
   * 事件状态
   */
  eventStatusIn?: Array<string>;
  /**
   * 事件发生时间
   */
  happenTimeEnd?: string;
  /**
   * 事件发生时间
   */
  happenTimeStart?: string;
  /**
   * 事件名称
   */
  name?: string;
  /**
   * 按照事件发生时间排序(顺序：asc;倒叙:desc)
   */
  orderByHappenTime?: string;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
  /**
   * 预案名称
   */
  planName?: string;
  /**
   * 事件类型(字典:event_type)
   */
  type?: string;
};

export type ListUsingGet23Response =
  接口返回结果_分页结果数据_SummaryEvaluationEventVO__;

export type GetDetailUsingGet16Data = {
  /**
   * 事件ID
   */
  eventId: number;
};

export type GetDetailUsingGet16Response =
  接口返回结果_EventSummaryEvaluationVO_;

export type ListUsingGet26Data = {
  /**
   * 关键字(模糊查询)
   */
  blurry?: string;
  /**
   * 事件分类
   */
  eventType?: string;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
  /**
   * 是否是模板，默认false
   */
  templated?: boolean;
  /**
   * 预案分类
   */
  type?: string;
};

export type ListUsingGet26Response = 接口返回结果_分页结果数据_HandingPlanVO__;

export type SaveUsingPost23Data = {
  /**
   * dto
   */
  dto: HandingPlanSaveDTO;
};

export type SaveUsingPost23Response = 接口返回结果_long_;

export type UpdateUsingPut22Data = {
  /**
   * dto
   */
  dto: HandingPlanUpdateDTO;
};

export type UpdateUsingPut22Response = 接口返回结果_Void_;

export type DeleteUsingDelete22Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete22Response = 接口返回结果_Void_;

export type CopyFromUsingPostData = {
  /**
   * dto
   */
  dto: HandingPlanCopyDTO;
};

export type CopyFromUsingPostResponse = 接口返回结果_long_;

export type GetDetailUsingGet19Data = {
  /**
   * id
   */
  id: number;
};

export type GetDetailUsingGet19Response = 接口返回结果_HandingPlanVO_;

export type UpdateUsingPut21Data = {
  /**
   * dto
   */
  dto: HandingPlanStepFlowDataUpdateDTO;
};

export type UpdateUsingPut21Response = 接口返回结果_Void_;

export type ResponseUsingPostData = {
  /**
   * dto
   */
  dto: EventResponseSaveDTO;
};

export type ResponseUsingPostResponse = 接口返回结果_Void_;

export type HandingPlanStaticsUsingGetResponse = 接口返回结果_统计分析元数据_;

export type StatusUsingGetData = {
  /**
   * 关键字(模糊查询)
   */
  blurry?: string;
  /**
   * 状态
   */
  eventStatus?: string;
  /**
   * 事件分类
   */
  eventType?: string;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type StatusUsingGetResponse = 接口返回结果_分页结果数据_EventDetailsVO__;

export type SetTemplateUsingPostData = {
  /**
   * dto
   */
  dto: HandingPlanCopyDTO;
};

export type SetTemplateUsingPostResponse = 接口返回结果_Void_;

export type HandingPlanYearStaticsUsingGetData = {
  /**
   * year
   */
  year: number;
};

export type HandingPlanYearStaticsUsingGetResponse =
  接口返回结果_统计分析元数据_;

export type ListUsingGet27Data = {
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
  /**
   * 预案ID
   */
  planId?: number;
};

export type ListUsingGet27Response =
  接口返回结果_分页结果数据_HandingPlanGroupVO__;

export type SaveUsingPost24Data = {
  /**
   * dto
   */
  dto: HandingPlanGroupSaveDTO;
};

export type SaveUsingPost24Response = 接口返回结果_Void_;

export type UpdateUsingPut23Data = {
  /**
   * dto
   */
  dto: HandingPlanGroupUpdateDTO;
};

export type UpdateUsingPut23Response = 接口返回结果_Void_;

export type DeleteUsingDelete23Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete23Response = 接口返回结果_Void_;

export type GetDetailUsingGet20Data = {
  /**
   * id
   */
  id: number;
};

export type GetDetailUsingGet20Response = 接口返回结果_HandingPlanGroupVO_;

export type ListUsingGet30Data = {
  /**
   * 分组ID
   */
  groupId?: number;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type ListUsingGet30Response =
  接口返回结果_分页结果数据_HandingPlanUserVO__;

export type SaveUsingPost29Data = {
  /**
   * dto
   */
  dto: HandingPlanUserSaveDTO;
};

export type SaveUsingPost29Response = 接口返回结果_Void_;

export type UpdateUsingPut26Data = {
  /**
   * dto
   */
  dto: HandingPlanUserUpdateDTO;
};

export type UpdateUsingPut26Response = 接口返回结果_Void_;

export type DeleteUsingDelete27Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete27Response = 接口返回结果_Void_;

export type SaveUsingPost28Data = {
  /**
   * dto
   */
  dto: HandingPlanUserBatchSaveDTO;
};

export type SaveUsingPost28Response = 接口返回结果_Void_;

export type GetDetailUsingGet23Data = {
  /**
   * id
   */
  id: number;
};

export type GetDetailUsingGet23Response = 接口返回结果_HandingPlanUserVO_;

export type SaveUsingGetData = {
  /**
   * 预案ID
   */
  planId: number;
};

export type SaveUsingGetResponse = 接口返回结果_List_ResourceDataCategory__;

export type SaveUsingPost25Data = {
  /**
   * handingPlanResourceDto
   */
  handingPlanResourceDto: HandingPlanResourceDto;
};

export type SaveUsingPost25Response = 接口返回结果_Void_;

export type DeleteUsingDelete24Data = {
  /**
   * handingPlanResourceDto
   */
  handingPlanResourceDto: HandingPlanResourceDto;
};

export type DeleteUsingDelete24Response = 接口返回结果_Void_;

export type GettreeUsingGetResponse = 接口返回结果_List_Tree_string___;

export type GettreedataUsingGetData = {
  /**
   * 距离(0-1000KM):单位(千米)
   */
  distance: number;
  /**
   * 事件ID
   */
  eventId: number;
};

export type GettreedataUsingGetResponse = 接口返回结果_List_Tree_string___;

export type GetTreeDataPositionUsingGetData = {
  /**
   * 业务资源分类编码
   */
  categoryCode?: string;
  /**
   * 距离(0-1000KM):单位(千米)
   */
  distance: number;
  /**
   * 经度
   */
  latitude: number;
  /**
   * 经度
   */
  longitude: number;
};

export type GetTreeDataPositionUsingGetResponse =
  接口返回结果_List_Tree_string___;

export type ListUsingGet28Data = {
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
  /**
   * 预案ID
   */
  preId?: number;
};

export type ListUsingGet28Response =
  接口返回结果_分页结果数据_HandingPlanStepVO__;

export type SaveUsingPost26Data = {
  /**
   * dto
   */
  dto: HandingPlanStepSaveDTO;
};

export type SaveUsingPost26Response = 接口返回结果_long_;

export type UpdateUsingPut24Data = {
  /**
   * dto
   */
  dto: HandingPlanStepUpdateDTO;
};

export type UpdateUsingPut24Response = 接口返回结果_Void_;

export type DeleteUsingDelete25Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete25Response = 接口返回结果_Void_;

export type GetDetailUsingGet21Data = {
  /**
   * id
   */
  id: number;
};

export type GetDetailUsingGet21Response = 接口返回结果_HandingPlanStepVO_;

export type ListUsingGet29Data = {
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
  /**
   * 预案流程ID
   */
  stepId?: number;
};

export type ListUsingGet29Response =
  接口返回结果_分页结果数据_HandingPlanTaskVO__;

export type SaveUsingPost27Data = {
  /**
   * dto
   */
  dto: HandingPlanTaskSaveDTO;
};

export type SaveUsingPost27Response = 接口返回结果_Void_;

export type UpdateUsingPut25Data = {
  /**
   * dto
   */
  dto: HandingPlanTaskUpdateDTO;
};

export type UpdateUsingPut25Response = 接口返回结果_Void_;

export type DeleteUsingDelete26Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete26Response = 接口返回结果_Void_;

export type GetDetailUsingGet22Data = {
  /**
   * id
   */
  id: number;
};

export type GetDetailUsingGet22Response = 接口返回结果_HandingPlanTaskVO_;

export type GroupListUsingGetData = {
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
  /**
   * 预案任务ID
   */
  taskId: number;
};

export type GroupListUsingGetResponse =
  接口返回结果_分页结果数据_HandingPlanGroupVO__;

export type SaveGroupUsingPostData = {
  /**
   * dto
   */
  dto: HandingPlanTaskGroupSaveDTO;
};

export type SaveGroupUsingPostResponse = 接口返回结果_Void_;

export type DeleteGroupUsingDeleteData = {
  /**
   * dto
   */
  dto: HandingPlanTaskGroupDeleteDTO;
};

export type DeleteGroupUsingDeleteResponse = 接口返回结果_Void_;

export type GetDetailUsingGet24Data = {
  /**
   * 消息发布ID
   */
  id: number;
};

export type GetDetailUsingGet24Response = 接口返回结果_InformationReleaseVo_;

export type SaveUsingPost30Data = {
  /**
   * dto
   */
  dto: InformationReleaseSaveDto;
};

export type SaveUsingPost30Response = 接口返回结果_Void_;

export type DeleteUsingDelete28Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete28Response = 接口返回结果_Void_;

export type ListUsingGet31Data = {
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
  /**
   * 消息类型
   */
  releaseType?: string;
};

export type ListUsingGet31Response =
  接口返回结果_分页结果数据_InformationReleaseVo__;

export type GetMonthStaticsUsingGetData = {
  /**
   * year
   */
  year: number;
};

export type GetMonthStaticsUsingGetResponse = 接口返回结果_统计分析元数据_;

export type GetStaticsUsingGetResponse = 接口返回结果_统计分析元数据_;

export type GetTemplateListUsingGetResponse =
  接口返回结果_List_InformationTemplateVo__;

export type GetDetailUsingGet25Data = {
  /**
   * 消息模板ID
   */
  id: number;
};

export type GetDetailUsingGet25Response = 接口返回结果_InformationTemplate对象_;

export type SaveUsingPost31Data = {
  /**
   * dto
   */
  dto: InformationTemplateSaveDto;
};

export type SaveUsingPost31Response = 接口返回结果_Void_;

export type UpdateUsingPut27Data = {
  /**
   * dto
   */
  dto: InformationTemplateUpdateDto;
};

export type UpdateUsingPut27Response = 接口返回结果_Void_;

export type DeleteUsingDelete29Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete29Response = 接口返回结果_Void_;

export type ListUsingGet32Data = {
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
  /**
   * 标题
   */
  title?: string;
};

export type ListUsingGet32Response =
  接口返回结果_分页结果数据_InformationTemplateVo__;

export type ListUsingGet33Data = {
  /**
   * 关键字
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
  /**
   * 标签
   */
  tags?: Array<string>;
  /**
   * 类型
   */
  type?: string;
};

export type ListUsingGet33Response =
  接口返回结果_分页结果数据_KnowledgeBaseVO__;

export type SaveUsingPost32Data = {
  /**
   * dto
   */
  dto: KnowledgeBaseSaveDTO;
};

export type SaveUsingPost32Response = 接口返回结果_Void_;

export type UpdateUsingPut28Data = {
  /**
   * dto
   */
  dto: KnowledgeBaseUpdateDTO;
};

export type UpdateUsingPut28Response = 接口返回结果_Void_;

export type DeleteUsingDelete30Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete30Response = 接口返回结果_Void_;

export type GetDetailUsingGet26Data = {
  /**
   * id
   */
  id: number;
};

export type GetDetailUsingGet26Response = 接口返回结果_KnowledgeBaseVO_;

export type GetMobileVersionDetailUsingGetData = {
  /**
   * APP版本ID
   */
  id: number;
};

export type GetMobileVersionDetailUsingGetResponse =
  接口返回结果_MobileVersionDetailVo_;

export type SaveUsingPost33Data = {
  /**
   * dto
   */
  dto: MobileVersionSaveDto;
};

export type SaveUsingPost33Response = 接口返回结果;

export type UpdateUsingPut29Data = {
  /**
   * dto
   */
  dto: MobileVersionUpdateDto;
};

export type UpdateUsingPut29Response = 接口返回结果;

export type DeleteUsingDelete31Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete31Response = 接口返回结果;

export type ListUsingGet34Data = {
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
  /**
   * 版本号
   */
  version?: string;
};

export type ListUsingGet34Response =
  接口返回结果_分页结果数据_MobileVersionVo__;

export type DataCategoryUsingGet1Response = 接口返回结果_List_Tree_string___;

export type DataCategoryBottomUsingGetResponse =
  接口返回结果_List_Tree_string___;

export type StatisUsingGet1Response = 接口返回结果_List_统计分析元数据__;

export type ListUsingGet35Response =
  接口返回结果_分页结果数据_DutySchedulingVO__;

export type ListUsingGet36Data = {
  /**
   * 市
   */
  city?: string;
  /**
   * 预警等级
   */
  level?: string;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
  /**
   * 省
   */
  province?: string;
  /**
   * 区
   */
  stationname?: string;
  /**
   * 预警种类
   */
  type?: string;
};

export type ListUsingGet36Response = 接口返回结果_分页结果数据_EarlyWarningVO__;

export type ListUsingGet37Data = {
  /**
   * 事件ID
   */
  eventId: number;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type ListUsingGet37Response =
  接口返回结果_分页结果数据_PlotMeasuringVO__;

export type SaveUsingPost34Data = {
  /**
   * dto
   */
  dto: PlotMeasuringSaveDTO;
};

export type SaveUsingPost34Response = 接口返回结果_long_;

export type UpdateUsingPut30Data = {
  /**
   * dto
   */
  dto: PlotMeasuringUpdateDTO;
};

export type UpdateUsingPut30Response = 接口返回结果_Void_;

export type DeleteUsingDelete32Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete32Response = 接口返回结果_Void_;

export type ListUsingGet38Data = {
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type ListUsingGet38Response =
  接口返回结果_分页结果数据_ResourceScheduleVO__;

export type SaveUsingPost35Data = {
  /**
   * dto
   */
  dto: ResourceScheduleSaveDTO;
};

export type SaveUsingPost35Response = 接口返回结果_Void_;

export type UpdateUsingPut31Data = {
  /**
   * dto
   */
  dto: ResourceScheduleUpdateDTO;
};

export type UpdateUsingPut31Response = 接口返回结果_Void_;

export type DeleteUsingDelete33Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete33Response = 接口返回结果_Void_;

export type GetDetailUsingGet28Data = {
  /**
   * id
   */
  id: number;
};

export type GetDetailUsingGet28Response = 接口返回结果_ResourceScheduleVO_;

export type ListUsingGet39Data = {
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type ListUsingGet39Response =
  接口返回结果_分页结果数据_ShelterScheduleVO__;

export type SaveUsingPost36Data = {
  /**
   * dto
   */
  dto: ShelterScheduleSaveDTO;
};

export type SaveUsingPost36Response = 接口返回结果_Void_;

export type UpdateUsingPut32Data = {
  /**
   * dto
   */
  dto: ShelterScheduleUpdateDTO;
};

export type UpdateUsingPut32Response = 接口返回结果_Void_;

export type DeleteUsingDelete34Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete34Response = 接口返回结果_Void_;

export type GetDetailUsingGet29Data = {
  /**
   * id
   */
  id: number;
};

export type GetDetailUsingGet29Response = 接口返回结果_ShelterScheduleVO_;

export type ListUsingGet41Data = {
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type ListUsingGet41Response = 接口返回结果_分页结果数据_SmsScheduleVO__;

export type SaveUsingPost37Data = {
  /**
   * dto
   */
  dto: SmsScheduleSaveDTO;
};

export type SaveUsingPost37Response = 接口返回结果_Void_;

export type ListUsingGet40Response = 接口返回结果_分页结果数据_EventVO__;

export type ListGroupUsingGet1Data = {
  /**
   * 事件ID
   */
  eventId?: number;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type ListGroupUsingGet1Response =
  接口返回结果_分页结果数据_HandingEventGroupVO__;

export type GetSendDetailUsingGetData = {
  /**
   * ID
   */
  id: number;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
  /**
   * 接收号码
   */
  phone?: string;
};

export type GetSendDetailUsingGetResponse =
  接口返回结果_分页结果数据_SmsLogVO__;

export type ListUsingGet43Data = {
  /**
   * 事件ID
   */
  eventId: number;
  /**
   * 事件响应任务ID
   */
  eventTaskId?: number;
  /**
   * 任务ID
   */
  groupId?: number;
  /**
   * 是手动发布任务
   */
  manualTask?: boolean;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type ListUsingGet43Response = 接口返回结果_分页结果数据_TaskVO__;

export type SaveUsingPost39Data = {
  /**
   * dto
   */
  dto: TaskSaveDTO;
};

export type SaveUsingPost39Response = 接口返回结果_Void_;

export type UpdateUsingPut34Data = {
  /**
   * dto
   */
  dto: TaskUpdateDTO;
};

export type UpdateUsingPut34Response = 接口返回结果_Void_;

export type DeleteUsingDelete36Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete36Response = 接口返回结果_Void_;

export type AssignUsingPostData = {
  /**
   * dto
   */
  dto: TaskAssignDTO;
};

export type AssignUsingPostResponse = 接口返回结果_Void_;

export type GetDetailUsingGet31Data = {
  /**
   * 任务id
   */
  id: number;
};

export type GetDetailUsingGet31Response = 接口返回结果_TaskDetailsVO_;

export type ListEventUsingGetData = {
  /**
   * 事件ID
   */
  eventId: number;
  /**
   * 事件响应任务ID
   */
  eventTaskId?: number;
  /**
   * 小组ID
   */
  groupId?: number;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type ListEventUsingGetResponse =
  接口返回结果_分页结果数据_TaskDetailsVO__;

export type ListDetailsUsingGetData = {
  /**
   * 事件ID
   */
  eventId: number;
  /**
   * 事件响应任务ID
   */
  eventTaskId: number;
  /**
   * 小组ID
   */
  groupId: number;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type ListDetailsUsingGetResponse =
  接口返回结果_分页结果数据_TaskDetailsVO__;

export type StopUsingPutData = {
  /**
   * taskStopDTO
   */
  taskStopDto: TaskGroupDTO;
};

export type StopUsingPutResponse = 接口返回结果_Void_;

export type RestartByGroupUsingPutData = {
  /**
   * taskStopDTO
   */
  taskStopDto: TaskGroupDTO;
};

export type RestartByGroupUsingPutResponse = 接口返回结果_Void_;

export type RestartUsingPutData = {
  /**
   * id
   */
  id: number;
};

export type RestartUsingPutResponse = 接口返回结果_Void_;

export type StatisUsingGet2Data = {
  /**
   * 事件id
   */
  eventId: number;
};

export type StatisUsingGet2Response = 接口返回结果_TaskStatisVO_;

export type CompleteStepUsingPutData = {
  /**
   * taskStepCompleteDTO
   */
  taskStepCompleteDto: TaskGroupStepDTO;
};

export type CompleteStepUsingPutResponse = 接口返回结果_Void_;

export type RestartStepUsingPutData = {
  /**
   * taskStopDTO
   */
  taskStopDto: TaskGroupStepDTO;
};

export type RestartStepUsingPutResponse = 接口返回结果_Void_;

export type StopUsingPut1Data = {
  /**
   * id
   */
  id: number;
};

export type StopUsingPut1Response = 接口返回结果_Void_;

export type ListUsingGet42Data = {
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
};

export type ListUsingGet42Response = 接口返回结果_分页结果数据_TaskAssignVO__;

export type SaveUsingPost38Data = {
  /**
   * dto
   */
  dto: TaskAssignSaveDTO;
};

export type SaveUsingPost38Response = 接口返回结果_Void_;

export type UpdateUsingPut33Data = {
  /**
   * dto
   */
  dto: TaskAssignUpdateDTO;
};

export type UpdateUsingPut33Response = 接口返回结果_Void_;

export type DeleteUsingDelete35Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete35Response = 接口返回结果_Void_;

export type GetDetailUsingGet30Data = {
  /**
   * assignId
   */
  assignId: number;
};

export type GetDetailUsingGet30Response = 接口返回结果_TaskAssignVO_;

export type ListUsingGet44Data = {
  /**
   * 指派记录ID
   */
  assignId?: number;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
  /**
   * 任务ID
   */
  taskId?: number;
};

export type ListUsingGet44Response = 接口返回结果_分页结果数据_TaskLogsVO__;

export type SaveUsingPost40Data = {
  /**
   * dto
   */
  dto: TaskLogsSaveDTO;
};

export type SaveUsingPost40Response = 接口返回结果_Void_;

export type UpdateUsingPut35Data = {
  /**
   * dto
   */
  dto: TaskLogsUpdateDTO;
};

export type UpdateUsingPut35Response = 接口返回结果_Void_;

export type DeleteUsingDelete37Data = {
  /**
   * ids
   */
  ids: Array<number>;
};

export type DeleteUsingDelete37Response = 接口返回结果_Void_;

export type GetDetailUsingGet32Data = {
  /**
   * 日志ID
   */
  id: number;
};

export type GetDetailUsingGet32Response = 接口返回结果_TaskLogsVO_;

export type ListUsingGet45Data = {
  /**
   * 分组名称
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
  /**
   * 父级id
   */
  parentId?: number;
  /**
   * 父级为空
   */
  pidIsNull?: boolean;
};

export type ListUsingGet45Response =
  接口返回结果_分页结果数据_VideoSurveillanceGroupVo__;

export type TreeUsingGetData = {
  /**
   * 分组名称
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
  /**
   * 父级id
   */
  parentId?: number;
  /**
   * 父级为空
   */
  pidIsNull?: boolean;
};

export type TreeUsingGetResponse = 接口返回结果_List_VideoSurveillanceGroupVo__;

export type VideoListUsingGetData = {
  /**
   * 分组ID
   */
  groupId?: number;
  /**
   * 当前页码, 默认第一页
   */
  pageNum?: number;
  /**
   * 每页条数， 默认每页50条
   */
  pageSize?: number;
  /**
   * 设备名称
   */
  videoName?: string;
};

export type VideoListUsingGetResponse =
  接口返回结果_分页结果数据_VideoSurveillanceVo__;

export type VideodetailUsingGetData = {
  /**
   * 设备ID
   */
  id: number;
};

export type VideodetailUsingGetResponse = 接口返回结果_VideoSurveillance_;

export type $OpenApiTs = {
  "/address-book": {
    get: {
      req: ListUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_AddressBookVO__;
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
  "/address-book/data": {
    get: {
      req: ListDataUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_AddressBookVO__;
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
  "/address-book/group": {
    get: {
      req: ListGroupUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_AddressBookGroupVO__;
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
  "/disaster": {
    get: {
      req: ListUsingGet1Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_DisasterVO__;
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
      req: SaveUsingPostData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: UpdateUsingPutData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
        200: 接口返回结果_Void_;
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
  "/disaster/detail": {
    get: {
      req: GetDetailUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_DisasterVO_;
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
  "/disaster/event": {
    get: {
      req: ListByEventUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_DisasterVO_;
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
  "/disaster/resource-data-category": {
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
  "/event": {
    get: {
      req: ListUsingGet12Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_EventVO__;
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
      req: SaveUsingPost12Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_long_;
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
      req: UpdateUsingPut10Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete10Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/event-dynamics": {
    get: {
      req: ListUsingGet14Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_EventDynamicsVO__;
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
      req: SaveUsingPost13Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: UpdateUsingPut11Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete11Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/event-dynamics/detail": {
    get: {
      req: GetDetailUsingGet10Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_EventDynamicsVO_;
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
  "/event-dynamics/leader": {
    get: {
      req: LeaderUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_EventDynamicsVO__;
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
      req: SaveLeaderUsingPostData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/event/detail": {
    get: {
      req: GetDetailUsingGet9Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_EventVO_;
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
  "/event/end": {
    put: {
      req: StartUsingPut1Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/event/finish": {
    put: {
      req: FinishUsingPutData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/event/formal": {
    post: {
      req: AddFormalUsingPostData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_long_;
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
  "/event/formalData": {
    post: {
      req: AddFormalDataUsingPostData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_long_;
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
  "/event/group": {
    get: {
      req: ListUsingGet13Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_HandingEventGroupVO__;
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
  "/event/groups": {
    get: {
      res: {
        /**
         * OK
         */
        200: 接口返回结果_List_EventStatusCountVO__;
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
  "/event/plan": {
    get: {
      req: PlanUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_EventStartDetailsVO_;
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
  "/event/plan/group": {
    get: {
      req: EventStepGroupUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_HandingEventGroupDetailsVO_;
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
  "/event/plan/step": {
    get: {
      req: EventStepTaskUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_EventPlanStartStepVO_;
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
  "/event/plan/summary": {
    get: {
      req: ListUsingGet11Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_EventPlanVO__;
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
  "/event/start": {
    put: {
      req: StartUsingPutData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/event/statics": {
    get: {
      req: StatisUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_统计分析元数据_;
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
  "/duty-group": {
    get: {
      req: ListUsingGet2Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_DutyGroupVO__;
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
      req: SaveUsingPost1Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: UpdateUsingPut1Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete1Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/duty-group/detail": {
    get: {
      req: GetDetailUsingGet1Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_DutyGroupVO_;
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
  "/duty-log": {
    get: {
      req: ListUsingGet3Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_DutyLogVO__;
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
      req: SaveUsingPost2Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: UpdateUsingPut2Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete2Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/duty-log/detail": {
    get: {
      req: GetDetailUsingGet2Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_DutyLogVO_;
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
  "/duty-log/export": {
    get: {
      req: ExportUsingGetData;
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
  "/duty-scheduling": {
    get: {
      req: ListUsingGet4Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_DutySchedulingVO__;
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
      req: SaveUsingPost4Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: UpdateUsingPut3Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete3Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/duty-scheduling/batch": {
    post: {
      req: SaveUsingPost3Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/duty-scheduling/detail": {
    get: {
      req: GetDetailUsingGet3Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_DutySchedulingVO_;
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
  "/duty-scheduling/month": {
    get: {
      req: ListMonthUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_DutySchedulingVO__;
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
  "/duty-user": {
    get: {
      req: ListUsingGet5Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_DutyUserVO__;
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
      req: SaveUsingPost5Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: UpdateUsingPut4Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete4Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/duty-user/dept/list": {
    get: {
      req: DeptListUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_DeptVO__;
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
  "/duty-user/dept/users": {
    get: {
      req: DeptUserListUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_AddressBookVO__;
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
  "/duty-user/detail": {
    get: {
      req: GetDetailUsingGet4Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_DutyUserVO_;
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
  "/duty-user/select": {
    post: {
      req: SelectUsingPostData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/early-warning-manage": {
    get: {
      req: GetDetailUsingGet5Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_EarlyWarningManageDetailVo_;
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
      req: SaveUsingPost6Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: UpdateUsingPut5Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete5Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/early-warning-manage/icon": {
    get: {
      res: {
        /**
         * OK
         */
        200: 接口返回结果_List_IconVo__;
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
  "/early-warning-manage/list": {
    get: {
      req: ListUsingGet6Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_EarlyWarningManageVo__;
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
  "/early-warning-manage/release": {
    post: {
      req: SaveUsingPost7Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/early-warning-manage/type": {
    get: {
      req: GetSmallTypeListUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_List_EarlyWaringTypeVo__;
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
  "/early-warning-release": {
    get: {
      req: GetDetailUsingGet6Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_EarlyWarningReleaseDetailVo_;
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
      req: SaveUsingPost8Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: UpdateUsingPut6Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete6Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/early-warning-release/list": {
    get: {
      req: ListUsingGet7Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_EarlyWarningReleaseVo__;
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
  "/emergency-expert": {
    get: {
      req: ListUsingGet8Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_EmergencyExpertVO__;
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
      req: SaveUsingPost9Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: UpdateUsingPut7Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete7Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/emergency-expert/detail": {
    get: {
      req: GetDetailUsingGet7Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_EmergencyExpertVO_;
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
  "/emergency-team-schedule": {
    get: {
      req: ListUsingGet9Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_EmergencyTeamScheduleVO__;
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
      req: SaveUsingPost10Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: UpdateUsingPut8Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete8Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/emergency-team-schedule/detail": {
    get: {
      req: GetDetailUsingGet8Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_EmergencyTeamScheduleVO_;
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
  "/event-case": {
    get: {
      req: ListUsingGet10Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_EventCaseVO__;
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
      req: SaveUsingPost11Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: UpdateUsingPut9Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete9Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/event-force-analysis": {
    get: {
      req: ListUsingGet15Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_EventForceAnalysisVO__;
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
      req: SaveUsingPost14Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: UpdateUsingPut12Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete12Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/event-force-analysis/detail": {
    get: {
      req: GetDetailUsingGet11Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_EventForceAnalysisVO_;
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
  "/event-force-analysis/material-dispatch": {
    get: {
      req: ListUsingGet16Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_List_物资调拨__;
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
  "/event-force-analysis/material-dispatch/allocation": {
    post: {
      req: AllocateUsingPostData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/event-force-analysis/material-dispatch/arrive": {
    post: {
      req: ArriveUsingPost1Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/event-force-analysis/material-dispatch/statis": {
    get: {
      req: MaterialDispatchStatisticsUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_List_EventResourceStatisVO__;
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
  "/event-force-analysis/rescue-team": {
    get: {
      req: RescueForceTeamUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_List_RescueForceTeamVO__;
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
  "/event-force-analysis/rescue-team/arrive": {
    post: {
      req: ArriveUsingPostData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/event-force-analysis/rescue-team/dispatch": {
    post: {
      req: DispatchUsingPostData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/event-force-analysis/rescue-team/finish": {
    post: {
      req: FinishUsingPostData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/event-force-analysis/rescue-team/statis": {
    get: {
      req: RescueForceTeaStatisticsUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_List_RescueForceTeamStatisVO__;
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
  "/event-force-analysis/shelter": {
    get: {
      req: ShelterListUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_List_应急避难场所__;
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
  "/event-force-analysis/shelter/statis": {
    get: {
      req: ShelterStatisticsUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_EmergencyShelterStatisVO_;
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
  "/event-force-analysis/shelter/transfer": {
    post: {
      req: TransferUsingPostData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/event-impact-analysis": {
    post: {
      req: SaveUsingPost15Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete13Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/event-impact-analysis/analyze": {
    get: {
      req: AnalyzeUsingGetData;
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
  "/event-impact-analysis/analyze/data": {
    get: {
      req: AnalyzeDataUsingGetData;
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
  "/event-impact-analysis/analyze/dataByLatLon": {
    get: {
      req: AnalyzeDataByLatLonUsingGetData;
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
  "/event-impact-analysis/analyze/list": {
    get: {
      req: AnalyzeListUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_List_ResourceDataCategorySmallVo__;
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
  "/event-impact-analysis/export": {
    post: {
      req: ExportUsingPostData;
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
  "/event-impact-analysis/latest": {
    get: {
      req: LatestUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_EventImpactAnalysisVO_;
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
  "/event-impact-status": {
    get: {
      req: ListUsingGet17Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_EventImpactStatusVO__;
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
      req: SaveUsingPost16Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete14Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/event-impact-status/current": {
    get: {
      req: CurrentUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_EventImpactStatusVO_;
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
  "/event-plan": {
    get: {
      req: ListUsingGet18Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_EventPlanVO__;
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
      req: SaveUsingPost17Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: UpdateUsingPut14Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete15Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/event-plan/detail": {
    get: {
      req: GetDetailUsingGet12Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_EventPlanVO_;
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
  "/event-plan-step": {
    get: {
      req: ListUsingGet19Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_EventPlanStepVO__;
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
      req: SaveUsingPost18Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: UpdateUsingPut15Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete16Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/event-plan-step/detail": {
    get: {
      req: GetDetailUsingGet13Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_EventPlanStepVO_;
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
  "/event-plan-task": {
    get: {
      req: ListUsingGet20Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_EventPlanTaskVO__;
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
      req: SaveUsingPost19Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: UpdateUsingPut16Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete17Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/event-plan-task/detail": {
    get: {
      req: GetDetailUsingGet14Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_EventPlanTaskVO_;
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
  "/event-response": {
    get: {
      req: ListUsingGet21Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_EventResponseVO__;
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
      req: SaveUsingPost20Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: UpdateUsingPut17Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete18Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/event-response/detail": {
    get: {
      req: GetDetailUsingGet15Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_EventResponseVO_;
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
  "/handing-event-group": {
    get: {
      req: ListUsingGet24Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_HandingEventGroupVO__;
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
      req: SaveUsingPost21Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: UpdateUsingPut19Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete20Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/handing-event-group/detail": {
    get: {
      req: GetDetailUsingGet17Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_HandingEventGroupVO_;
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
  "/handing-event-user": {
    get: {
      req: ListUsingGet25Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_HandingEventUserVO__;
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
      req: SaveUsingPost22Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: UpdateUsingPut20Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete21Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/handing-event-user/detail": {
    get: {
      req: GetDetailUsingGet18Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_HandingEventUserVO_;
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
  "/event-summary-evaluation": {
    get: {
      req: ListUsingGet22Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_EventSummaryEvaluationVO__;
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
      req: UpdateUsingPut18Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_long_;
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
      req: DeleteUsingDelete19Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/event-summary-evaluation/event": {
    get: {
      req: ListUsingGet23Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_SummaryEvaluationEventVO__;
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
  "/event-summary-evaluation/event/details": {
    get: {
      req: GetDetailUsingGet16Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_EventSummaryEvaluationVO_;
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
  "/handing-plan": {
    get: {
      req: ListUsingGet26Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_HandingPlanVO__;
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
      req: SaveUsingPost23Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_long_;
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
      req: UpdateUsingPut22Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete22Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/handing-plan/copy": {
    post: {
      req: CopyFromUsingPostData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_long_;
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
  "/handing-plan/detail": {
    get: {
      req: GetDetailUsingGet19Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_HandingPlanVO_;
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
  "/handing-plan/flow": {
    put: {
      req: UpdateUsingPut21Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/handing-plan/response": {
    post: {
      req: ResponseUsingPostData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/handing-plan/statics": {
    get: {
      res: {
        /**
         * OK
         */
        200: 接口返回结果_统计分析元数据_;
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
  "/handing-plan/status": {
    get: {
      req: StatusUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_EventDetailsVO__;
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
  "/handing-plan/template": {
    post: {
      req: SetTemplateUsingPostData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/handing-plan/yearstatics": {
    get: {
      req: HandingPlanYearStaticsUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_统计分析元数据_;
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
  "/handing-plan-group": {
    get: {
      req: ListUsingGet27Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_HandingPlanGroupVO__;
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
      req: SaveUsingPost24Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: UpdateUsingPut23Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete23Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/handing-plan-group/detail": {
    get: {
      req: GetDetailUsingGet20Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_HandingPlanGroupVO_;
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
  "/handing-plan-user": {
    get: {
      req: ListUsingGet30Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_HandingPlanUserVO__;
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
      req: SaveUsingPost29Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: UpdateUsingPut26Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete27Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/handing-plan-user/batch-save": {
    post: {
      req: SaveUsingPost28Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/handing-plan-user/detail": {
    get: {
      req: GetDetailUsingGet23Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_HandingPlanUserVO_;
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
  "/handing-plan-resourse": {
    get: {
      req: SaveUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_List_ResourceDataCategory__;
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
      req: SaveUsingPost25Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete24Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/handing-plan-resourse/tree": {
    get: {
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
  "/handing-plan-resourse/tree/data": {
    get: {
      req: GettreedataUsingGetData;
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
  "/handing-plan-resourse/tree/data/position": {
    get: {
      req: GetTreeDataPositionUsingGetData;
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
  "/handing-plan-step": {
    get: {
      req: ListUsingGet28Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_HandingPlanStepVO__;
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
      req: SaveUsingPost26Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_long_;
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
      req: UpdateUsingPut24Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete25Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/handing-plan-step/detail": {
    get: {
      req: GetDetailUsingGet21Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_HandingPlanStepVO_;
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
  "/handing-plan-task": {
    get: {
      req: ListUsingGet29Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_HandingPlanTaskVO__;
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
      req: SaveUsingPost27Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: UpdateUsingPut25Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete26Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/handing-plan-task/detail": {
    get: {
      req: GetDetailUsingGet22Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_HandingPlanTaskVO_;
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
  "/handing-plan-task/group": {
    get: {
      req: GroupListUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_HandingPlanGroupVO__;
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
      req: SaveGroupUsingPostData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteGroupUsingDeleteData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/information-release": {
    get: {
      req: GetDetailUsingGet24Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_InformationReleaseVo_;
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
      req: SaveUsingPost30Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete28Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/information-release/list": {
    get: {
      req: ListUsingGet31Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_InformationReleaseVo__;
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
  "/information-release/month": {
    get: {
      req: GetMonthStaticsUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_统计分析元数据_;
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
  "/information-release/statics": {
    get: {
      res: {
        /**
         * OK
         */
        200: 接口返回结果_统计分析元数据_;
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
  "/information-release/template": {
    get: {
      res: {
        /**
         * OK
         */
        200: 接口返回结果_List_InformationTemplateVo__;
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
  "/information-template": {
    get: {
      req: GetDetailUsingGet25Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_InformationTemplate对象_;
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
      req: SaveUsingPost31Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: UpdateUsingPut27Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete29Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/information-template/list": {
    get: {
      req: ListUsingGet32Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_InformationTemplateVo__;
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
  "/knowledge-base": {
    get: {
      req: ListUsingGet33Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_KnowledgeBaseVO__;
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
      req: SaveUsingPost32Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: UpdateUsingPut28Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete30Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/knowledge-base/detail": {
    get: {
      req: GetDetailUsingGet26Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_KnowledgeBaseVO_;
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
  "/mobile-version": {
    get: {
      req: GetMobileVersionDetailUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_MobileVersionDetailVo_;
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
      req: SaveUsingPost33Data;
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
    put: {
      req: UpdateUsingPut29Data;
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
    delete: {
      req: DeleteUsingDelete31Data;
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
  "/mobile-version/list": {
    get: {
      req: ListUsingGet34Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_MobileVersionVo__;
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
  "/one-map/resource-data-category": {
    get: {
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
  "/one-map/resource-data-category/main": {
    get: {
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
  "/one-map/statics": {
    get: {
      res: {
        /**
         * OK
         */
        200: 接口返回结果_List_统计分析元数据__;
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
  "/one-map/today-duty": {
    get: {
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_DutySchedulingVO__;
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
  "/one-map/warning": {
    get: {
      req: ListUsingGet36Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_EarlyWarningVO__;
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
  "/plot-measuring": {
    get: {
      req: ListUsingGet37Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_PlotMeasuringVO__;
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
      req: SaveUsingPost34Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_long_;
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
      req: UpdateUsingPut30Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete32Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/resource-schedule": {
    get: {
      req: ListUsingGet38Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_ResourceScheduleVO__;
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
      req: SaveUsingPost35Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: UpdateUsingPut31Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete33Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/resource-schedule/detail": {
    get: {
      req: GetDetailUsingGet28Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_ResourceScheduleVO_;
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
  "/shelter-schedule": {
    get: {
      req: ListUsingGet39Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_ShelterScheduleVO__;
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
      req: SaveUsingPost36Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: UpdateUsingPut32Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete34Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/shelter-schedule/detail": {
    get: {
      req: GetDetailUsingGet29Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_ShelterScheduleVO_;
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
  "/sms-schedule": {
    get: {
      req: ListUsingGet41Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_SmsScheduleVO__;
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
      req: SaveUsingPost37Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/sms-schedule/event": {
    get: {
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_EventVO__;
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
  "/sms-schedule/event/group": {
    get: {
      req: ListGroupUsingGet1Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_HandingEventGroupVO__;
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
  "/sms-schedule/send/detail": {
    get: {
      req: GetSendDetailUsingGetData;
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
  "/task": {
    get: {
      req: ListUsingGet43Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_TaskVO__;
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
      req: SaveUsingPost39Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: UpdateUsingPut34Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete36Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/task/assign": {
    post: {
      req: AssignUsingPostData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/task/detail": {
    get: {
      req: GetDetailUsingGet31Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_TaskDetailsVO_;
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
  "/task/details/all": {
    get: {
      req: ListEventUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_TaskDetailsVO__;
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
  "/task/details/list": {
    get: {
      req: ListDetailsUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_TaskDetailsVO__;
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
  "/task/group-task/complete": {
    put: {
      req: StopUsingPutData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/task/group-task/restart": {
    put: {
      req: RestartByGroupUsingPutData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/task/restart": {
    put: {
      req: RestartUsingPutData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/task/statis": {
    get: {
      req: StatisUsingGet2Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_TaskStatisVO_;
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
  "/task/step/complete": {
    put: {
      req: CompleteStepUsingPutData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/task/step/restart": {
    put: {
      req: RestartStepUsingPutData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/task/stop": {
    put: {
      req: StopUsingPut1Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/task-assign": {
    get: {
      req: ListUsingGet42Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_TaskAssignVO__;
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
      req: SaveUsingPost38Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: UpdateUsingPut33Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete35Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/task-assign/detail": {
    get: {
      req: GetDetailUsingGet30Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_TaskAssignVO_;
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
  "/task-logs": {
    get: {
      req: ListUsingGet44Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_TaskLogsVO__;
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
      req: SaveUsingPost40Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: UpdateUsingPut35Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
      req: DeleteUsingDelete37Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_Void_;
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
  "/task-logs/detail": {
    get: {
      req: GetDetailUsingGet32Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_TaskLogsVO_;
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
  "/video-surveillance-group": {
    get: {
      req: ListUsingGet45Data;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_VideoSurveillanceGroupVo__;
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
  "/video-surveillance-group/tree": {
    get: {
      req: TreeUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_List_VideoSurveillanceGroupVo__;
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
  "/video-surveillance-group/video": {
    get: {
      req: VideoListUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_分页结果数据_VideoSurveillanceVo__;
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
  "/video-surveillance-group/videodetail": {
    get: {
      req: VideodetailUsingGetData;
      res: {
        /**
         * OK
         */
        200: 接口返回结果_VideoSurveillance_;
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
