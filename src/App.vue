<template>
  <div id="app">
    <div class="container">
      <books></books>
    </div>
  </div>
</template>

<script>
import Books from "./components/Books";

export default {
  name: "App",
  components: {
    Books
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
