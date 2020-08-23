<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <div class="box">
          <a-row :gutter="30">
            <a-col :span="12">
              <blockquote>当鼠标不停时，没有throttle</blockquote>
              <pre class="well">clientX = {{ this.quickInfo.w }}</pre>
              <pre class="well">clientY = {{ this.quickInfo.h }}</pre>
            </a-col>
            <a-col :span="12">
              <blockquote>当鼠标不停时，有throttle</blockquote>
              <pre class="well">clientX = {{ this.slowInfo.w }}</pre>
              <pre class="well">clientY = {{ this.slowInfo.h }}</pre>
            </a-col>
          </a-row>
        </div>
      </div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'
import throttle from 'lodash.throttle'

export default {
  name: 'Monaco',
  components: {
    GoBack,
    MyComponent
  },
  data() {
    this.getInfoSlow = throttle(this.getInfoSlow, 1000)
    return {
      visible: false,
      // ...
      quickInfo: {
        w: 0,
        h: 0
      },
      slowInfo: {
        w: 0,
        h: 0
      }
    }
  },
  created() {
    window.addEventListener('mousemove', e => {
      this.getInfoQuick(e)
    })
    window.addEventListener('mousemove', e => {
      this.getInfoSlow(e)
    })
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
    },
    // ...
    getInfoQuick(e) {
      this.quickInfo.w = e.clientX
      this.quickInfo.h = e.clientY
    },
    getInfoSlow(e) {
      this.slowInfo.w = e.clientX
      this.slowInfo.h = e.clientY
    }
  }
}
</script>

<style lang="less" scoped>
</style>
