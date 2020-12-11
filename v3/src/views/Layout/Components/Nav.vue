<template>
	<div id="nav-wrap">
		<el-menu default-active="0-0" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handleSelect"
		 background-color="#344a5f" text-color="#fff" active-text-color="#ffd04b" :collapse="collapse">
			<template v-for="item in routes">
				<el-submenu :index="item.path" v-if="!item.hiddren" :key="item.id">
					<template #title>
						<i :class="item.meta.icon"></i>
						<span>{{item.meta.title}}</span>
					</template>
					<el-menu-item :index="subItem.path" v-for="subItem in item.children" :key="subItem.id">{{subItem.meta.title}}</el-menu-item>
				</el-submenu>
			</template>

		</el-menu>
	</div>
</template>

<script>
	import router from "@/router/index.js";
	import {
		reactive,
		ref,
		onMounted,
		computed,
		getCurrentInstance
	} from "vue";
	export default {
		name: "navMenu",
		setup(props, context) {
			//当前实例
			const current = getCurrentInstance();
			//console.log(current.ctx.$router.options.routes);
			//数据和函数
			const data = {
				//路由列表
				routes: reactive(current.ctx.$router.options.routes),
				//是否折叠
				collapse: computed(() => {
					return current.ctx.$store.state.nav.collapse;
				}),
				handleOpen: (index, indexPath) => {
					//	console.log(index, indexPath);
				},
				handleClose: (index, indexPath) => {
					//	console.log(index, indexPath);
				},
				handleSelect: (path) => {
					current.ctx.$router.push({
						path
					});
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
			// console.log(`collapse:${current.ctx.$store.state.collapse}`);
			// console.log(`count:${current.ctx.$store.state.count}`);
			// console.log(`getCount:${current.ctx.$store.getters.count}`);
			// console.log(`==========================`);
			// current.ctx.$store.commit('setCount');
			// console.log(`count:${current.ctx.$store.state.count}`);
			// console.log(`getCount:${current.ctx.$store.getters.count}`);

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
