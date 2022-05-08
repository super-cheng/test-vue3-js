<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{ obj }}</div>
    <div>
      <button @click="handleClick">{{ count }}</button>
    </div>
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
    <div>unref</div>
    <button @click="handleUnref">unref</button>
  </div>

  <div class="content">
    <div>toRef</div>
    <button @click="handleToref">toRef-{{ obj2.foo }}</button>
    <button @click="handleToref2">toRef2-{{ fooref }}</button>
  </div>

  <div class="content">
    <div>toRefs</div>
    <button @click="handleTorefs">toRefs</button>
    <button @click="handleTorefs1">解构reactive-{{obj3foo}}-{{obj3bar}}</button>
    <button @click="handleTorefs2">toRefs-{{obj3.foo}}</button>
    <button @click="handleTorefs3">toRefs-{{obj3.bar}}</button>
  </div>

  <div class="content">
    <div>shallowRef</div>
    <button @click="handleShallowRef">shallowRef-{{obj4}}</button>
  </div>

  <div class="content">
    <div>triggerRef</div>
    <button @click="handleTriggerRef">triggerRef</button>
  </div>

  <div class="content">
    <button @click="handleResult">查看结果</button>
  </div>
</template>

<script setup>
import { isReactive, isRef, reactive, ref, shallowRef, toRef, toRefs, triggerRef, unref, watchEffect } from "vue";
const count = ref(0);
const obj = reactive({
  aa: 123,
});

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

let obj2 = reactive({
  foo: 1,
  bar: 2,
});
let fooref = toRef(obj2, "foo");

let obj3 = reactive({
  foo: 11,
  bar: 22,
});
let stateAsRefs,obj3foo,obj3bar;

const obj4 = shallowRef({});

const obj5 = shallowRef({
  greet: 'Hello, world'
})

watchEffect(() => {
  console.log(obj5.value.greet)
})



function handleClick() {
  count.value++;
}
// unRef
const handleUnref = () => {
  console.log(isReactive(tableData.value));
  let result = unref(tableData);
  console.log(result, isRef(result), isReactive(result));
  console.log(tableData, isRef(tableData.value));
};
// toRef
const handleToref = () => {
  fooref.value++;
  console.log(obj2.foo);
};
const handleToref2 = () => {
  obj2.foo++;
  console.log(fooref.value);
};
// toRefs
const handleTorefs = () => {
  let {foo,bar}=obj3;
  obj3foo=foo;
  obj3bar=bar;
  console.log(isRef(foo),isRef(bar));
  stateAsRefs = toRefs(obj3);
  console.log(stateAsRefs);
};
const handleTorefs1=()=>{
  obj3foo++;
  obj3bar++;
  console.log(obj3foo,obj3bar);
}
const handleTorefs2 = () => {
  obj3.foo++;
  console.log(stateAsRefs.foo.value);
};
const handleTorefs3 = () => {
  stateAsRefs.foo.value++;
  stateAsRefs.bar.value++;
  console.log(obj3.foo,obj3.bar);
};

// shallowRef
const handleShallowRef = () => {
  console.log(obj4);
  setTimeout(() => {
    obj4.value = {haha:123};
    console.log(isReactive(obj4.value));
    console.log(isRef(obj4));
  }, 2000);
}

// triggerRef
const handleTriggerRef = () => {
  obj5.value.greet = 'Hello, universe';
  triggerRef(obj5);
}

// 查看结果
const handleResult = () => {
  console.log(tableData.value);
  tableData.value.splice(3, 1);
};
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
