<template>
  <div class="wedding-party-member row">
    <div class="text-column text-column-bm column">
        <div class="wedding-party-member-name wedding-party-member-name-bm">{{name}}</div>
        <div class="wedding-party-member-description-bm">{{description}}</div>
        <div class="wedding-party-member-description-bm">{{descriptionTwo}}</div>
    </div>
    <div class="image-column image-column-bm column">
        <img class="wedding-party-member-image wedding-party-bm-image" :src="resolve_img_url(filename)" />
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
    descriptionTwo: {
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

<style scoped>
.wedding-party-bm-image {
  height: 200px;
  width: 200px;
  margin-top: 18px;
}

.image-column-bm {
  width: 40%;
}

.text-column-bm {
  width: 60%;
  text-align: right;
}

.wedding-party-member-name-bm {
  font-size: 28px;
}

.wedding-party-member-description-bm {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  padding-top: 4px;
}
</style>