<template>
  <div id="force-box" ref="force-box" class="graph-box">
    <!-- ... -->
  </div>
</template>

<script>
import * as d3 from 'd3'
import CONFIG from './Force.config'
import { fakeData, realData } from './ForceData'

// 背景图片
import DiscoveryBgLight from '@/assets/image/discovery_bg_light.png'
import DiscoveryBgBlue from '@/assets/image/discovery_bg_blue.png'
import DiscoveryBgDark from '@/assets/image/discovery_bg_dark.png'
const THEME_BG = {
  'light': DiscoveryBgLight,
  'blue': DiscoveryBgBlue,
  'dark': DiscoveryBgDark
}

// import head from '@/assets/image/head.png'
const nodes = realData.nodes
const edges = realData.edges
const theme = 'dark'

export default {
  name: 'Force',
  mounted() {
    console.log(fakeData)
    console.log(realData)
    this.$nextTick(() => {
      document.getElementById('force-box').style.backgroundImage = `url("${THEME_BG[theme]}")`
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
      const svgObj = d3.select('#force-box').append('svg').attr('width', width).attr('height', height)
      const marge = { top: 10, bottom: 10, left: 10, right: 10 }
      const groupObj = svgObj.append('g').attr('transform', 'translate(' + marge.top + ',' + marge.left + ')')

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
      const links = groupObj.append('g')
        .selectAll('line')
        .data(edges)
        .enter()
        .append('line')
        .attr('stroke', function(d, i) {
          return CONFIG['line'][theme].normalColor // 边的颜色
        })
        .attr('stroke-width', CONFIG['line'].lineWidth)

      // 线上文字
      const linksText = groupObj.append('g')
        .selectAll('text')
        .data(edges)
        .enter()
        .append('text')
        .text(d => d.relationshipAbbreviation)
        .attr('fill', CONFIG['line'][theme].textColor)
        .attr('opacity', 0) // 初始化不显示，鼠标移入才显示

      // 建立用来放在每个节点和对应文字的分组<g>
      const singleNodeGroup = groupObj.selectAll('.circleText')
        .data(nodes)
        .enter()
        .append('g')
        .attr('transform', d => {
          const cirX = d.x
          const cirY = d.y
          return `translate(${cirX}, ${cirY})`
        })
        .call(d3.drag()
          .on('start', started)
          .on('drag', dragged)
          .on('end', ended)
        )

      singleNodeGroup.on('mouseenter', onMouseenter)
      singleNodeGroup.on('mouseleave', onMouseleave)
      singleNodeGroup.on('click', onNodeClick)

      // 绘制节点（圆圈），当没有图片的时候使用
      singleNodeGroup.append('circle')
        .attr('r', d => CONFIG[d.type].radius) // 圆圈半径的大小
        .attr('fill', (d, i) => {
          // 节点（圆圈）的颜色
          if (d.type === 'TASK') return CONFIG[d.type][d.taskType][theme].bgColor // 节点圆圈的颜色
          return CONFIG[d.type][theme].bgColor
        })

      // 添加剪切clipPath，用于头像图片的裁剪
      const clipPath = singleNodeGroup.append('clipPath')
        .attr('id', (d, i) => `portrait-${i}`) // 给剪切版添加id

      // 剪切板里面添加圆形图
      clipPath.append('circle')
        .attr('cx', 0).attr('cy', 0)
        .attr('r', d => CONFIG[d.type].radius)

      // 添加图片
      singleNodeGroup.append('image')
        .attr('xlink:href', (d, i) => {
          return d.img || d.icon.img
          // 家里的网络
          // if (d.type === 'DEPART' || d.type === 'TASK') return d.icon.img
          // if (d.type === 'image') return head
        })
        .attr('x', d => {
          if (d.type === 'image') return -CONFIG[d.type].radius - 8
          return -CONFIG[d.type].radius
        })
        .attr('y', d => -CONFIG[d.type].radius)
        .attr('width', d => {
          if (d.type === 'image') return CONFIG[d.type].radius * 2 * 1.4
          return CONFIG[d.type].radius * 2
        })
        .attr('height', d => {
          if (d.type === 'image') return CONFIG[d.type].radius * 2 * 1.4
          return CONFIG[d.type].radius * 2
        })
        .attr('style', (d, i) => `clip-path:url(#portrait-${i})`)

      // 文字
      singleNodeGroup.append('text')
        .attr('text-anchor', 'middle')
        .attr('font-size', d => CONFIG[d.type].fontSize)
        .attr('dy', 5) // y轴位置
        .text(d => CONFIG[d.type].isShowText ? d.name : '')
        .attr('fill', '#666')

      // 缩放
      svgObj.call(d3.zoom()
        .scaleExtent([1 / 6, 8])
        .on('zoom', zoomed))

      function zoomed() {
        groupObj.attr('transform', d3.event.transform)
      }

      function ticked() {
        links.attr('x1', function(d) { return d.source.x })
          .attr('y1', function(d) { return d.source.y })
          .attr('x2', function(d) { return d.target.x })
          .attr('y2', function(d) { return d.target.y })

        linksText.attr('x', function(d) { return (d.source.x + d.target.x) / 2 }) // 连线文字的x
          .attr('y', function(d) { return (d.source.y + d.target.y) / 2 }) // 连线文字的Y

        singleNodeGroup.attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')' }) // 节点的位置
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

      function onMouseenter(d, i) {
        weakenEffect()
        strengthEffect(d, i)
      }

      function onMouseleave(d, i) {
        normalEffect()
      }

      function onNodeClick(d, i) {
        alert(d.id)
      }

      // 弱化效果
      function weakenEffect() {
        // 弱化
        // singleNodeGroup.attr('opacity', (d) => CONFIG[d.type]['opacity'].weakened)
        // links.attr('stroke', CONFIG['line'][theme].weakenColor)
      }

      // 强化
      function strengthEffect(thisD, thisI) {
        const relatedNodeIndex = []
        // 鼠标移入节点
        relatedNodeIndex.push(thisD.index)
        // 线段强化
        links.attr('stroke', (d) => {
          if (d.target.index === thisD.index) {
            relatedNodeIndex.push(d.source.index)
            return CONFIG['line'][theme]['strengtheningColor']
          }
          if (d.source.index === thisD.index) {
            relatedNodeIndex.push(d.target.index)
            return CONFIG['line'][theme]['strengtheningColor']
          }
          return CONFIG['line'][theme]['weakenColor']
        })
        // 节点强化
        singleNodeGroup.attr('opacity', d => {
          return (relatedNodeIndex.includes(d.index)) ? CONFIG[d.type]['opacity'].normal : 0.1
        })
        // 文字
        linksText.attr('opacity', d => {
          return (relatedNodeIndex.includes(d.source.index) && relatedNodeIndex.includes(d.target.index)) ? 1 : 0
        })
      }

      // 恢复正常效果
      function normalEffect() {
        singleNodeGroup.attr('opacity', (d) => CONFIG[d.type]['opacity'].normal)
        links.attr('stroke', CONFIG['line'][theme].normalColor) // 恢复
        linksText.attr('opacity', 0) // 恢复
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
