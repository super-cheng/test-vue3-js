<template>
  <h1>测试路由跳转</h1>
  <el-button @click="pushWithQuery">点击跳转到about8</el-button>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const pushWithQuery = () => {
  router.push({
    name: "about8",
    query: {
      id: 12345678,
    },
  });
};
</script>
