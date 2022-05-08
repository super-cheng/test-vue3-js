<template>
  <div>我是测试多根组件1</div>
  <div v-for="(item,index) in data.list" :key="index">我是测试多根组件2</div>
  <div v-bind="$attrs">我是测试多根组件3</div>
</template>

<script setup>
const { toRefs }=require("vue-demi")

let props = defineProps({
  // status: Number,
  data: {
    type: Object,
    default: ()=>({})
  }
})
let {status,data} = toRefs(props);
</script>
