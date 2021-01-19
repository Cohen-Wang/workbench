import * as d3 from 'd3'

// +-------------------------------------------------------------------------------------------
// + 力导图之【柔性管理】对象
// +-------------------------------------------------------------------------------------------
export default {
  // +-------------------------------------------------------------------------------------------
  // + 属性
  // +-------------------------------------------------------------------------------------------
  id: '',
  nodes: null, // 节点
  edges: null, // 线
  config: null, // 配置
  container: null, // DOM容器
  width: 0,
  height: 0,
  marge: { top: 10, bottom: 10, left: 10, right: 10 },
  // 实例
  svgObj: null, // svg实例
  groupObj: null, // 所有元素总和
  forceSimulation: null, // 力导图实例
  links: null, // 连线
  linksText: null, // 连线的文字
  singleNodeGroup: null, // 节点组
  nodeTest: null, // 节点上的字
  nodeCircle: null, // 节点上的圆

  // +-------------------------------------------------------------------------------------------
  // + 方法
  // +-------------------------------------------------------------------------------------------

  // 初始化
  init(options) {
    Object.assign(this, options)
    //
    const oContainer = document.getElementById(this.id)
    this.width = oContainer.offsetWidth
    this.height = oContainer.offsetHeight
    // 向容器添加svg元素，并设置宽高
    this.svgObj = d3.select(`#${this.id}`).append('svg').attr('width', this.width).attr('height', this.height)
  },

  // 画图
  render() {
    console.log('render')
    // 向SVG元素，添加一个g元素（用于）
    this.groupObj = this.svgObj.append('g').attr('transform', 'translate(' + this.marge.top + ',' + this.marge.left + ')')
    // 设置一个color的颜色比例尺，为了让不同的扇形呈现不同的颜色
    // const colorScale = d3.scaleOrdinal().domain(d3.range(this.nodes.length)).range(d3.schemeCategory10)
    // 初始化力导图实例
    this.forceSimulation = d3.forceSimulation()
      .force('link', d3.forceLink()) // 让相互有链接的点，有一定的距离
      .force('charge', d3.forceManyBody()) // 粒子两两之间的力，正数引力，负数斥力
      .force('center', d3.forceCenter()) // 所有粒子，向中心的力
    // 生成节点数据
    this.forceSimulation.nodes(this.nodes).on('tick', this.ticked.bind(this)) // 这个函数很重要，后面给出具体实现和说明
    // 生成边数据
    this.forceSimulation.force('link').links(this.edges)
      .distance(d => {
        // console.log('d', d)
        // return this.config[d.source.type].distance
        // 人员 -> 部门
        if (d.source.type === 'image' && d.target.type === 'DEPART') return 100
        // 部门 -> 人员
        if (d.source.type === 'DEPART' && d.target.type === 'image') return 150
        // 任务->人员， 人员->任务
        if (d.source.type === 'TASK' && d.target.type === 'image' || d.source.type === 'image' && d.target.type === 'TASK') return 400
        // 任务 -> 部门, 部门 -> 任务
        if ((d.source.type === 'TASK' && d.target.type === 'DEPART') || (d.source.type === 'DEPART' && d.target.type === 'TASK')) return 3500
        return 500
      }) // 每一边的长度)
    // .strength(-3) // 斥力大小
    // 设置图形的中心位置
    this.forceSimulation.force('center').x(this.width / 2).y(this.height / 2)
    // 绘制边
    this.links = this.groupObj.append('g')
      .selectAll('line')
      .data(this.edges)
      .enter()
      .append('line')
      .attr('stroke-width', this.config['line'].lineWidth)
      .attr('stroke', this.config['line'].normalColor) // 边的颜色
    // 线上文字
    this.linksText = this.groupObj.append('g')
      .selectAll('text')
      .data(this.edges)
      .enter()
      .append('text')
      .text(d => d.relationshipAbbreviation)
      .attr('fill', this.config['line'].text.color)
      .attr('opacity', 0) // 初始化不显示，鼠标移入才显示
    // 建立用来放在每个节点和对应文字的分组<g>
    this.singleNodeGroup = this.groupObj.selectAll('.circleText')
      .data(this.nodes)
      .enter()
      .append('g')
      .attr('transform', d => `translate(${d.x}, ${d.y})`)
      .call(d3.drag()
        .on('start', this.started.bind(this))
        .on('drag', this.dragged.bind(this))
        .on('end', this.ended.bind(this))
      )
    this.singleNodeGroup.on('mouseenter', this.onMouseenter.bind(this))
    this.singleNodeGroup.on('mouseleave', this.onMouseleave.bind(this))
    this.singleNodeGroup.on('click', this.onNodeClick.bind(this))
    // 绘制节点（圆圈），当没有图片的时候使用
    this.nodeCircle = this.singleNodeGroup.append('circle')
      .attr('r', d => this.config[d.type].radius) // 圆圈半径的大小
      .attr('fill', d => {
        // 节点（圆圈）的颜色
        if (d.type === 'TASK') return this.config[d.type][d.taskType].bgColor // 节点圆圈的颜色
        return this.config[d.type].bgColor
      })
    // 添加剪切clipPath，用于头像图片的裁剪
    this.singleNodeGroup.append('clipPath')
      .attr('id', (d, i) => `portrait-${i}`) // 给剪切版添加id
      .append('circle') // 剪切板里面添加圆形图
      .attr('cx', 0).attr('cy', 0)
      .attr('r', d => this.config[d.type].radius)
    // 绘制图片及其属性
    this.singleNodeGroup.append('image')
      .attr('xlink:href', d => {
        if (d.type === 'DEPART') return d.icon.img
        if (d.type === 'TASK') return d.icon.img
        if (d.type === 'image') return 'https://wx1.sinaimg.cn/large/006AAcdyly1ghkkr4ll4gj30r50r4wgq.jpg'
      })
      .attr('x', d => (d.type === 'image') ? -this.config[d.type].radius - 8 : -this.config[d.type].radius)
      .attr('y', d => -this.config[d.type].radius)
      .attr('width', d => (d.type === 'image') ? this.config[d.type].radius * 2 * 1.4 : this.config[d.type].radius * 2)
      .attr('height', d => (d.type === 'image') ? this.config[d.type].radius * 2 * 1.4 : this.config[d.type].radius * 2)
      .attr('style', (d, i) => `clip-path:url(#portrait-${i})`)
    // 绘制文字及其属性
    this.nodeTest = this.singleNodeGroup.append('text')
      .text(d => this.config[d.type].isShowText ? d.name : '')
      .attr('text-anchor', 'middle')
      .attr('font-size', d => this.config[d.type].text.size)
      .attr('dy', d => this.config[d.type].text.y) // y轴位置
      .attr('fill', d => this.config[d.type].text.color)
    // 缩放
    this.svgObj.call(d3.zoom().scaleExtent([1 / 6, 8]).on('zoom', this.zoomed.bind(this)))
  },

  /**
   * 设置节点
   * @param nodes
   */
  setNodes(nodes) {
    this.nodes = nodes
  },

  /**
   * 设置连线
   * @param edges
   */
  setEdges(edges) {
    this.edges = edges
  },

  /**
   * 设置配置
   * @param config
   */
  setConfig(config) {
    this.config = config
  },

  /**
   * 清空svg
   */
  clear() {
    this.svgObj.selectAll('svg > *').remove() // 移除svg内部节点
  },

  /**
   * 重置属性
   */
  reset() {
    // 边的颜色
    this.links.attr('stroke', this.config['line'].normalColor)
    // 线上文字
    this.linksText.attr('fill', this.config['line'].text.color)
    // 节点上的圆
    this.nodeCircle.attr('fill', d => (d.type === 'TASK') ? this.config[d.type][d.taskType].bgColor : this.config[d.type].bgColor)
    // 文字及其属性
    this.nodeTest.attr('fill', d => this.config[d.type].text.color)
  },

  /**
   * 缩放
   */
  zoomed() {
    this.groupObj.attr('transform', d3.event.transform)
  },

  /**
   * 没懂
   */
  ticked() {
    // 连线的起始点坐标
    this.links.attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y)
    // 连线文字坐标
    this.linksText.attr('x', d => (d.source.x + d.target.x) / 2) // x坐标
      .attr('y', d => (d.source.y + d.target.y) / 2) // y坐标
    // 节点组（circle，剪切板，图片，文字）的坐标
    this.singleNodeGroup.attr('transform', d => `translate(${d.x}, ${d.y})`)
  },

  /**
   * 强化
   * @param thisD
   * @param thisI
   */
  strengthEffect(thisD, thisI) {
    const relatedNodeIndex = []
    // 鼠标移入节点
    relatedNodeIndex.push(thisD.index)
    // 线段强化
    this.links.attr('stroke', (d) => {
      if (d.target.index === thisD.index) {
        relatedNodeIndex.push(d.source.index)
        return this.config['line'].strengtheningColor
      }
      if (d.source.index === thisD.index) {
        relatedNodeIndex.push(d.target.index)
        return this.config['line'].strengtheningColor
      }
      return this.config['line'].weakenColor
    })
    // 节点强化
    this.singleNodeGroup.attr('opacity', d => {
      return (relatedNodeIndex.includes(d.index)) ? this.config[d.type]['opacity'].normal : 0.1
    })
    // 文字
    this.linksText.attr('opacity', d => {
      return (relatedNodeIndex.includes(d.source.index) && relatedNodeIndex.includes(d.target.index)) ? 1 : 0
    })
  },

  /**
   * 恢复正常效果
   */
  normalEffect() {
    this.singleNodeGroup.attr('opacity', d => this.config[d.type]['opacity'].normal)
    this.links.attr('stroke', this.config['line'].normalColor) // 恢复
    this.linksText.attr('opacity', 0) // 恢复
  },

  // drag
  started(d) {
    if (!d3.event.active) {
      this.forceSimulation.alphaTarget(0.8).restart() // 设置衰减系数，对节点位置移动过程的模拟，数值越高移动越快，数值范围[0，1]
    }
    d.fx = d.x
    d.fy = d.y
  },

  dragged(d) {
    d.fx = d3.event.x
    d.fy = d3.event.y
  },

  ended(d) {
    if (!d3.event.active) {
      this.forceSimulation.alphaTarget(0)
    }
    d.fx = null
    d.fy = null
  },

  onMouseenter(d, i) {
    this.strengthEffect(d, i)
  },

  onMouseleave(d, i) {
    this.normalEffect()
  },

  onNodeClick(d, i) {
    alert(d.id)
  }
}
