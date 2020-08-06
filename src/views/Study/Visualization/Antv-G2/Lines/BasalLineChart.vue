<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">基础折线图</div>
    </div>
    <div class="panel-body panel-body-box">
      <div class="box">
        <blockquote>基础折线图</blockquote>
        <div id="container">
          <!-- 图形 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2'

export default {
  name: 'BasalLineChart',
  created() {
    console.dir(Chart)
  },
  mounted() {
    this.show()
  },
  methods: {
    show() {}
  }
}
</script>

<style scoped>

</style>
