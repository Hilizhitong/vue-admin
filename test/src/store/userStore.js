const userStore = {
	state: {
		msg: "user,OK"
	},
	getters: {
		count(state) {
			return state.msg + "哈啊第三方";
		}
	},
	mutations: {},
	actions: {},
	modules: {}
};
export default userStore;
