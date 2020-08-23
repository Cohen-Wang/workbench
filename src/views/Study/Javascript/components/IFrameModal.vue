<template>
  <a-modal v-model="visible"
           title="IFrame Modal"
           :width="1000"
           ok-text="确认"
           cancel-text="取消"
           @ok="hideModal">
    <div ref="box">
      <iframe :src="../../../.."
              ref="iframeId"
              height="500"
              width="100%"/>
    </div>
  </a-modal>
</template>

<script>
export default {
  name: 'IFrameModal',
  data() {
    return {
      visible: false,
      src: 'http://www.baidu.com' // iframe路径
    }
  },
  mounted() {
    // console.log('this.$refs', this.$refs) // undefined
    // console.log('this.$refs.iframeId:', this.$refs.iframeId) // undefined
  },
  methods: {
    open() {
      this.visible = true
      console.log('this.$refs', this.$refs) // 第一次点开：undefined
      console.log('this.$refs.iframeId:', this.$refs.iframeId) // 第一次点开：undefined
    },
    hideModal() {
      console.log(1)
    }
  }
}
</script>

<style scoped>

</style>
