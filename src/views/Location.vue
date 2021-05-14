<template>
  <div class="location">
    <h1>This is a location page</h1>
    <Location />
  </div>
</template>

<script>
// @ is an alias to /src
import Location from "@/components/Location.vue";

export default {
  name: "Home",
  components: {
    Location
  }
};
</script>
