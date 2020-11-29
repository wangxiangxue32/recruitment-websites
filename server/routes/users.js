var express = require('express');
var router = express.Router();
const userController=require("../controller/userController");
const {ErrorModel,SuccessModel}=require("../model/resModel.js");

//获取用户账号密码等信息
router.get('/', function(req, res, next) {
   // let userInfo=req.query;//get请求
  // userInfo.key1
  // let username=userInfo.username;
  // let demo=req.body;//post
  // console.log(userInfo);
  // userController.getUserInfo(username).then(data=>{
  //     if (data.length!==0) {
  //       return res.json(new SuccessModel(data,"ok"));
  //     }
  //     res.json(new ErrorModel("err"));
  // });
  userController.getUser().then(data=>{
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  });
});

//获取用户详细信息
router.get('/user_info', function (req, res) {
  userController.getUserInfo().then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//根据id获取用户账号密码
router.get('/get_user_by_uid', function (req, res) {
  let u_id = req.query.u_id
  console.log(u_id)
  userController.getUserById(u_id).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//按公司id和简历投递表获取用户和职位信息
router.get('/get_user_job_by_cid', function (req, res) {
  let c_id = req.query.c_id
  console.log(c_id)
  userController.getUserJobByCId(c_id).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//添加用户
router.post('/add_user', function (req, res, next) {
  let a_user = req.body
  console.log(a_user)
  userController.addUser(a_user).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//添加用户信息
router.post('/add_user_info', function (req, res, next) {
  let u_info = req.body
  console.log(u_info)
  userController.addUserInfo(u_info).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//更新用户信息
router.post('/update_user_info', function (req, res) {
  let u_info = req.body
  console.log(u_info)
  userController.updateUserInfo(u_info).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//根据id查询用户信息
router.get('/get_user_info_by_id', function (req, res, next) {
  let u_id = req.query.u_id
  console.log(u_id)
  userController.getUserInfoById(u_id).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//查询用户账号和信息
router.get('/get_user_EI', function (req, res, next) {
  userController.getUserEI().then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//强制注销/删除用户账号和信息
router.get('/delete_user_EI', function (req, res) {
  let u_id = req.query.u_id
  console.log(u_id)
  userController.deleteUserEI(u_id).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
  userController.deleteUserInfo(u_id).then(data => {})
  userController.deleteUserInternships(u_id).then(data => {})
  userController.deleteUserItem(u_id).then(data => {})
  userController.deleteUserResume(u_id).then(data => {})
})

//修改密码
router.post('/change_user_password', function (req, res) {
  let u_id = req.body.u_id
  let u_password = req.body.u_password
  console.log(u_id,u_password)
  userController.updateUserPassword(u_id,u_password).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

// //根据ID查询用户信息和简历个人信息
// router.get('/get_user_PI', function (req, res, next) {
//   let u_id = req.query.u_id
//   console.log(u_id)
//   userController.getUserPI(u_id).then(data => {
//     if (data.length!==0) {
//       return res.json(new SuccessModel(data,"ok"));
//     }
//     res.json(new ErrorModel("err"));
//   })
// })
//
// //添加用户简历信息
// router.post('/add_user_PI', function (req, res) {
//   let userPI = req.body.userPI
//   console.log(userPI)
//   userController.addUserPI(userPI).then(data => {
//     if (data.length!==0) {
//       return res.json(new SuccessModel(data,"ok"));
//     }
//     res.json(new ErrorModel("err"));
//   })
// })
//
// //更新用户简历信息
// router.post('/update_user_PI', function (req, res) {
//   let userPI = req.body.userPI
//   console.log(userPI)
//   userController.updateUserPI(userPI).then(data => {
//     if (data.length!==0) {
//       return res.json(new SuccessModel(data,"ok"));
//     }
//     res.json(new ErrorModel("err"));
//   })
// })

module.exports = router;
