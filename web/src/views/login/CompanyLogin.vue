<template>
  <section id="total">
    <a href="/user_home"><img src="~assets/img/tabbar/logo1.png"></a>
    <div class="login">
      <h3>Company Login</h3>
      <el-form :model="company" :rules="rules" ref="company" class="company_login_form">
        <el-form-item prop="c_email">
          <el-input v-model="company.c_email" placeholder="Email"></el-input>
        </el-form-item>
        <el-form-item prop="c_password">
          <el-input v-model="company.c_password" placeholder="Password" show-password></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="companyLogin">登 录</el-button><br/>
      <el-button type="success" @click="registerClick">注 册</el-button>
    </div>
    <div class="copyright float-right l">
      &copy;2020, made with 💗 by Wxx .
    </div>
  </section>
</template>

<script>
  import {getCompany} from "network/company";

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
        company:{
          c_email: '',
          c_password: ''
        },
        companyData: []
      }
    },
    created(){
      getCompany().then(res => {
        this.companyData = res.data
      })
    },
    methods: {
      companyLogin(){
        // if (this.company.c_email === '' || this.company.c_password === ''){
        //   this.$message.error({
        //     message: '账号或密码为空，请重新填写',
        //     type: 'error'
        //   })
        // } else {
        //   for (let i=0; i < this.companyData.length; i++){
        //     if (this.companyData[i].c_email === this.company.c_email && this.companyData[i].c_password === this.company.c_password){
        //       this.$cookies.set('companyCookie', this.companyData[i])
        //       this.$message.success({
        //         message: '登录成功'
        //       })
        //       this.$router.replace('/company_home')
        //     } else if (this.companyData[i].c_email !== this.company.c_email && this.companyData[i].c_password !== this.company.c_password) {
        //       this.$message.error({
        //         message: '账号或密码不正确',
        //       })
        //     }
        //   }
        // }

        if (this.company.c_email === '' || this.company.c_password === ''){
          this.$message.error({
            message: '账号或密码为空，请重新填写',
            type: 'error'
          })
        } else {
            for (let i=0; i < this.companyData.length; i++){
              if (this.companyData[i].c_email === this.company.c_email && this.companyData[i].c_password === this.company.c_password){
                this.$cookies.set('companyCookie', this.companyData[i])
                this.$message.success({
                  message: '登录成功'
                })
                this.$router.replace('/company_home')
              } else if (this.companyData[i].c_email !== this.company.c_email && this.companyData[i].c_password !== this.company.c_password) {
                this.$message.error({
                  message: '账号或密码不正确',
                })
              }
            }
          }
      },
      registerClick(){
        this.$router.push('/company_register')
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