<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">Deep</div>
    </div>
    <div class="panel-body panel-body-box">
      <h1>我是deep父组件</h1>
      <p>在我这里定义了 ---- #box #pox的背景颜色</p>
      <p>但是只有#box给了穿透 ---- /deep/</p>
      <hr class="mt-100 mb-100"/>
      <deep-child></deep-child>
    </div>
  </div>
</template>

<script>
import DeepChild from './DeepChild'

export default {
  name: 'Deep',
  components: {
    DeepChild
  }
}
</script>

<style lang="less" scoped>
/deep/ #box {
  background-color: indianred;
}

#pox {
  background-color: cadetblue;
}

/deep/ .ant-btn-primary {
  background-color: #d58bcc;
  border-color: #d58bcc;
}
</style>
