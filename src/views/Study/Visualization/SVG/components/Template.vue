<template>
  <a-modal title="template"
           :visible="visible"
           :width="900"
           :footer="null"
           @cancel="hideDialog">
    <p>template</p>
  </a-modal>
</template>

<script>
export default {
  name: 'Template',
  data() {
    return {
      visible: false
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
