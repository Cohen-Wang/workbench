<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">基础柱状图</div>
    </div>
    <div class="panel-body panel-body-box">
      <div class="box">
        <h1>123</h1>
      </div>
    </div>
  </div>
</template>

<script>
// import G2 from '@antv/g2'
import { Chart } from '@antv/g2'

export default {
  name: 'BasalBarChart',
  created() {
    console.dir(Chart)
  }
}
</script>

<style scoped>

</style>
