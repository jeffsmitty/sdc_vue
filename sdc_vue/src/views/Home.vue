<template>
  <div id="homePageContainer" class="container">
    <HelloWorld msg="USGS Science Data Catalog Homepage - Vue.js demo" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};

console.log("home");
</script>
