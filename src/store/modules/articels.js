import Vue from "vue";
export default {
	state: {
		apiUrl: process.env.VUE_APP_API_URL,
		articles: [],
		article: null,
		isArticleLoading: false,
		currentSlug: null,
	},
	getters: {
		allArticles: s => s.articles,
		getArticle: s => s.article,
		getCurrentSlug: s => s.currentSlug,
		articlesCount: s => s.articles.length,
		getIsArticleLoading: s => s.isArticleLoading,
	},
	mutations: {
		updateArticles(state, posts) {
			state.articles = posts;
		},
		setIsArticlesLoading(state, bool) {
			state.isArticleLoading = bool;
		},
		setArticle(state, article) {
			state.article = article;
		},
		setCurrentSlug(state, slug) {
			state.currentSlug = slug;
		},
	},
	actions: {
		/*первый параметр это ctx - context*/
		async fetchArticles({commit, state}) {
			commit('setIsArticlesLoading', true);

			const resp = await Vue.axios.get(`${state.apiUrl}articles`);
			commit('updateArticles', resp.data);

			commit('setIsArticlesLoading', false);
		},
		async fetchArticleBySlug({commit, state}, slug) {
			const resp = await Vue.axios.get(`${state.apiUrl}articles/${slug}`);
			commit('setArticle', resp.data);
		},
	},
}
