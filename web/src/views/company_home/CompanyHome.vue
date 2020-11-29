<template>
  <div class="company-home">
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <!--logo-->
        <div class="navbar-header">
          <a href="/company_home"><img class="logo" src="~assets/img/tabbar/logo.png"></a>
        </div>

        <!--导航栏右侧-->
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li v-if="isLogin" style="font-size: 15px; color: white; margin-right: 20px; line-height: 50px">您好，{{ company.c_email }}！</li>
            <li v-if="isLogin"><a @click="changePwd">修改密码</a></li>
            <li><a @click="companyQuit">退出登录</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">
          <ul class="nav nav-sidebar c-ul">
            <li :class="{active:cIsClick}"><a @click="cClick">公司信息<span class="sr-only">(current)</span></a></li>
            <li :class="{active:pIsClick}"><a @click="pClick">发布职位</a></li>
            <li :class="{active:aIsClick}"><a @click="aClick">浏览应聘者</a></li>
            <li :class="{active:lIsClick}"><a @click="lClick">已发布职位</a></li>
          </ul>
          <div class="copyright float-right c">
            &copy;2020, made with 💗 by Wxx.
          </div>
        </div>

        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!--公司信息-->
          <div class="c-form" v-if="cIsClick">
            <c-form/>
          </div>
          <!--发布职位-->
          <div class="publish-job" v-if="pIsClick">
            <publish-job/>
          </div>
          <!--浏览应聘者-->
          <div class="app">
            <applicant v-if="aIsClick"/>
          </div>
          <!--已发布职位-->
          <div>
            <launched v-if="lIsClick"/>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import CForm from "./childComps/CForm";
  import PublishJob from "./childComps/PublishJob";
  import Applicant from "./childComps/Applicant";
  import Launched from "./childComps/Launched";
  export default {
    name: "CompanyHome",
    data(){
      return{
        cIsClick: true,
        pIsClick: false,
        aIsClick: false,
        lIsClick:false,
        isLogin: false,
        company: []
      }
    },
    components: {
      Launched,
      Applicant,
      PublishJob,
      CForm
    },
    created(){
      if (this.$cookies.get('companyCookie')){
        this.isLogin = true
        this.company = this.$cookies.get('companyCookie')
      }
    },
    methods:{
      companyQuit(){
        if (this.$cookies.get('companyCookie')){
          this.$cookies.remove('companyCookie')
          this.isLogin = false
          this.$message.success({
            message: '退出成功',
            type: 'success'
          })
          this.$router.replace('/company_login')
        }
      },
      changePwd(){
        this.$router.replace('/company_change_password')
      },
      cClick(){
        this.pIsClick = false
        this.aIsClick = false
        this.cIsClick = true
        this.lIsClick = false
      },
      pClick(){
        this.pIsClick = true
        this.aIsClick = false
        this.cIsClick = false
        this.lIsClick = false
      },
      aClick(){
        this.pIsClick = false
        this.aIsClick = true
        this.cIsClick = false
        this.lIsClick = false
      },
      lClick(){
        this.pIsClick = false
        this.cIsClick = false
        this.aIsClick = false
        this.lIsClick = true
      }
    }
  }
</script>

<style scoped>
  @import "~assets/css/c-home/CHome.css";

  .c{
    position: absolute;
    bottom: 5px;
    left: 5px;
  }

  .c-ul li{
    cursor: pointer;
  }
</style>