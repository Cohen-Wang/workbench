<template>
  <a-modal title="circle"
           :visible="visible"
           :width="900"
           :footer="null"
           @cancel="hideDialog">
    <pre class="well" v-text="SVGCircle"></pre>
    <div v-html="SVGCircle"></div>
  </a-modal>
</template>

<script>
export default {
  name: 'SVGCircle',
  data() {
    return {
      visible: false,
      SVGCircle:
`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="300" style="background-color: #f8f8f8;">
  <circle cx="150" cy="150" r="80" style="fill:yellow; stroke: green; stroke-width: 4"></circle>
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
