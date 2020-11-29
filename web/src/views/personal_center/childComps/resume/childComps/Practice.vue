<template>
  <div class="practice">
    <label class="a-p">实习经历</label>
    <el-form ref="u_practice" :model="{u_practice}">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <el-form-item label="公司名称:" prop="in_c_name">
              <el-input v-model="u_practice.in_c_name" :disabled="isDisabled"></el-input>
            </el-form-item>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <el-form-item label="所属行业:" prop="in_industry">
              <el-input v-model="u_practice.in_industry" :disabled="isDisabled"></el-input>
            </el-form-item>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <div class="form-group">
            <el-form-item label="所属部门:" prop="in_department">
              <el-input v-model="u_practice.in_department" :disabled="isDisabled"></el-input>
            </el-form-item>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <el-form-item label="职位名称:" prop="in_j_name">
              <el-input v-model="u_practice.in_j_name" :disabled="isDisabled"></el-input>
            </el-form-item>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <el-form-item label="在职时间:" prop="in_work_time">
              <el-input v-model="u_practice.in_work_time" :disabled="isDisabled"></el-input>
            </el-form-item>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <div class="form-group">
              <el-form-item label="工作业绩:">
                <el-input
                        type="textarea"
                        placeholder="请输入内容"
                        v-model="u_practice.in_work_per"
                        rows="3"
                        maxlength="200"
                        show-word-limit
                        :disabled="isDisabled">
                </el-input>
              </el-form-item>
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn-primary pull-right" @click.prevent="practiceSave">保 存</button>
      <button class="btn btn-success pull-right" @click.prevent="changeDisabledState">修 改</button>
    </el-form>
  </div>
</template>

<script>
  import {addPracticeInfo,getUserPractice} from "network/resume";
  import {updatePracticeInfo} from "network/resume";

  export default {
    name: "Practice",
    data(){
      return{
        user: [],
        u_practice:{
          u_id: '',
          in_c_name: '',
          in_industry: '',
          in_department: '',
          in_j_name: '',
          in_work_time: '',
          in_work_per: ''
        },
        isDisabled: true
      }
    },
    created(){
      if (this.$cookies.get('userCookie')){
        // this.isLogin = true
        console.log(this.$cookies)
        this.user = this.$cookies.get('userCookie')
      }
      getUserPractice(this.user.u_id).then(res => {
        this.u_practice = res.data[0]
      })
    },
    methods: {
      practiceSave(){
        if (this.u_practice.u_id !== ''){
          updatePracticeInfo(this.u_practice).then(res => {
            console.log(res)
            this.$message({
              message: '信息保存成功',
              type: 'success'
            })
            this.isDisabled = true
          })
        } else {
          this.u_practice.u_id = this.user.u_id
          addPracticeInfo(this.u_practice).then(res => {
            this.$message({
              message: '实习经历保存成功',
              type: 'success'
            })
            this.isDisabled = true
          })
        }
      },
      changeDisabledState(){
        this.isDisabled = false
      }
    }
  }
</script>

<style scoped>
  .practice{
    position: relative;
  }

  .a-p{
    font-size: 18px;
    margin-left: 7px;
  }
  .a-p:before{
    content: "";
    position: absolute;
    width: 3px;
    height: 14px;
    border-radius: 10px;
    background-color: #26ca39;
    left: 0;
    top: 3px;
  }

  .btn-primary{
    margin-left: 5px;
  }

  .form-group{
    margin: 0;
  }
</style>