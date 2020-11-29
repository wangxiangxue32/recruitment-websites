import {request} from "./request";

// export function getJobData(v1,v2) {
//   return request({
//     url: '/job/',
//     params:{
//       key1:v1,
//       key2
//     }
//   });
// }

//获取工作信息（已实现，已连接数据库）
export function getJobData() {
  return request({
    url: '/job/'
  });
}

// 根据公司id获取职位信息（已实现，已连接数据库）
export function getJobInfoByCId(c_id) {
  return request({
    url: '/job/get_job_info_by_cid',
    method: 'get',
    params: {
      c_id: c_id
    }
  })
}

//按工作类型获取工作信息（已实现，但感觉还有不合理的地方，已连接数据库）
export function getJobInfoByType(j_type) {
  return request({
    url: '/job/job_by_type',
    method: 'get',
    params: {
      j_type: j_type
    }
  })
}

//按城市分类获取工作信息（已实现，但感觉还有不合理的地方，已连接数据库）
export function getJobInfoByCity(c_address) {
  return request({
    url: 'job/job_by_city',
    method: 'get',
    params: {
      c_address: c_address
    }
  })
}

//根据公司id和职位id获取职位信息（用于修改职位信息）
export function getJobInfoByCIdAndJId(c_id,j_id) {
  return request({
    url: '/job/get_by_cid_jid',
    method: 'get',
    params: {
      c_id: c_id,
      j_id: j_id
    }
  })
}

//按id删除职位信息（已实现，已连接数据库）
export function deleteJobInfo(j_id) {
  return request({
    url: '/job/delete_job',
    method: 'get',
    params:{
      j_id: j_id
    }
  })
}

//根据关键词搜索工作
export function selectJob(j_name) {
  return request({
    url: '/job/select_job',
    method: 'get',
    params: {
      j_name:j_name
    }
  })
}

//添加工作（已实现，已连接数据库，加入数据正常）
export function addJob(job_info) {
  return request({
    url: '/job/add_job',
    method: 'post',
    data: job_info
  })
}

//修改工作信息（已实现，已连接数据库）
export function modifyJobInfo(job_info) {
  return request({
    url: '/job/modify_job_info',
    method: 'post',
    data: job_info
  })
}
