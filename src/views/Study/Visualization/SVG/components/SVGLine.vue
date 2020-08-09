<template>
  <a-modal title="line"
           :visible="visible"
           :width="900"
           :footer="null"
           @cancel="hideDialog">
    <pre class="well" v-text="lineSVG"></pre>
    <div v-html="lineSVG"></div>
  </a-modal>
</template>

<script>
export default {
  name: 'SVGLine',
  data() {
    return {
      visible: false,
      lineSVG:
`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="300" style="background-color: #f8f8f8;">
  <line x1="100" y1="100" x2="200" y2="200" style="fill:yellow; stroke: green; stroke-width: 4"></line>
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
