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
        <!--应聘登陆界面-->
        <div id="recruit">
          <div class="login-content">
            <h3>Register</h3>
            <el-form :model="re_users" :rules="rules" ref="re_users" class="user_re_form">
              <el-form-item prop="u_email">
                <el-input v-model.trim="re_users.u_email" placeholder="Email"></el-input>
              </el-form-item>
              <el-form-item prop="u_password">
                <el-input v-model.trim="re_users.u_password" placeholder="Password" show-password></el-input>
              </el-form-item>
              <el-form-item prop="u_password_confirm">
                <el-input v-model="re_users.u_password_confirm" placeholder="Password Again" show-password></el-input>
              </el-form-item>
            </el-form>
            <el-button type="success" :loading="u_r_isClick" @click="userRegister">注 册</el-button>
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
  import {getUser,addUser} from "network/users";

  export default {
    name: "UserRegister",
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
      var uCheckPassword = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('密码不一致'))
        }
        setTimeout(() => {
          if (value === this.re_users.u_password) {
            callback()
          } else {
            callback(new Error('密码不一致'))
          }
        }, 100)
      }

      return{
        rules: {
          u_email: [
            { validator: checkEmail, trigger: 'blur' }
          ],
          u_password: [
            { validator: checkPassword, trigger: 'blur' }
          ],
          u_password_confirm: [
            { validator: uCheckPassword, trigger: 'blur' }
          ]
        },
        re_users: {
          u_email: '',
          u_password: '',
          u_password_confirm: ''
        },
        u_r_isClick: false,
        users: [],
        uIsPost: true,
      }
    },
    created(){
      getUser().then(res => {
        console.log(res);
        const result=res.data;
        if (res.errno===0){
          this.users=result;
        }
      })
    },
    methods:{
      userRegister(){
        if (this.re_users.u_email === '' || this.re_users.u_password === '' || this.re_users.u_password_confirm === ''){
          this.$message.error({
            message: '未正确输入邮箱或密码，请重试'
          })
        } else {
          this.u_r_isClick = true
          for (let i in this.users) {
            if (this.re_users.u_email === this.users[i].u_email){
              this.$message.error({
                message: '注册失败，邮箱重复'
              })
              this.u_r_isClick = false
              this.uIsPost = false
            } else {
              this.uIsPost = true
            }
          }
          if (this.uIsPost) {
            addUser(this.re_users).then(res => {
              this.$message.success({
                message: '注册成功'
              })
              this.u_r_isClick = false
              setTimeout(() => {
                this.$router.push('/user_login')
              }, 2000)
            })
          }
        }
      }
    }
  }
</script>

<style scoped>
  @import "~assets/css/lrmodule/LRModule.css";

  .user_re_form{
    margin: 0 auto;
    width: 400px;
  }
  .company_re_form{
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

  .r{
    position: absolute;
    bottom: 5px;
    right: 5px;
  }
</style>