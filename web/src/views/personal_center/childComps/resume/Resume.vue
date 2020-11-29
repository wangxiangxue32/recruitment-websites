<template>
  <div class="resume">
    <div class="container-fluid">
      <div class="card">
        <div class="card-header card-header-primary">
          <h4 class="card-title">Edit Resume</h4>
          <p class="card-category">Complete your resume</p>
        </div>

        <div class="card-body">
          <form>
            <!--实习经历-->
            <practice/>
            <hr/>

            <!--项目经历-->
            <item/>

          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Practice from "./childComps/Practice";
  import Item from "./childComps/Item";
  export default {
    name: "Resume",
    components: {
      Item,
      Practice
    }
  }
</script>

<style scoped>
  .resume{}

  @media (min-width: 1030px) {
    .resume{
      width: 700px;
    }
  }
  @media (min-width: 1505px) {
    .resume{
      width: 900px;
    }
  }

  .card{
    background-color: white;
  }

  hr{
    margin-top: 55px;
  }

</style>