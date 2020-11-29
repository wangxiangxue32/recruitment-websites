var express = require('express');
var router = express.Router();
const resumeController=require("../controller/resumeController");
const {ErrorModel,SuccessModel}=require("../model/resModel.js");

//添加项目经历
router.post('/add_item_info', function (req, res, next) {
  let u_item = req.body
  console.log(u_item)
  resumeController.addItemInfo(u_item).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//更新项目经历信息
router.post('/update_item_info', function (req, res) {
  let u_item = req.body
  console.log(u_item)
  resumeController.updateItemInfo(u_item).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//添加实习经历
router.post('/add_practice_info', function (req, res, next) {
  let u_practice = req.body
  console.log(u_practice)
  resumeController.addPracticeInfo(u_practice).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//更新实习经历
router.post('/update_practice_info', function (req, res) {
  let u_practice = req.body
  console.log(u_practice)
  resumeController.updatePracticeInfo(u_practice).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//添加个人简介
router.post('/add_profile',function (req, res, next) {
  let u_profile = req.body
  console.log(u_profile);
})

//获取简历信息
router.get('/get_user_resume', function (req, res, next) {
  // let u_id = req.body.u_id
  // console.log(u_id)
  resumeController.getUserResume().then(data => {
    console.log(data);
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//获取指定id的用户实习经历信息
router.get('/get_user_practice', function (req, res, next) {
  let u_id = req.query.u_id
  console.log(u_id)
  resumeController.getUserPractice(u_id).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//获取指定id的用户项目经历信息
router.get('/get_user_item', function (req, res, next) {
  let u_id = req.query.u_id
  console.log(u_id)
  resumeController.getUserItem(u_id).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//根据用户id获取简历投递状态和公司和职位信息
router.get('/get_resume_and_company_info', function (req, res, next) {
  let u_id = req.query.u_id
  console.log(u_id)
  resumeController.getResumeAndCompanyInfo(u_id).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//投递简历时往resume_deliver表中插入数据
router.post('/add_resume_info', function (req, res) {
  let deliver = req.body
  console.log(deliver)
  resumeController.addResumeInfo(deliver).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//根据u_id、j_id将状态值改为：已通过
router.post('/update_state_pass', function (req, res) {
  let resume = req.body
  console.log(resume)
  resumeController.updateStatePass(resume).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//根据u_id、j_id将状态值改为：已拒绝
router.post('/update_state_reject', function (req, res) {
  let resume = req.body
  console.log(resume)
  resumeController.updateStateReject(resume).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//根据u_id和j_id获取投递职位信息
router.get('/get_deliver_info', function (req, res) {
  let u_id = req.query.u_id
  let j_id = req.query.j_id
  console.log(u_id,j_id)
  resumeController.getDeliverInfo(u_id,j_id).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

module.exports = router;