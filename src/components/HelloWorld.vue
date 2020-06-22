<template>
	<div>
		<p v-for="(article, index) in allArticles" :key="index">
			{{article}}
		</p>
	</div>
</template>

<script>
	import {mapActions, mapGetters} from "vuex";

	export default {
		name: "HelloWorld",
		mounted() {
			this.fetchArticles('test payload');
			this.test();
		},
		props: {
			msg: String
		},
		methods: {
			...mapActions([
				'fetchArticles',
			]),
			test() {
				console.log('test')
			}
		},
		computed: {
			...mapGetters([
				'allArticles',
				'articlesCount',
			])
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"/>
