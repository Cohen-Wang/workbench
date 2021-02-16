<template>
  <div class="main-content"/>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {}
  },
  methods: {
    onChange(a, b, c) {
      console.log(a, b, c)
    }
  }
}
</script>

<style lang="less" scoped>
.main-content {
  height: calc(100vh - 120px);
  max-width: calc(100vw - 173px);
  background-size: cover;
  background-position: center;
  background-image: url('~@/assets/image/home.jpg');
}
</style>
