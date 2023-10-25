<template>
  <div id="app">
    <nav>
      <HeaderBar v-if="isHeaderVisible" />
      <div class="main-content">
        <router-view /> 
      </div>
      <FooterBar />
      <SideBar v-if="isSidebarVisible" /> 
    </nav>
  </div>
</template>

<script>
import HeaderBar from "@/components/common/HeaderBar.vue"
import FooterBar from "@/components/common/FooterBar.vue"
import SideBar from "@/components/common/SideBar.vue"

export default {
  name: "App",
  components: {
    HeaderBar,
    FooterBar,
    SideBar,
  },
  computed: {
    isHeaderVisible() {
      const route = this.$route;
      if (route.meta.hideHeader) {
        return false;// -> hide  headerBar
      }
      return true; // -> no hide headerBar
    },
    isSidebarVisible() {
      const route = this.$route;
      if (route.meta.hideSidebar) {
        return false; //-> hide sidebar
      }
      return true; //-> no hide sidebar
    },
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
