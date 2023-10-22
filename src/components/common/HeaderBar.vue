<template>
  <div id="header_bar">
    <span class="logo"><router-link to="/">logo</router-link></span>

    <div class="userBox">
      <span><router-link to="/register">회원가입</router-link></span>
      <span><router-link to="/login">로그인</router-link></span>
    </div>
  </div>

</template>

<script>
export default {
  name: "HeaderBar",
};
</script>


<style>
  #header_bar{
    border-bottom: 1px solid black;
    position: fixed;
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
  }
  .logo{
    margin-left: 2rem;
  }
  .userBox{
    position: fixed;
    right: 0;
  }
  .userBox span{
    margin-right: 2rem;
  }
</style>