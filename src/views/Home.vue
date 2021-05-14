<template>
  <div class="home">
    <h1>This is a home page</h1>
    <HomePage />
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from "@/components/Home.vue";

export default {
  name: "Home",
  components: {
    HomePage
  }
};
</script>
