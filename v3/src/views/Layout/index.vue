<template>
	<div id="layout" :class="[menuState?'close':'open']">
		<Header />
		<Nav />
		<Main />
	</div>
</template>
<script>
	import Header from "./Components/Header.vue";
	import Nav from "./Components/Nav";
	import NavTwo from "./Components/NavTwo.vue";
	import Main from "./Components/Main.vue";
	import {
		computed,
		getCurrentInstance
	} from "vue";
	export default {
		name: "layout",
		components: {
			Header,
			NavTwo,
			Main,
			Nav
		},
		setup() {
			const {
				ctx
			} = getCurrentInstance();
			const data = {
				menuState: computed(() => ctx.$store.state.nav.collapse)
			};
			return data;
		}
	};
</script>
<style lang="scss" scoped>
</style>
