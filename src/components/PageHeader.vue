<template>
  <div>
    <h1>PageHeader</h1>
    <div class="pageHeaderTitle">{{ title }}</div>
    <div class="content">
      <div class="left">配置左边</div>
      <div class="center">配置中间</div>
      <div class="right">配置右边</div>
    </div>
    <slot></slot>
    <div>
      <el-button @click="handleEmit">emit-{{obj.data}}</el-button>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue-demi';
// import { toRefs } from "vue";

// const props = defineProps({
//   title: {
//     type: String,
//     default: "PageHeaderTitle",
//   },
// });
// const { title } = toRefs(props);

// const emits = defineEmits("onChange");
// const handleEmit = () => {
//   emits("onChange", 123);
// };

export default {
  emits: ["onChange"],
  props: {
    title: {
      type: String,
      default: "PageHeaderTitle",
    },
  },
  setup(props, { emit }) {
    let obj=reactive({
      data: {
        status: 333
      }
    })
    const handleEmit = () => {
      emit("onChange", obj);
    };
    return {
      obj,
      handleEmit,
    };
  },
};
</script>

<style lang="less" scoped>
h1 {
  color: red;
}
.pageHeaderTitle {
  font-size: 16px;
}
.content {
  font-size: 12px;
  display: flex;
  border: 1px solid #ccc;
  padding: 5px;
  .left {
    width: 200px;
  }

  .center {
    flex: 1;
  }
  .right {
    width: 200px;
  }
}
</style>
