<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">throttle</div>
    </div>
    <div class="panel-body panel-body-box">
      <div class="box">
        <a-row :gutter="30">
          <a-col :span="12">
            <blockquote>当鼠标不停时，没有throttle</blockquote>
            <pre class="well">window.width = {{ this.quickInfo.w }}</pre>
            <pre class="well">window.height = {{ this.quickInfo.h }}</pre>
          </a-col>
          <a-col :span="12">
            <blockquote>当鼠标不停时，有throttle</blockquote>
            <pre class="well">window.width = {{ this.slowInfo.w }}</pre>
            <pre class="well">window.height = {{ this.slowInfo.h }}</pre>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
import throttle from 'lodash.throttle'

export default {
  name: 'Throttle',
  data() {
    this.getInfoSlow = throttle(this.getInfoSlow, 1000)
    return {
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

<style scoped lang="less"></style>
