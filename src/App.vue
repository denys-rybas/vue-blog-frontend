<template>
	<div id="app">
		<Header class="mb-2 mb-xl-3"/>

		<b-container>
			<router-view/>
		</b-container>
	</div>
</template>
<script>
	import Header from './components/layot-parts/Header'

	export default {
		name: "Index",
		components: {
			Header
		}
	}
</script>

<style lang="scss">
</style>
