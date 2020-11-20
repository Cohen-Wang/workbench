<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <!-- ... -->
        <div>
          <div>
            <h1>缩放浏览器 - 观察图片变化</h1>
          </div>

          <div>
            <a-divider>img标签</a-divider>
            <a-row :gutter="20">
              <a-col :span="4">
                <div class="pic-box">
                  <img :src="require('@/assets/image/picture_200.jpg')" alt="">
                </div>
              </a-col>
              <a-col :span="4">
                <div class="pic-box">
                  <img :src="require('@/assets/image/picture_200.jpg')" width="100%" alt="">
                </div>
              </a-col>
              <a-col :span="4">
                <div class="pic-box">
                  <img :src="require('@/assets/image/picture_200.jpg')" height="100%" alt="">
                </div>
              </a-col>
              <a-col :span="4">
                <div class="pic-box">
                  <img :src="require('@/assets/image/picture_200.jpg')" width="100%" height="100%" alt="">
                </div>
              </a-col>
            </a-row>
          </div>

          <div>
            <a-divider>background：图片高度比容器小</a-divider>
            <a-row :gutter="20">
              <a-col :span="4">
                <div class="pic-box picture-200"/>
              </a-col>
              <a-col :span="4">
                <div class="pic-box picture-200" style="background-size: cover;"/>
              </a-col>
              <a-col :span="4">
                <div class="pic-box picture-200" style="background-size: cover;background-position: center;"/>
              </a-col>
              <a-col :span="4">
                <div class="pic-box picture-200" style="background-size: contain;"/>
              </a-col>
              <a-col :span="4">
                <div class="pic-box picture-200" style="background-size: contain;background-position: center;"/>
              </a-col>
            </a-row>
          </div>

          <div>
            <a-divider>background：图片高度比容器大</a-divider>
            <a-row :gutter="20">
              <a-col :span="4">
                <div class="pic-box picture-400"/>
              </a-col>
              <a-col :span="4">
                <div class="pic-box picture-400" style="background-size: cover;"/>
              </a-col>
              <a-col :span="4">
                <div class="pic-box picture-400" style="background-size: cover;background-position: center;"/>
              </a-col>
              <a-col :span="4">
                <div class="pic-box picture-400" style="background-size: contain;"/>
              </a-col>
              <a-col :span="4">
                <div class="pic-box picture-400" style="background-size: contain;background-position: center;"/>
              </a-col>
            </a-row>
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
  name: 'Picture',
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
  .pic-box {
    height: 300px;
    box-sizing: border-box;
    border: 1px solid #e8e8e8;
    overflow: hidden;
  }

  .picture-200 {
    background: url('~@/assets/image/picture_200.jpg');
    background-repeat: no-repeat;
  }

  .picture-400 {
    background: url('~@/assets/image/picture_400.jpg');
    background-repeat: no-repeat;
  }
</style>
