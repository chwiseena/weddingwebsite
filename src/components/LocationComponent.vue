<template>
  <div class="location-row row">
    <div class="location-image-column image-column column">
        <img class="location-image" :src="resolve_img_url(filename)" />
    </div>
    <div class="location-text-column text-column column">
        <div class="location-name">{{name}}</div>
        <div class="location-address">{{address}}</div>
        <div class="location-description">{{description}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocationComponent",
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
.location-row {
  padding: 0px 20% 30px;
}

.location-image-column {
  width: 40%;
}

.location-text-column {
  width: 60%;
}

.location-image {
  height: 200px;
  width: 300px;
  margin-top: 14px;
  border-radius: 20px 20px;
}

.location-text-column {
    text-align: left;
}

.location-name {
    font-size: 22px;
}

.location-address {
    font-style: italic;
    font-size: 16px;
    padding-bottom: 6px;
    top: -2px;
    position: relative;
}

.location-description {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
}
</style>