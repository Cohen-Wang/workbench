<template>
  <div id="force-box" ref="force-box" class="graph-box">
    <!-- ... -->
  </div>
</template>

<script>
import * as d3 from 'd3'
import CONFIG from './Force.config'
import data from './ForceData'
import head from '@/assets/image/head.png'

const nodes = data.nodes
const edges = data.edges
const theme = 'light'

export default {
  name: 'Force',
  mounted() {
    this.$nextTick(() => {
      this.show()
    })
  },
  methods: {
    show() {
      // 处理连线的source的id
      edges.forEach(edge => {
        edge['source'] = nodes.findIndex(node => node.id === edge.source) // 将id 变为index
      })

      edges.forEach(edge => {
        edge['target'] = nodes.findIndex(node => node.id === edge.target) // 将id 变为index
      })

      // 创建svg 对象
      const width = this.$refs['force-box'].offsetWidth
      const height = this.$refs['force-box'].offsetHeight
      const svg = d3.select('#force-box').append('svg').attr('width', width).attr('height', height)
      const marge = { top: 10, bottom: 10, left: 10, right: 10 }
      const g = svg.append('g').attr('transform', 'translate(' + marge.top + ',' + marge.left + ')')

      // 设置一个color的颜色比例尺，为了让不同的扇形呈现不同的颜色
      // const colorScale = d3.scaleOrdinal().domain(d3.range(nodes.length)).range(d3.schemeCategory10)

      // 初始化力导图实例
      const forceSimulation = d3.forceSimulation()
        .force('link', d3.forceLink()) // 让相互有链接的点，有一定的距离
        .force('charge', d3.forceManyBody()) // 粒子两两之间的力，正数引力，负数斥力
        .force('center', d3.forceCenter()) // 所有粒子，向中心的力

      // 生成节点数据
      forceSimulation.nodes(nodes).on('tick', ticked) // 这个函数很重要，后面给出具体实现和说明

      // 生成边数据
      forceSimulation.force('link').links(edges)
        .distance(d => CONFIG[d.source.type].distance) // 每一边的长度)
        // .strength(-3) // 斥力大小

      // 设置图形的中心位置
      forceSimulation.force('center').x(width / 2).y(height / 2)

      // 绘制边
      const links = g.append('g')
        .selectAll('line')
        .data(edges)
        .enter()
        .append('line')
        .attr('stroke', function(d, i) {
          return CONFIG['line'].color // 边的颜色
        })
        .attr('stroke-width', CONFIG['line'].lineWidth)

      // 边上文字
      const linksText = g.append('g')
        .selectAll('text')
        .data(edges)
        .enter()
        .append('text')
        .text(function(d) {
          return d.relationshipAbbreviation || '默认文字'
        })
        .attr('fill', CONFIG['line'].textColor)

      // 建立用来放在每个节点和对应文字的分组<g>
      const gs = g.selectAll('.circleText')
        .data(nodes)
        .enter()
        .append('g')
        .attr('transform', function(d, i) {
          const cirX = d.x
          const cirY = d.y
          return `translate(${cirX}, ${cirY})`
        })
        .call(d3.drag()
          .on('start', started)
          .on('drag', dragged)
          .on('end', ended)
        )

      // 绘制节点
      gs.append('circle')
        // .attr('r',20)
        .attr('r', function(d, i) { // 圆圈半径的大小
          return CONFIG[d.type].radius
        })
        .attr('fill', function(d, i) {
          // 节点圆圈的颜色
          if (d.type === 'TASK') return CONFIG[d.type][d.taskType][theme].bgColor // 节点圆圈的颜色
          return CONFIG[d.type][theme].bgColor
        })

      // 添加图片
      gs.append('image')
        .attr('xlink:href', (d, i) => {
          // return d.img || d.icon.img || 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
          if (d.type === 'DEPART') return d.icon.img
          if (d.type === 'TASK') return d.icon.img
          if (d.type === 'image') return head
        })
        .attr('width', d => CONFIG[d.type].radius * 2)
        .attr('height', d => CONFIG[d.type].radius * 2)
        .attr('x', d => -CONFIG[d.type].radius)
        .attr('y', d => -CONFIG[d.type].radius)
        // .attr('dy', 10)

      // 文字
      gs.append('text')
        .attr('text-anchor', 'middle')
        .attr('font-size', d => CONFIG[d.type].fontSize)
        .attr('dy', 5) // y轴位置
        .text(d => d.name)
        .attr('fill', '#666')

      // 缩放
      svg.call(d3.zoom()
        .scaleExtent([1 / 2, 8])
        .on('zoom', zoomed))

      function zoomed() {
        g.attr('transform', d3.event.transform)
      }

      function ticked() {
        links.attr('x1', function(d) { return d.source.x })
          .attr('y1', function(d) { return d.source.y })
          .attr('x2', function(d) { return d.target.x })
          .attr('y2', function(d) { return d.target.y })

        linksText.attr('x', function(d) { return (d.source.x + d.target.x) / 2 }) // 连线文字的x
          .attr('y', function(d) { return (d.source.y + d.target.y) / 2 }) // 连线文字的Y

        gs.attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')' }) // 节点的位置
      }

      // drag
      function started(d) {
        if (!d3.event.active) {
          forceSimulation.alphaTarget(0.8).restart() // 设置衰减系数，对节点位置移动过程的模拟，数值越高移动越快，数值范围[0，1]
        }
        d.fx = d.x
        d.fy = d.y
      }

      function dragged(d) {
        d.fx = d3.event.x
        d.fy = d3.event.y
      }

      function ended(d) {
        if (!d3.event.active) {
          forceSimulation.alphaTarget(0)
        }
        d.fx = null
        d.fy = null
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .graph-box {
    background: url("../../../../assets/image/discovery_bg_blue.png");
    height: calc(100vh - 115px);
    user-select: none;
  }
</style>
