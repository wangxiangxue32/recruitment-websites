<template>
  <div>
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <!--logo-->
        <div class="navbar-header">
          <a href="/user_home"><img class="logo" src="~assets/img/tabbar/logo.png"></a>
        </div>

        <!--导航栏右侧-->
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <!--主页标签-->
            <li><a href="/user_home">首页</a></li>
            <!--分类求职标签-->
            <li><a href="/job_page">职位分类</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown" v-if="isLogin">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{ user.u_email }},你好<span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="/personal_center">个人信息</a></li>
                <li><a @click="userQuit">退出</a></li>
              </ul>
            </li>
            <li v-if="!isLogin"><span type="button" class="btn btn-default" @click="loginClick">登录</span></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "JobTabBar",
    data(){
      return{
        isLogin: false,
        user: []
      }
    },
    created(){
      if (this.$cookies.get('userCookie')){
        console.log(this.$cookies)
        this.isLogin = true
        this.user = this.$cookies.get('userCookie')
      }
    },
    methods:{
      loginClick(){
        this.$router.replace('/login')
      },
      userQuit(){
        if (this.$cookies.get('userCookie')){
          this.$cookies.remove('userCookie')
          this.isLogin = false
          this.$message({
            message: '退出成功',
            type: 'success'
          })
          this.$router.replace('/login')
        }
      }
    }
  }
</script>

<style scoped>
  .logo{
    width: 150px;
    height: 50px;
  }
  .btn-default{
    margin-right: 10px;
    margin-top: 10px;
  }
</style>