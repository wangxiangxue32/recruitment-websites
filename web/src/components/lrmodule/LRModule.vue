<template>
  <section id="total">
    <header id="header">
      <nav class="navbar">
        <!--导航栏标志，校园招聘-->
        <a class="navbar-brand col-lg-6 col-md-5 col-sm-4 col-xs-4" href="/user_home"><img src="~assets/img/tabbar/logo.png"></a>
      </nav>
    </header>
    <div class="login-box">
      <slot name="l-btn"></slot>
    </div>
  </section>
</template>

<script>
  export default {
    name: "LRModule"
  }
</script>

<style scoped>
  @import "~assets/css/lrmodule/LRModule.css";
</style>