import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import WeddingParty from "../views/WeddingParty.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about-us",
    name: "About Us",
    component: About
  },
  {
    path: "/wedding-party",
    name: "Wedding Party",
    component: WeddingParty
  }
];

const router = new Router({
  routes
});

export default router;
