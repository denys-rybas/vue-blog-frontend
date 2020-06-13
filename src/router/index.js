import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../pages/Index";
import About from "../pages/About";
import PageNotFound from "../layouts/PageNotFound";

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
    {path: "*", component: PageNotFound},
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
