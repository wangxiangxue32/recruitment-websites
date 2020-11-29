<template>
  <section id="total">
    <a href="/user_home"><img src="~assets/img/tabbar/logo1.png"></a>
    <div class="login" v-if="!isRight">
      <h3>Company Change Password 1 step</h3>
      <el-form :model="company" :rules="rules" ref="company" class="company_login_form">
        <el-form-item prop="c_email">
          <el-input v-model="company.c_email" placeholder="Email"></el-input>
        </el-form-item>
        <el-form-item prop="c_password">
          <el-input v-model="company.c_password" placeholder="Password" show-password></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="companyLogin">确 认</el-button>
    </div>

    <div class="login" v-if="isRight">
      <h3>Company Change Password 2 step</h3>
      <el-form :model="company2" :rules="rules" ref="company" class="company_login_form">
        <el-form-item prop="c_password">
          <el-input v-model="company2.c_password" placeholder="Password" show-password></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="changePwd">确认修改</el-button>
    </div>
    <div class="copyright float-right l">
      &copy;2020, made with 💗 by Wxx .
    </div>
  </section>
</template>

<script>
  import {getCompany} from "network/company";
  import {getCompanyById} from "network/company";
  import {updateCompanyPassword} from "network/company";

  export default {
    name: "CompanyLogin",
    data(){
      var checkEmail = (rule, value, callback) => {
        const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
        if (!value) {
          return callback(new Error('邮箱不能为空'))
        }
        setTimeout(() => {
          if (mailReg.test(value)) {
            callback()
          } else {
            callback(new Error('请输入正确的邮箱格式'))
          }
        }, 100)
      }
      var checkPassword = (rule, value, callback) => {
        const pwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z\\W]{6,18}$/
        if (!value) {
          return callback(new Error('密码不能为空'))
        }
        setTimeout(() => {
          if (pwdReg.test(value)) {
            callback()
          } else {
            callback(new Error('密码必须包含数字和字母，长度6-18'))
          }
        }, 100)
      }

      return{
        rules: {
          c_email: [
            { validator: checkEmail, trigger: 'blur'}
          ],
          c_password: [
            { validator: checkPassword, trigger: 'blur'}
          ]
        },
        isRight: false,
        company:{    //验证使用的账号密码，需要用户输入
          c_email: '',
          c_password: ''
        },
        companyData: {},  //与他做对比看是否正确
        company1: [],  //从cookie中取出来的账号数据
        company2: {    //用于存储新的密码
          c_password: ''
        }
      }
    },
    created(){
      if (this.$cookies.get('companyCookie')){
        this.company1 = this.$cookies.get('companyCookie')
      }
      getCompanyById(this.company1.c_id).then(res => {
        this.companyData = res.data
        console.log(this.companyData)
      })
    },
    methods: {
      companyLogin(){
        if (this.company.c_email === '' || this.company.c_password === ''){
          this.$message.error({
            message: '账号或密码为空，请重新填写',
            type: 'error'
          })
        } else {
          for (let i=0; i < this.companyData.length; i++){
            if (this.companyData[i].c_email === this.company.c_email && this.companyData[i].c_password === this.company.c_password){
              this.isRight = true
            } else if (this.companyData[i].c_email !== this.company.c_email && this.companyData[i].c_password !== this.company.c_password) {
              this.$message.error({
                message: '账号或密码不正确',
              })
            }
          }
        }
      },
      changePwd(){
        updateCompanyPassword(this.company1.c_id,this.company2.c_password).then(res => {
          this.$message.success({
            message: '修改成功，请重新登录'
          })
        })
        if (this.$cookies.get('companyCookie')){
          this.$cookies.remove('companyCookie')
        }
        this.$router.replace('/company_login')
      }
    }
  }
</script>

<style scoped>
  @import "~assets/css/lrmodule/LRModule.css";
  body{
    margin: 0;
    padding: 0;
    padding-top: 0;
  }
  .login{
    width: 500px;
    margin: 0 auto;
    text-align: center;
    padding-top: 100px;
  }
  .company_login_form{
    margin: 0 auto;
    width: 400px;
  }
  .el-button--primary{
    width: 400px;
  }
  .el-button--success{
    margin-top: 1px;
    width: 400px;
  }
  .login-content{
    margin-top: 65px;
  }

  .l{
    position: absolute;
    bottom: 5px;
    right: 5px;
  }

</style>