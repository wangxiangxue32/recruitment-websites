<template>
  <div class="job-display">
    <job-items v-for="(item,index) in job"
               :job="item"
               v-if="index < 9"
               :key="index"/>
  </div>
</template>

<script>
  import {getJobData} from "network/job";
  import JobItems from "./JobItems";

  export default {
    name: "JobDisplay",
    components: {
      JobItems
    },
    data(){
      return{
        job:[]
      }
    },
    created(){
      getJobData().then(res=>{
        console.log(res);
        const result=res.data;
        if (res.errno===0){
          this.job=result;
        }
      });
    }
  }
</script>

<style scoped>
  .job-display{
    display: flex;
    /*height: 500px;*/

    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }

  @media (max-width: 768px){
    .job-display{
      justify-content: center;
    }
  }

  @media (max-width: 1024px){
    .job-display{
      justify-content: center;
    }
  }

  @media (max-width: 1900px){
    .job-display{
      justify-content: center;
    }
  }
</style>