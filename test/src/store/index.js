import {
	createStore
} from "vuex";
import testStore from "./testStore.js";
import userStore from "./userStore.js";
import goodsStore from "./goodsStore.js";

export default createStore({
	modules: {
		testStore,
		userStore,
		goodsStore
	}
});
