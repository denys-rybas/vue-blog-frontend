import Vue from "vue";
import axios from 'axios';
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
	BootstrapVue,
	IconsPlugin,
	LayoutPlugin,
	ModalPlugin,
	CardPlugin,
	VBScrollspyPlugin,
	DropdownPlugin,
	TablePlugin
} from 'bootstrap-vue';
import "./assets/styles/app.scss";
import {errorNotification} from "./toasts";

//axios
Vue.use(VueAxios, axios);

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
// This imports all the layout components such as <b-container>, <b-row>, <b-col>:
Vue.use(LayoutPlugin);
// This imports <b-modal> as well as the v-b-modal directive as a plugin:
Vue.use(ModalPlugin);
// This imports <b-card> along with all the <b-card-*> sub-components as a plugin:
Vue.use(CardPlugin);
// This imports directive v-b-scrollspy as a plugin:
Vue.use(VBScrollspyPlugin);
// This imports the dropdown and table plugins
Vue.use(DropdownPlugin);
Vue.use(TablePlugin);

Vue.config.productionTip = false;



Vue.axios.interceptors.response.use(config => {
	const token = localStorage.getItem("access_token");
	if (token) {
		Vue.axios.defaults.headers.common['Authorization'] = `JWT ${token}`
	}
	return config
}, error => {
	if (error.response) {
		const err = error.response.data;
		const errorMessage = err.message || err.description || 'Ooops';
		errorNotification(errorMessage);

		return Promise.reject(error)
	}
});


new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
