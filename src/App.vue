<template>
<div id ="app">
  <nav>
    <HeaderBar/>
    <SideBar/>
    <FooterBar/>
  </nav>
  <router-view />
</div>
</template>

<script>
import HeaderBar from "@/components/common/HeaderBar.vue"
import SideBar from "@/components/common/SideBar.vue"
import FooterBar from "@/components/common/FooterBar.vue"

export default {
  name: "App",
  components: {
    HeaderBar,
    SideBar,
    FooterBar,
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, h1, h2, p, ul, ol, li, a, button {
  margin: 0;
  padding: 0;
  border: 0;
}

ul, ol {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

</style>
