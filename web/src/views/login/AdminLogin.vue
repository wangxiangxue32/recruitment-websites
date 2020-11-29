<template>
  <div class="a">
    <div class="admin">
      <h3>Admin Login</h3>
      <el-form :model="admin_input" ref="admin_input" class="user_login_form">
        <el-form-item prop="a_email">
          <el-input placeholder="Email" v-model="admin_input.a_email"></el-input>
        </el-form-item>
        <el-form-item prop="a_password">
          <el-input placeholder="Password" show-password v-model="admin_input.a_password"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click.prevent="adminLogin">登 录</el-button>
    </div>
    <div class="copyright float-right l">
      &copy;2020, made with 💗 by Wxx .
    </div>
  </div>
</template>

<script>
  import {getAdmin} from "network/admin";

  export default {
    name: "AdminLogin",
    data(){
      // var checkEmail = (rule, value, callback) => {
      //   const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
      //   if (!value) {
      //     return callback(new Error('邮箱不能为空'))
      //   }
      //   setTimeout(() => {
      //     if (mailReg.test(value)) {
      //       callback()
      //     } else {
      //       callback(new Error('请输入正确的邮箱格式'))
      //     }
      //   }, 100)
      // }
      // var checkPassword = (rule, value, callback) => {
      //   const pwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z\\W]{6,18}$/
      //   if (!value) {
      //     return callback(new Error('密码不能为空'))
      //   }
      //   setTimeout(() => {
      //     if (pwdReg.test(value)) {
      //       callback()
      //     } else {
      //       callback(new Error('密码必须包含数字和字母，长度6-18'))
      //     }
      //   }, 100)
      // }

      return{
        admin: [],
        admin_input: {
          a_email: '',
          a_password: ''
        },
        // rules: {
        //   a_email: [
        //     { validator: checkEmail, trigger: 'blur' }
        //   ],
        //   a_password: [
        //     { validator: checkPassword, trigger: 'blur'}
        //   ]
        // }
      }
    },
    created(){
      getAdmin().then(res => {
        console.log(res);
        // const result=res.data;
        // if (res.errno===0){
        //   this.admin=result;
        // }
        this.admin = res.data
      })
    },
    methods:{
      adminLogin(){
        if (this.admin_input.a_email === '' || this.admin_input.a_password === ''){
          this.$message.error({
            message: '账号或密码为空',
          })
        } else {
          for (let i = 0; i < this.admin.length; i++) {
            if (this.admin[i].a_account === this.admin_input.a_email && this.admin[i].a_password === this.admin_input.a_password) {
              this.$cookies.set('adminCookie', this.admin[i])
              this.$message.success({
                message: '登陆成功',
              })
              setInterval(() => {
                this.$router.replace('/admin_home')
              },500)
            }
          }
        }
      }
    }
  }
</script>

<style scoped>
  html,body{
    margin: 0;
    padding: 0;
  }
  .a{
    margin-top: -20px;
    width: 100%;
    height: 100vh;
    background-color: #f4f4f4;
  }
  .admin{
    margin: 0 auto;
    width: 500px;
  }
  .admin h3{
    padding-top: 30%;
  }

  .el-button--primary{
    width: 500px;
  }

  .l{
    position: absolute;
    bottom: 5px;
    right: 5px;
  }
</style>