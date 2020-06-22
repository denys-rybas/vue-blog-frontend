import Vue from "vue";
import axios from 'axios';
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import "./assets/styles/app.scss"

//axios
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;
const token = localStorage.getItem('access_token');
if (token) {
	Vue.axios.defaults.headers.common['Authorization'] = `JWT ${token}`
}
Vue.axios.interceptors.response.use(
	function(response) { return response;},
	function(error) {
		// handle error
		if (error.response) {
			const errorMessage = error.response.data.message;
			console.error(errorMessage);
			this.$bvToast.toast(errorMessage, {
				title: `Error`,
				variant: 'danger',
				solid: true
			})
		}
	});

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);


new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
