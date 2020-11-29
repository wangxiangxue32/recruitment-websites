const {exec,escape}=require("../db/mysql.js");

//获取公司基础信息
const getCompany = () => {
  //sql
  let sql=`select * from company`;
  return exec(sql);
};

//根据id获取公司账号密码
const getCompanyById = (c_id) => {
  let sql = `select * from company where c_id=${c_id}`
  console.log(sql)
  return exec(sql)
}

//获取公司详细信息
const getCompanyInfo = () => {
  let sql = `select * from company_info`;
  return exec(sql);
}

//根据 id 获取公司信息
const getCompanyInfoById = (c_id) => {
  let sql = `select * from company_info where c_id = ${c_id}`
  console.log(sql)
  return exec(sql)
}

//添加公司，注册公司账号
const addCompany = (re_company) => {
  let sql = `insert into company(c_email,c_password) 
  values('${re_company.c_email}','${re_company.c_password}')`
  return exec(sql)
}

//添加公司详细信息
const addCompanyInfo = (c_info) => {
  let sql = `insert into 
  company_info(c_id,c_name,c_established,c_currentstate,c_contact,c_type,c_address,c_describe)
  values("${c_info.c_id}","${c_info.c_name}","${c_info.c_established}","${c_info.c_currentstate}","${c_info.c_contact}","${c_info.c_type}","${c_info.c_address}","${c_info.c_describe}")`;
  return exec(sql);
};

//更新公司详细信息
const updateCompanyInfo = (c_info) => {
  let sql = `update company_info set 
  c_name='${c_info.c_name}',c_established='${c_info.c_established}',c_currentstate='${c_info.c_currentstate}',c_contact='${c_info.c_contact}',c_type='${c_info.c_type}',c_address='${c_info.c_address}',c_describe='${c_info.c_describe}' 
  where c_id=${c_info.c_id}`
  console.log(sql)
  return exec(sql)
}

//查询公司账号和详细信息
const getCompanyEI = () => {
  let sql = `select * from company,company_info where company.c_id=company_info.c_id`
  console.log(sql)
  return exec(sql)
}

//强制删除公司账号和信息
const deleteCompanyEI = (c_id) => {
  let sql = `delete from company where c_id=${c_id}`
  console.log(sql)
  return exec(sql)
}
const deleteCompanyInfo = (c_id) => {
  let sql = `delete from company_info where c_id=${c_id}`
  console.log(sql)
  return exec(sql)
}
const deleteCompanyResume = (c_id) => {
  let sql = `delete from resume_deliver where c_id=${c_id}`
  console.log(sql)
  return exec(sql)
}
const deleteCompanyJob = (c_id) => {
  let sql = `delete from job where c_id=${c_id}`
  console.log(sql)
  return exec(sql)
}

//修改密码
const updateCompanyPassword = (c_id,c_password) => {
  let sql = `update company set c_password='${c_password}' where c_id=${c_id}`
  console.log(sql)
  return exec(sql)
}


module.exports={
  getCompany,
  getCompanyInfo,
  getCompanyInfoById,
  getCompanyEI,
  getCompanyById,

  addCompany,
  addCompanyInfo,

  updateCompanyInfo,
  updateCompanyPassword,

  deleteCompanyEI,
  deleteCompanyInfo,
  deleteCompanyJob,
  deleteCompanyResume
};