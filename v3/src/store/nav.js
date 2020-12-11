import cookie from 'cookie_js';
import {
	login
} from "@/api/login.js";
const nav = {
	state: {
		//左侧菜单栏是否折叠,并使其固化
		collapse: JSON.parse(sessionStorage.getItem('collapse')) || false,
		count: 10
	},
	getters: {
		count: state => state.count + 10,
		collapse: state => {
			return state.collapse;
		}
	},
	mutations: {
		setCount(state) {
			state.count++;
		},
		//对collapse取反
		negationCollapse(state) {
			state.collapse = !state.collapse;
			sessionStorage.setItem('collapse', JSON.stringify(state.collapse))
			//	cookie.set('collapse', state.collapse);

		}
	},
	actions: {
		//对collapse取反
		negationCollapseAsync(context, data) {
			console.log(context);
			console.log(data);
			context.commit('negationCollapse');
		},
		login(context, data) {
			return new Promise((resolve, reject) => {
				login(data).then(response => {
					resolve();
				}).catch(error => {
					reject();
				});
			});
		}
	},
	modules: {}
};
export default nav;
