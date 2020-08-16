<template>
  <div class="go-back">
    <a-button type="link" icon="left" size="large" style="padding: 0;" @click="goBack">返回</a-button>
  </div>
</template>

<script>
export default {
  name: 'GoBack',
  methods: {
    goBack() {
      this.$emit('goBack')
    }
  }
}
</script>

<style lang="less" scoped>
  .go-back {
    display: flex;
  }
</style>
