import Vue from "vue";
import Vuex from "vuex";
import articles from './modules/articels'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    articles
  }
});
