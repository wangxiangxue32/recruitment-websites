var express = require('express');
var router = express.Router();
const jobController=require("../controller/jobController");
const {ErrorModel,SuccessModel}=require("../model/resModel.js");

router.get('/', function(req, res, next) {
  jobController.getJobInfo().then(data=>{
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  });
});

//根据职位id获取职位信息
router.get('/get_job_by_jid', function (req, res, next) {
  let j_id = req.query.j_id
  console.log(j_id)
  jobController.getJobByJId(j_id).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

// 根据公司id获取职位信息
router.get('/get_job_info_by_cid', function (req, res, next) {
  let c_id = req.query.c_id
  console.log(c_id)
  jobController.getJobInfoByCId(c_id).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//根据类型获取工作信息
router.get('/job_by_type',function (req ,res, next) {
  let j_type = req.query.j_type
  console.log(j_type)
  jobController.getJobInfoByType(j_type).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//根据城市获取工作信息
router.get('/job_by_city',function (req, res, next) {
  let c_address = req.query.c_address
  console.log(c_address)
  jobController.getJobInfoByCity(c_address).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//根据公司id和职位id获取职位信息（用于修改职位信息）
router.get('/get_by_cid_jid', function (req, res, next) {
  let c_id = req.query.c_id
  let j_id = req.query.j_id
  console.log(c_id,j_id)
  jobController.getJobInfoByCIdAndJId(c_id,j_id).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//删除工作信息
router.get('/delete_job', function (req, res) {
  let j_id = req.query.j_id
  console.log(j_id)
  jobController.deleteJobInfo(j_id).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//根据关键词搜索工作
router.get('/select_job', function (req, res, next) {
  let j_name = req.query.j_name
  console.log(j_name)
  jobController.selectJob(j_name).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//添加工作信息
router.post('/add_job', function (req, res, next) {
  let job_info = req.body
  console.log(job_info)
  jobController.addJob(job_info).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//修改工作信息
router.post('/modify_job_info', function (req, res, next) {
  let job_info = req.body
  console.log(job_info)
  jobController.modifyJobInfo(job_info).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})


module.exports = router;
