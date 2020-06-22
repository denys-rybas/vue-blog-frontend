import Vue from "vue";
export default {
	state: {
		apiUrl: process.env.VUE_APP_API_URL,
		articles: []
	},
	getters: {
		allArticles(state) {
			return state.articles
		},
		articlesCount(state) {
			return state.articles.length
		}
	},
	mutations: {
		updateArticles(state, posts) {
			state.articles = posts;
		}
	},
	actions: {
		/*первый параметр это ctx - context*/
		async fetchArticles({commit, state}) {
			const articles = await Vue.axios.get(`${state.apiUrl}articles`);
			commit('updateArticles', articles)
		}
	},
}
