<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">饼图</div>
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

const height = 300
const width = 300

export default {
  name: 'PieGraph',
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
      // 数据
      const dataset = [
        { startAngle: 0, endAngle: Math.PI * 0.6 },
        { startAngle: Math.PI * 0.6, endAngle: Math.PI },
        { startAngle: Math.PI, endAngle: Math.PI * 1.7 },
        { startAngle: Math.PI * 1.7, endAngle: Math.PI * 2 }
      ]
      const arcPath = d3.arc().innerRadius(50).outerRadius(100)
      const color = d3.scaleOrdinal(d3.schemeCategory10)

      svgObj.selectAll('path').data(dataset).enter().append('path')
        .attr('d', d => arcPath(d))
        .attr('transform', 'translate(150, 200)')
        .attr('stroke', '#000')
        .attr('stroke-width', '1px')
        .attr('fill', (d, i) => color(i))

      // 文字
      svgObj.selectAll('text').data(dataset).enter().append('text')
        .attr('transform', d => `translate(150, 200)` + `translate(${arcPath.centroid(d)})`)
        .attr('text-anchor', 'middle')
        .attr('fill', '#fff')
        .attr('font-size', '14px')
        .text(d => (d.endAngle - d.startAngle) * 180 / Math.PI + '度')
    }
  }
}
</script>

<style scoped>

</style>

