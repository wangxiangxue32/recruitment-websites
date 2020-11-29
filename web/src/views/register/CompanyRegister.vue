<template>
  <section id="total">
    <header id="header">
      <nav class="navbar">
        <!--导航栏标志，校园招聘-->
        <a class="navbar-brand col-lg-6 col-md-5 col-sm-4 col-xs-4" href="/user_home"><img src="~assets/img/tabbar/logo.png"></a>
      </nav>
    </header>
    <div class="login-box">
      <div id="myTabContent" class="tab-content">
        <!--招聘登陆界面-->
        <div id="company">
          <div slot="company-login">
            <div class="login-content">
              <h3>Register</h3>
              <el-form :model="re_company" :rules="rules" ref="re_company" class="company_re_form">
                <el-form-item prop="c_email">
                  <el-input v-model.trim="re_company.c_email" placeholder="Email"></el-input>
                </el-form-item>
                <el-form-item prop="c_password">
                  <el-input v-model.trim="re_company.c_password" placeholder="Password" show-password></el-input>
                </el-form-item>
                <el-form-item prop="c_password_confirm">
                  <el-input v-model.trim="re_company.c_password_confirm" placeholder="Password Again" show-password></el-input>
                </el-form-item>
              </el-form>
              <el-button type="success" :loading="c_r_isClick" @click="companyRegister">注 册</el-button>
              <div class="hint">若不能注册请手动刷新~</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright float-right r">
      &copy;2020, made with 💗 by Wxx .
    </div>
  </section>
</template>

<script>
  import { getCompany,addCompany } from "network/company";

  export default {
    name: "CompanyRegister",
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
      var cCheckPassword = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('密码不一致'))
        }
        setTimeout(() => {
          if (value === this.re_company.c_password) {
            callback()
          } else {
            callback(new Error('密码不一致'))
          }
        }, 100)
      }

      return{
        rules: {
          c_email: [
            { validator: checkEmail, trigger: 'blur' }
          ],
          c_password: [
            { validator: checkPassword, trigger: 'blur' }
          ],
          c_password_confirm: [
            { validator: cCheckPassword, trigger: 'blur' }
          ]
        },
        re_company: {
          c_email: '',
          c_password: '',
          c_password_confirm: ''
        },
        c_r_isClick: false,
        company: [],
        cIsPost: true
      }
    },
    created(){
      getCompany().then(res => {
        const result=res.data;
        if (res.errno===0){
          this.company=result;
        }
      })
    },
    methods:{
      companyRegister(){
        if (this.re_company.c_email === '' || this.re_company.c_password === '' || this.re_company.c_password_confirm === ''){
          this.$message({
            message: '未正确输入邮箱或密码，请重试',
            type: 'error'
          })
        } else {
          this.c_r_isClick = true
          for (let j in this.company) {
            if (this.re_company.c_email === this.company[j].c_email){
              this.$message({
                message: '注册失败，邮箱重复',
                type: 'error'
              })
              this.c_r_isClick = false
              this.cIsPost = false
            }
          }
          if (this.cIsPost) {
            addCompany(this.re_company).then(res => {
              console.log(res)
              this.$message({
                message: '注册成功',
                type: 'success'
              })
              this.c_r_isClick = false
              setTimeout(() => {
                this.$router.push('/company_login')
              },2000)
            })
          }
        }
      }
    }
  }
</script>

<style scoped>
  @import "~assets/css/lrmodule/LRModule.css";

  .company_re_form{
    margin: 0 auto;
    width: 400px;
  }
  .el-button--success{
    margin-top: 1px;
    width: 400px;
  }
  .hint{
    color: #d8d8d8;
    position: absolute;
    right: 5px;
    bottom: 5px;
  }

  .r{
    position: absolute;
    bottom: 5px;
    right: 5px;
  }
</style>