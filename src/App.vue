<template>
  <div id="app">
    <div class="container">
      <books></books>
      <cart></cart>
    </div>
  </div>
</template>

<script>
import Books from "./components/Books";
import Cart from "./components/Cart";

export default {
  name: "App",
  components: {
    Books,
    Cart
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
