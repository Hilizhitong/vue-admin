<template>
	<div id="test">
		<p>plusOne:{{plusOne}}</p>
		<p>
			<button @click="add">Add</button>
		</p>
	</div>
</template>
<script>
	import {
		reactive,
		ref,
		computed
	} from "vue";
	import sha1 from "js-sha1";
	export default {
		name: "test1",
		setup() {
			const data = {
				count: ref(1),
				plusOne: computed({
					get() {
						console.log(data.count.value);
						return data.count.value;
					},
					set(value) {
						data.count.value = value;
					}
				}),
				add() {
					//data.count.value++;
					data.plusOne.value++;
					console.log('add');
				}
			};

			// 2

			//plusOne.value++ // error
			return data;
		}
	};
</script>

<style lang="scss" scoped></style>
