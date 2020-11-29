<template>
  <div>
    <h2 class="sub-header">Information</h2>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <!--填表单部分-->
            <div class="card-body">
              <el-form ref="c_info" :model="{c_info}">
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <el-form-item label="公司名称:" prop="c_name">
                        <el-input v-model="c_info.c_name" :disabled="isDisabled"></el-input>
                      </el-form-item>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group">
                      <el-form-item label="成立时间:">
                        <el-date-picker
                                v-model="c_info.c_established"
                                type="month"
                                placeholder="选择月"
                                :disabled="isDisabled">
                        </el-date-picker>
                      </el-form-item>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-2">
                    <div class="form-group">
                      <el-form-item label="当前状态:">
                        <el-select v-model="c_info.c_currentstate" value="" :disabled="isDisabled">
                          <el-option label="已上市" value="已上市"></el-option>
                          <el-option label="未上市" value="未上市"></el-option>
                        </el-select>
                      </el-form-item>
                    </div>
                  </div>
                  <div class="col-md-9">
                    <div class="form-group">
                      <el-form-item label="联系方式:" prop="c_contact">
                        <el-input v-model="c_info.c_contact" :disabled="isDisabled"></el-input>
                      </el-form-item>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-3">
                    <div class="form-group">
                      <el-form-item label="公司类型:" prop="c_type">
                        <el-input v-model="c_info.c_type" :disabled="isDisabled"></el-input>
                      </el-form-item>
                    </div>
                  </div>
                  <div class="col-md-9">
                    <div class="form-group">
                      <el-form-item label="公司地址:" prop="c_address">
                        <el-input v-model="c_info.c_address" :disabled="isDisabled"></el-input>
                      </el-form-item>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <div class="form-group">
                        <el-form-item label="公司简介:">
                          <el-input
                                  type="textarea"
                                  placeholder="请输入内容"
                                  v-model="c_info.c_describe"
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
                <!--保存资料按钮-->
                <button class="btn btn-primary pull-right" @click.prevent="cfsaveClick" >保 存</button>
                <button class="btn btn-success pull-right" @click.prevent="changeInfo">修 改</button>
                <div class="clearfix"></div>
              </el-form>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import {getCompanyInfoById,addCompanyInfo} from "network/company";
  import {updateCompanyInfo} from "network/company";

  export default {
    name: "CForm",
    data(){
      return{
        c_info: {
          c_id: '',
          c_name: '',
          c_established: '',
          c_currentstate: '',
          c_contact: '',
          c_type: '',
          c_address: '',
          c_describe: ''
        },
        company: [],
        isDisabled: true
      }
    },
    created(){
      if (this.$cookies.get('companyCookie')){
        this.isLogin = true
        this.company = this.$cookies.get('companyCookie')
      }
      this.fetch()
    },
    methods: {
      fetch(){
        getCompanyInfoById(this.company.c_id).then(res => {
          console.log(res)
          this.c_info = res.data[0]
        })
      },
      cfsaveClick(){
        if (this.c_info.c_id !== ''){
          updateCompanyInfo(this.c_info).then(res => {
            console.log(res.data)
            this.$message({
              message: '信息更新成功',
              type: 'success'
            })
            this.isDisabled = true
          })
        } else {
          this.c_info.c_id = this.company.c_id
          addCompanyInfo(this.c_info).then(res => {
            console.log(res.data)
            this.$message({
              message: '信息保存成功',
              type: 'success'
            })
            this.isDisabled = true
          })
        }
      },
      changeInfo(){
        this.isDisabled = false
      }
    }
  }
</script>

<style scoped>

  .btn-primary{
    margin-left: 5px;
  }

  .form-group{
    margin: 0;
  }
</style>