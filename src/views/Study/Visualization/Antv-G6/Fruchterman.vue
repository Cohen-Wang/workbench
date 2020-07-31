<template>
  <div class="container">
    <div class="canvas" ref="canvas"></div>
  </div>
</template>

<script>
import G6 from '@antv/g6'
import data from './data'

export default {
  name: 'Fruchterman',
  data() {
    return {
      data: data,
      // 配置
      defaultConf: {
        nodeStateStyles: {
          highlightNode: {
            opacity: 1,
            'text-shape': {
              // https://www.yuque.com/mo-college/weekly/ypovn2
              opacity: 1
            }
          },
          weakenNode: {
            opacity: 0.2,
            'text-shape': {
              // https://www.yuque.com/mo-college/weekly/ypovn2
              opacity: 0.2
            }
          }
        },
        edgeStateStyles: {
          highlightEdgeDark: {
            stroke: '#ffffff'
          },
          weakenEdgeDark: {
            stroke: '#071631'
            // stroke: 'red'
          },
          weakenEdgeLight: {
            stroke: '#f5f5f5'
          }
        },
        defaultNode: {
          color: '#5B8FF9',
          style: {
            // lineWidth: 2,
            // fill: '#C6E5FF'
          },
          labelCfg: {
            style: {
              fill: 'white'
            }
          }
        },
        defaultEdge: {
          type: 'quadratic',
          style: {
            stroke: '#fa0f1b',
            lineWidth: 1,
            lineAppendWidth: 2,
            endArrow: {
              // path: constants.G6ArrowPath,
              fill: '#e2e2e2'
            }
          },
          labelCfg: {
            autoRotate: true,
            style: {
              fill: 'white'
            }
          }
        }
      }
    }
  },
  created() {},
  mounted() {
    this.initDiscovery()
  },
  methods: {
    async initDiscovery() {
      const edgeColor =
        this.theme === 'light' || this.theme === 'blue' ? '#e2e2e2' : '#324E6B'
      const edgeLabelColor =
        this.theme === 'light' || this.theme === 'blue' ? '#01172E' : '#F5F5F5'
      //
      this.defaultConf.defaultEdge.style.stroke = edgeColor
      this.defaultConf.defaultEdge.style.endArrow.fill = edgeColor
      this.defaultConf.defaultEdge.labelCfg.style.fill = edgeLabelColor
      this.defaultConf.defaultNode.labelCfg.style.fill = edgeLabelColor
      console.log(this.data)
      // const nodes = this.optimizeNodes(this.data.nodes)
      // const edges = this.optimizeEdges(this.data.edges)
      // const simplifyEdges = this.optimizeEdges(this.data.simplifyEdges)
      const nodes = this.data.nodes
      const edges = this.data.edges
      const simplifyEdges = this.data.simplifyEdges
      // 拼接成作图的数据
      this.graphData = {
        nodes,
        edges,
        simplifyEdges
      }
      // 主业务
      this.createChart1({ nodes, edges: simplifyEdges }).then(graph => {
        setTimeout(() => {}, 1000)
        setTimeout(() => {}, 3000)
        setTimeout(() => {
          this.graphReady = true
          graph.fitView(20)
        }, 4000)
        setTimeout(() => {
          // graph.updateLayout({
          //   gravity: 1
          // })
        }, 5000)
      })
    },
    // 优化【节点】
    optimizeNodes(nodes) {
      return nodes.map(node => {
        node.size = 70
        node.style = node.style || {}
        // 人员
        if (node.type === 'USER') {
          node.type = 'image'
          node.size = 40
          if (!node.initScore) node.size = 40
          if (node.initScore > 0 && node.initScore < 200) node.size = 60
          if (node.initScore >= 200) node.size = 80
          // node.img = `${this.imageHost}${node.headPortrait}?imgType=compressionSmall`
          node.img = './1.jpg'
          node.label = node.name
          node.clipCfg = {
            show: true,
            type: 'circle',
            r: node.size / 2,
            style: {
              stroke: '#eaff8f',
              shadowColor: '#000',
              shadowBlur: 10,
              lineWidth: 2
            }
          }
        }
        // 任务
        if (node.type === 'TASK') {
          node.size = 24
          if (!node.okrScore || node.okrScore <= 8) node.size = 24
          if (node.okrScore > 8 && node.okrScore <= 12) node.size = 32
          if (node.okrScore > 12 && node.okrScore <= 17) node.size = 40
          if (node.okrScore > 17) node.size = 48

          node.style.fill = '#dbdbdb'
          // let taskIcon = taskIconGrey
          if (node.taskType === '挑战任务') {
            node.style.fill = '#FFF2B2'
            // taskIcon = taskIconYellow
          }
          if (node.taskType === '专项任务') {
            node.style.fill = '#B7E8CD'
            // taskIcon = taskIconGreen
          }
          if (node.taskType === '部门任务') {
            node.style.fill = '#F1C1C7'
            // taskIcon = taskIconRed
          }
          node.icon = {
            show: true,
            width: node.size - 10,
            height: node.size - 10
            // img: taskIcon
          }
          node.style.lineWidth = 0
        }
        // 部门
        if (node.type === 'DEPART') {
          node.size = 60
          node.style.fill = '#29A8FF'
          node.style.lineWidth = 0
          node.label = node.abbreviation || node.name
        }
        return node
      })
    },
    // 优化【边线】
    optimizeEdges(edges) {
      const multiSameDirectionEdges = edges.reduce((result, each, index) => {
        const key = each.source + each.target
        result[key] ? result[key].push(index) : (result[key] = [index])
        return result
      }, {})
      console.log('multiSameDirectionEdges:', multiSameDirectionEdges)
      return edges.map((edge, index) => {
        edge.id = 'edge|' + index
        // edge.label = edge.relationshipAbbreviation
        const key = edge.source + edge.target
        const sameEdgeCounts = multiSameDirectionEdges[key].length
        edge.curveOffset = -30
        if (sameEdgeCounts > 1) {
          const theIndex = multiSameDirectionEdges[key].findIndex(
            e => e === index
          )
          edge.curveOffset = 40 * theIndex + 30
        }
        edge.style =
          edge.style ||
          JSON.parse(JSON.stringify(this.defaultConf.defaultEdge.style))
        edge.style.startArrow = edge.twoWay
          ? this.defaultConf.defaultEdge.style.endArrow
          : false
        return edge
      })
    },
    // 画图
    createChart1(data) {
      return new Promise(resolve => {
        // if (this.graph[this.graphType].graph) return
        // 初始化
        const ref = this.$refs['canvas']
        console.log(ref.clientWidth)
        const graph = new G6.Graph({
          container: ref,
          width: ref.clientWidth,
          height: ref.clientHeight,
          modes: {
            default: ['drag-canvas', 'drag-node', 'zoom-canvas']
          },
          layout: {
            // workerEnabled: true,
            type: 'fruchterman',
            gravity: 0.5,
            speed: 5
            // linkDistance: 100,
            // preventOverlap: true,
            // type: 'force'
          },
          animate: true, // Boolean，切换布局时是否使用动画过度，默认为 false
          animateCfg: {
            duration: 1000 // Number，一次动画的时长
          },
          ...this.defaultConf
        })

        // 设置数据
        graph.data(this.data)
        // 设置事件
        // graph.on('node:mouseenter', evt => {
        //     this.onMouseenterNode(graph, evt)
        // })
        // graph.on('node:mouseleave', evt => {
        //     this.clearAllStats(graph, evt)
        // })
        // graph.on('canvas:click', evt => {
        //     this.clearAllStats(graph, evt)
        // })
        // graph.on('node:click', (e) => {
        //     // 防抖操作,防止双击事件触发单击
        //     clearTimeout(this.clickTimer)
        //     graph.focusItem(e.item)
        //     this.clickTimer = setTimeout(() => {
        //         const model = e.item.getModel()
        //         if (model.type === 'image') {
        //             this.$refs['discoveryPersonDialog'].show(e.item)
        //         }
        //         if (model.type === 'TASK') {
        //             this.$refs['discoveryTaskDialog'].show(e.item)
        //         }
        //         if (model.type === 'DEPART') {
        //             this.$refs['discoveryDepartDialog'].show(e.item)
        //         }
        //     }, 200)
        // })

        // 渲染
        graph.render()
        // graph.changeData(data || {})
        // this.graph[this.graphType].graph = graph
        resolve(graph)
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .container {
    width: 100%;
    height: calc(100vh - 130px);
    background-color: #ffffff;

    .canvas {
      height: 100%;
      background: url("./../../../../assets/image/discovery_bg_blue.png");
    }
  }
</style>
