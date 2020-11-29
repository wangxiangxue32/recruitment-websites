<template>
  <el-table
          :data="company"
          stripe
          height="490"
          border
          style="width: 100%">
    <el-table-column
            prop="j_name"
            label="职位名称"
            width="170">
    </el-table-column>
    <el-table-column
            prop="j_salary"
            label="工资"
            width="100">
    </el-table-column>
    <el-table-column
            prop="j_experience"
            label="工作经验"
            width="100">
    </el-table-column>
    <el-table-column
            prop="j_number"
            label="招聘人数"
            width="100">
    </el-table-column>
    <el-table-column
            prop="c_name"
            label="公司名"
            width="100">
    </el-table-column>
    <el-table-column
            prop="c_type"
            label="公司类型"
            width="100">
    </el-table-column>
    <el-table-column
            prop="c_address"
            label="地址"
            width="100">
    </el-table-column>
    <el-table-column
            prop="r_state"
            label="状态"
            width="100">
    </el-table-column>
  </el-table>
</template>

<script>
  // import {getCompanyInfo} from "network/company";
  import {getResumeAndCompanyInfo} from "network/resume";

  export default
  {
    name: "DeliverCompany",
    data(){
      return {
        company: [],
        user: []
      }
    },
    created(){
      if (this.$cookies.get('userCookie')){
        console.log(this.$cookies)
        this.user = this.$cookies.get('userCookie')
      }
      getResumeAndCompanyInfo(this.user.u_id).then(res => {
        this.company = res.data
      })
    },
    methods: {
      fetch(){

      }
    }
  }
</script>

<style scoped>
  .active{
    display: none;
  }
</style>