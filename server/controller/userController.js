const {exec,escape}=require("../db/mysql.js");

// const getUserInfo=(username)=>{
const getUser=()=>{
  //sql
  // let sql=`select * from users where=${id}`;
  let sql=`select * from users`;
  return exec(sql);
};

//根据id获取用户账号密码
const getUserById = (u_id) => {
  let sql = `select * from users where u_id=${u_id}`
  console.log(sql)
  return exec(sql)
}

//获取用户详细信息
const getUserInfo = () => {
  let sql=`select * from user_info`;
  return exec(sql);
}

//按id查询用户信息
const getUserInfoById = (u_id) => {
  let sql=`select * from user_info where user_info.u_id=${u_id}`
  console.log(sql)
  return exec(sql)
}

//按公司id和简历投递表获取用户和职位信息
const getUserJobByCId = (c_id) => {
  let sql = `select * from user_info u,resume_deliver r,job,item_experience e,internships i where r.c_id=${c_id} and r.u_id=u.u_id and r.j_id=job.j_id and u.u_id=e.u_id and u.u_id=i.u_id and r.r_state='未审核'`
  console.log(sql)
  return exec(sql)
}

//添加用户
const addUser = (a_user) => {
  let sql = `insert into users(u_email,u_password) value('${a_user.u_email}','${a_user.u_password}')`
  return exec(sql)
}

//添加用户详细信息
const addUserInfo = (u_info) => {
  let sql = `insert into 
  user_info(u_id,u_gender,u_age,u_education,u_contact,u_birthday,u_realname,u_identify,u_introduce,u_school,u_gra_year)
  values('${u_info.u_id}','${u_info.u_gender}','${u_info.u_age}','${u_info.u_education}','${u_info.u_contact}','${u_info.u_birthday}','${u_info.u_realname}','${u_info.u_identify}','${u_info.u_introduce}','${u_info.u_school}','${u_info.u_gra_year}')`
  console.log(sql)
  return exec(sql)
}

//更新用户信息
const updateUserInfo = (u_info) => {
  let sql = `update user_info set 
  u_gender='${u_info.u_gender}',u_age='${u_info.u_age}',u_education='${u_info.u_education}',u_contact='${u_info.u_contact}',u_birthday='${u_info.u_birthday}',u_realname='${u_info.u_realname}',u_identify='${u_info.u_identify}',u_introduce='${u_info.u_introduce}',u_school='${u_info.u_school}',u_gra_year='${u_info.u_gra_year}'
  where u_id=${u_info.u_id}`
  console.log(sql)
  return exec(sql)
}

//查询用户账号和信息
const getUserEI = () => {
  let sql=`select * from users,user_info where users.u_id=user_info.u_id`
  console.log(sql)
  return exec(sql)
}

//强制注销/删除用户账号和信息
const deleteUserEI = (u_id) => {
  let sql = `delete from users where u_id=${u_id}`
  console.log(sql)
  return exec(sql)
}
const deleteUserInfo = (u_id) => {
  let sql = `delete from user_info where u_id=${u_id}`
  console.log(sql)
  return exec(sql)
}
const deleteUserInternships = (u_id) => {
  let sql = `delete from internships where u_id=${u_id}`
  console.log(sql)
  return exec(sql)
}
const deleteUserItem = (u_id) => {
  let sql = `delete from item_experience where u_id=${u_id}`
  console.log(sql)
  return exec(sql)
}
const deleteUserResume = (u_id) => {
  let sql = `delete from resume_deliver where u_id=${u_id}`
  console.log(sql)
  return exec(sql)
}

//修改密码
const updateUserPassword = (u_id,u_password) => {
  let sql = `update users set u_password='${u_password}' where u_id=${u_id}`
  console.log(sql)
  return exec(sql)
}

// //根据ID查询用户信息和简历个人信息
// const getUserPI = (u_id) => {
//   let sql=`select * from user_info u2,user_profile u3 where u2.u_id=${u_id} and u3.u_id=${u_id} and u2.u_id=u3.u_id`
//   console.log(sql)
//   return exec(sql)
// }
//
// //添加用户简历信息
// const addUserPI = (userPI) => {
//   let sql = `insert into user_profile(u_id,up_current,up_wechat,up_email,up_strength)
//   values('${userPI.u_id}','${userPI.up_current}','${userPI.up_wechat}','${userPI.up_email}','${userPI.up_strength}')`
//   console.log(sql)
//   return exec(sql)
// }
//
// //更新用户简历信息
// const updateUserPI = (userPI) => {
//   let sql = `update user_profile set
//   up_current='${userPI.up_current}',up_wechat='${userPI.up_wechat}',up_email='${userPI.up_email}',up_strength='${userPI.up_strength}'
//   where u_id=${userPI.u_id}`
//   console.log(sql)
//   return exec(sql)
// }


module.exports={
  getUser,
  getUserInfo,
  getUserInfoById,
  getUserEI,
  getUserJobByCId,
  getUserById,

  addUser,
  addUserInfo,

  updateUserInfo,
  updateUserPassword,

  deleteUserEI,
  deleteUserInfo,
  deleteUserInternships,
  deleteUserItem,
  deleteUserResume
};