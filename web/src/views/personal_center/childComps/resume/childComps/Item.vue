<template>
  <div class="item">
    <label class="a-p">项目经历</label>
    <el-form ref="u_item" :model="u_item">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <el-form-item label="项目名称:" prop="it_name">
              <el-input v-model="u_item.it_name" :disabled="isDisabled"></el-input>
            </el-form-item>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <el-form-item label="项目角色:" prop="it_character">
              <el-input v-model="u_item.it_character" :disabled="isDisabled"></el-input>
            </el-form-item>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <el-form-item label="(选填)项目链接:" prop="it_link">
              <el-input v-model="u_item.it_link" :disabled="isDisabled"></el-input>
            </el-form-item>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <el-form-item label="项目开始时间:">
              <el-date-picker
                      v-model="u_item.it_start"
                      type="month"
                      placeholder="选择月"
                      :disabled="isDisabled">
              </el-date-picker>
            </el-form-item>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <el-form-item label="项目结束时间:">
              <el-date-picker
                      v-model="u_item.it_end"
                      type="month"
                      placeholder="选择月"
                      :disabled="isDisabled">
              </el-date-picker>
            </el-form-item>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <div class="form-group">
              <el-form-item label="项目描述:">
                <el-input
                        type="textarea"
                        placeholder="请输入内容"
                        v-model="u_item.it_describe"
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
      <button class="btn btn-primary pull-right" @click.prevent="saveItem">保 存</button>
      <button class="btn btn-success pull-right" @click.prevent="changeDisabledState">修 改</button>
    </el-form>
  </div>
</template>

<script>
  import {addItemInfo,getUserItem} from "network/resume";
  import {updateItemInfo} from "network/resume";

  export default {
    name: "Item",
    data(){
      return{
        user: [],
        u_item:{
          u_id: '',
          it_name: '',
          it_character: '',
          it_link: '',
          it_start: '',
          it_end: '',
          it_describe: ''
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
      getUserItem(this.user.u_id).then(res => {
        this.u_item = res.data[0]
      })
    },
    methods:{
      saveItem(){
        if (this.u_item.u_id !== ''){
          updateItemInfo(this.u_item).then(res => {
            console.log(res)
            this.$message({
              message: '信息保存成功',
              type: 'success'
            })
            this.isDisabled = true
          })
        }else {
          this.u_item.u_id = this.user.u_id
          addItemInfo(this.u_item).then(res => {
            this.$message({
              message: '项目经历保存成功',
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
  .item{
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