<template>
  <div class="company-item col-lg-3 col-lg-offset-3 col-md-4 col-sm-6" @click="itemClick">
    <div class="company-info">
      <!--<img :src="job.logo">-->
      <div class="logo"><img class="logos" :src="companyInfo.c_logo"></div>
      <a class="company-name">{{ companyInfo.c_name }}</a>
      <div class="info">{{ companyInfo.c_describe }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CompanyItems",
    props: {
      company:{
        type: Object,
        default(){
          return {}
        }
      },
      companyInfo: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      itemClick(){
        this.$router.push({path: '/company_detail',query:{ c_id:this.companyInfo.c_id }})
      }
    }
  }
</script>

<style scoped>
  .company-item{
    margin: 10px 10px;
    /*padding-bottom: 40px;*/
    position: relative;
    /*width: 48%;*/
    width: 300px;
    height: 200px;
    background-color: #fff;
    box-shadow: 0 0 4px #dfdfdf;
    border-radius: 3%;

    transform:  translateX(44%);
  }

  .company-item:hover{
    box-shadow: 5px 5px 10px #dfdfdf;
  }
  .company-info{
    text-align: center;
    padding-top: 20px;
    cursor: pointer;
  }

  /*公司logo*/
  .logo{
    margin: 0 auto;
    margin-bottom: 10px;
    /*margin: 15px 20px 0 25px;*/
    width: 60px;
    height: 60px;
    /*background-color: lightgreen;*/
  }
  .logos{
    width: 58px;
    height: 58px;
  }
  /*职位名称*/
  .company-name{
    font-size: 20px;
    color: #414a60;
    text-decoration: none;
  }
  .company-name:hover{
    color: royalblue;
  }

</style>