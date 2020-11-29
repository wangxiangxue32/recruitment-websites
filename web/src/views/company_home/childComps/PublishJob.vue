<template>
  <div class="publish">
    <h2 class="sub-header">Publish Jobs</h2>
    <div class="row">
      <el-form ref="job_info" :model="job_info">
        <el-form-item label="职位名称:" required>
          <el-input v-model="job_info.j_name" :disabled="isDisabled"></el-input>
        </el-form-item>
        <el-form-item label="开始时间:" required>
          <el-date-picker
                  v-model="job_info.j_stime"
                  type="month"
                  placeholder="选择月"
                  :disabled="isDisabled">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="结束时间:" required>
          <el-date-picker
                  v-model="job_info.j_etime"
                  type="month"
                  placeholder="选择月"
                  :disabled="isDisabled">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="招聘人数:" required>
          <el-input v-model="job_info.j_number" :disabled="isDisabled"></el-input>
        </el-form-item>

        <el-form-item label="工资:" required>
          <el-input v-model="job_info.j_salary" :disabled="isDisabled"></el-input>
        </el-form-item>

        <el-form-item label="职位类型:" required>
          <el-input v-model="job_info.j_type" :disabled="isDisabled"></el-input>
        </el-form-item>

        <el-form-item label="要求学历:" required>
          <el-select v-model="job_info.j_education" value="" :disabled="isDisabled">
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

        <el-form-item label="工作经验:" required>
          <el-input v-model="job_info.j_experience" :disabled="isDisabled"></el-input>
        </el-form-item>

        <el-form-item label="职位简介:">
          <el-input
                  type="textarea"
                  placeholder="请输入内容"
                  v-model="job_info.j_resume"
                  rows="3"
                  maxlength="200"
                  show-word-limit
                  :disabled="isDisabled">
          </el-input>
        </el-form-item>

        <el-form-item label="招聘员工要求:">
          <el-input
                  type="textarea"
                  placeholder="请输入内容"
                  v-model="job_info.j_require"
                  rows="3"
                  maxlength="200"
                  show-word-limit
                  :disabled="isDisabled">
          </el-input>
        </el-form-item>

        <el-form-item label="职位待遇:">
          <el-input
                  type="textarea"
                  placeholder="请输入内容"
                  v-model="job_info.j_treatment"
                  rows="3"
                  maxlength="200"
                  show-word-limit
                  :disabled="isDisabled">
          </el-input>
        </el-form-item>

        <button type="submit" class="btn btn-primary pull-right" @click.prevent="publishJob">发 布</button>
      </el-form>
    </div>
  </div>
</template>

<script>
  import {addJob} from "network/job";

  export default {
    name: "PublishJob",
    data(){
      return{
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
        company: [],
        isDisabled: false
      }
    },
    created(){
      if (this.$cookies.get('companyCookie')){
        this.company = this.$cookies.get('companyCookie')
      }
    },
    methods: {
      publishJob(){
        this.job_info.c_id = this.company.c_id
        addJob(this.job_info).then(res => {
          console.log(res)
          this.$message({
            message: '职位发布成功',
            type: 'success'
          })
          this.isDisabled = true
        })
      }
    }
  }

</script>

<style scoped>
  .form-group{
    margin: 0;
  }
</style>