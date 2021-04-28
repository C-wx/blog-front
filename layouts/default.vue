<template>
  <div>
    <el-container>
      <base-header class="header111" />

      <Nuxt class="container" />
    </el-container>

    <!-- <app-footer /> -->
  </div>
</template>
<script>
import "~/assets/css/common.css";
import BaseHeader from "~/components/BaseHeader";

export default {
  components: {
    BaseHeader
  }
};
</script>
<style>
.header {
  position: relative;
}
.container {
  margin: 100px auto 140px;
}
</style>
