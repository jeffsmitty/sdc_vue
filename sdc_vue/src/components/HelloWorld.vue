<template>
  <div id ="helloPageContainer">
    <h1>{{ msg }}</h1>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <router-link to="/search"><button class="btn btn-primary">Search SDC</button></router-link> 
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    props: {
      msg: String
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>