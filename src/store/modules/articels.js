export default {
    state: {
        apiUrl: process.env.VUE_APP_API_URL,
        articles: ['test']
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
        async fetchArticles({ commit, state }, payload) {
            console.log(payload);
            const articles = await this.$axios.get(`${state.apiUrl}articles`);
            commit('updateArticles', articles)
        }
    },
}
