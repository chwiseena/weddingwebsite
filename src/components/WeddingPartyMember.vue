<template>
  <div class="wedding-party-member row">
    <div class="text-column column">
        <div class="wedding-party-member-name">{{name}}</div>
        <div class="wedding-party-member-description">{{description}}</div>
    </div>
    <div class="image-column column">
        <img class="wedding-party-member-image" :src="resolve_img_url(filename)" />
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
      let images = require.context('../assets/weddingParty', false, /\.png$|\.jpg$|\.jpeg$/)
      return images("./"+path)
    }
  }
};
</script>