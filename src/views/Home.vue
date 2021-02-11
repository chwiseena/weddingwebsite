<template>
  <div class="home">
    <h1>This is a home page</h1>
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/Home.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
