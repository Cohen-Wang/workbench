<template>
  <div>
    <div class="d-flex">
      <pre class="well" style="width: 30%;" v-text="array_array.original"></pre>
      <pre class="well" style="width: 30%;" v-text="array_array.flatten"></pre>
      <pre class="well" style="width: 30%;" v-text="array_array.flattenDeep"></pre>
    </div>
    <div class="d-flex">
      <pre class="well" style="width: 30%;" v-text="object_array.original"></pre>
      <pre class="well" style="width: 30%;" v-text="object_array.flatten"></pre>
      <pre class="well" style="width: 30%;" v-text="object_array.flattenDeep"></pre>
    </div>
    <div class="d-flex">
      <pre class="well" style="width: 30%;" v-text="test2.original"></pre>
      <pre class="well" style="width: 30%;" v-text="test2.flatten"></pre>
      <pre class="well" style="width: 30%;" v-text="test2.flattenDeep"></pre>
    </div>
  </div>
</template>

<script>
import { flatten, flattenDeep } from 'lodash'

// 我的
const flatten = (arr) => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(Object.assign({}, arr[i], { children: {}})) // 清空children内容
    if (arr[i].children && arr[i].children.length > 0) {
      result.push(...flatten(arr[i].children))
    }
  }
  return result
}


export default {
  name: 'Flatten',
  data() {
    return {
      array_array: {
        original: [1, [2, [3, [4]], 5]],
        flatten: [],
        flattenDeep: []
      },
      object_array: {
        original: [{
          name: 'a1',
          children: [
            {
              name: 'a1-1',
              children: [
                {
                  name: 'a1-1-1'
                }
              ]
            }
          ]
        }],
        flatten: [],
        flattenDeep: []
      },
      test2: {
        original: [],
        flatten: [],
        flattenDeep: []
      }
    }
  },
  created() {
    // ...
    this.array_array.flatten = flatten(this.array_array.original)
    this.array_array.flattenDeep = flattenDeep(this.array_array.original)
    // ...
    this.object_array.flatten = flatten(this.object_array.original)
    this.object_array.flattenDeep = flattenDeep(this.object_array.original)
    //
    this.getData()
  },
  methods: {
    // +---------------------------------------------------------------------------------------------
    // | 获取数据
    // +---------------------------------------------------------------------------------------------
    // 获取数据
    getData() {
      const url = '/library/lodash/flatten'
      this.$axios.get(url).then(res => {
        console.log(res)
        if (!res.statusText) return this.$message.error('没有获取到数据')
        this.test2.original = res.data.records
        this.test2.flatten = flatten(this.test2.original)
        this.test2.flattenDeep = flattenDeep(this.test2.original)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
