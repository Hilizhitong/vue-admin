<template>
	<div id="nav-wrap">
		<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handleSelect"  router>
			<el-submenu index="1">
				<template #title>
					<i class="el-icon-location"></i>
					<span>Navigator One</span>
				</template>
				<el-menu-item index="/infoIndex">item one</el-menu-item>
				<el-menu-item index="/infoIndex">item two</el-menu-item>
			</el-submenu>
		</el-menu>
	</div>
</template>

<script>
	import router from "@/router/index.js";
	import {
		reactive,
		ref,
		onMounted,
		getCurrentInstance
	} from "vue";
	export default {
		name: "NavTwo",
		setup(props, context) {
			const current = getCurrentInstance();
			console.log(current.ctx.$router.options.routes);
			//数据和函数
			const data = {
				routes: reactive(current.ctx.$router.options.routes),
				router: ref(true),
				handleOpen: (index, indexPath) => {

					console.log(index, indexPath);
				},
				handleClose: (index, indexPath) => {
					console.log(index, indexPath);
				},
				handleSelect:(index,indexPath)=>{
					console.log(index, indexPath);
				}
			};
			//const { ctx } = getCurrentInstance();
			//console.log(ctx.$router.currentRoute.value);
			//console.log(ctx.$router.options.routes);
			//const handleOpen = (key, keyPath) => {
			//    console.log(key, keyPath);
			//};
			//const handleClose = (key, keyPath) => {
			//    console.log(key, keyPath);
			//};
			return data;
		},
	};
</script>
<style lang="scss" scoped>
	#nav-wrap {
		position: fixed;
		top: 0px;
		left: 0px;
		width: 250px;
		height: 100vh;
		background-color: #344a5f;
	}
</style>
