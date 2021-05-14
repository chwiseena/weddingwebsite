<template>
  <div class="wedding-party-member row">
    <div class="image-column column">
        <img class="wedding-party-member-image" :src="resolve_img_url(filename)" />
    </div>
    <div class="text-column column">
        <div>{{name}}</div>
        <div>{{description}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeddingParty",
  props: {
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    filename: {
        type: String
    }
  },
  methods: {
    resolve_img_url: function (path) {
      let images = require.context('../assets/', false, /\.png$|\.jpg$/)
      return images("./"+path)
    }
  }
};
</script>