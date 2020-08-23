<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">Square（**）</div>
    </div>
    <div class="panel-body panel-body-box">
      <a-form layout="vertical">
        <a-form-item>
          <a-input type="number" v-model.number="a"/>
        </a-form-item>
      </a-form>
      <pre class="well">this.a ** 2</pre>
      <p class="lead">平方后结果：{{ squareA }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Square',
  data() {
    return {
      a: 1
    }
  },
  computed: {
    squareA() {
      return this.a ** 2
    }
  }
}
</script>

<style scoped>

</style>
