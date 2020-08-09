<template>
  <a-modal title="use"
           :visible="visible"
           :width="900"
           :footer="null"
           @cancel="hideDialog">
    <pre class="well" v-text="SVGUse"></pre>
    <div v-html="SVGUse"></div>
  </a-modal>
</template>

<script>
export default {
  name: 'SVGUse',
  data() {
    return {
      visible: false,
      SVGUse:
`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" style="background-color: #f8f8f8;">
  <style>
    .classA { fill:red }
  </style>
  <defs>
    <g id="Port">
      <circle style="fill: inherit" r="10"/>
    </g>
  </defs>

  <text y="15">black</text>
  <use x="50" y="10" xlink:href="#Port" />
  <text y="35">red</text>
  <use x="50" y="30" xlink:href="#Port" class="classA"/>
  <text y="55">blue</text>
  <use x="50" y="50" xlink:href="#Port" style="fill:blue"/>
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
