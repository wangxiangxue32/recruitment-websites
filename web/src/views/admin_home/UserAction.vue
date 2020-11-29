<template>
  <div>
    <el-table :data="users">
      <el-table-column prop="u_id" label="用户编号" width="80"></el-table-column>
      <el-table-column prop="u_email" label="账号" width="200"></el-table-column>
      <el-table-column prop="u_realname" label="真实姓名" width="100"></el-table-column>
      <el-table-column prop="u_gender" label="性别" width="80"></el-table-column>
      <el-table-column prop="u_age" label="年龄" width="80"></el-table-column>
      <el-table-column prop="u_education" label="学历" width="100"></el-table-column>
      <el-table-column prop="u_contact" label="联系方式" width="140"></el-table-column>

      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="deleteRow(scope.row)">强制注销</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {getUserEI} from "network/users";
  import {deleteUserEI} from "network/users";

  export default {
    name: "UserAction",
    data() {
      return {
        users: []
      }
    },
    created(){
      getUserEI().then(res => {
        this.users = res.data
      })
    },
    methods: {
      deleteRow(rows){
        deleteUserEI(rows.u_id).then(res => {
          this.$message.success({
            message: '删除成功'
          })
          getUserEI().then(res => {
            this.users = res.data
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>