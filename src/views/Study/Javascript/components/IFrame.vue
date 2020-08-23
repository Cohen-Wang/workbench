<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">window.open</div>
    </div>
    <div class="panel-body panel-body-box">
      <div class="box">
<!--        <a-row :gutter="30">-->
<!--          <a-col :span="12">-->
<!--            <iframe src="http://www.baidu.com"-->
<!--                    name="first"-->
<!--                    height="500"-->
<!--                    width="100%"-->
<!--                    scrolling="auto"/>-->
<!--          </a-col>-->
<!--        </a-row>-->
      </div>
      <!-- 本地iframe -->
      <div class="box">
        <a-row :gutter="30">
          <a-col :span="24">
            <blockquote><h3>对话框展示iframe</h3></blockquote>
          </a-col>
          <a-col :span="24">
            <iframe src="/assets/a.html"
                    ref="myIFrame"
                    name="first"
                    height="500"
                    width="100%"
                    scrolling="auto"/>
          </a-col>
        </a-row>
      </div>
      <!-- 对话框 -->
      <div class="box">
        <a-row :gutter="30">
          <a-col :span="24">
            <blockquote><h3>对话框展示iframe</h3></blockquote>
          </a-col>
          <a-col :span="12">
            <a-button type="primary" @click="dialogVisible">打开对话框</a-button>
          </a-col>
        </a-row>
      </div>
    </div>
    <!-- 组件 -->
    <i-frame-modal ref="iFrameModal"/>
  </div>
</template>

<script>
import IFrameModal from './IFrameModal'

export default {
  name: 'Iframe',
  components: { IFrameModal },
  data() {
    return {
      a: 1
    }
  },
  mounted() {
    console.log('this.$refs.myIFrame:', this.$refs.myIFrame)
    console.log('this.$refs.myIFrame.contentWindow:', this.$refs.myIFrame.contentWindow)
  },
  methods: {
    dialogVisible() {
      this.$refs.iFrameModal.open()
    }
  }
}
</script>

<style scoped lang="less"></style>
