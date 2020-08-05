import * as d3 from 'd3'

export default {
  // +-------------------------------------------------------------------------------------------
  // + 属性
  // +-------------------------------------------------------------------------------------------
  width: 300,
  height: 300,
  nodes: null, // 节点
  edges: null, // 线
  config: null, // 配置
  container: null, // DOM容器

  // +-------------------------------------------------------------------------------------------
  // + 方法
  // +-------------------------------------------------------------------------------------------
  setNodes(nodes) {
    this.nodes = nodes
  },
  setEdges(edges) {
    this.edges = edges
  },
  setConfig(config) {
    this.config = config
  },
  setContainer(container) {
    this.container = container
    this.width = this.container.offsetWidth
    this.height = this.container.offsetHeight
  },
  // 初始化
  init(options) {},
  // 画图
  render() {
    // 创建svg 对象
    const svgObj = d3.select('#container').append('svg').attr('width', this.width).attr('height', this.height)
    const marge = { top: 10, bottom: 10, left: 10, right: 10 }
    const groupObj = svgObj.append('g').attr('transform', 'translate(' + marge.top + ',' + marge.left + ')')

    // 设置一个color的颜色比例尺，为了让不同的扇形呈现不同的颜色
    // const colorScale = d3.scaleOrdinal().domain(d3.range(this.nodes.length)).range(d3.schemeCategory10)

    // 初始化力导图实例
    const forceSimulation = d3.forceSimulation()
      .force('link', d3.forceLink()) // 让相互有链接的点，有一定的距离
      .force('charge', d3.forceManyBody()) // 粒子两两之间的力，正数引力，负数斥力
      .force('center', d3.forceCenter()) // 所有粒子，向中心的力

    // 生成节点数据
    forceSimulation.nodes(this.nodes).on('tick', ticked) // 这个函数很重要，后面给出具体实现和说明

    // 生成边数据
    forceSimulation.force('link').links(this.edges)
      .distance(d => this.config[d.source.type].distance) // 每一边的长度)
    // .strength(-3) // 斥力大小

    // 设置图形的中心位置
    forceSimulation.force('center').x(this.width / 2).y(this.height / 2)

    // 绘制边
    const links = groupObj.append('g')
      .selectAll('line')
      .data(this.edges)
      .enter()
      .append('line')
      .attr('stroke', this.config['line'].normalColor) // 边的颜色
      .attr('stroke-width', this.config['line'].lineWidth)

    // 线上文字
    const linksText = groupObj.append('g')
      .selectAll('text')
      .data(this.edges)
      .enter()
      .append('text')
      .text(d => d.relationshipAbbreviation)
      .attr('fill', this.config['line'].text.color)
      .attr('opacity', 0) // 初始化不显示，鼠标移入才显示

    // 建立用来放在每个节点和对应文字的分组<g>
    const singleNodeGroup = groupObj.selectAll('.circleText')
      .data(this.nodes)
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
      .attr('r', d => this.config[d.type].radius) // 圆圈半径的大小
      .attr('fill', (d, i) => {
        // 节点（圆圈）的颜色
        if (d.type === 'TASK') return this.config[d.type][d.taskType].bgColor // 节点圆圈的颜色
        return this.config[d.type].bgColor
      })

    // 添加剪切clipPath，用于头像图片的裁剪
    const clipPath = singleNodeGroup.append('clipPath')
      .attr('id', (d, i) => `portrait-${i}`) // 给剪切版添加id

    // 剪切板里面添加圆形图
    clipPath.append('circle')
      .attr('cx', 0).attr('cy', 0)
      .attr('r', d => this.config[d.type].radius)

    // 添加图片及其属性
    singleNodeGroup.append('image')
      .attr('xlink:href', (d, i) => {
        return d.img || d.icon.img
      })
      .attr('x', d => {
        if (d.type === 'image') return -this.config[d.type].radius - 8
        return -this.config[d.type].radius
      })
      .attr('y', d => -this.config[d.type].radius)
      .attr('width', d => {
        if (d.type === 'image') return this.config[d.type].radius * 2 * 1.4
        return this.config[d.type].radius * 2
      })
      .attr('height', d => {
        if (d.type === 'image') return this.config[d.type].radius * 2 * 1.4
        return this.config[d.type].radius * 2
      })
      .attr('style', (d, i) => `clip-path:url(#portrait-${i})`)

    // 文字及其属性
    singleNodeGroup.append('text')
      .text(d => this.config[d.type].isShowText ? d.name : '')
      .attr('text-anchor', 'middle')
      .attr('font-size', d => this.config[d.type].text.size)
      .attr('dy', d => this.config[d.type].text.y) // y轴位置
      .attr('fill', d => this.config[d.type].text.color)

    // 缩放
    svgObj.call(d3.zoom()
      .scaleExtent([1 / 6, 8])
      .on('zoom', zoomed))

    const _this = this

    function zoomed() {
      groupObj.attr('transform', d3.event.transform)
    }

    function ticked() {
      // 连线的起始点坐标
      links.attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y)
      // 连线文字坐标
      linksText.attr('x', (d) => (d.source.x + d.target.x) / 2) // x坐标
        .attr('y', (d) => (d.source.y + d.target.y) / 2) // y坐标
      // 节点组（circle，剪切板，图片，文字）的坐标
      singleNodeGroup.attr('transform', (d) => `translate(${d.x}, ${d.y})`)
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
      // singleNodeGroup.attr('opacity', (d) => this.config[d.type]['opacity'].weakened)
      // links.attr('stroke', this.config['line'].weakenColor)
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
          return _this.config['line'].strengtheningColor
        }
        if (d.source.index === thisD.index) {
          relatedNodeIndex.push(d.target.index)
          return _this.config['line'].strengtheningColor
        }
        return _this.config['line'].weakenColor
      })
      // 节点强化
      singleNodeGroup.attr('opacity', d => {
        return (relatedNodeIndex.includes(d.index)) ? _this.config[d.type]['opacity'].normal : 0.1
      })
      // 文字
      linksText.attr('opacity', d => {
        return (relatedNodeIndex.includes(d.source.index) && relatedNodeIndex.includes(d.target.index)) ? 1 : 0
      })
    }

    // 恢复正常效果
    function normalEffect() {
      singleNodeGroup.attr('opacity', (d) => _this.config[d.type]['opacity'].normal)
      links.attr('stroke', _this.config['line'].normalColor) // 恢复
      linksText.attr('opacity', 0) // 恢复
    }
  }
}
