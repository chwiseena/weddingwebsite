<template>
  <div class="wedding-party">
    <h1>This is a wedding party page</h1>
    <WeddingParty />
  </div>
</template>

<script>
// @ is an alias to /src
import WeddingParty from "@/components/WeddingParty.vue";

export default {
  name: "Home",
  components: {
    WeddingParty
  }
};
</script>