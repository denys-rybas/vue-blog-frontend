import Vue from 'vue';

export default {
	state: {
		apiUrl: process.env.VUE_APP_API_URL,
		accessToken: null,
	},
	getters: {
		getToken: s => s.accessToken // s - state
	},
	mutations: {
		setToken(state, token) {
			state.accessToken = token;
			console.log(state.accessToken)
		}
	},
	actions: {
		async register({state}, payload) {
			await Vue.axios.post(`${state.apiUrl}auth/register`, payload);
		},
		async login({commit, state}, payload) {
			const resp = await Vue.axios.post(`${state.apiUrl}auth/login`, payload);
			commit('setToken', resp.data.access_token);
		}
	}
}
