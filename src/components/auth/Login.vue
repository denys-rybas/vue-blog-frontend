<template>
	<b-card class="p-3">
		<b-form @submit.prevent="onLogin()">
			<h3>Sign Up</h3>

			<b-form-group
							label="Username:"
							label-for="username"
			>
				<b-form-input
								id="username"
								v-model="loginForm.username"
								type="text"
								required
								placeholder="Enter username"
				/>
			</b-form-group>

			<b-form-group
							label="Your password:"
							label-for="password"
			>
				<b-form-input
								id="password"
								v-model="loginForm.password"
								type="password"
								required
								placeholder="Enter your password"
				/>
			</b-form-group>

			<button type="submit"
			        class="btn btn-dark btn-lg btn-block"
			>
				Sign Up
			</button>

			<p class="forgot-password text-right">
				<router-link :to="{name: 'Register'}">
					Register
				</router-link>
			</p>
		</b-form>
	</b-card>
</template>

<script>
	import {mapActions, mapGetters} from "vuex";
	import {successNotification} from "../../toasts";

	export default {
		name: "Login",
		data() {
			return {
				loginForm: {
					username: '',
					password: ''
				}
			}
		},
		computed: {
			...mapGetters({
				accessToken: 'getToken'
			})
		},
		methods: {
			...mapActions(['login']),

			async onLogin() {
				try {
					await this.login(this.loginForm);
					await localStorage.setItem('access_token', this.accessToken);
					await this.$router.push('/');
					successNotification();
				} catch (e) {
					console.log(e)
				}
			}
		}
	}
</script>

<style scoped>

</style>
