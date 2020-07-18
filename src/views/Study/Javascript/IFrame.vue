<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">
        window.open
      </div>
    </div>
    <div class="panel-body panel-body-box">
      <div class="container">
        <div class="row">
          <div class="col">
            <iframe src="http://www.baidu.com"
                    name="first"
                    height="500"
                    width="100%"
                    scrolling="auto"/>
          </div>
        </div>
        <!-- ... -->
        <div>
          <blockquote><h3>对话框展示iframe</h3></blockquote>
          <div class="row">
            <div class="col">
              <iframe src="@/view/Study/Javascript/IFrame_1.html"
                      name="first"
                      height="500"
                      width="100%"
                      scrolling="auto"/>
            </div>
          </div>
        </div>
        <!-- ... -->
        <div>
          <blockquote><h3>对话框展示iframe</h3></blockquote>
          <div class="row">
            <div class="col">
              <a-button type="primary" @click="dialogVisible">打开对话框</a-button>
            </div>
          </div>
        </div>
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
  methods: {
    dialogVisible() {
      this.$refs.iFrameModal.open()
    }
  }
}
</script>

<style scoped lang="less">
  .container {

    .row {
      margin-left: -15px;
      margin-right: -15px;
      margin-bottom: 40px;
      padding-bottom: 20px;
      border-bottom: 2px dashed #e8e8e8;
      display: flex;
      flex-wrap: wrap;

      .col {
        width: 50%;
        padding: 10px 15px;
        border-right: 2px dashed #e8e8e8;
      }
    }
  }
</style>
