<template>
	<div>
		<b-card :title="article.title"
		>
			<b-card-text v-html="article.content"/>

			<b-button pill
			          variant="primary"
			>
				<router-link :to="{name: 'Article', params: {slug: article.slug}}"
				             class="text-light"
				>
					Read
				</router-link>
			</b-button>
		</b-card>
	</div>
</template>

<script>
	export default {
		name: "ArticleItem",
		props: {
			article: {
				required: true,
				type: Object
			}
		}
	}
</script>

<style scoped>

</style>
