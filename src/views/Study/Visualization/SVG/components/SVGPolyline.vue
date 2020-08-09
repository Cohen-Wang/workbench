<template>
  <a-modal title="不封闭直线 - Polyline"
           :visible="visible"
           :width="900"
           :footer="null"
           @cancel="hideDialog">
    <pre class="well" v-text="polylineSVG"></pre>
    <div v-html="polylineSVG"></div>
  </a-modal>
</template>

<script>
export default {
  name: 'SVGPolyline',
  data() {
    return {
      visible: false,
      polylineSVG:
`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="300" style="background-color: #f8f8f8;">
  <polyline points="10,200,200,50,250,250" style="fill:yellow; stroke: green; stroke-width: 4"></polyline>
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
