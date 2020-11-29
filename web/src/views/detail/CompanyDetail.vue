<template>
  <div class="company-detail">
    <detail-tab-bar></detail-tab-bar>

    <div class="content">
      <div class="top">
        <div class="top-content">
          <div class="title">
            <img class="logo" :src="companyInfo.c_logo">
            <span class="c_name">{{ companyInfo.c_name }}</span>
          </div>
          <div class="intro">{{ companyInfo.c_address }} · {{ companyInfo.c_type }}</div>
        </div>
        <div class="describe"><span>{{ companyInfo.c_describe }}</span></div>
      </div>
      <div class="down">
        <div v-if="isExist">
          <div class="r-now">在招职位</div>
          <div class="display">
            <!--工作展示-->
            <div class="job-display">
              <div class="one-site" v-for="(item,index) in jobInfo" :key="index">
                <div class="job-info" @click="itemClick(index)">
                  <div class="left">
                    <a class="job-name">{{ item.j_name }}</a>
                    <div class="info">
                      <p class="job-salary">{{ item.j_salary }}</p>
                      <p class="e">{{ item.j_experience }} | {{ item.j_education }}</p></div>
                  </div>
                  <div class="right">
                    <div class="c-info">{{ item.j_type }} | {{ item.j_number }}人</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="!isExist">
          <div class="none">此公司暂无在招职位</div>
        </div>
      </div>
    </div>

    <nav-bar class="nav-bar"/>
  </div>
</template>

<script>
  import DetailTabBar from './childComps/DetailTabBar'
  import NavBar from "../../components/navbar/NavBar";

  import {getCompanyInfoById} from "network/company";
  import {getJobInfoByCId} from "network/job";

  export default {
    name: "CompanyDetail",
    components: {
      DetailTabBar,
      NavBar
    },
    data(){
      return {
        c_id: null,
        companyInfo: {},
        jobInfo: {},
        isExist: false
      }
    },
    created(){
      this.c_id = this.$route.query.c_id
      getCompanyInfoById(this.c_id).then(res => {
        this.companyInfo = res.data[0]
        console.log(this.companyInfo)
      })
      getJobInfoByCId(this.c_id).then(res => {
        this.jobInfo = res.data
        console.log(this.jobInfo)
        if (this.jobInfo.j_id !== null){
          this.isExist = true
        }
      })
    },
    methods: {
      itemClick(index){
        this.$router.push({path: '/job_detail',query:{ j_id:this.jobInfo[index].j_id }})
      }
    }
  }
</script>

<style scoped>
  .nav-bar{
    position: absolute;
    bottom: 46px;
  }
  .content{
    margin-top: 52px;
  }
  .top{
    background-color: #2e3740;
    width: 100%;
    height: 150px;
  }
  .top-content{
    color: white;
    margin: 0 180px;
  }
  .logo{
    width: 70px;
    height: 70px;
    margin-top: 40px;
    margin-right: 25px;
  }
  .title{
    font-size: 30px;
    /*padding-top: 30px;*/
  }
  .c_name{
    padding-top: 10px;
  }
  .intro{
    margin-top: -20px;
    margin-left: 95px;
  }
  .describe{
    position: absolute;
    top: 143px;
    left: 400px;
    color: #fff;
  }

  .job-display{
    position: relative;
    margin: 0 auto;
    margin-top: 20px;
    /*background-color: white;*/
    width: 800px;
  }
  .one-site{
    background-color: white;
    margin-top: 10px;
    box-shadow: 0 0 5px #dfdfdf;
  }
  .one-site:hover{
    box-shadow: 3px 3px 5px #dfdfdf;
  }
  .job-info{
    /*上，右，下，左*/
    padding: 20px 10px 8px 20px;
    cursor: pointer;
    display: flex;
  }
  .job-name{
    font-size: 18px;
    text-decoration: none;
    /*color: #4a4b4b;*/
  }
  .info{
    display: flex;
    margin-top: 5px;
  }
  .job-salary{
    margin-right: 5px;
    font-size: 18px;
    color: #ff4519;
  }
  .e{
    font-size: 15px;
    margin-top: 2px;
  }
  .right{
    position: absolute;
    left: 650px;
  }

  .r-now{
    margin-top: 15px;
    margin-left: 47%;
    font-size: 26px;
    font-family: 方正粗黑宋简体;
  }
  .none{
    margin-top: 15px;
    margin-left: 40%;
    font-size: 26px;
    font-family: 方正粗黑宋简体;
  }
</style>