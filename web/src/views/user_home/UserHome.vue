<template>
  <div class="user-home">
    <!--头部-->
    <tab-bar class="tab-bar" :users="users"/>
    <carousel/>

    <!--搜索框-->
    <div class="search-box">
      <el-button type="primary" icon="el-icon-search" @click="search_Job">点击开始搜索工作</el-button>
    </div>

    <!--分割线-->
    <hr class="featurette-divider">

    <!--工作推荐-->
    <div class="down-area">
      <div class="job-recommend">工作推荐</div>
      <job-display/>
      <div class="see-more" @click="seeMore">查看更多</div>
    </div>

    <!--热门企业-->
    <div class="down-area hot">
      <div class="job-recommend">热门企业</div>
      <company-display/>
    </div>

    <!--热门城市-->
    <city-display/>

    <!--尾部-->
    <nav-bar class="nav"/>
  </div>
</template>

<script>
  import {getUser} from "../../network/users.js";

  import TabBar from "components/tabbar/TabBar";
  import Carousel from "components/carousel/Carousel";
  import CityPick from "components/city-pick/CityPick";
  import JobDisplay from "components/job-display/JobDisplay";
  import CompanyDisplay from "components/company-display/CompanyDisplay";
  import NavBar from "components/navbar/NavBar";

  import CityDisplay from "./childComps/city-display/CityDisplay";

  export default {
  name: 'Home',
    components: {
      CityDisplay,

      NavBar,
      CompanyDisplay,
      JobDisplay,
      CityPick,
      Carousel,
      TabBar
    },
    data() {
      return{
        users: []
      }
    },
    created(){
      // getUser().then(res => {
      //   console.log(res);
      //   const result=res.data;
      //   if (res.errno===0){
      //     this.users=result;
      //   }
      // })
    },
    methods: {
      search_Job(){
        this.$router.replace('/job_page')
      },
      seeMore(){
        this.$router.replace('/job_page')
      }
    }
}
</script>

<style scoped>
  .tab-bar{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;
  }

  .search-box{
    margin: 0 auto;
    width: 500px;
  }
  .el-button--primary{
    font-size: 16px;
    width: 500px;
  }

  .down-area{
    background-color: #f5f5f5;
    box-shadow: 0 0 3px #e8e8e8;
    height: 100%;
    padding-bottom: 20px;
  }

  .hot{
    margin-top: 4px;
  }

  .job-recommend{
    font-size: 24px;
    text-align: center;
    position: relative;
    padding-top: 24px;
    margin-bottom: 24px;
    color: #414a60;
  }

  .job-recommend::before,
  .job-recommend::after{
    content: '';
    display: inline-block;
    vertical-align: 8px;
    margin: 0 10px;
    width: 50px;
    height: 1px;
    background: #d1d4db;
  }

  .see-more{
    margin: 0 auto;
    margin-top: 20px;
    width: 384px;
    height: 34px;
    text-align: center;
    color: #378fff;
    font-size: 15px;
    border: 1px solid #378fff;
    line-height: 34px;
  }

  .see-more:hover{
    background-color: #66b1ff;
    color: white;
    transition: 500ms;
    cursor: pointer;
  }

</style>
