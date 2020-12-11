import axios from "axios";
import {
	ElMessage
} from 'element-plus';
const BASEURL = process.env.NODE_ENV == "production" ? "" : "/devApi";
const service = axios.create({
	baseURL: BASEURL,
	timeout: 1000
});
// 添加请求拦截器
service.interceptors.request.use(function(config) {
	debugger;
	console.log(config);
	// 在发送请求之前做些什么
	return config;
}, function(error) {
	// 对请求错误做些什么
	return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function(response) {
	// 对响应数据做点什么
	if (response.status >= 400) {
		ElMessage.error(response.status + ":" + response.statusText);
		return Promise.reject(response.data);
	}
	// if (!response.data.resul) {
	//     ElMessage.error(response.data.msg);
	//     return Promise.reject(response.data);
	// }
	return response;
}, function(error) {
	ElMessage.error(error.response.status + ":" + error.response.statusText + ":" + error.response.data);
	// 对响应错误做点什么
	return Promise.reject(error);
});

// 发送 POST 请求
// service({
//     method: 'post',
//     url: '/user/12345',
//     data: {
//         firstName: 'Fred',
//         lastName: 'Flintstone'
//     }
// });
export default service;
