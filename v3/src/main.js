import {
	createApp
} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
// import './icons/index.js';
import svgIcon from './icons/svgIcon.vue';


createApp(App)
	.use(ElementPlus)
	.use(store)
	.use(router)
	.component('svg-icon', svgIcon)
	.mount("#app");
