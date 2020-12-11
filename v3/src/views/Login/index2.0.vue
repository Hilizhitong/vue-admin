<template>
    <div id="login">
        <div class="login-wrap">
            <ul class="menu-tab">
                <li v-for="item in menuTab"
                    :class="{ current: item.current }"
                    v-bind:key="item.id"
                    @click="toggleMenu(item)">
                    {{ item.txt }}
                </li>
            </ul>
            <el-form :model="loginInfo"
                     status-icon
                     :rules="rules"
                     ref="loginInfo"
                     class="login-form"
                     size="medium">
                <el-form-item prop="email" class="item-form">
                    <label>邮箱</label>
                    <el-input v-model="loginInfo.email" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item prop="password" class="item-form">
                    <label>密码</label>
                    <el-input type="text"
                              v-model="loginInfo.password"
                              autocomplete="off"
                              minlength="6"
                              maxlength="20"></el-input>
                </el-form-item>
                <el-form-item prop="confirmPassword"
                              class="item-form"
                              v-if="currentModel === '注册'">
                    <label>确认密码</label>
                    <el-input type="text"
                              v-model="loginInfo.confirmPassword"
                              autocomplete="off"
                              minlength="6"
                              maxlength="20"></el-input>
                </el-form-item>
                <el-form-item prop="code" class="item-form">
                    <label>验证码</label>
                    <el-row :gutter="11">
                        <el-col :span="15">
                            <el-input v-model.number="loginInfo.code"></el-input>
                        </el-col>
                        <el-col :span="9">
                            <el-button type="success" class="block">获取验证码</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item class="item-form">
                    <el-button type="danger"
                               @click="submitForm('loginInfo')"
                               class="block btn-margin-top">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
    import {
        filterUserInput,
        isEmail,
        checkPassword,
        checkCode,
    } from "@/utils/validate.js";
    export default {
        name: "Login",
        created() {
            console.log(`b:${this.$data.menuTab[0].txt}`);
        },
        //挂载完成后自动执行
        mounted() {
            console.log(
                `b:${this.$data.menuTab[1].txt}:${this.$data.menuTab[1].current}`
            );
        },
        methods: {
            toggleMenu(data) {
                this.menuTab.forEach((element) => {
                    if (element.current) element.current = false;
                });
                data.current = true;
                this.currentModel = data.txt;
                // debugger;
                // if (this.currentModel === "登录") this.rules.checkPassword = undefined;
                // else
                //   this.rules.checkPassword = [
                //     { validator: this.$data.validateConfirmPassword, trigger: "blur" },
                //   ];
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    debugger;
                    if (valid) {
                        alert("submit!");
                    } else {
                        alert("error submit!!");
                        return false;
                    }
                });
            },
        },
        data() {
            var validateCode = (rule, value, callback) => {
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
            var validatePassword = (rule, value, callback) => {
                if (value === "") {
                    callback(new Error("请输入密码"));
                } else if (!checkPassword(value)) {
                    callback(new Error("密码为6至20位的数字加字母！"));
                } else {
                    callback();
                }
            };
            //validateConfirmPassword
            var validateConfirmPassword = (rule, value, callback) => {
                if (this.currentModel === "登录") callback();
                return;
                if (value === "") {
                    callback(new Error("请再次输入密码"));
                } else if (value !== this.loginInfo.password) {
                    callback(new Error("两次密码不一致！"));
                } else {
                    callback();
                }
            };
            var validateEmail = (rule, value, callback) => {
                if (value === "") {
                    callback(new Error("请输入邮箱"));
                } else if (!isEmail(value)) {
                    callback(new Error("邮箱格式不正确！"));
                } else {
                    callback();
                }
            };

            return {
                currentModel: "登录",
                menuTab: [
                    { txt: "登录", current: true },
                    { txt: "注册", current: false },
                ],
                loginInfo: {
                    email: "",
                    password: "",
                    code: "",
                    confirmPassword: "",
                },
                rules: {
                    email: [{ validator: validateEmail, trigger: "blur" }],
                    password: [{ validator: validatePassword, trigger: "blur" }],
                    code: [{ validator: validateCode, trigger: "blur" }],
                    confirmPassword: [
                        { validator: validateConfirmPassword, trigger: "blur" },
                    ],
                },
            };
        },
    };
</script>
<style lang="scss" scoped>
    #login {
        height: 100vh;
        background: #344a5f;
    }

    .login-wrap {
        width: 330px;
        margin: auto;
    }

    .menu-tab {
        text-align: center;
        li

    {
        display: inline-block;
        width: 88px;
        line-height: 36px;
        color: white;
        border-radius: 2px;
        cursor: pointer;
        &.current

    {
        background: black;
        opacity: 0.1;
    }

    }
    }

    .login-form {
        margin-top: 29px;
        label

    {
        display: block;
        margin-bottom: 3px;
        font-size: 14px;
        color: white;
    }

    }

    .item-form {
        margin-bottom: 13px;
    }

    .block {
        display: block;
        width: 100%;
    }

    .btn-margin-top {
        margin-top: 10px;
    }
</style>