import Vue from 'vue';

export default {
	state: {
		apiUrl: process.env.VUE_APP_API_URL,
	},
	getters: {},
	mutations: {},
	actions: {
		async register({state}, payload) {
			await Vue.axios.post(`${state.apiUrl}auth/register`, payload)
		},
		async login({state}, payload) {
			await Vue.axios.post(`${state.apiUrl}auth/login`, payload)
		}
	}
}
