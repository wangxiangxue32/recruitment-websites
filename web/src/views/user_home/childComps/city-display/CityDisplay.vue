<template>
  <div class="city">
    <div class="bj">
      <p class="title">北京</p>
      <p class="e">Beijing</p>
    </div>
    <div class="tj">
      <p class="title">天津</p>
      <p class="e">Tianjin</p>
    </div>
    <div class="cd">
      <p class="title">成都</p>
      <p class="e">Chengdu</p>
    </div>
    <div class="gz">
      <p class="title">广州</p>
      <p class="e">Guangzhou</p>
    </div>
    <div class="nj">
      <p class="title">南京</p>
      <p class="e">Nanjing</p>
    </div>
    <div class="sz">
      <p class="title">深圳</p>
      <p class="e">Shenzhen</p>
    </div>
    <div class="xa">
      <p class="title">西安</p>
      <p class="e">Xian</p>
    </div>
    <div class="xm">
      <p class="title">厦门</p>
      <p class="e">Xiamen</p>
    </div>
    <div class="wh">
      <p class="title">武汉</p>
      <p class="e">Wuhan</p>
    </div>
    <div class="sh">
      <p class="title">上海</p>
      <p class="e">Shanghai</p>
    </div>
    <div class="hz">
      <p class="title">杭州</p>
      <p class="e">Hangzhou</p>
    </div>
    <div class="cs">
      <p class="title">长沙</p>
      <p class="e">Changsha</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CityDisplay",
  }
</script>

<style scoped>
  .city{
    margin-top: 45px;
    display: flex;
  }

  .city div{
    width: 194px;
    height: 80px;
    background-size: 100%;
    text-align: center;
    color: white;

    opacity: 1;
    filter: alpha(opacity=100);
  }

  .city div:hover{
    cursor: pointer;
    opacity: 0.8;
    filter: alpha(opacity=80);
    transition: 500ms;
  }

  .title{
    font-family: 楷体;
    font-size: 18px;
    margin-bottom: -3px;
    padding-top: 18px;
  }
  .e{
    font-family: Cambria;
  }

  .bj{
    background: url("~assets/img/city-display/bj.jpg");
  }
  .tj{
    background: url("~assets/img/city-display/tj.jpg");
  }
  .cd{
    background: url("~assets/img/city-display/cd.jpg");
  }
  .cs{
    background: url("~assets/img/city-display/cs.jpg");
  }
  .gz{
    background: url("~assets/img/city-display/gz.jpg");
  }
  .hz{
    background: url("~assets/img/city-display/hz.jpg");
  }
  .nj{
    background: url("~assets/img/city-display/nj.jpg");
  }
  .sh{
    background: url("~assets/img/city-display/sh.jpg");
  }
  .sz{
    background: url("~assets/img/city-display/sz.jpg");
  }
  .wh{
    background: url("~assets/img/city-display/wh.jpg");
  }
  .xa{
    background: url("~assets/img/city-display/xa.jpg");
  }
  .xm{
    background: url("~assets/img/city-display/xm.jpg");
  }
</style>