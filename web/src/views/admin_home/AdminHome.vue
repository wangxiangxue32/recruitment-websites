<template>
  <div>
    <el-container style="height: 100vh; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu router :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-s-order"></i>信息管理</template>
            <el-menu-item :class="{ active: uIsShow }" @click="showU">用户管理</el-menu-item>
            <el-menu-item :class="{ active: cIsShow }" @click="showC">企业管理</el-menu-item>
            <el-menu-item :class="{ active: jIsShow }" @click="showJ">职位管理</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <span v-if="isLogin" style="margin-right: 20px; font-size: 15px">管理员{{ admin.a_account }}，欢迎您!</span>
          <el-button @click="adminQuit">退出</el-button>
        </el-header>

        <el-main>
          <user-action v-if="uIsShow"/>
          <company-action v-if="cIsShow"/>
          <job-action v-if="jIsShow"/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import UserAction from "./UserAction";
  import CompanyAction from "./CompanyAction";
  import JobAction from "./JobAction";

  export default {
    name: "AdminHome",
    components: {JobAction, CompanyAction, UserAction},
    data(){
      return{
        uIsShow: true,
        cIsShow: false,
        jIsShow: false,
        admin: [],
        isLogin: false
      }
    },
    created(){
      if (this.$cookies.get('adminCookie')){
        this.isLogin = true
        this.admin = this.$cookies.get('adminCookie')
      }
    },
    methods: {
      showU(){
        this.uIsShow = true
        this.cIsShow = false
        this.jIsShow = false
      },
      showC(){
        this.uIsShow = false
        this.cIsShow = true
        this.jIsShow = false
      },
      showJ(){
        this.uIsShow = false
        this.cIsShow = false
        this.jIsShow = true
      },
      adminQuit(){
        if (this.$cookies.get('adminCookie')){
          this.$cookies.remove('adminCookie')
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
  html,body{
    margin: 0;
    padding: 0;
  }

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

  .active{
    background-color: #edf4ff;
  }
</style>