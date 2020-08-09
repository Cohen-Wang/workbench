<template>
  <a-modal title="clipPath"
           :visible="visible"
           :width="900"
           :footer="null"
           @cancel="hideDialog">
    <pre class="well" v-text="clipPathSVG"></pre>
    <div v-html="clipPathSVG"></div>
  </a-modal>
</template>

<script>
export default {
  name: 'SVGClipPath',
  data() {
    return {
      visible: false,
      clipPathSVG:
`
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="300" style="background-color: #f8f8f8;">
  <defs>
    <clipPath id="clipPath">
      <text x="10" y="70" style="font-size: 40px;">我是中国人</text>
    </clipPath>
  </defs>

  <g style="clip-path:url(#clipPath)">
    <rect x="10" y="30" width="150" height="100" fill="red"/>
    <circle r="10" cx="110" cy="55" fill="blue"/>
  </g>
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
