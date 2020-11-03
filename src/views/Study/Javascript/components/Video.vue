<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <!-- ... -->
        <div>
          <!-- 视频区 -->
          <div style="width: 1000px;">
            <!--video 共9个属性  poster autoplay controls loop muted poster width="1000" height=""-->
            <video id="video" poster controls loop width="" height="500" style="width: 100%;border: 2px solid red;">
              <source :src="require('@/assets/video/office.mp4')" type="video/ogg">
              Your browser does not support the video tag.
            </video>
          </div>
          <a-divider orientation="left">操作</a-divider>

          <!-- 进度条 -->
          <a-progress :percent="30"/>

          <!-- 按钮区 -->
          <div>
            <a-button-group size="large">
              <a-button icon="step-backward"/>
              <a-button icon="backward"/>
              <a-button icon="caret-right"/>
              <a-button icon="forward"/>
              <a-button icon="step-forward"/>
            </a-button-group>
          </div>
        </div>
      </div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'

export default {
  name: 'Template',
  components: {
    GoBack,
    MyComponent
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    // +---------------------------------------------------------------------------------------------
    // | 页面
    // +---------------------------------------------------------------------------------------------
    show() {
      this.visible = true
    },
    goBack() {
      this.visible = false
    }
    // +---------------------------------------------------------------------------------------------
    // | 正文
    // +---------------------------------------------------------------------------------------------
  }
}
</script>

<style lang="less" scoped>
</style>
