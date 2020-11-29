<template>
  <div>
    <el-table :data="job" stripe>
      <el-table-column prop="j_id" label="职位编号" width="120"></el-table-column>
      <el-table-column prop="j_name" label="职位名称" width="180"></el-table-column>
      <el-table-column prop="c_name" label="所属企业" width="120"></el-table-column>
      <el-table-column prop="j_salary" label="工资" width="120"></el-table-column>
      <el-table-column prop="j_type" label="职位类型" width="120"></el-table-column>
      <el-table-column prop="j_experience" label="所需经验" width="120"></el-table-column>
      <el-table-column prop="j_education" label="学历" width="120"></el-table-column>
      <el-table-column prop="j_number" label="所需人数" width="120"></el-table-column>

      <el-table-column fixed="right" width="160">
        <template slot="header" slot-scope="scope">
          <el-input
                  v-model="search_job"
                  size="mini"
                  placeholder="输入关键字搜索">
            <el-button icon="el-icon-search" slot="append" @click="searchJob"></el-button>
          </el-input>
        </template>
        <template slot-scope="scope">
          <!--<el-button type="text" size="small" @click.native.prevent="deleteJob">删除</el-button>-->
          <el-button
                  size="mini"
                  type="danger"
                  @click="deleteRow(scope.row)">删 除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {getJobData,deleteJobInfo,selectJob} from "network/job";

  export default {
    name: "JobAction",
    data(){
      return{
        job: [],
        search_job: ''
      }
    },
    created(){
      getJobData().then(res => {
        this.job = res.data
      })
    },
    methods:{
      searchJob(){
        selectJob(this.search_job).then(res => {
          console.log(res.data)
          this.job = res.data
          if (!this.job){
            this.$notify({
              message: '抱歉，暂无含有此关键字的职位信息',type: 'warning'
            })
          }
        })
      },
      deleteRow(rows) {
        console.log(rows);
        deleteJobInfo(rows.j_id).then(res => {
          this.$message({
            message: '删除成功',
            type: 'success'
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>