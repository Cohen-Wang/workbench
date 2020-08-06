<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">直方图</div>
    </div>
    <div class="panel-body panel-body-box">
      <div class="box">
        <div id="svg-box"></div>
      </div>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3'

const dataset = [50, 43, 120, 87, 99, 167, 143]
const height = 400
const width = 400
const padding = { top: 20, left: 20, right: 20, bottom: 20 }
const rectStep = 35
const rectWidth = 30

export default {
  name: 'Histogram',
  data() {
    return {

    }
  },
  mounted() {
    this.histogram()
  },
  methods: {
    histogram() {
      const svgObj =
              d3.select('#svg-box')
                .append('svg')
                .attr('height', height)
                .attr('width', width)
      // ...
      svgObj.selectAll('rect')
        .data(dataset)
        .enter() // 生成还没有的元素
        .append('rect')
        .attr('fill', 'red')
        .attr('x', (d, i) => padding.left + i * rectStep)
        .attr('y', (d, i) => height - padding.bottom - d)
        .attr('width', rectWidth)
        .attr('height', d => d)
      // ...
      svgObj.selectAll('text')
        .data(dataset)
        .enter()
        .append('text')
        .attr('fill', '#0f0')
        .attr('font-size', '14px')
        .attr('text-anchor', 'middle')
        .attr('x', (d, i) => padding.left + i * rectStep)
        .attr('y', (d, i) => height - padding.bottom - d)
        .text(d => d)
        .attr('dx', rectWidth / 2)
        .attr('dy', '1em')
    }
  }
}
</script>

<style scoped>

</style>
