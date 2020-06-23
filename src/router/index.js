import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../pages/Index";
import About from "../pages/About";
import PageNotFound from "../layouts/PageNotFound";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";

Vue.use(VueRouter);

function authGuard(to, from, next) {
	let isAuthenticated = false;
//this is just an example. You will have to find a better or
// centralised way to handle you localstorage data handling
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

/*router.beforeEach((to, from, next) => {
	// redirect to login page if not logged in and trying to access a restricted page
	const publicPages = ['/login', '/register'];
	const authRequired = !publicPages.includes(to.path);
	const loggedIn = localStorage.getItem('user');

	if (authRequired && !loggedIn) {
		return next('/login');
	}

	next();
});*/
