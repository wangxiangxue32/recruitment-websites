<template>
  <div class="personal container">
    <tab-bar/>

    <div class="p-content">
      <div class="p-left">
        <ul class="nav nav-pills nav-stacked">
          <li role="presentation" class="li-bar" :class="{active: pIsShow}"><a @click="pClick">个人信息</a></li>
          <li role="presentation" class="li-bar" :class="{active: rIsShow}"><a @click="rClick">我的经历</a></li>
          <li role="presentation" class="li-bar" :class="{active: cIsShow}"><a @click="cClick">已投递职位</a></li>
        </ul>
      </div>

      <div class="p-right">
        <p-form v-if="pIsShow"/>
        <resume v-if="rIsShow"/>
        <deliver-company v-if="cIsShow"/>
      </div>
    </div>

    <nav-bar/>
  </div>

</template>

<script>
  import NavBar from "components/navbar/NavBar";
  import TabBar from "components/tabbar/TabBar";
  import PForm from "./childComps/p-form/pForm";
  import Resume from "./childComps/resume/Resume";
  import DeliverCompany from "./childComps/deliver_company/DeliverCompany";

  export default {
    name: "PersonalCenter",
    data(){
      return{
        pIsShow: true,
        rIsShow: false,
        cIsShow: false
      }
    },
    components: {
      DeliverCompany,
      Resume,
      PForm,
      TabBar,
      NavBar
    },
    methods:{
      pClick(){
        this.rIsShow = false
        this.pIsShow = true
        this.cIsShow = false
      },
      rClick(){
        this.pIsShow = false
        this.rIsShow = true
        this.cIsShow = false
      },
      cClick(){
        this.pIsShow = false
        this.rIsShow = false
        this.cIsShow = true
      }
    }
  }
</script>

<style scoped>
  .p-left{
    width: 200px;
    margin-top: 10%;
  }

  .p-right{
    margin-top: 10%;
    margin-left: 5%;
  }

  .li-bar a{
    border: 1px solid #777777;
    color: black;
    cursor: pointer;
  }

  .nav-pills > li.active > a,
  .nav-pills > li.active > a:hover,
  .nav-pills > li.active > a:focus{
    background-color: #222222;
  }

  .p-content{
    display: flex;
  }

</style>