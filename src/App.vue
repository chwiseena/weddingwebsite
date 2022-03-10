<template>
  <div class="base">
    <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about-us">About Us</router-link> |
      <router-link to="/schedule">Schedule</router-link> |
      <router-link to="/wedding-party">Wedding Party</router-link> |
      <router-link to="/location">Location</router-link> |
      <router-link to="/registry">Registry</router-link> |
      <router-link to="/covid-19">COVID-19</router-link>
    </div>
    <img class="background-image" src="@/assets/background.jpg"/>
    <router-view />
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

html {
  overflow-y: scroll;
}

.base {
  font-family: 'Crimson Text', 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(62,85,103);
}

.nav {
  padding: 30px;
}

.nav a {
  font-weight: bold;
  color: rgb(55,115,142);
  padding: 0 10px;
}

.nav a.router-link-exact-active {
  color: rgb(93,205,130);
}

.background-image {
  height: 600px;
  width: 600px;
  position: fixed;
  bottom: 1px;
  right: 20px;
  z-index: -1;
}

</style>
