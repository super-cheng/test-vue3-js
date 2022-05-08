<template>
  <div>
    <h1>组件的defineProps、defineEmits 和 slot</h1>
    <PageHeader :title="title" @onChange="handleChange">
      <div>
        <span>我是slot内容</span>
        <span>{{data.status}}</span>
      </div>
    </PageHeader>
    <el-button @click="changeTitle">改变title的值</el-button>
  </div>
</template>

<script setup>
import PageHeader from "@/components/PageHeader.vue";
import { reactive, ref, shallowReactive } from "vue";
let title = ref("我的题目");
let data = reactive({
  status: 22
})
const changeTitle = () => {
  title.value = "改变了的题目";
};

function handleChange(obj) {
  console.log(obj);
  obj.data.status = 444
}
</script>
