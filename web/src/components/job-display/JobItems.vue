<template>
  <div class="job-item" @click="itemClick">
    <div class="job-info">
      <!--<img :src="job.logo">-->
      <div class="logo left"><img class="logos" :src="job.c_logo"></div>
      <div class="right">
        <a class="job-name">{{ job.j_name }}</a>
        <div class="info">{{ job.c_address }} | {{ job.j_experience }} | {{ job.j_education }}</div>
        <p class="job-salary">￥{{ job.j_salary }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "JobItems",
    props:{
      job:{
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      itemClick(){
        this.$router.push({path: '/job_detail',query:{ j_id:this.job.j_id }})
      }
    }
  }
</script>

<style scoped>
  .job-item{
    margin: 10px 52px;
    /*padding-bottom: 40px;*/
    position: relative;
    /*width: 48%;*/
    width: 400px;
    background-color: #fff;
    box-shadow: 0 0 4px #dfdfdf;
    border-radius: 3%;
  }


  .job-item:hover{
    box-shadow: 5px 5px 10px #dfdfdf;
  }
  /*包含所有信息的基础布局*/
  .job-info{
    display: flex;
    padding-top: 17px;
    /*vertical-align: middle;*/
    /*text-align: center;*/
    cursor: pointer;
    /*flex-wrap: wrap;*/
    /*justify-content: flex-start;*/
  }
  /*公司logo*/
  .logo{
    margin: 5px 20px 0 25px;
    width: 58px;
    height: 58px;
    background-color: lightgreen;
  }
  .logos{
    width: 58px;
    height: 58px;
  }
  /*职位名称*/
  .job-name{
    font-size: 20px;
    color: #414a60;
    text-decoration: none;
  }
  .job-name:hover{
    color: royalblue;
  }

  /*工资*/
  .job-salary{
    font-size: 18px;
    color: #e44700;
  }
</style>