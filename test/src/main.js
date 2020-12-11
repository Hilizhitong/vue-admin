import {
	createApp
} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Test from "./components/Test.vue";

createApp(App)
	.use(store)
	.use(router)
	.component("Test", Test)
	.mount("#app");
