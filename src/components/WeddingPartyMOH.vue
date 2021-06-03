<template>
  <div class="wedding-party-member row">
    <div class="image-column-alt image-column-moh column">
        <img class="wedding-party-member-image wedding-party-moh-image" :src="resolve_img_url(filename)" />
    </div>
    <div class="text-column-alt text-column-moh column">
        <div class="wedding-party-member-name wedding-party-member-name-moh">{{name}}</div>
        <div class="wedding-party-member-description-moh">{{description}}</div>
        <div class="wedding-party-member-description-moh">{{descriptionTwo}}</div>
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
.wedding-party-moh-image {
  height: 200px;
  width: 200px;
  margin-top: 18px;
}

.image-column-moh {
  width: 40%;
}

.text-column-moh {
  width: 60%;
  text-align: left;
}

.wedding-party-member-name-moh {
  font-size: 28px;
}

.wedding-party-member-description-moh {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  padding-top: 4px;
}
</style>