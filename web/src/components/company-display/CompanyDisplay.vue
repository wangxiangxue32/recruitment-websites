<template>
  <div class="company row">
    <company-items v-for="(item,index) in companyInfo"
                   :companyInfo="item"
                   v-if="index < 8"
                   :key="index"/>
  </div>
</template>

<script>
  import {getCompany,getCompanyInfo} from "network/company";
  import CompanyItems from "./CompanyItems";

  export default {
    name: "CompanyDisplay",
    components: {
      CompanyItems
    },
    data(){
      return{
        company:[],
        companyInfo: []
      }
    },
    created(){
      getCompany().then(res => {
        this.company = res.data
      })
      getCompanyInfo().then(res => {
        this.companyInfo = res.data
      })
    }
  }
</script>

<style scoped>
  .company{
    /*background-color: #f4f4f4;*/
    /*display: flex;*/
    /*!*height: 500px;*!*/

    /*flex-wrap: wrap;*/
    /*justify-content: flex-start;*/
    /*padding: 2px;*/
  }

  /*@media (max-width: 768px){*/
    /*.company{*/
      /*justify-content: center;*/
    /*}*/
  /*}*/

  /*@media (max-width: 1024px){*/
    /*.company{*/
      /*justify-content: center;*/
    /*}*/
  /*}*/

  /*@media (max-width: 1900px){*/
    /*.company{*/
      /*justify-content: center;*/
    /*}*/
  /*}*/

  .col-lg-3{
    /*float: none;*/
    /*display: inline-block;*/
    /*vertical-align: middle;*/
    /*transform: translateX(35%);*/
  }
</style>