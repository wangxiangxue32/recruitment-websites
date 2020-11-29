import {request} from "./request";

//获取公司信息
export function getCompany() {
  return request({
    url: '/company'
  });
}

//根据id获取公司账号密码
export function getCompanyById(c_id) {
  return request({
    url: '/company/get_company_by_id',
    method: 'get',
    params: {
      c_id: c_id
    }
  })
}

//获取公司详细信息
export function getCompanyInfo() {
  return request({
    url: '/company/info'
  })
}

//根据 id 获取公司详细信息(未实现，已联通数据库获取到数据)
export function getCompanyInfoById(c_id) {
  return request({
    url: '/company/info_by_id',
    method: 'get',
    params: {
      c_id: c_id
    }
  })
}

//注册公司，添加公司(已实现，已联通数据库)
export function addCompany(re_company) {
  return request({
    url: '/company/add_company',
    method: 'post',
    data: re_company
  })
}

//添加公司详细信息(已实现)
export function addCompanyInfo(company_info) {
  return request({
    url: '/company/add_company_info',
    method: 'post',
    data:company_info
  })
}

//更新公司详细信息(已实现)
export function updateCompanyInfo(c_info) {
  return request({
    url: '/company/update_company_info',
    method: 'post',
    data: c_info
  })
}

//查询公司账号和详细信息(已实现)
export function getCompanyEI() {
  return request({
    url: '/company/get_company_EI'
  })
}

//强制删除公司账号和信息(已实现)
export function deleteCompanyEI(c_id) {
  return request({
    url: '/company/delete_company_EI',
    method: 'get',
    params: {
      c_id: c_id
    }
  })
}

//修改密码
export function updateCompanyPassword(c_id,c_password) {
  return request({
    url: '/company/update_company_password',
    method: 'post',
    data: {
      c_id: c_id,
      c_password: c_password
    }
  })
}