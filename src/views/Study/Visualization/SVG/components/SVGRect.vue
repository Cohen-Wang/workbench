<template>
  <a-modal title="rect"
          :visible="visible"
          :width="900"
          :footer="null"
          @cancel="hideDialog">
    <div class="modal-container">
      <div class="box">
        <pre class="well" v-text="rectSVG"></pre>
        <div v-html="rectSVG"></div>
      </div>
      <div class="box">
        <pre class="well" v-text="radiusRectSVG"></pre>
        <div v-html="radiusRectSVG"></div>
      </div>
    </div>
  </a-modal>
</template>

<script>
export default {
  name: 'SVGRect',
  data() {
    return {
      visible: false,
      rectSVG:
`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="300" style="background-color: #e8e8e8;">
  <rect width="200" height="100" x="0" y="10" style="fill:yellow; stroke: green; stroke-width: 4"></rect>
  <rect width="25%" height="50%" x="250" y="10" style="fill:yellow; stroke: green; stroke-width: 4"></rect>
  <rect width="100" height="100" x="500" y="10" rx="50%"  style="fill:yellow; stroke: green; stroke-width: 4"></rect>
</svg>
`,
      radiusRectSVG:
`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="300" style="background-color: #f8f8f8;">
  <rect width="200" height="100" x="20" y="10" rx="100" ry="200" style="fill:yellow; stroke: green; stroke-width: 4"></rect>
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
