<template>
  <div>
    <h2 class="sub-header">Launched</h2>
    <div class="table-responsive">
      <el-table :data="job" stripe ref="table">
        <el-table-column prop="j_id" label="编号" width="80"></el-table-column>
        <el-table-column prop="j_name" label="职位名称" width="180"></el-table-column>
        <el-table-column prop="j_number" label="招聘人数" width="120"></el-table-column>
        <el-table-column prop="j_salary" label="工资" width="120"></el-table-column>
        <el-table-column prop="j_type" label="职位类型" width="120"></el-table-column>
        <el-table-column prop="j_experience" label="所需经验" width="120"></el-table-column>
        <el-table-column prop="j_stime" label="开始时间" width="120"></el-table-column>
        <el-table-column prop="j_etime" label="结束时间" width="120"></el-table-column>

        <el-table-column fixed="right" width="160">
          <template slot-scope="scope">
            <el-button type="primary" size="small" @click="modifyJobInfo(scope.row)">修改</el-button>
            <el-button
                    size="mini"
                    type="danger"
                    @click="deleteRow(scope.row)">删 除</el-button>
          </template>
        </el-table-column>
        <el-table-column type="expand">
          <template slot-scope="props">
            <h4>修改招聘信息</h4>
            <el-form ref="job_info" :model="job_info" label-position="left" inline class="demo-table-expand">
              <el-form-item label="职位名称:">
                <el-input v-model="job_info.j_name"></el-input>
              </el-form-item>
              <el-form-item label="开始时间:">
                <el-date-picker
                        v-model="job_info.j_stime"
                        type="month"
                        placeholder="选择月">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="结束时间:">
                <el-date-picker
                        v-model="job_info.j_etime"
                        type="month"
                        placeholder="选择月">
                </el-date-picker>
              </el-form-item>

              <el-form-item label="招聘人数:">
                <el-input v-model="job_info.j_number"></el-input>
              </el-form-item>

              <el-form-item label="工 资:">
                <el-input v-model="job_info.j_salary"></el-input>
              </el-form-item>

              <el-form-item label="职位类型:">
                <el-input v-model="job_info.j_type"></el-input>
              </el-form-item>

              <el-form-item label="要求学历:">
                <el-select v-model="job_info.j_education" value="">
                  <el-option label="无" value="无"></el-option>
                  <el-option label="小学" value="小学"></el-option>
                  <el-option label="初中" value="初中"></el-option>
                  <el-option label="高中" value="高中"></el-option>
                  <el-option label="大专" value="大专"></el-option>
                  <el-option label="本科" value="本科"></el-option>
                  <el-option label="硕士" value="硕士"></el-option>
                  <el-option label="博士" value="博士"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="工作经验:">
                <el-input v-model="job_info.j_experience"></el-input>
              </el-form-item>

              <el-form-item label="职位简介:">
                <el-input
                        type="textarea"
                        placeholder="请输入内容"
                        v-model="job_info.j_resume"
                        rows="3"
                        maxlength="200"
                        show-word-limit>
                </el-input>
              </el-form-item>

              <el-form-item label="招聘员工要求:">
                <el-input
                        type="textarea"
                        placeholder="请输入内容"
                        v-model="job_info.j_require"
                        rows="3"
                        maxlength="200"
                        show-word-limit>
                </el-input>
              </el-form-item>

              <el-form-item label="职位待遇:">
                <el-input
                        type="textarea"
                        placeholder="请输入内容"
                        v-model="job_info.j_treatment"
                        rows="3"
                        maxlength="200"
                        show-word-limit>
                </el-input>
              </el-form-item>
              <el-button type="primary" size="middle" @click="saveJobModify">保存修改</el-button>
            </el-form>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import {getJobInfoByCId,deleteJobInfo,getJobInfoByCIdAndJId,modifyJobInfo} from "network/job";

  export default {
    name: "Launched",
    data(){
      return{
        job:[],
        job_info: {
          c_id: '',
          j_name: '',
          j_stime: '',
          j_etime: '',
          j_number: '',
          j_type: '',
          j_salary: '',
          j_treatment: '',
          j_require: '',
          j_resume: '',
          j_education: '',
          j_experience: ''
        },
        company: []
      }
    },
    created(){
      if (this.$cookies.get('companyCookie')){
        this.company = this.$cookies.get('companyCookie')
      }
      getJobInfoByCId(this.company.c_id).then(res => {
        console.log(res);
        const result=res.data;
        if (res.errno===0){
          this.job=result;
        }
      })
    },
    methods: {
      deleteRow(rows){
        deleteJobInfo(rows.j_id).then(res => {
          this.$message({
            message: '删除成功',
            type: 'success'
          })
        })
      },
      modifyJobInfo(rows){
        console.log(rows)
        getJobInfoByCIdAndJId(this.company.c_id,rows.j_id).then(res => {
          this.job_info = res.data[0]
          console.log(res.data)
        })
        let $table = this.$refs.table;
        $table.toggleRowExpansion(rows)
      },
      saveJobModify(){
        modifyJobInfo(this.job_info).then(res => {
          console.log(res)
          this.$message({
            message: '保存修改成功',
            type: 'success'
          })
        })
      }
    }
  }
</script>

<style scoped>
  .a-tr td{
    line-height: 35px;
  }

  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>