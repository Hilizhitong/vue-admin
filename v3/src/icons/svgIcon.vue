<template>
	<!-- <svg :class="svgClass" aria-hiddren="true">
		<use :xlink:href="iconName" /></svg> -->
	<div>
		{{svgClass}}-{{iconName}}
	</div>
</template>
<script>
	import {
		ref,
		computed
	} from "vue";
	export default {
		name: "svgIcon",
		//	props: ['className', 'iconClass'],// 简单语法,不限制数据类型
		//规定数据类型
		props: {
			className: {
				type: String, //数据类型：String、Number、Boolean、Array、Object、Date、Function和Symbol
				default: () => "name", //默认值
				required: true, //默认为false，说明父级必须传入数据，否则会报错
				validator: value => { //验证传入的值是否符合规则
					return value.length > 1;
				}
			},
			iconClass: {
				type: String,
				default: () => "class",
				required: true,
				validator: value => {
					return value.length > 1;
				}
			}
		},
		setup(props) {
			console.log(props.className);
			console.log(props.iconClass);
			const data = {
				svgClass: computed(() => {
					if (props.className)
						return `svg-icon ${props.className}`;
					else
						return `svg-icon`;
				}),
				iconName: computed(() => `#icon-${props.iconClass}`)
			};
			return data;
		}
	};
</script>
<style lang="scss" scoped></style>
