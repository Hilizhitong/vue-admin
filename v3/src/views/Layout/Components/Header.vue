<template>
	<div id="header-wrap">
		<div class="icon-left">
			<img src="../../../icons/svg/mone.png" width="20" @click="negationCollapse" />
		</div>
		<div class="icon-right">
			<img src="../../../icons/svg/mone.png" width="20" />
		</div>
	</div>
</template>
<script>
	import {
		getCurrentInstance
	} from "vue";
	export default {
		name: "navHeader",
		setup() {
			const {
				ctx
			} = getCurrentInstance();
			const data = {
				negationCollapse() {
					//同步
					ctx.$store.commit('negationCollapse');
					//异步
					//ctx.$store.dispatch('negationCollapseAsync',true);
				}
			};
			return data;
		}
	}
</script>
<style lang="scss" scoped>
	#header-wrap {
		position: fixed;
		top: 0px;
		left: 250px;
		width: 100%;
		height: 75px;
		background-color: #fff;
		box-shadow: 0px 3px 16px 0 rgba(0, 0, 0, .1);
		-webkit-box-shadow: 0px 3px 16px 0 rgba(0, 0, 0, .1);

		&:after {
			/*添加一个空内容*/
			content: "";
			/*变成块级元素*/
			display: block;
			/*清除两侧的浮动*/
			clear: both;
		}
	}

	.icon-left {
		float: left;
		height: 75px;
		line-height: 75px;
		background-color: red;
		margin-left: 30px;

		img {
			cursor: pointer;
		}
	}

	.icon-right {
		height: 75px;
		line-height: 75px;
		background-color: orange;
		margin-right: 30px;

		img {
			cursor: pointer;
		}
	}
</style>
