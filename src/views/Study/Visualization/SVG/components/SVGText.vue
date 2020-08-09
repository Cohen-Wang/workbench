<template>
  <a-modal title="text"
           :visible="visible"
           :width="900"
           :footer="null"
           @cancel="hideDialog">
    <pre class="well" v-text="textSVG"></pre>
    <div v-html="textSVG"></div>
  </a-modal>
</template>

<script>
export default {
  name: 'SVGText',
  data() {
    return {
      visible: false,
      textSVG:
`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="300" style="background-color: #f8f8f8;">
  <text x="100" y="150"  style="fill:yellow; stroke: green; stroke-width: 1;">
    hello <tspan fill="red">world</tspan>
  </text>
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
