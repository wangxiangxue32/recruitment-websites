<template>
  <!--导航栏部分-->
  <div class="navbar-wrapper">
    <div class="container">
      <nav class="navbar navbar-inverse navbar-static-top">
        <div class="container">
          <!--导航栏图标部分-->
          <div class="navbar-header">
            <a href="/user_home"><img class="logo" src="~assets/img/tabbar/logo.png"></a>
          </div>
          <!--导航栏文字部分-->
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <!--主页标签-->
              <li class="active"><a href="/user_home">首页</a></li>
              <!--分类求职标签-->
              <li><a href="/job_page">职位分类</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <!--个人中心-->
              <!--<li v-if="isLogin">-->
                <!--<a href="/personal_center">个人中心</a>-->
              <!--</li>-->
              <li class="dropdown" v-if="isLogin">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{ user.u_email }},你好<span class="caret"></span></a>
                <!--下拉菜单-->
                <ul class="dropdown-menu">
                  <li><a href="/personal_center">个人中心</a></li>
                  <li><a href="/user_change_password">修改密码</a></li>
                  <li><a @click="userQuit">退出</a></li>
                </ul>
              </li>
              <li v-if="!isLogin"><span type="button" class="btn btn-default" @click="loginClick">登录</span></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBar",
    inject: ['reload'],
    props:{
      users:{
        type: Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        isLogin: false,
        user: []
      }
    },
    created(){
      if (this.$cookies.get('userCookie')){
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
          this.$message.success({
            message: '退出成功',
          })
          // this.$router.replace('/login')
          this.reload()  //刷新页面
        }
      }
    }
  }
</script>

<style>
  @import "~assets/css/tabbar/tabbar.css";
</style>