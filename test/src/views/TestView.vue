<template>
	<div>测试页:
		<input type="text" v-model="msg">
		<Test :msg="msg" />
	</div>
</template>

<script>
	import {
		ref,
		getCurrentInstance
	} from "vue";
	export default {
		setup() {
			const {
				ctx
			} = getCurrentInstance();
			debugger;
			const data = {
				msg: ctx.$store.getters.testStore.count
			};
			return data;
		}
	}
</script>

<style>
</style>
