import Vue from "vue";


export const makeNotification = (message = 'No message..', options) => {
	const vm = new Vue();
	vm.$bvToast.toast(message, options)
};

export const errorNotification = (message = 'Something went wrong!', title = 'Error', delay = 3000) => {
	const vm = new Vue();
	const options = {
		title: title,
		variant: 'danger',
		autoHideDelay: delay,
		solid: true
	};

	vm.$bvToast.toast(message, options)
};

export const successNotification = (message = 'Things are good', title = 'Success', delay = 3000) => {
	const vm = new Vue();
	const options = {
		title: title,
		variant: 'success',
		autoHideDelay: delay,
		solid: true
	};

	vm.$bvToast.toast(message, options)
};
