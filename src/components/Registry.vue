<template>
    <a class="registry-link" :href="url">{{name}}</a>
</template>

<script>
export default {
  name: "Registry",
  props: {
    name: {
        type: String,
    },
    url: {
        type: String,
    }
  }
};
</script>

<style>
.registry-link {
  font-family: 'Montserrat', sans-serif;
  position: relative;
  font-size: 14px;
  padding: 0 10px;
  color: rgb(78,138,105);
}
</style>