<template>
  <div>
    <base-header />
    <Nuxt />
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
