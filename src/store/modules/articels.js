import Vue from "vue";
export default {
	state: {
		apiUrl: process.env.VUE_APP_API_URL,
		articles: []
	},
	getters: {
		allArticles: s => s.articles,
		articlesCount: s => s.articles.length
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
