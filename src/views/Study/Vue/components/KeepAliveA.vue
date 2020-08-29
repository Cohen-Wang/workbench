<template>
  <div style="background-color: #5cb85c;">
    <p>我是A组件</p>
    <a-button @click="isShow = !isShow">点击</a-button>
    <div v-if="isShow">哈哈</div>
    <div v-else>嘿嘿</div>
  </div>
</template>

<script>
export default {
  name: 'KeepAliveA',
  data() {
    return {
      isShow: false
    }
  },
  created() {
    console.log('created')
  },
  mounted() {
    console.log('mounted')
  },
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  }
}
</script>

<style scoped></style>
