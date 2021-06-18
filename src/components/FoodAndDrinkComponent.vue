<template>
  <div class="places-to-stay-row row">
    <div class="places-to-stay-image-column image-column column">
        <img class="places-to-stay-image" :src="resolve_img_url(filename)" />
    </div>
    <div class="places-to-stay-text-column text-column column">
        <div class="places-to-stay-name">{{name}}</div>
        <div class="places-to-stay-address">{{address}}</div>
        <div class="places-to-stay-description">{{description}}</div>
        <a class="places-to-stay-link" :href="url">Click here to look at a menu!</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FoodAndDrinkComponent",
  props: {
    name: {
        type: String,
    },
    address: {
        type: String,
    },
    description: {
        type: String,
    },
    url: {
        type: String,
    },
    filename: {
        type: String
    }
  },
  methods: {
    resolve_img_url: function (path) {
      let images = require.context('../assets/locations', false, /\.png$|\.jpg$|\.jpeg$/)
      return images("./"+path)
    }
  }
};
</script>

<style>
.places-to-stay-row {
  padding: 0px 20% 30px;
}

.places-to-stay-image-column {
  width: 40%;
}

.places-to-stay-text-column {
  width: 60%;
}

.places-to-stay-image {
  height: 200px;
  width: 300px;
  margin-top: 14px;
  border-radius: 20px 20px;
}

.places-to-stay-text-column {
    text-align: left;
}

.places-to-stay-name {
    font-size: 22px;
}

.places-to-stay-address {
    font-style: italic;
    font-size: 16px;
    padding-bottom: 6px;
    top: -2px;
    position: relative;
}

.places-to-stay-description {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
}

.places-to-stay-link {
  font-family: 'Montserrat', sans-serif;
  position: relative;
  top: 20px;
  font-size: 14px;
  font-style: italic;
  color: rgb(78,138,105);
}
</style>