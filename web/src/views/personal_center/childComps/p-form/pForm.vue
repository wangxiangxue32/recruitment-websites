<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header card-header-primary">
              <h4 class="card-title">Edit Profile</h4>
              <p class="card-category">Complete your profile</p>
            </div>
            <div class="card-body">
              <el-form ref="userInfo" :model="{userInfo}">
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <el-form-item label="真实姓名:" prop="realname">
                        <el-input v-model="userInfo.u_realname" :disabled="isDisabled"></el-input>
                      </el-form-item>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="form-group">
                      <el-form-item label="身份证号:" prop="identify">
                        <el-input v-model="userInfo.u_identify" :disabled="isDisabled"></el-input>
                      </el-form-item>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-3">
                    <div class="form-group">
                      <el-form-item label="性别:">
                        <el-select v-model="userInfo.u_gender" value="" :disabled="isDisabled">
                          <el-option label="男" value="男"></el-option>
                          <el-option label="女" value="女"></el-option>
                        </el-select>
                      </el-form-item>
                    </div>
                  </div>
                  <div class="col-md-9">
                    <div class="form-group">
                      <el-form-item label="联系方式:" prop="contact">
                        <el-input v-model="userInfo.u_contact" :disabled="isDisabled"></el-input>
                      </el-form-item>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-2">
                    <div class="form-group">
                      <el-form-item label="年龄:" prop="age">
                        <el-input v-model="userInfo.u_age" :disabled="isDisabled"></el-input>
                      </el-form-item>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <el-form-item label="出生日期:">
                        <el-date-picker
                                v-model="userInfo.u_birthday"
                                type="month"
                                placeholder="选择月"
                                :disabled="isDisabled">
                        </el-date-picker>
                      </el-form-item>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <el-form-item label="毕业年份:">
                        <el-date-picker
                                v-model="userInfo.u_gra_year"
                                type="year"
                                placeholder="选择年"
                                :disabled="isDisabled">
                        </el-date-picker>
                      </el-form-item>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-8">
                    <div class="form-group">
                      <el-form-item label="毕业院校:" prop="graduate">
                        <el-input v-model="userInfo.u_school" :disabled="isDisabled"></el-input>
                      </el-form-item>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <el-form-item label="学历:">
                        <el-select v-model="userInfo.u_education" value="" :disabled="isDisabled">
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
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <div class="form-group">
                        <el-form-item label="介绍自己:">
                        <el-input
                                type="textarea"
                                placeholder="请输入内容"
                                v-model="userInfo.u_introduce"
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
                <button class="btn btn-primary pull-right" @click.prevent="userInfoSave">保 存</button>
                <button class="btn btn-success pull-right" @click.prevent="changeDisabledState">修 改</button>
                <div class="clearfix"></div>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {addUserInfo,getUserInfoById} from "network/users";
  import {updateUserInfo} from "network/users";

  export default {
    name: "pForm",
    data(){
      return{
        isDisabled: true,
        user: [],
        userInfo:{
          u_id: '',
          u_gender: '',
          u_age: '',
          u_education: '',
          u_contact: '',
          u_birthday: '',
          u_realname: '',
          u_identify: '',
          u_introduce: '',
          u_school: '',
          u_gra_year: ''
        }
      }
    },
    created(){
      if (this.$cookies.get('userCookie')){
        // this.isLogin = true
        console.log(this.$cookies)
        this.user = this.$cookies.get('userCookie')
      }
      getUserInfoById(this.user.u_id).then(res => {
        console.log(res)
        this.userInfo = res.data[0]
      })
    },
    methods:{
      userInfoSave(){
        let ui = this.userInfo
        if (ui.u_id !== ''){
          //不是空就执行更新数据，而不是添加
          updateUserInfo(ui).then(res => {
            console.log(res)
            this.$message.success({
              message: '信息保存成功',
            })
            this.isDisabled = true
          })
        }else {
          ui.u_id = this.user.u_id
          addUserInfo(ui).then(res => {
            console.log(res)
            this.$message.success({
              message: '信息保存成功',
            })
            this.isDisabled = true
          })
        }
        //没写空值检测
      },
      changeDisabledState(){
        this.isDisabled = false
      }
    }
  }
</script>

<style scoped>
  @import "~assets/css/p-form/form.css";

  .btn-primary{
    margin-left: 5px;
  }

  .form-group{
    margin: 0;
  }
</style>