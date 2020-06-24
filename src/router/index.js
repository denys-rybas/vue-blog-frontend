import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../pages/Index";
import About from "../pages/About";
import PageNotFound from "../layouts/PageNotFound";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import Article from "../pages/Article";

Vue.use(VueRouter);

function authGuard(to, from, next) {
	let isAuthenticated;

	isAuthenticated = !!localStorage.getItem('access_token');
	if (isAuthenticated) {
		next(); // allow to enter route
	} else {
		next('/login'); // go to '/login';
	}
}


const routes = [
	{
		path: "/",
		name: "Index",
		component: Index,
		beforeEnter: authGuard,
	},
	{
		path: "/login",
		name: "Login",
		component: Login,
	},
	{
		path: "/register",
		name: "Register",
		component: Register,
	},
	{
		path: "/about",
		name: "About",
		component: About,
		beforeEnter: authGuard,
	},
	{
		path: "/article/:slug",
		name: "Article",
		component: Article,
		beforeEnter: authGuard,
	},
	{path: "*", component: PageNotFound},
];

const router = new VueRouter({
	mode: 'history',
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return {x: 0, y: 0}
		}
	}
});

export default router;

