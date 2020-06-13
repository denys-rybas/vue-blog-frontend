import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import "./assets/styles/app.scss"


Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
