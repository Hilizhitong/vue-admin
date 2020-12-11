import service from "@/utils/request.js";

//打印出环境变量
// console.log(process.env.NODE_ENV);

// console.log(process.env.VUE_APP_TITLE);
// console.log(process.env.BASE_URL );
export function getSMS(data) {
	return service.request({
		url: '/api/products/' + data,
		method: 'get', // default
		// data: data
	});
}
//登录
export function login(data) {
	return service.request({
		url: '/api/products/',
		method: 'post', // default
		data
	});
}
