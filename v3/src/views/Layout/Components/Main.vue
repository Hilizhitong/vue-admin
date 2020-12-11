<template>
	<div id="container">
		<router-view />
	</div>
</template>
<script>
	import {
		ref
	} from "vue";
	export default {
		name: "navMain",
		setup() {
			const data = {};
			return data;
		}
	};
</script>
<style lang="scss" scoped>
	#container {
		position: fixed;
		left: 250px;
		top: 78px;
		padding: 30px;
		width: 100%;
		height: 100vh;
		background-color: #f7f7f7;
	}
</style>
