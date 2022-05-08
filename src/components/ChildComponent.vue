<template>
  <div v-show="modelValue">
    子组件
    <button @click="handleClose">关闭</button>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const handleClose = () => {
      emit("update:modelValue", false);
    };
    return {
      handleClose,
    };
  },
};
</script>
