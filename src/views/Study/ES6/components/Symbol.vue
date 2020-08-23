<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">Symbol</div>
    </div>
    <div class="panel-body panel-body-box">
      <a-button type="primary" @click="handleClick">点击，查看控制台</a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MySymbol',
  data() {
    return {
      s: Symbol('school')
    }
  },
  methods: {
    handleClick() {
      console.log(this.s)
      console.log(typeof this.s)
      console.log(this.s.description)
      console.log(Boolean(!Symbol(123)))
    }
  }
}
</script>

<style scoped></style>
