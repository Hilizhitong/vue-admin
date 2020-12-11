<template>
	<div id="login">
		<div class="login-wrap">
			<ul class="menu-tab">
				<li v-for="item in menuTab" :class="{ current: item.current }" v-bind:key="item.id" @click="toggleMenu(item)">
					{{ item.txt }}
				</li>
			</ul>
			<el-form :model="loginInfo" status-icon :rules="rules" ref="formInfo" class="login-form" size="medium">
				<el-form-item prop="email" class="item-form">
					<label for="email">邮箱</label>
					<el-input id="email" v-model="loginInfo.email" autocomplete="off"></el-input>
				</el-form-item>

				<el-form-item prop="password" class="item-form">
					<label for="password">密码</label>
					<el-input id="password" type="text" v-model="loginInfo.password" autocomplete="off" minlength="6" maxlength="20"></el-input>
				</el-form-item>
				<el-form-item prop="confirmPassword" class="item-form" v-if="currentModel === '注册'">
					<label for="confirmPassword">确认密码</label>
					<el-input id="confirmPassword" type="text" v-model="loginInfo.confirmPassword" autocomplete="off" minlength="6"
					 maxlength="20"></el-input>
				</el-form-item>
				<el-form-item prop="code" class="item-form">
					<label for="code">验证码</label>
					<el-row :gutter="11">
						<el-col :span="15">
							<el-input id="code" v-model.number="loginInfo.code"></el-input>
						</el-col>
						<el-col :span="9">
							<el-button type="success" class="block" @click="getCode()" :disabled="codeBtn.status">{{ codeBtn.text }}</el-button>
						</el-col>
					</el-row>
				</el-form-item>
				<el-form-item class="item-form">
					<el-button type="danger" @click="submitForm" class="block btn-margin-top">{{ currentModel }}</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>
<script>
	import {
		isEmail,
		checkPassword,
		checkCode
	} from "@/utils/validate.js";
	import service from "@/utils/request.js";
	import {
		reactive,
		ref,
		onMounted,
		getCurrentInstance
	} from "vue";
	import {
		getSMS,
		login
	} from "@/api/login.js";
	export default {
		name: "Login",
		setup() {
			//获取当前组件的实例
			const current = getCurrentInstance();
			//模式选项
			const menuTab = reactive([{
					txt: "登录",
					current: true,
				},
				{
					txt: "注册",
					current: false,
				},
			]);
			//当前模式
			const currentModel = ref("登录");
			//验证密码
			const validatePassword = (rule, value, callback) => {
				if (value === "") {
					callback(new Error("请输入密码"));
				} else if (!checkPassword(value)) {
					callback(new Error("密码为6至20位的数字加字母！"));
				} else {
					callback();
				}
			};
			//验证确认密码
			const validateConfirmPassword = (rule, value, callback) => {
				if (currentModel.value === "登录") {
					callback();
					return;
				}

				if (value === "") {
					callback(new Error("请再次输入密码"));
				} else if (value !== loginInfo.password) {
					callback(new Error("两次密码不一致！"));
				} else {
					callback();
				}
			};
			//验证邮箱
			const validateEmail = (rule, value, callback) => {
				if (value === "") {
					callback(new Error("请输入邮箱"));
				} else if (!isEmail(value)) {
					callback(new Error("邮箱格式不正确！"));
				} else {
					callback();
				}
			};
			//验证 验证码
			const validateCode = (rule, value, callback) => {
				//过滤
				// this.loginInfo.code = filterUserInput(value);
				// value = this.loginInfo.code;
				if (!value) {
					return callback(new Error("验证码不能为空"));
				} else if (!checkCode(value)) {
					return callback(new Error("验证码必须为6为数字或字母"));
				} else {
					callback();
				}
			};

			//发送验证码的按钮
			const codeBtn = reactive({
				status: false,
				text: "获取验证码"
			});
			//表单dom
			const formInfo = ref(null);
			//表单绑定信息
			const loginInfo = reactive({
				email: "",
				password: "",
				code: "",
				confirmPassword: ""
			});
			//表单验证信息
			const rules = reactive({
				email: [{
					validator: validateEmail,
					trigger: "blur",
				}],
				password: [{
					validator: validatePassword,
					trigger: "blur",
				}],
				code: [{
					validator: validateCode,
					trigger: "blur",
				}],
				confirmPassword: [{
					validator: validateConfirmPassword,
					trigger: "blur",
				}]
			});
			//生命周期，挂载完成后
			onMounted(() => {
				//打印环境变量
				console.log(process.env.NODE_ENV);
			});

			//自定义方法：切换登录和注册模块
			const toggleMenu = (data) => {
				menuTab.forEach((element) => {
					if (element.current) element.current = false;
				});
				data.current = true;
				currentModel.value = data.txt;
				//清空表单中的数据
				formInfo.value.resetFields();
				if (timer.value) clearInterval(timer.value);
				//初始化按钮状态
				codeBtn.text = `获取验证码`;
				codeBtn.status = false;
			};
			/**
			 * 表单提交
			 */

			const submitForm = () => {
				//验证
				// formInfo.value.validate((valid) => {
				//     if (!valid) {
				//         alert("error submit!!");
				//         return false;
				//     }
				//     //提交
				// });

				// login({
				// 	result: true,
				// 	msg: 'OK'
				// }).then(response => {
				// 	console.log(response);
				// 	current.ctx.$router.push({
				// 		name: "Console"
				// 	});
				// }).catch(error => {
				// 	console.log(error);
				// });
				current.ctx.$store.dispatch('login', {
					result: true,
					msg: "测试"
				}).then(data => {
					current.ctx.$router.push({
						name: "Console"
					});

				}).catch(error => {
					console.log(error)
				});

			};

			const timer = ref(null);
			const countDown = (number) => {
				//判断定时器是否有值，有值的话直接清除。
				if (timer.value) clearInterval(timer.value);
				let time = number;
				timer.value = setInterval(() => {
					time--;
					console.log(time);
					if (time <= 0) {
						clearInterval(timer.value);
						codeBtn.text = `再次获取`;
						codeBtn.status = false;
					} else {
						codeBtn.text = `倒计时${time}秒`;
					}
				}, 1000);
			};

			/**
			 * 获取验证码
			 */
			const getCode = () => {
				if (!loginInfo.email) {
					//ctx 属性获得当前上下文
					current.ctx.$message.error("邮箱不能为空");
					return;
				}
				if (!isEmail(loginInfo.email)) {
					current.ctx.$message.error("邮箱格式有误，请重新输入！");
					return;
				}
				codeBtn.text = "发送中...";
				codeBtn.status = true;

				getSMS(1)
					.then((response) => {
						console.log(response);
						current.ctx.$message({
							message: "发送成功",
							type: "success",
						});
						//开始到记时
						countDown(10);
					})
					.catch((error) => {
						debugger;
						console.log(error);
					});
			};

			return {
				menuTab,
				toggleMenu,
				formInfo,
				submitForm,
				currentModel,
				loginInfo,
				rules,
				getCode,
				codeBtn,
			};
		},
	};
</script>
<style src="./style.scss" lang="scss" scoped></style>
