<template>
	<div>
		<template v-if="article">
			<h1>
				{{ article.title }}
			</h1>

			<p v-html="article.content"/>

			<b-button pill
			          variant="outline-secondary"
			          @click="goBack()"
			>
				Back
			</b-button>
		</template>

		<template v-if="!article">
			<b-alert variant="danger"
			         show
			>
				Article not found :(
			</b-alert>

			<b-button pill
			          variant="outline-secondary"
			>
				<router-link :to="{name: 'Index'}">Go home</router-link>
			</b-button>
		</template>
	</div>
</template>

<script>
	import {mapActions, mapGetters, mapMutations} from "vuex";

	export default {
		name: "Article",
		mounted() {
			const slug = this.$route.params.slug;
			this.setCurrentSlug(slug);
			this.fetchArticleBySlug(slug);
		},
		computed: {
			...mapGetters({
				article: 'getArticle',
				currentSlug: 'getCurrentSlug'
			})
		},
		methods: {
			...mapActions([
				'fetchArticleBySlug'
			]),
			...mapMutations([
				'setCurrentSlug'
			]),
			goBack() {
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>

</style>
