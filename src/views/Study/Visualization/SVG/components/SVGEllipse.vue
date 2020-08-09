<template>
  <a-modal title="ellipse"
           :visible="visible"
           :width="900"
           :footer="null"
           @cancel="hideDialog">
    <pre class="well" v-text="ellipseSVG"></pre>
    <div v-html="ellipseSVG"></div>
  </a-modal>
</template>

<script>
export default {
  name: 'SVGEllipse',
  data() {
    return {
      visible: false,
      ellipseSVG:
`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="300" style="background-color: #f8f8f8;">
  <ellipse cx="150" cy="150" rx="40" ry="90" style="fill:yellow; stroke: green; stroke-width: 4"></ellipse>
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

