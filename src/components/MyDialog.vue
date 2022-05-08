<template>
  <div>
    <!-- <el-button type="text" @click="dialogVisible = true">click to open the Dialog</el-button> -->
    <el-dialog :model-value="haha" title="Tips" width="30%"  @closed="handleCancel">
      <span>This is a message</span>
      <!-- <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleCancel">Cancel</el-button>
          <el-button type="primary" @click="handleCancel">Confirm</el-button>
        </span>
      </template> -->
    </el-dialog>
  </div>
</template>

<script>
import { ref } from "vue-demi";
import { ElMessageBox } from "element-plus";
export default {
  props: {
    haha: Boolean,
    shabi: {
      type: Number
    },
  },
  emits: ["update:haha","update:shabi"],
  setup(props, { emit }) {
    const handleClose = (done) => {
      ElMessageBox.confirm("Are you sure to close this dialog?")
        .then(() => {
          done();
        })
        .catch(() => {
          // catch error
        });
    };
    const handleCancel = () => {
      emit("update:haha", false);
      emit("update:shabi", Number(!props.shabi));
    };
    return {
      handleClose,
      handleCancel,
    };
  },
};
</script>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
