<template>
  <navbar></navbar>
  <div class="card">
    <router-view></router-view>
  </div>
</template>
<script>
import Navbar from "@/Components/Navbar.vue";

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js";
export default {
  components: {
    Navbar,
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.card {
  padding: 0 20px;
  max-width: 1100px;
  margin: 50px auto;
}
</style>
