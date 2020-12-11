import {
	createRouter,
	createWebHashHistory
} from "vue-router";
import Login from "../views/Login/index.vue";
import Layout from "@/views/Layout/index.vue";
const routes = [{
		path: "/",
		redirect: "/login",
		hiddren: true,
		meta: {
			title: "首页"
		}
	},
	{
		path: "/login",
		name: "Login",
		component: Login,
		hiddren: true,
		meta: {
			title: "登录页"
		}
	},
	{
		path: "/test",
		name: "Test",
		component: () => import("../views/Test/index.vue"),
		hiddren: true,
		meta: {
			title: "测试页"
		}
	},
	{
		path: "/test1",
		name: "Test1",
		component: () => import("../views/Test/index1.vue"),
		hiddren: true,
		meta: {
			title: "测试页1"
		}
	},
	{
		path: "/control",
		name: "Console",
		component: Layout,
		meta: {
			title: "控制台",
			icon: "el-icon-setting"
		},
		children: [{
			path: "/control/index",
			name: "ConsoleIndex",
			component: () => import("../views/Console/index.vue"),
			meta: {
				title: "控制台首页"
			}
		}]
	},
	{
		path: "/info",
		name: "Info",
		component: Layout,
		meta: {
			title: "信息管理",
			icon: "el-icon-location"
		},
		children: [{
				path: "/info/index",
				name: "InfoIndex",
				component: () => import("../views/Info/index.vue"),
				meta: {
					title: "信息列表"
				}
			},
			{
				path: "/info/category",
				name: "InfoCategory",
				component: () => import("../views/Info/category.vue"),
				meta: {
					title: "信息分类"
				}
			}
		]
	},
	{
		path: "/user",
		name: "User",
		component: Layout,
		meta: {
			title: "用户管理",
			icon: "el-icon-setting"
		},
		children: [{
			path: "/user/index",
			name: "UserIndex",
			component: () => import("../views/User/index.vue"),
			meta: {
				title: "用户列表"
			}
		}]
	}
];
const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;
