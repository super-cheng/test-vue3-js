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
    <div>reactive</div>
    <p>{{obj2.aaa}}</p>
    <button @click="handleReactive">reactive</button>
  </div>

  <div class="content">
    <div>readonly</div>
    <div>{{original}}</div>
    <button @click="handleReadonly">readonly</button>
  </div>

  <div class="content">
    <div>isProxy</div>
    <button @click="handleIsProxy">isProxy</button>
  </div>

  <div class="content">
    <div>isReactive</div>
    <button @click="handleIsReactive">isReactive</button>
  </div>


  <div class="content">
    <div>isReadonly</div>
    <button @click="handleIsReadonly">isReadonly</button>
  </div>

  <div class="content">
    <div>toRaw</div>
    <div>{{obj5}}</div>
    <button @click="handleToRaw">toRaw</button>
  </div>

  <div class="content">
    <div>markRaw</div>
    <button @click="handleMarkRaw">markRaw</button>
  </div>

  <div class="content">
    <div>shallowReactive</div>
    <div>{{shallowReactive_obj1.foo}} - {{shallowReactive_obj1.nested.bar}} - {{shallowReactive_obj1.nested.bar2.bar3}}</div>
    <button @click="handleShallowReactive">shallowReactive</button>
  </div>

  <div class="content">
    <div>shallowReadonly</div>
    <div>{{shallowReadonly_obj.nested.bar2}}</div>
    <button @click="handleShallowReadonly">shallowReadonly</button>
  </div>

  <div class="content">
    <button @click="handleResult">查看结果</button>
  </div>
</template>

<script setup>
import { isProxy, isReactive, isReadonly, isRef, markRaw, reactive, readonly, ref, shallowReactive, shallowReadonly, shallowRef, toRaw, toRef, toRefs, triggerRef, unref, watchEffect } from "vue";

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

// const count = ref(1)
// const obj = reactive({ count: count.value })

const count = ref(1);
const obj = reactive({});

obj.count = count;
// console.log(obj.count.value)
// console.log(obj.count === count.value)


const obj2= reactive({aaa:333})
// console.log(obj.count === count.value)

// reactive
const handleReactive = () => {
  obj2.aaa++;
  
  count.value++
  console.log(count.value)
  console.log(obj.count)

  obj.count++
  console.log(count.value)
  console.log(obj.count)
};

// readonly
const original = reactive({ count: 0 })
const copy = readonly(original)
// watchEffect(() => {
//   // 用于响应性追踪
//   console.log(copy.count)
// })

const handleReadonly = () => {
  // original.count++;
  copy.count++;
};


// isProxy
let proxy1=ref(55);
let proxy2=reactive({
  a:11
});
let proxy3=readonly(proxy1);
let proxy4=readonly(proxy2);
let proxy5=readonly({b:12})
const handleIsProxy = () => {
  console.log(isProxy(proxy1));
  console.log(isProxy(proxy2));
  console.log(isProxy(proxy3));
  console.log(isProxy(proxy4));
  console.log(isProxy(proxy5),proxy5.b);
};


// isReactive
const isReactive_obj1 = reactive({
  name: 'John'
})
const isReactive_obj2 = readonly({
  name: 'Mary'
})
const handleIsReactive = () => {
  // console.log(isReactive(isReactive_obj1),isReactive(isReactive_obj2))
  const stateCopy = readonly(isReactive_obj1);
  console.log(isReactive(stateCopy));
};


// isReadonly
let readonly_obj1=readonly({a:1232});
let obj3 = ref(321);
let obj4=reactive({foo:true});

let readonly_obj2=readonly(obj3);
let readonly_obj3=readonly(obj4);
const handleIsReadonly = () => {
  console.log(isReadonly(readonly_obj1));
  console.log(isReadonly(obj3));
  console.log(isReadonly(obj4));
  console.log(isReadonly(readonly_obj2));
  console.log(isReadonly(readonly_obj3));
};


// toRaw
let toRaw_obj1={cc:888};
let obj5=reactive(toRaw_obj1);
let toRaw_obj2=toRaw(obj5);
const handleToRaw = () => {
  // console.log(toRaw(obj5)===toRaw_obj1);
  // obj5.cc++;
  toRaw_obj2.cc++;
  // console.log(obj5);
  console.log(obj5,toRaw_obj1,toRaw_obj2);

  // toRaw_obj1.cc++;
  // console.log(obj5,toRaw_obj1);
};

// markRaw
const markRaw_obj1 = markRaw({});
const markRaw_obj2 = reactive({ markRaw_obj1 });
const markRaw_obj3 = markRaw({
  nested: {}
});
const markRaw_obj4 = reactive({
  // 虽然 `foo` 被标记为原始，但 foo.nested 不是。
  nested: markRaw_obj3.nested
})
const handleMarkRaw = () => {
  // console.log(isReactive(reactive(markRaw_obj1)));
  // console.log(markRaw_obj2.markRaw_obj1,isReactive(markRaw_obj2.markRaw_obj1));
  console.log(markRaw_obj3.nested, markRaw_obj4.nested,markRaw_obj3.nested === markRaw_obj4.nested);
};

// shallowReactive
const shallowReactive_obj1 = shallowReactive({
  foo: 1,
  nested: {
    bar: 2,
    bar2: {
      bar3: 4
    }
  }
});

const handleShallowReactive = () => {
  // shallowReactive_obj1.foo++;
  shallowReactive_obj1.nested.bar++;
  shallowReactive_obj1.nested.bar2.bar3++;

  console.log(shallowReactive_obj1);
  console.log(isReactive(shallowReactive_obj1));
  console.log(isReactive(shallowReactive_obj1.foo));
  console.log(isReactive(shallowReactive_obj1.nested));
  console.log(isReactive(shallowReactive_obj1.nested.bar));
};



// shallowReadonly
let shallowReadonly_obj=shallowReadonly({
  foo: 1,
  nested: {
    bar: 2,
    bar2: ref(3)
  }
})
const handleShallowReadonly = () => {
  shallowReadonly_obj.foo++;
  console.log(isReadonly(shallowReadonly_obj.foo));
  console.log(isReadonly(shallowReadonly_obj.nested));
  shallowReadonly_obj.nested.bar2.value++;
};


// 查看结果
const handleResult = () => {
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
