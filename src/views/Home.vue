<template>
  <div class="home">
    <div class="image-column">
      <img class="main-page-image" src="@/assets/chrisAndPud/theCouple.png"/>
    </div>
    <div class="text-column">
      <div class="text-content christina couple-name">Christina de Lescinskis</div>
      <div class="text-content and">&</div>
      <div class="text-content thomas couple-name">Thomas Ferris</div>
      <br />
      <div class="text-content date">April 09, 2022</div>
      <div class="text-content location">Cape May, New Jersey</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home"
};

</script>

<style scoped>

.home {
  padding-top: 25px;
}

.image-column {
  float: left;
  width: 55%;
  text-align: right;
}

.text-column {
  float: left;
  width: 45%;
  text-align: left;
}

.main-page-image {
  height: 500px;
  width: 375px;
  border-radius: 90px 45px 90px 45px;
  border: 5px outset rgb(159,216,199);
  padding: 10px;
}

.text-content {
  padding-left: 20px;
}

.christina {
  padding-top: 50px;
}

.couple-name {
  font-size: 36px;
}

.and {
  font-size: 28px;
  padding-left: 40px;
}

.date {
  font-size: 24px;
}

</style>