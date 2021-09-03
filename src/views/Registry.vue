<template>
  <div class="registry">
      <div class="registry-title">Christina and Tom are registered at three different places. Click the links to view their registries!</div>
      <div class="registry-information">Note: the Macy's registry does not like showing up on Chrome. Please use a different browser for this registry link.</div>
      <div class="registries-row">
        <Registry name="Macy's" url="https://www.macys.com/wgl/registry/guest/CHRISTINA-DE LESCINSKIS-THOMAS-FERRIS/7283405" />
        <Registry name="Pottery Barn" url="https://www.potterybarn.com/registry/wbpghjsbwd/registry-list.html" />
        <Registry name="Crate&Barrel" url="https://www.crateandbarrel.com/gift-registry/christina-de-lescinskis-and-thomas-ferris/r6350889" />
      </div>
  </div>
</template>

<script>
import Registry from "@/components/Registry.vue";

export default {
  name: "Home",
  components: {
      Registry
  }
};
</script>

<style scoped>
.registry-title {
  font-size: 24px;
  font-style: italic;
}

.registry-information {
  font-size: 16px;
  font-style: italic;
}

.registries-row {
    padding-top: 10px;
}

</style>