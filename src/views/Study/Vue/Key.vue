<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">:key</div>
    </div>
    <div class="panel-body panel-body-box">
      <h1>从效果上比较</h1>
      <div class="d-flex">
        <div class="flex-1 pl-10 pr-10" style="border-right: 2px dashed #ccc;">
          <blockquote>v-for的时候，不写key，并且用:checked。结果错误</blockquote>
          <ul>
            <!--eslint-disable-next-line-->
            <li v-for="(item, index) in tableData1">
              <input type="checkbox" :checked="item.isChecked"> |
              <span v-text="item.isChecked"></span> |
              <span v-text="item.name"></span> |
              <span v-text="item.age"></span> |
              <a href="javascript:void(0)" @click="deleteRow1(index)">删除</a>
            </li>
          </ul>
        </div>
        <div class="flex-1 pl-10 pr-10" style="border-right: 2px dashed #ccc;">
          <blockquote>v-for的时候，不写key，并且用v-model。结果正确</blockquote>
          <ul>
            <!--eslint-disable-next-line-->
            <li v-for="(item, index) in tableData2">
              <input type="checkbox" v-model="item.isChecked"> |
              <span v-text="item.isChecked"></span> |
              <span v-text="item.name"></span> |
              <span v-text="item.age"></span> |
              <a href="javascript:void(0)" @click="deleteRow2(index)">删除</a>
            </li>
          </ul>
        </div>
        <div class="flex-1 pl-10 pr-10">
          <blockquote>v-for的时候，写了key，并且用v-model。结果正确</blockquote>
          <ul>
            <!--eslint-disable-next-line-->
            <li v-for="(item, index) in tableData3" :key="item.id">
              <input type="checkbox" v-model="item.isChecked"> |
              <span v-text="item.isChecked"></span> |
              <span v-text="item.name"></span> |
              <span v-text="item.age"></span> |
              <a href="javascript:void(0)" @click="deleteRow3(index)">删除</a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="mt-200 mb-200">

      <h1>从算法上比较</h1>
      <p>https://www.bilibili.com/video/BV1m7411P7oD?from=search&seid=11889106890251990450</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Key',
  data() {
    return {
      tableData1: [
        { id: 1, name: '张三', age: 11, isChecked: false },
        { id: 2, name: '李四', age: 22, isChecked: false },
        { id: 3, name: '王五', age: 33, isChecked: false },
        { id: 4, name: '德华', age: 44, isChecked: false },
        { id: 5, name: '王佳', age: 55, isChecked: false },
        { id: 6, name: '姚明', age: 66, isChecked: false }
      ],
      tableData2: [
        { id: 1, name: 'AA', age: 11, isChecked: false },
        { id: 2, name: 'BB', age: 22, isChecked: false },
        { id: 3, name: 'CC', age: 33, isChecked: false },
        { id: 4, name: 'DD', age: 44, isChecked: false },
        { id: 5, name: 'EE', age: 55, isChecked: false },
        { id: 6, name: 'FF', age: 66, isChecked: false }
      ],
      tableData3: [
        { id: 1, name: '哈哈', age: 11, isChecked: false },
        { id: 2, name: '嘻嘻', age: 22, isChecked: false },
        { id: 3, name: '呵呵', age: 33, isChecked: false },
        { id: 4, name: '哦哦', age: 44, isChecked: false },
        { id: 5, name: '嗯嗯', age: 55, isChecked: false },
        { id: 6, name: '啦啦', age: 66, isChecked: false }
      ]
    }
  },
  methods: {
    deleteRow1(index) {
      this.tableData1.splice(index, 1)
    },
    deleteRow2(index) {
      this.tableData2.splice(index, 1)
    },
    deleteRow3(index) {
      this.tableData3.splice(index, 1)
    }
  }
}
</script>

<style scoped></style>
