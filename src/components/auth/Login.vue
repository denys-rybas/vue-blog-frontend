<template>
	<b-card class="p-3">
		<b-form @submit.prevent="login()">
			<h3>Sign Up</h3>

			<b-form-group
							label="Email address:"
							label-for="email"
			>
				<b-form-input
								id="email"
								v-model="loginForm.email"
								type="email"
								required
								placeholder="Enter email"
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
	import {mapActions} from "vuex";

	export default {
		name: "Login",
		data() {
			return {
				loginForm: {
					email: '',
					password: ''
				}
			}
		},
		methods: {
			...mapActions(['login']),
			async onLogin() {
				await this.login(this.loginForm)
			}
		}
	}
</script>

<style scoped>

</style>
