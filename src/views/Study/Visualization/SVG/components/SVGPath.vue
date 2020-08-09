<template>
  <a-modal title="path"
           :visible="visible"
           :width="900"
           :footer="null"
           @cancel="hideDialog">
    <pre class="well" v-text="pathSVG"></pre>
    <div v-html="pathSVG"></div>
  </a-modal>
</template>

<script>
export default {
  name: 'SVGPath',
  data() {
    return {
      visible: false,
      pathSVG:
`
<svg width="190px" height="160px">
  <path d="M10 10 C 20 20, 40 20, 50 10" stroke="3" fill="red"/>
  <path d="M70 10 C 70 20, 120 20, 120 10" stroke="3" fill="red"/>
  <path d="M130 10 C 120 20, 180 20, 170 10" stroke="3" fill="red"/>
  <path d="M10 60 C 20 80, 40 80, 50 60" stroke="3" fill="red"/>
  <path d="M70 60 C 70 80, 110 80, 110 60" stroke="3" fill="red"/>
  <path d="M130 60 C 120 80, 180 80, 170 60" stroke="3" fill="red"/>
  <path d="M10 110 C 20 140, 40 140, 50 110" stroke="3" fill="red"/>
  <path d="M70 110 C 70 140, 110 140, 110 110" stroke="3" fill="red"/>
  <path d="M130 110 C 120 140, 180 140, 170 110" stroke="3" fill="red"/>
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
