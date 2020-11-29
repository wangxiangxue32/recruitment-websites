<template>
  <div class="job-detail">
    <detail-tab-bar></detail-tab-bar>
    <div class="content">
      <div class="top">
        <div class="top-content">
          <div class="j_name">{{ jobs.j_name }}<span class="salary">{{ jobs.j_salary }}</span></div>
          <div class="j_info">{{ jobs.c_address }} · {{ jobs.j_education }} · {{ jobs.j_experience }}</div>
        </div>
        <div class="btn1">
          <el-button v-if="!isDeliver" type="primary" plain class="sendBtn" @click="sendResume">投递简历</el-button>
          <el-button v-if="isDeliver" type="primary" disabled class="sendBtn">已投递</el-button>
        </div>
      </div>
      <div class="down">
        <div class="left">
          <div class="title">职位介绍</div>
          <div>{{ jobs.j_resume }}</div>
          <div class="title">职位要求</div>
          <div>{{ jobs.j_require}}</div>
          <div class="title">职位待遇</div>
          <div>{{ jobs.j_treatment }}</div>
        </div>
        <div class="line" style="float:left;width: 1px;height: 400px; background: #dbdbdb;"></div>
        <div class="right">
          <div class="title">公司基本信息</div>
          <div>
            <img class="c_logo" :src="jobs.c_logo">
            <span class="c_name">{{ jobs.c_name }}</span>
          </div>
          <div>
            <div class="intro"><img class="little-logo" src="~assets/img/detail/community-fill.svg"><span>{{ jobs.j_type }}</span></div>
            <div class="intro"><img class="little-logo" src="~assets/img/detail/user-add-fill.svg"><span>{{ jobs.j_number }}人</span></div>
            <div class="intro"><img class="little-logo" src="~assets/img/detail/time.svg"><span>{{ jobs.j_stime }} ~ {{ jobs.j_etime }}</span></div>
          </div>
        </div>
      </div>
    </div>
    <nav-bar class="nav-bar"/>
  </div>
</template>

<script>
  import DetailTabBar from "./childComps/DetailTabBar";
  import NavBar from "../../components/navbar/NavBar";

  import {getJobByJId} from 'network/detail'
  import {addResumeInfo} from "network/resume";
  import {getDeliverInfo} from "network/resume";

  export default {
    name: "JobDetail",
    components: {
      NavBar,
      DetailTabBar
    },
    data(){
      return{
        j_id: null,
        jobs: {},
        user: [],
        deliver: {
          j_id: '',
          u_id: '',
          c_id: ''
        },
        deliverInfo: {},
        isDeliver: false
      }
    },
    created(){
      this.j_id = this.$route.query.j_id
      // alert(this.j_id)
      getJobByJId(this.j_id).then(res => {
        this.jobs = res.data[0]
        console.log(this.jobs)
      })
      if (this.$cookies.get('userCookie')){
        this.user = this.$cookies.get('userCookie')
      }
      getDeliverInfo(this.user.u_id,this.j_id).then(res => {
        this.deliverInfo = res.data
        console.log(this.deliverInfo)
        if (this.deliverInfo.r_id !== '') {
          this.isDeliver = true
        }
      })
    },
    methods: {
      sendResume(){
        if (this.user.u_id !== undefined) {
          this.deliver.j_id = this.j_id
          this.deliver.u_id = this.user.u_id
          this.deliver.c_id = this.jobs.c_id
          addResumeInfo(this.deliver).then(res => {
            console.log(res)
            this.$notify({
              title: '投递成功',
              message: '简历投递成功，请在个人中心查看后续操作',
              type: 'success'
            })
            this.isDeliver = true
          })
        }else {
          alert('请先登录')
        }
      }
    }
  }
</script>

<style scoped>
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
  .j_name{
    font-size: 30px;
    padding-top: 30px;
  }
  .j_info{
    padding-top: 15px;
  }
  .salary{
    margin-left: 30px;
    color: #ff4519;
    font-size: 28px;
  }
  .btn1{
    position: absolute;
    right: 180px;
    top: 100px;
  }
  .sendBtn{
    width: 300px;
    height: 45px;
  }

  .down{
    margin-top: 15px;
    margin-left: 180px;
  }
  .left{
    float: left;
    width: 950px;
    padding-right: 30px;
  }
  .title{
    font-size: 18px;
    font-family: 方正粗黑宋简体;
    line-height: 50px;
  }
  .c_logo{
    width: 60px;
    height: 60px;
  }

  .right{
    float: left;
    margin-left: 20px;
  }
  .c_name{
    margin-left: 15px;
    font-size: 14px;
  }
  .little-logo{
    width: 25px;
    height: 25px;
  }
  .intro{
    line-height: 45px;
  }
  .intro span{
    margin-left: 20px;
  }

  .nav-bar{
    position: absolute;
    bottom: 46px;
  }

</style>