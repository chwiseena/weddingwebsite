<template>
  <div class="wedding-party-member row">
    <div class="image-column-alt column">
        <img class="wedding-party-member-image" :src="resolve_img_url(filename)" />
    </div>
    <div class="text-column-alt column">
        <div class="wedding-party-member-name">{{name}}</div>
        <div class="wedding-party-member-description-alt">{{description}}</div>
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