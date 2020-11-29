const {exec,escape}=require("../db/mysql.js");

//添加项目经历信息
const addItemInfo = (u_item) => {
  let sql = `insert into item_experience(u_id,it_name,it_character,it_link,it_start,it_end,it_describe)
  values('${u_item.u_id}','${u_item.it_name}','${u_item.it_character}','${u_item.it_link}','${u_item.it_start}','${u_item.it_end}','${u_item.it_describe}')`
  console.log(sql)
  return exec(sql)
}

//更新项目经历信息
const updateItemInfo = (u_item) => {
  let sql = `update item_experience set 
  it_name='${u_item.it_name}',it_character='${u_item.it_character}',it_link='${u_item.it_link}',it_start='${u_item.it_start}',it_end='${u_item.it_end}',it_describe='${u_item.it_describe}' 
  where u_id=${u_item.u_id}`
  console.log(sql)
  return exec(sql)
}

//添加实习经历信息
const addPracticeInfo = (u_practice) => {
  let sql = `insert into internships(u_id,in_c_name,in_industry,in_department,in_j_name,in_work_time,in_work_per)
  values('${u_practice.u_id}','${u_practice.in_c_name}','${u_practice.in_industry}','${u_practice.in_department}','${u_practice.in_j_name}','${u_practice.in_work_time}','${u_practice.in_work_per}')`
  console.log(sql)
  return exec(sql)
}

//更新实习经历
const updatePracticeInfo = (u_practice) => {
  let sql = `update internships set 
  in_c_name='${u_practice.in_c_name}',in_industry='${u_practice.in_industry}',in_department='${u_practice.in_department}',in_j_name='${u_practice.in_j_name}',in_work_time='${u_practice.in_work_time}',in_work_per='${u_practice.in_work_per}' 
  where u_id=${u_practice.u_id}`
  console.log(sql)
  return exec(sql)
}

//添加个人简介信息
const addProfile = (u_profile) => {
  let sql = `insert into user_profile(up_current,up_wechat,up_email,up_strength)
  values('${u_profile.up_current}','${u_profile.up_wechat}','${u_profile.up_email}','${u_profile.up_strength}')`

  return exec(sql)
}

//获取指定id的用户信息
// const getSpecifyUser = (u_id) => {
//   let sql = `select * from users where u_id=${u_id}`
//   return exec(sql)
// }

//获取指定id的用户简历信息
const getUserResume = () => {
  // let sql = `select * from user_info u,user_profile p,item_experience e,internships i where u.u_id=p.u_id=e.u_id=i.u_id='${u_id}'`
  let sql = `select * from user_info u,user_profile p,item_experience e,internships i where u.u_id=p.u_id=e.u_id=i.u_id`
  console.log(sql)
  return exec(sql)
}

//获取指定id的用户实习经历信息
const getUserPractice = (u_id) => {
  let sql=`select * from internships where internships.u_id=${u_id}`
  console.log(sql)
  return exec(sql)
}

//获取指定id的用户项目经历信息
const getUserItem = (u_id) => {
  let sql=`select * from item_experience where item_experience.u_id=${u_id}`
  console.log(sql)
  return exec(sql)
}

//根据用户id获取简历投递状态和公司信息(职位信息)
const getResumeAndCompanyInfo = (u_id) => {
  let sql=`select * from resume_deliver r,company_info c,job where r.c_id=c.c_id and r.u_id=${u_id} and r.j_id=job.j_id`
  console.log(sql)
  return exec(sql)
}

//投递简历时往resume_deliver表中插入数据
const addResumeInfo = (deliver) => {
  let sql = `insert into resume_deliver(j_id,u_id,c_id,r_state) values(${deliver.j_id},${deliver.u_id},${deliver.c_id},'未审核')`
  console.log(sql)
  return exec(sql)
}

//根据u_id、j_id将状态值改为：已通过
const updateStatePass = (resume) => {
  let sql = `update resume_deliver set r_state='已通过' where r_id=${resume.r_id}`
  console.log(sql)
  return exec(sql)
}

//根据u_id、j_id将状态值改为：已拒绝
const updateStateReject = (resume) => {
  let sql = `update resume_deliver set r_state='已拒绝' where c_id=${resume.c_id} and u_id=${resume.u_id} and j_id=${resume.j_id}`
  console.log(sql)
  return exec(sql)
}

//根据u_id和j_id获取投递职位信息
const getDeliverInfo = (u_id,j_id) => {
  let sql = `select * from resume_deliver where u_id=${u_id} and j_id=${j_id}`
  console.log(sql)
  return exec(sql)
}

module.exports={
  getUserResume,
  getResumeAndCompanyInfo,
  getUserPractice,
  getUserItem,
  getDeliverInfo,

  addItemInfo,
  addPracticeInfo,
  addResumeInfo,

  updateStatePass,
  updateStateReject,
  updateItemInfo,
  updatePracticeInfo
};