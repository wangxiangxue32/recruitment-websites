var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors=require("cors");
const bodyParse=require("body-parser");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var jobRouter = require('./routes/job')
var companyRouter = require('./routes/company')
var resumeRouter = require('./routes/resume')
var adminRouter = require('./routes/admin')


var app = express();
//解决跨域问题
app.use(cors());
//日志记录
app.use(logger('dev'));
//使用res.json方法
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/job', jobRouter)
app.use('/company', companyRouter)
app.use('/resume', resumeRouter)
app.use('/admin', adminRouter)



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
