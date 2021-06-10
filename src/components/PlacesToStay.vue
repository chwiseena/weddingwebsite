<template>
  <div>
    Places to Stay
    <div>
      <LocationComponent />
    </div>
  </div>
</template>

<script>
import LocationComponent from "@/components/LocationComponent.vue";
export default {
  name: "PlacesToStay",
  components: {
    LocationComponent
  }
};
</script>
