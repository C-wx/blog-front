<template>
  <el-header class="me-area">
    <el-row class="me-header">
      <el-col :span="4" class="me-header-left">
        <div style="text-align:center;font-size:33px">LOGO</div>
      </el-col>

      <el-col :span="16">
        <el-menu
          :router="true"
          menu-trigger="click"
          active-text-color="#5FB878"
          :default-active="activeIndex"
          mode="horizontal"
        >
          <el-menu-item id="item" index="/">首页</el-menu-item>
          <el-menu-item id="item" index="/category/all">文章分类</el-menu-item>
          <el-menu-item id="item" index="/tag/all">标签</el-menu-item>
          <el-menu-item id="item" index="/archives">文章归档</el-menu-item>
          <el-menu-item id="item" index="/log">日志</el-menu-item>
          <el-menu-item id="item" index="/messageBoard">留言板</el-menu-item>
        </el-menu>
      </el-col>

      <el-col :span="4">
        <el-menu
          :router="true"
          menu-trigger="click"
          mode="horizontal"
          active-text-color="#5FB878"
        >
          <template v-if="!user.login">
            <el-menu-item index="/login">
              <el-button type="text">登录</el-button>
            </el-menu-item>
          </template>

          <template v-else>
            <el-submenu index>
              <template slot="title">
                <img class="me-header-picture" :src="user.avatar" />
              </template>
              <el-menu-item index @click="logout"
                ><i class="el-icon-back"></i>退出</el-menu-item
              >
            </el-submenu>
          </template>
        </el-menu>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
export default {
  name: "BaseHeader",
  props: {
    activeIndex: String
  },
  data() {
    return {};
  },
  computed: {
    user() {
      // let avatar = this.$store.state.avatar;
      // let login = this.$store.token;
      let login = this.store.getters.getToken;
      return {
        login
      };
    }
  },
  methods: {
    logout() {}
  }
};
</script>

<style>
.el-header {
  position: fixed;
  z-index: 1024;
  min-width: 100%;
  box-shadow: 0 2px 3px hsla(0, 0%, 7%, 0.1), 0 0 0 1px hsla(0, 0%, 7%, 0.1);
}

.me-title {
  margin-top: 10px;
  font-size: 24px;
}

.me-header-left {
  margin-top: 10px;
}

.me-title img {
  max-height: 2.4rem;
  max-width: 100%;
}

.me-header-picture {
  width: 36px;
  height: 36px;
  border: 1px solid #ddd;
  border-radius: 50%;
  vertical-align: middle;
  background-color: #5fb878;
}

#item:hover {
  color: #5fb878;
}
</style>
