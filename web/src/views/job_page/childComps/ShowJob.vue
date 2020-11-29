<template>
  <div class="job-display">
    <div v-for="(item,index) in job" :key="index">
      <div class="job-info" @click="itemClick">
        <div class="right">
          <a class="job-name">{{ item.j_name }}</a>
          <div class="info">{{ item.c_address }} | {{ item.j_experience }} | {{ item.j_education }}</div>
          <p class="job-salary">￥{{ item.j_salary }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getJobInfoByType,getJobData} from "network/job";

  export default {
    name: "ShowJob",
    props: {
      j_type: ''
    },
    data(){
      return{
        job:[]
      }
    },
    created(){
      // getJobData().then(res=>{
      //   console.log(res);
      //   const result=res.data;
      //   if (res.errno===0){
      //     this.job=result;
      //   }
      // });
      getJobInfoByType(this.j_type).then(res => {
        this.job = res.data
      })
    },
    methods: {
      itemClick(){
        this.$router.push({path: '/job_detail',query:{ j_id:this.job.j_id }})
      }
    }
  }
</script>

<style scoped>

</style>