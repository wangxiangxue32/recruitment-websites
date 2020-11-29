import {request} from "./request";

//获取用户信息（账号密码，id）
export function getUser() {
  return request({
    url: '/users/'
  });
}

//根据id获取用户账号密码
export function getUserById(u_id) {
  return request({
    url: '/users/get_user_by_uid',
    method: 'get',
    params: {
      u_id: u_id
    }
  })
}

//获取用户详细信息
export function getUserInfo() {
  return request({
    url: '/users/user_info'
  });
}

//根据id获取用户详细信息
export function getUserInfoById(u_id) {
  return request({
    url: '/users/get_user_info_by_id',
    method: 'get',
    params: {
      u_id: u_id
    }
  })
}

//按公司id和简历投递表获取用户和职位信息(已实现，已连接数据库)
export function getUserJobByCId(c_id) {
  return request({
    url: '/users/get_user_job_by_cid',
    method: 'get',
    params: {
      c_id: c_id
    }
  })
}

//添加用户（注册）（已实现，已链接到数据库）
export function addUser(a_user) {
  return request({
    url: '/users/add_user',
    method: 'post',
    data: a_user
  })
}

//添加用户信息 personal Center（已实现，已连接到数据库）
export function addUserInfo(u_info) {
  return request({
    url: '/users/add_user_info',
    method: 'post',
    data: u_info
  })
}

//更新用户信息（已实现，已连接到数据库）
export function updateUserInfo(u_info) {
  return request({
    url: '/users/update_user_info',
    method: 'post',
    data: u_info
  })
}

//查询用户账号和详细信息（已实现，已连接到数据库）
export function getUserEI() {
  return request({
    url: '/users/get_user_EI'
  })
}

//强制注销/删除用户账号和信息（已实现，已连接到数据库）
export function deleteUserEI(u_id) {
  return request({
    url: '/users/delete_user_EI',
    method: 'get',
    params: {
      u_id: u_id
    }
  })
}

//修改密码
export function updateUserPassword(u_id,u_password) {
  return request({
    url: '/users/change_user_password',
    method: 'post',
    data: {
      u_id: u_id,
      u_password: u_password
    }
  })
}

// //根据ID查询用户信息和简历个人信息（已实现，已连接到数据库）
// export function getUserPI(u_id) {
//   return request({
//     url: '/users/get_user_PI',
//     method: 'get',
//     params: {
//       u_id: u_id
//     }
//   })
// }
//
// //添加用户简历信息
// export function addUserPI(userPI) {
//   return request({
//     url: '/users/add_user_PI',
//     method: 'post',
//     data: userPI
//   })
// }
//
// //更新用户简历信息
// export function updateUserPI(userPI) {
//   return request({
//     url: '/users/update_user_PI',
//     method: 'post',
//     data: userPI
//   })
// }