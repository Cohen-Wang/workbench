<template>
  <a-modal title="封闭直线 - Polygon"
           :visible="visible"
           :width="900"
           :footer="null"
           @cancel="hideDialog">
    <pre class="well" v-text="polygonSVG"></pre>
    <div v-html="polygonSVG"></div>
  </a-modal>
</template>

<script>
export default {
  name: 'SVGPolygon',
  data() {
    return {
      visible: false,
      polygonSVG:
`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="300" style="background-color: #f8f8f8;">
  <polygon points="10,200,200,50,250,250" style="fill:yellow; stroke: green; stroke-width: 4"></polygon>
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
