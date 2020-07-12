<template>
  <div>
    <p>我是儿子组件</p>
    <div>
      <div id="box">
        #box - 有被修改颜色
      </div>
      <div id="pox">
        #pox - 没有被修改颜色
      </div>
      <a-button type="primary">
        Ant Design的button，被修改了颜色
      </a-button>
    </div>
    <hr class="mt-100 mb-100"/>
    <deep-grandchild></deep-grandchild>
  </div>
</template>

<script>
import DeepGrandchild from './DeepGrandchild'

export default {
  name: 'DeepChild',
  components: {
    DeepGrandchild
  }
}
</script>

<style lang="less" scoped>
#box,
#pox {
  border: 1px solid #000;
  margin-bottom: 10px;
}
</style>
