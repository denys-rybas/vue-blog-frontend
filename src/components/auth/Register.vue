<template>
	<b-card class="p-3">
		<b-form @submit.prevent="onRegister()">
			<h3>Register</h3>

			<b-form-group
							label="Username:"
							label-for="username"
							description="It must be unique. This name will be used in comments."
			>
				<b-form-input
								id="username"
								v-model="registerForm.username"
								type="text"
								required
								placeholder="Enter your username"
				/>
			</b-form-group>

			<b-form-group
							label="Email address:"
							label-for="email"
							description="We'll never share your email with anyone else."
			>
				<b-form-input
								id="email"
								v-model="registerForm.email"
								type="email"
								required
								placeholder="Enter email"
				/>
			</b-form-group>

			<b-form-group
							label="Your password:"
							label-for="password"
							description="AVOID USING OBVIOUS PERSONAL INFORMATION"
			>
				<b-form-input
								id="password"
								v-model="registerForm.password"
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
				Already registered
				<router-link :to="{name: 'Login'}">sign in?</router-link>
			</p>
		</b-form>
	</b-card>
</template>

<script>
	import {mapActions} from "vuex";
	import {successNotification} from "../../toasts";

	export default {
		name: "Register",
		data() {
			return {
				registerForm: {
					username: '',
					email: '',
					password: ''
				}
			}
		},
		methods: {
			...mapActions(['register']),

			async onRegister() {
				try {
					await this.register(this.registerForm);
					successNotification('New account was created.');
					await this.$router.push('/login')
				} catch (e) {
					console.log(e)
				}
			}
		}
	}
</script>

<style scoped>

</style>
