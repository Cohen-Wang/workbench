<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">折线图</div>
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
const xAxisWidth = width - padding.left - padding.right
const yAxisWidth = height - padding.bottom - padding.top

export default {
  name: 'LineGraph',
  data() {
    return {

    }
  },
  mounted() {
    this.graph()
  },
  methods: {
    graph() {
      const svgObj = d3.select('#svg-box').append('svg').attr('width', width).attr('height', height)
      const xScale = d3.scaleBand().domain(dataset.map((d, i) => i)).range([0, xAxisWidth]).padding(0.1)
      const yScale = d3.scaleLinear().domain([d3.max(dataset, d => d), 0]).range([0, yAxisWidth])
      const xAxis = d3.axisBottom(xScale)
      const yAxis = d3.axisLeft(yScale)
      const gx = svgObj.append('g').attr('transform', `translate(${padding.left}, ${height - padding.bottom})`)
      const gy = svgObj.append('g').attr('transform', `translate(${padding.left}, ${height - padding.bottom - yAxisWidth})`)
      // 坐标系
      gx.call(xAxis)
      gy.call(yAxis)
      // 折线图
      const linePath = d3.line().curve(d3.curveBasis).x((d, i) => xScale(i) + padding.left + xScale.bandwidth() / 2)
        .y(d => height - padding.bottom - (yScale(0) - yScale(d)))
      svgObj.append('path').attr('d', linePath(dataset)).attr('stroke', '#000').attr('stroke-width', '3px')
        .attr('fill', 'none')
    }
  }
}
</script>

<style scoped>

</style>

