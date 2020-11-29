var express = require('express');
var router = express.Router();
const adminController=require("../controller/adminController");
const {ErrorModel,SuccessModel}=require("../model/resModel.js");

//获取管理员信息
router.get('/', function (req, res, next) {
  adminController.getAdmin().then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

module.exports = router;