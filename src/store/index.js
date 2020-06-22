import Vue from "vue";
import Vuex from "vuex";
import articles from './modules/articels'
import auth from "./modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		articles,
		auth
	}
});
