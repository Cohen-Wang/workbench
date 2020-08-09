<template>
  <a-modal title="image"
           :visible="visible"
           :width="900"
           :footer="null"
           @cancel="hideDialog">
    <div class="modal-container">
      <!-- 图片 -->
      <div class="box">
        <blockquote>原图</blockquote>
        <img :src="testImage" width="100%">
      </div>
      <div class="box">
        <pre class="well" v-text="imageSVG"></pre>
        <div v-html="imageSVG"></div>
      </div>
    </div>
  </a-modal>
</template>

<script>
import testImage from '@/assets/image/test.jpg'

export default {
  name: 'SVGImage',
  data() {
    return {
      visible: false,
      testImage,
      imageSVG:
`
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="300" style="background-color: #f8f8f8;">
  <image xlink:href="${testImage}" x="10" y="10" width="200" height="100"/>

  <defs>
    <clipPath id="myClipPath">
      <rect x="250" y="10" width="100%" height="100" rx="50%" ry="50"></rect>
    </clipPath>
    <clipPath id="myClipPathCircle">
      <circle cx="500" cy="70" r="50"></circle>
    </clipPath>
  </defs>

  <image xlink:href="${testImage}" x="250" y="10" width="100" height="100" style="clip-path:url(#myClipPath)"/>
  <image xlink:href="${testImage}" x="450" y="-10" width="150" height="150" style="clip-path:url(#myClipPathCircle)"/>
</svg>
`
    }
  },
  methods: {
    showDialog() {
      this.visible = true
    },
    hideDialog() {
      this.visible = false
    }
  }
}
</script>

<style lang="less" scoped></style>
