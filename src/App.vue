<template>
  <div class="base">
    <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about-us">About Us</router-link> |
      <router-link to="/wedding-party">Wedding Party</router-link> |
      <router-link to="/location">Location</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
.base {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding: 30px;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
</style>
