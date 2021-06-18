<template>
  <div class="food-and-drink-row row">
    <div class="food-and-drink-image-column image-column column">
        <img class="food-and-drink-image" :src="resolve_img_url(filename)" />
    </div>
    <div class="food-and-drink-text-column text-column column">
        <div class="food-and-drink-name">{{name}}</div>
        <div class="food-and-drink-address">{{address}}</div>
        <div class="food-and-drink-description">{{description}}</div>
        <a class="food-and-drink-link" :href="url">Click here to look at a menu!</a>
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
.food-and-drink-row {
  padding: 0px 20% 30px;
}

.food-and-drink-image-column {
  width: 45%;
}

.food-and-drink-text-column {
  width: 55%;
}

.food-and-drink-image {
  height: 200px;
  width: 300px;
  margin-top: 14px;
  border-radius: 20px 20px;
}

.food-and-drink-text-column {
    text-align: left;
}

.food-and-drink-name {
    font-size: 22px;
}

.food-and-drink-address {
    font-style: italic;
    font-size: 16px;
    padding-bottom: 6px;
    top: -2px;
    position: relative;
}

.food-and-drink-description {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
}

.food-and-drink-link {
  font-family: 'Montserrat', sans-serif;
  position: relative;
  top: 20px;
  font-size: 14px;
  font-style: italic;
  color: rgb(78,138,105);
}
</style>