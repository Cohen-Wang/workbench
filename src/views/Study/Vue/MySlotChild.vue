<template>
  <div class="child">
    <h1>我是子组件</h1>
    <div style="background-color: yellowgreen">
      <slot></slot>
    </div>
    <div style="background-color: deepskyblue">
      <slot name="nameSlot"></slot>
    </div>
    <div style="background-color: lightpink">
      <slot name="scopeSlot" :data="list"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlotChild',
  data() {
    return {
      list: [
        { name: '刘德华', age: 60 },
        { name: '张三"', age: 54 },
        { name: '李四', age: 23 },
        { name: '王五', age: 43 },
        { name: '要么', age: 76 }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.child {
  background-color: #ff456e;
}
</style>
