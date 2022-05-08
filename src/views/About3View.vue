<template>
  <div class="about">
    表格：
    <table v-if="tableData.length" border="1">
      <tr v-for="(item, index) in tableData" :key="index">
        <td>{{ item.date }}</td>
        <td>{{ item.name }}</td>
        <td>
          <input type="text" v-model="item.address" />
        </td>
      </tr>
    </table>
  </div>

  <div class="content">
    <div>computed</div>
    <div>
      <el-button>{{plusOne}}</el-button>
    </div>
    <div>
      <button @click="handleComputed">computed</button>
    </div>
  </div>

  <div class="content">
    <div>watch侦听单一源</div>
    <div>
      <el-button>{{obj1.count}}</el-button>
      <el-button>{{obj2.count}}</el-button>
    </div>
    <div>
      <button @click="handleWatch">watch</button>
    </div>
  </div>
</template>

<script setup>
import {
  computed,
  isProxy,
  isReactive,
  isReadonly,
  isRef,
  markRaw,
  reactive,
  readonly,
  ref,
  shallowReactive,
  shallowReadonly,
  shallowRef,
  toRaw,
  toRef,
  toRefs,
  triggerRef,
  unref,
  watch,
  watchEffect,
} from "vue";

let tableData = ref([]);
let list = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
tableData = ref(list);

const count = ref(1);
let plusOne = computed(()=>{
  return 2*count.value + 5;
});

// computed
const handleComputed = () => {
  count.value++;
  console.log(isReactive(plusOne));
};

// watch
let obj1=reactive({
  count: {a: 11}
});
let obj2=reactive({
  count: {b: 22}
});

watch([obj1.count,obj2.count],([obj1value,obj2value],[obj1preValue,obj2preValue])=>{
  console.log('watch1',obj1value,obj1preValue);
  console.log('watch2',obj2value,obj2preValue);
},{
  deep: true
})
const handleWatch = () => {
  obj1.count.a++;
  obj2.count.b++;
}
</script>

<style scoped>
.about {
  text-align: left;
}
.content {
  padding: 10px;
  text-align: left;
}
table {
  border-collapse: collapse;
}
</style>
