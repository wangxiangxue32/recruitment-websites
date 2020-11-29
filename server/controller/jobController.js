const {exec,escape}=require("../db/mysql.js");

const getJobInfo = () => {
  //sql
  let sql=`select * from job,company_info c where job.c_id=c.c_id`;
  // let sqls=`delete from job where id=${id}`;
  // let q=`insert into job(....) values(${job.id},${job.name},)`;
  return exec(sql);
};

//根据职位id获取职位信息
const getJobByJId = (j_id) => {
  let sql = `select * from job,company_info c where job.j_id=${j_id} and job.c_id=c.c_id`
  console.log(sql)
  return exec(sql)
}

//根据公司id获取职位信息
const getJobInfoByCId = (c_id) => {
  let sql = `select * from job where c_id=${c_id}`
  console.log(sql)
  return exec(sql)
}

//根据类型获取工作信息
const getJobInfoByType = (j_type) => {
  let sql = `select * from job,company_info c where job.c_id=c.c_id and j_type = '${j_type}'`
  console.log(sql)
  return exec(sql)
}

//根据城市获取工作信息
const getJobInfoByCity = (c_address) => {
  let sql = `select * from job,company_info c where job.c_id=c.c_id and c_address = '${c_address}'`
  console.log(sql)
  return exec(sql)
}

//根据公司id和职位id获取职位信息（修改职位信息）
const getJobInfoByCIdAndJId = (c_id,j_id) => {
  let sql = `select * from job where c_id=${c_id} and j_id=${j_id}`
  console.log(sql)
  return exec(sql)
}

// 删除招聘职业信息
const deleteJobInfo = (j_id) => {
  let sql = `delete from job where j_id=${j_id}`
  console.log(sql)
  return exec(sql)
}

//根据关键词搜索工作
const selectJob = (j_name) => {
  let sql = `select * from job,company_info c where j_name like '%${j_name}%' and job.c_id=c.c_id`
  console.log(sql)
  return exec(sql)
}

//添加工作信息
const addJob = (job_info) => {
  let sql=`insert into job(c_id,j_stime,j_etime,j_name,j_number,j_salary,j_type,j_treatment,j_require,j_resume,j_education,j_experience)
  value('${job_info.c_id}',${job_info.j_stime}','${job_info.j_etime}','${job_info.j_name}','${job_info.j_number}','${job_info.j_salary}','${job_info.j_type}','${job_info.j_treatment}','${job_info.j_require}','${job_info.j_resume}','${job_info.j_education}','${job_info.j_experience}')`
  console.log(sql)
  return exec(sql)
}

//修改工作信息
const modifyJobInfo = (job_info) => {
  let sql = `update job set j_stime='${job_info.j_stime}',j_etime='${job_info.j_etime}',j_name='${job_info.j_name}',j_number='${job_info.j_number}',j_salary='${job_info.j_salary}',j_type='${job_info.j_type}',j_treatment='${job_info.j_treatment}',j_require='${job_info.j_require}',j_resume='${job_info.j_resume}',j_education='${job_info.j_education}',j_experience='${job_info.j_experience}' where j_id=${job_info.j_id}`
  console.log(sql)
  return exec(sql)
}

module.exports={
  getJobInfo,
  getJobInfoByCId,
  getJobInfoByType,
  getJobInfoByCity,
  getJobInfoByCIdAndJId,
  getJobByJId,

  selectJob,

  addJob,
  deleteJobInfo,
  modifyJobInfo
};