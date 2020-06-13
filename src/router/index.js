import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../pages/Index";
import About from "../pages/About";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
];

const router = new VueRouter({
  routes
});

export default router;
