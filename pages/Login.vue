<template>
  <div id="login">
    <div class="background"></div>
    <transition name="el-zoom-in-center">
      <div class="me-login-box me-login-box-radius" v-show="show">
        <h1>小菜良记 - {{ tag ? "Login" : "Register" }}</h1>

        <el-form ref="userInfo" :model="userInfo" :rules="rules">
          <el-form-item prop="userName">
            <el-input
              placeholder="用户名"
              v-model="userInfo.userName"
            ></el-input>
          </el-form-item>

          <el-form-item prop="userPwd">
            <el-input
              placeholder="密码"
              type="password"
              v-model="userInfo.userPwd"
            ></el-input>
          </el-form-item>

          <el-form-item size="small" class="me-login-button">
            <el-button
              type="success"
              @click.native.prevent="login()"
              v-if="tag"
            >
              登录
            </el-button>
            <el-button
              type="success"
              @click.native.prevent="register()"
              v-if="!tag"
            >
              注册
            </el-button>
            <div class="register" @click="change()">
              {{ tag ? "点击注册" : "返回登录" }}
            </div>
          </el-form-item>
        </el-form>
      </div>
    </transition>
  </div>
</template>

<script>
import "~/assets/css/login.css";
import { Message } from "element-ui";
export default {
  name: "Login",
  data() {
    return {
      show: true,
      tag: true,
      userInfo: {
        userName: "",
        userPwd: ""
      },
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { max: 10, message: "不能大于10个字符", trigger: "blur" }
        ],
        userPwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { max: 10, message: "不能大于10个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    //登录
    login() {
      this.$axios.$post("/api/userApi/login", this.userInfo).then(response => {
        localStorage.setItem("token", response.data);
        this.store.commit("setToken", response.data);
        Message({
          message: "登录成功",
          type: "success",
          center: true,
          duration: 5 * 1000
        });
      });
    },
    register() {
      this.$axios
        .$post("/api/userApi/register", this.userInfo)
        .then(response => {
          console.log(response);
        });
    },
    change() {
      this.tag = !this.tag;
      this.show = !this.show;
      setTimeout(() => {
        this.show = !this.show;
      }, 100);
    }
  }
};
</script>
