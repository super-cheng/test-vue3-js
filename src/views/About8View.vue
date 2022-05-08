<template>
  <div>
    <h1>测试多个根节点</h1>
    <MoreRoot :status="status" :data="obj"></MoreRoot>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import MoreRoot from "@/components/MoreRoot.vue";
let status = ref(7);
let obj = reactive({
  a: 1,
  b: 2,
  list: [1, 2, 3,4],
});
</script>
