<template>
  <div id="app">
    <UsgsHeader />
    <UsgsNav />
    <router-view />
    <UsgsFooter />
  </div>
</template>

<script>
  // @ is an alias to /src
  import UsgsHeader from "@/components/UsgsHeader.vue";
  import UsgsFooter from "@/components/UsgsFooter.vue";
  import UsgsNav from "@/components/UsgsNav.vue";

  export default {
    name: "home",
    components: {
      UsgsHeader,
      UsgsFooter,
      UsgsNav
    }
  };
</script>



<style>
  body {
    margin: 0px;
    padding: 0;
  }

  #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding: 0;
    margin: 0;
  }

  #nav {
    padding: 15px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>