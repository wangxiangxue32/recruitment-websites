<template>
  <div>
    <el-table :data="company">
      <el-table-column prop="c_id" label="企业编号" width="100"></el-table-column>
      <el-table-column prop="c_email" label="账号" width="200"></el-table-column>
      <el-table-column prop="c_name" label="企业名称" width="160"></el-table-column>
      <el-table-column prop="c_address" label="地址" width="120"></el-table-column>
      <el-table-column prop="c_type" label="企业类型" width="100"></el-table-column>
      <el-table-column prop="c_contact" label="联系方式" width="160"></el-table-column>

      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="deleteRow(scope.row)">强制注销</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {getCompanyEI} from "network/company";
  import {deleteCompanyEI} from "network/company";

  export default {
    name: "CompanyAction",
    data(){
      return{
        company: [],
        resume: []
      }
    },
    created(){
      getCompanyEI().then(res => {
        this.company = res.data
      })
    },
    methods: {
      deleteRow(rows){
        deleteCompanyEI(rows.c_id).then(res => {
          this.$message({
            message: '删除成功',
            type: 'success'
          })
        })
        getCompanyEI().then(res => {
          this.company = res.data
        })
      }
    }
  }
</script>

<style scoped>

</style>