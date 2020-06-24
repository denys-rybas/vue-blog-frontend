<template>
	<div>
		<b-spinner variant="primary"
		           v-if="isLoading && articlesList == null"
		/>

		<div v-if="!isLoading && articlesList">
			<ArticlesList :articlesList="articlesList"/>
		</div>

		<template v-if="!isLoading && articlesList != null && !articlesList.length">
			<b-alert variant="warning"
			         show
			>
				Articles list is empty :(
			</b-alert>
		</template>

	</div>
</template>

<script>
	import ArticlesList from "../components/articles/ArticlesList";
	import {mapActions, mapGetters} from "vuex";

	export default {
		name: "Index",
		components: {
			ArticlesList
		},
		mounted() {
			this.fetchArticles()
		},
		computed: {
			...mapGetters({
				articlesList: 'allArticles',
				isLoading: 'getIsArticleLoading',
			})
		},
		methods: {
			...mapActions([
				'fetchArticles'
			])
		}
	}
</script>

<style scoped>

</style>
