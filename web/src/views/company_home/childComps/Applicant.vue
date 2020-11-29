<template>
  <div>
    <h2 class="sub-header">Applicants</h2>
    <div class="table-responsive">
      <el-table stripe :data="users" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <h4>个人简介</h4>
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="姓名">
                <span>{{ props.row.u_realname }}</span>
              </el-form-item>
              <el-form-item label="毕业院校">
                <span>{{ props.row.u_school }}</span>
              </el-form-item>
              <el-form-item label="毕业年份">
                <span>{{ props.row.u_gra_year }}</span>
              </el-form-item>
              <el-form-item label="联系方式">
                <span>{{ props.row.u_contact }}</span>
              </el-form-item>
            </el-form>
            <el-divider></el-divider>
            <h4>实习经历</h4>
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="公司名称">
                <span>{{ props.row.in_c_name }}</span>
              </el-form-item>
              <el-form-item label="所属行业">
                <span>{{ props.row.in_industry }}</span>
              </el-form-item>
              <el-form-item label="所属部门">
                <span>{{ props.row.in_department }}</span>
              </el-form-item>
              <el-form-item label="职位名称">
                <span>{{ props.row.in_j_name }}</span>
              </el-form-item>
              <el-form-item label="在职时间">
                <span>{{ props.row.in_work_time }}</span>
              </el-form-item>
              <el-form-item label="工作业绩">
                <span>{{ props.row.in_work_per }}</span>
              </el-form-item>
            </el-form>
            <el-divider></el-divider>
            <h4>项目经历</h4>
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="项目名称">
                <span>{{ props.row.it_name }}</span>
              </el-form-item>
              <el-form-item label="项目角色">
                <span>{{ props.row.it_character }}</span>
              </el-form-item>
              <el-form-item label="项目链接">
                <span>{{ props.row.it_link }}</span>
              </el-form-item>
              <el-form-item label="项目开始时间">
                <span>{{ props.row.it_start }}</span>
              </el-form-item>
              <el-form-item label="项目结束时间">
                <span>{{ props.row.it_end }}</span>
              </el-form-item>
              <el-form-item label="项目描述">
                <span>{{ props.row.it_describe }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="编号" prop="u_id"></el-table-column>
        <el-table-column label="姓名" prop="u_realname"></el-table-column>
        <el-table-column label="性别" prop="u_gender"></el-table-column>
        <el-table-column label="年龄" prop="u_age"></el-table-column>
        <el-table-column label="学历" prop="u_education"></el-table-column>
        <el-table-column label="应聘职位" prop="j_name"></el-table-column>
        <el-table-column label="操作" width="220px">
          <template slot-scope="scope">
            <el-button type="success" @click.native.prevent="passBtn(scope.$index, users)">通过</el-button>&nbsp;
            <el-button type="danger" @click.native.prevent="rejectBtn(scope.$index, users)">拒绝</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import {getUserJobByCId} from "network/users";
  import {getUserResume} from "network/resume";
  import {updateStatePass} from "network/resume";

  export default {
    name: "Applicant",
    data(){
      return{
        users:[],
        resume: {
          c_id: 0,
          r_id: 0
        },
        drawer: false,
        company: [],
      }
    },
    created(){
      if (this.$cookies.get('companyCookie')){
        this.company = this.$cookies.get('companyCookie')
        console.log(this.company.c_id)
      }
      getUserJobByCId(this.company.c_id).then(res => {
        console.log(this.company.c_id)
        this.users = res.data
        console.log(this.users)
      })
    },
    methods: {
      passBtn(index,rows){
        alert(index)
        alert(this.users[index].u_id)
        rows.splice(index, 1);
        this.resume.c_id = this.company.c_id
        this.resume.r_id = this.users[index].r_id
        console.log(this.resume)
        updateStatePass(this.resume).then(res => {
          alert('操作成功')
          console.log(res)
        })
      },
      rejectBtn(index,rows){
        rows.splice(index, 1);
      }
    }
  }
</script>

<style scoped>

  .a-tr td{
    line-height: 35px;
  }

  .el-button{
    padding: 0;
    width: 75px;
    height: 34px;
  }

  .el-button--primary{
    margin: 0 !important;
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