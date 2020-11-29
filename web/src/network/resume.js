import {request} from "./request";

//添加项目经历（已实现，已链接到数据库）
export function addItemInfo(u_item) {
  return request({
    url: '/resume/add_item_info',
    method: 'post',
    data: u_item
  });
}

//更新项目经历信息（已实现，已链接到数据库）
export function updateItemInfo(u_item) {
  return request({
    url: '/resume/update_item_info',
    method: 'post',
    data: u_item
  })
}

//添加实习经历（已实现，已链接数据库）
export function addPracticeInfo(u_practice) {
  return request({
    url: '/resume/add_practice_info',
    method: 'post',
    data: u_practice
  })
}

//更新实习经历（已实现，已链接数据库）
export function updatePracticeInfo(u_practice) {
  return request({
    url: '/resume/update_practice_info',
    method: 'post',
    data: u_practice
  })
}

//获取简历信息（未实现，已连接数据库）
export function getUserResume() {
  return request({
    url: '/resume/get_user_resume',
    // method: 'get',
    // params: {
    //   u_id: u_id
    // }
  })
}

//获取指定id的用户实习经历信息（已实现，已连接数据库）
export function getUserPractice(u_id) {
  return request({
    url: '/resume/get_user_practice',
    method: 'get',
    params: {
      u_id: u_id
    }
  })
}

//获取指定id的用户项目经历信息（已实现，已连接数据库）
export function getUserItem(u_id) {
  return request({
    url: '/resume/get_user_item',
    method: 'get',
    params: {
      u_id: u_id
    }
  })
}

//获取简历投递状态和公司信息
export function getResumeAndCompanyInfo(u_id) {
  return request({
    url: '/resume/get_resume_and_company_info',
    method: 'get',
    params: {
      u_id: u_id
    }
  })
}

//投递简历时往resume_deliver表中插入数据
export function addResumeInfo(deliver) {
  return request({
    url: '/resume/add_resume_info',
    method: 'post',
    data: deliver
  })
}

//根据u_id、j_id将状态值改为：已通过
export function updateStatePass(resume) {
  return request({
    url: '/resume/update_state_pass',
    method: 'post',
    data: resume
  })
}

//根据u_id、j_id将状态值改为：已拒绝
export function updateStateReject(resume) {
  return request({
    url: '/resume/update_state_reject',
    method: 'post',
    data: resume
  })
}

//根据u_id和j_id获取投递职位信息
export function getDeliverInfo(u_id,j_id) {
  return request({
    url: '/resume/get_deliver_info',
    method: 'get',
    params: {
      u_id: u_id,
      j_id: j_id
    }
  })
}