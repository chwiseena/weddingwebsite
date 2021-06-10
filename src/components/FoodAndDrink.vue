<template>
  <div>
    Food and Drink
    <div>
      <LocationComponent />
    </div>
  </div>
</template>

<script>
import LocationComponent from "@/components/LocationComponent.vue";
export default {
  name: "FoodAndDrink",
  components: {
    LocationComponent
  }
};
</script>