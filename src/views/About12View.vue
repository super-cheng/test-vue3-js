<template>
  <h1>测试Vuex</h1>
  <div>{{ store?.state?.userinfo?.username }}</div>
  <el-button>年龄-{{ age }}</el-button>
  <div><el-button @click="handleMutation">mutation</el-button></div>
  <div><el-button @click="handleAction">action</el-button></div>
  <div><el-button @click="handleNotReactive">测试store没有响应式的</el-button></div>
</template>

<script setup>
import { computed, isReactive, isRef, watch } from "vue";
import { useStore } from "vuex";

/* setup选项式 */
// export default {
//   setup() {
//     const store = useStore();
//     console.log(isReactive(store.state.userinfo.age));
//     console.log(isRef(store.state.userinfo.age));
//     // 为了访问 state 和 getter，需要创建 computed 引用以保留响应性，这与在选项式 API 中创建计算属性等效。
//     let age = computed(() => store.state.userinfo.age);

//     const handleMutation = () => {
//       store.commit("increment");
//     };
//     const handleAction = () => {
//       store.dispatch("actionA").then(() => {
//         console.log("改变了");
//       });
//     };
//     const handleNotReactive = () => {
//       store.commit("changeUsername", "李四");
//     };
//     watch(age, (value) => {
//       console.log("watch:", value);
//     });
//     return {
//       store,
//       age,
//       handleMutation,
//       handleAction,
//       handleNotReactive,
//     };
//   },
// };

/* setup语法糖 */
const store = useStore();
console.log(isReactive(store.state.userinfo.age));
console.log(isRef(store.state.userinfo.age));
// 为了访问 state 和 getter，需要创建 computed 引用以保留响应性，这与在选项式 API 中创建计算属性等效。
let age = computed(() => store.state.userinfo.age);

const handleMutation = () => {
  store.commit("increment");
};
const handleAction = () => {
  store.dispatch("actionA").then(() => {
    console.log("改变了");
  });
};
const handleNotReactive = () => {
  store.commit("changeUsername", "李四");
};
watch(age, (value) => {
  console.log("watch:", value);
});

</script>

<style scoped>
div {
  margin: 10px;
}
</style>
