var express = require('express');
var router = express.Router();
const companyController=require("../controller/companyController");
const {ErrorModel,SuccessModel}=require("../model/resModel.js");

router.get('/', function(req, res, next) {
  companyController.getCompany().then(data=>{
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
});

//根据id获取公司账号密码
router.get('/get_company_by_id', function (req, res) {
  let c_id = req.query.c_id
  console.log(c_id)
  companyController.getCompanyById(c_id).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

router.get('/info', function (req, res) {
  companyController.getCompanyInfo().then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

router.get('/info_by_id', function (req, res) {
  let c_id = req.query.c_id
  console.log(c_id)
  companyController.getCompanyInfoById(c_id).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//添加公司，注册
router.post('/add_company', function (req, res) {
  //定义一个变量接收前端传来的对象或值，post：req.body   get：req.query
  let re_company = req.body
  console.log(re_company)
  companyController.addCompany(re_company).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//添加公司详细信息
router.post('/add_company_info', (req, res,next)=>{
  let c_info = req.body;
  console.log(c_info);
  // for (let key in c_info){
  //   if (c_info[key].trim()==""||c_info[key].trim()==null){
  //     c_info[key]=null;
  //   }
  // }
/*  if (c_info.c_established!=null){
    c_info.c_established= new Date(c_info.c_established).valueOf();
  }*/
  companyController.addCompanyInfo(c_info).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
});

//更新公司详细信息
router.post('/update_company_info', function (req, res) {
  let c_info = req.body
  console.log(c_info)
  companyController.updateCompanyInfo(c_info).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//查询公司账号和详细信息
router.get('/get_company_EI', function (req, res, next) {
  companyController.getCompanyEI().then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//强制删除公司账号和信息
router.get('/delete_company_EI', function (req, res) {
  let c_id = req.query.c_id
  console.log(c_id)
  companyController.deleteCompanyEI(c_id).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
  companyController.deleteCompanyInfo(c_id).then(data => {})
  companyController.deleteCompanyJob(c_id).then(data => {})
  companyController.deleteCompanyResume(c_id).then(data => {})
})

//修改密码
router.post('/update_company_password', function (req, res) {
  let c_id = req.body.c_id
  let c_password = req.body.c_password
  console.log(c_id,c_password)
  companyController.updateCompanyPassword(c_id,c_password).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

module.exports = router;
