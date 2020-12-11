const testStore = {
	state: {
		msg: "test,OK",
		count: 0
	},
	getters: {
		count(state) {
			return state.count + 1;
		}
	},
	mutations: {},
	actions: {},
	modules: {}
};
export default testStore;
