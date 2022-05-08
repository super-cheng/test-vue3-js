<template>
  <div>
    <h1>测试v-model的setup函数式</h1>
    <el-button type="text" @click="dialogVisible = true">click to open the Dialog</el-button>
    <MyDialog v-model:haha="dialogVisible" v-model:shabi="status"></MyDialog>
    <div>
      shabi-model: {{status}}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue-demi";
import MyDialog from "@/components/MyDialog.vue";
let dialogVisible = ref(false);
let status = ref(0);
</script>