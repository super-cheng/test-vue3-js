<template>
  <div>
    <h1>简洁版的v-model</h1>
    <button @click="show = true">点击事件</button>
    <ChildComponent v-model="show" />
  </div>
</template>

<script>
import { ref } from "vue";
import ChildComponent from "@/components/ChildComponent.vue";
export default {
  components: {
    ChildComponent
  },
  setup(props) {
    let show = ref(false);
    return {
      show,
    };
  },
};
</script>

