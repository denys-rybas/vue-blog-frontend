<template>

	<div>
		<div v-for="article in articlesList" :key="article.id">
			<ArticleItem :article="article"/>
		</div>

	</div>

</template>

<script>
	import ArticleItem from "./ArticleItem";

	export default {
		name: "ArticlesList",
		components: {
			ArticleItem
		},
		props: {
			articlesList: {
				required: true,
				type: Array
			}
		}
	}
</script>

<style scoped>

</style>
