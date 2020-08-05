<template>
  <div class="discovery-wrapper">
    <div v-show="indexVisible" style="width: inherit; height: inherit">
      <div class="transition-btn fs-18" @click="isTransition=!isTransition"><i :class="isTransition?'el-icon-s-unfold':'el-icon-s-fold'"/>
      </div>
      <transition name="el-fade-in-linear">
        <div v-show="isTransition" class="c-header">
          <div class="" style="float: left">
            <el-radio-group v-model="graphType" size="large" @change="onRadioGroupChange">
              <el-radio-button label="关系探索"/>
              <el-radio-button label="对象探索"/>
              <el-radio-button label="相对关系"/>
            </el-radio-group>
          </div>
          <div class="" style="float: right;height: 100%">
            <div class="d-flex text-right flex-center" style="height: 100%">
              <div class="fs-14" style="margin-left: 80px">对象:</div>
              <el-checkbox-group v-show="graphType==='关系探索'"
                                 v-model="graph['关系探索'].nodeTypeFilter"
                                 class="text-right ml-12p"
                                 @change="onNodeTypeFilterChange">
                <!--<el-checkbox label="image"><span class="fs-22" style="color:#FF095C">●</span>人员</el-checkbox>-->
                <!--<el-checkbox label="DEPART"><span class="fs-22" style="color:#29A8FF">●</span>部门</el-checkbox>-->
                <!--<el-checkbox label="TASK"><span class="fs-22" style="color:#FFD300">●</span>任务</el-checkbox> -->
                <el-checkbox label="image">人员</el-checkbox>
                <el-checkbox label="DEPART">部门</el-checkbox>
                <el-checkbox label="TASK">任务</el-checkbox>
              </el-checkbox-group>
              <el-checkbox-group v-show="graphType==='对象探索'"
                                 v-model="graph['对象探索'].nodeTypeFilter"
                                 class="text-right ml-12p"
                                 @change="onNodeTypeFilterChange">
                <el-checkbox label="image">人员</el-checkbox>
                <el-checkbox label="DEPART">部门</el-checkbox>
                <el-checkbox label="TASK">任务</el-checkbox>
              </el-checkbox-group>
              <el-checkbox-group v-show="graphType==='相对关系'"
                                 v-model="graph['相对关系'].nodeTypeFilter"
                                 class="text-right ml-12p"
                                 @change="onNodeTypeFilterChange">
                <el-checkbox label="image">人员</el-checkbox>
                <el-checkbox label="DEPART">部门</el-checkbox>
                <el-checkbox label="TASK">任务</el-checkbox>
              </el-checkbox-group>
              <div class="fs-14" style="margin-left: 80px">样式:</div>
              <el-tooltip v-for="(value, key, index) of tooltipObj"
                          :key="index"
                          effect="dark"
                          :content="value"
                          placement="top-start">
                <i class="fs-20 iconfont ml-12p cursor-point"
                   :class="'icon-'+key"
                   :style="{color:graph[graphType].tool[key]?'#29A8FF':'#BFBFBF'}"
                   @click="onStyleFilterChange(key)"/>
              </el-tooltip>
              <div class="fs-14" style="margin-left: 80px">任务类型:</div>
              <span class="fs-16 ml-18p  mr-6p" style="color:#FFD300">●</span><span class="fs-14">挑战任务</span>
              <span class="fs-16 ml-18p mr-6p" style="color:#4AC583">●</span><span class="fs-14">专项任务</span>
              <span class="fs-16 ml-18p mr-6p" style="color:#FF456E">●</span><span class="fs-14 mr-18p">部门任务</span>
              <!--<el-checkbox-group v-show="graphType==='关系探索'"-->
              <!--v-model="graph['关系探索'].nodeTypeFilter"-->
              <!--class="text-right ml-12p"-->
              <!--@change="onNodeTypeFilterChange">-->
              <!--<el-checkbox label="image"><span class="fs-22" style="color:#FF095C">●</span>人员</el-checkbox>-->
              <!--<el-checkbox label="DEPART"><span class="fs-22" style="color:#29A8FF">●</span>部门</el-checkbox>-->
              <!--<el-checkbox label="TASK"><span class="fs-22" style="color:#FFD300">●</span>任务</el-checkbox> -->
              <!--<el-checkbox label="image">人员</el-checkbox>-->
              <!--<el-checkbox label="DEPART">部门</el-checkbox>-->
              <!--<el-checkbox label="TASK">任务</el-checkbox>-->
              <!--</el-checkbox-group>-->
              <!--          #BFBFBF-->
              <!--          <i class="fs-20 iconfont icon-wenzi ml-12p cursor-point" style="color:#29A8FF"/>-->
              <!--          <i class="fs-20 iconfont  ml-12p cursor-point" style="color:#29A8FF"/>-->
              <!--          <i class="fs-20 iconfont icon-trun ml-12p cursor-point" style="color:#29A8FF"/>-->
              <!--          <i class="fs-20 iconfont icon-yinying ml-12p cursor-point" style="color:#29A8FF"/>-->
            </div>
          </div>
        </div>
      </transition>

      <div v-if="graphCreationTime" class="publish-time fw-400" style="color:#666666">发布于: {{ graphCreationTime }}</div>

      <div v-show="0" ref="临时图" class="container"/>
      <div v-show="graphType==='关系探索'" ref="关系探索" class="container" :class="{'move-out':!graphReady}"/>
      <div v-show="graphType==='对象探索'" ref="对象探索" class="container"/>
      <div v-show="graphType==='对象探索' && isTransition" class="obj-selector p-4p">
        <el-select v-model="graph['对象探索'].searchValue" filterable placeholder="请选择对象">
          <el-option v-for="(item) in graphData.nodes" :key="item.id" :label="item.name" :value="item.id">
            <span class="ellipsis" style="float: left; max-width: 200px;">{{ item.name }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">
              <span v-if="item.type==='USER' || item.type==='image'">人员</span>
              <span v-if="item.type==='DEPART'">部门</span>
              <span v-if="item.type==='TASK'">任务</span>
            </span>
          </el-option>
        </el-select>
        <el-button type="primary" icon="el-icon-search" @click="onSearchGraph2">搜索</el-button>
      </div>

      <div v-show="graphType==='相对关系' " ref="相对关系" class="container"/>
      <div v-show="graphType==='相对关系' && isTransition" class="obj-selector p-17p">
        <el-form label-width="50px">
          <el-form-item label="对象1" style="margin-bottom: 5px">
            <el-select v-model="graph['相对关系'].searchValue1" filterable clearable placeholder="请选择对象1">
              <el-option v-for="(item) in graphData.nodes" :key="item.id" :label="item.name" :value="item.id">
                <span class="ellipsis" style="float: left; max-width: 200px;">{{ item.name }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">
                  <span v-if="item.type==='USER' || item.type==='image'">人员</span>
                  <span v-if="item.type==='DEPART'">部门</span>
                  <span v-if="item.type==='TASK'">任务</span>
                </span>
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="对象2" style="margin-bottom: 5px">
            <el-select v-model="graph['相对关系'].searchValue2" filterable clearable placeholder="请选择对象2">
              <el-option v-for="(item) in graphData.nodes" :key="item.id" :label="item.name" :value="item.id">
                <span class="ellipsis" style="float: left; max-width: 200px;">{{ item.name }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">
                  <span v-if="item.type==='USER' || item.type==='image'">人员</span>
                  <span v-if="item.type==='DEPART'">部门</span>
                  <span v-if="item.type==='TASK'">任务</span>
                </span>
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item style="margin-bottom: 0">
            <el-button type="primary" size="small" icon="el-icon-search" style="width: 100%" @click="onSearchGraph3">搜索</el-button>
          </el-form-item>
        </el-form>
      </div>

      <!--    对话框-->
      <discovery-person-dialog ref="discoveryPersonDialog" @gotoDetail="gotoDiscoveryPersonDetail"/>
      <discovery-task-dialog ref="discoveryTaskDialog" @gotoDetail="gotoDiscoveryTaskDetail"/>
      <discovery-depart-dialog ref="discoveryDepartDialog" @gotoDetail="gotoDiscoveryDepartDetail"/>
    </div>
    <!--  详情  -->
    <discovery-person-detail v-show="discoveryPersonVisible" ref="discoveryPersonDetail" @gotoBack="closeDetail"/>
    <discovery-depart-detail v-show="discoveryDepartVisible" ref="discoveryDepartDetail" @gotoBack="closeDetail"/>
    <discovery-task-detail v-show="discoveryTaskVisible"
                           ref="discoveryTaskDetail"
                           style="height: calc(100vh - 66px);width: calc(100% - 20px);margin:0 auto;padding-top: 10px"
                           @goBack="closeDetail"/>
  </div>
</template>

<script>
import DiscoveryPersonDetail from './comp/empProfile'
import DiscoveryDepartDetail from './comp/departmentPortrait'
import DiscoveryTaskDetail from '../task/task-form'
import G6 from '@antv/g6'
import DiscoveryPersonDialog from './comp/person-dialog'
import DiscoveryTaskDialog from './comp/task-dialog'
import DiscoveryDepartDialog from './comp/depart-dialog'
import { mapState } from 'vuex'
import apiServices from '../../services/api'
import constants from '../../utils/constants'
import { debounce, uniq, intersection, intersectionBy } from 'lodash'
import moment from 'moment'
import taskIconGrey from '../../assets/iconfont/task_icon_grey.svg'
import taskIconGreen from '../../assets/iconfont/task_icon_green.svg'
import taskIconRed from '../../assets/iconfont/task_icon_red.svg'
import taskIconYellow from '../../assets/iconfont/task_icon_yellow.svg'
import taskIconGreenL from '../../assets/iconfont/task_icon_green_light.svg'
import taskIconRedL from '../../assets/iconfont/task_icon_red_light.svg'
import taskIconYellowL from '../../assets/iconfont/task_icon_yellow_light.svg'
import taskIconGreenD from '../../assets/iconfont/task_icon_green_dark.svg'
import taskIconRedD from '../../assets/iconfont/task_icon_red_dark.svg'
import taskIconYellowD from '../../assets/iconfont/task_icon_yellow_dark.svg'
// 部门三图标
import departIconHighlight from '../../assets/iconfont/depart_highlight.svg'
import departIconWeakenLight from '../../assets/iconfont/depart_weaken_light.svg'
import departIconWeakenDark from '../../assets/iconfont/depart_weaken_dark.svg'

// 主题配置（为了美术修改颜色时，不再去逻辑里面找）
const THEME_CONFIG = {
  dark: {
    TASK: {
      '挑战任务': '#736313',
      '专项任务': '#224839',
      '部门任务': '#4C2830'
    }
  },
  light: {
    TASK: {
      '挑战任务': '#FFF2B2',
      '专项任务': '#B7E8CD',
      '部门任务': '#F1C1C7'
    }
  },
  blue: {
    TASK: {
      '挑战任务': '#FFF2B2',
      '专项任务': '#B7E8CD',
      '部门任务': '#F1C1C7'
    }
  }
}

export default {
  name: 'DiscoveryIndex',
  components: {
    DiscoveryPersonDialog,
    DiscoveryTaskDialog,
    DiscoveryDepartDialog,
    DiscoveryPersonDetail,
    DiscoveryDepartDetail,
    DiscoveryTaskDetail
  },
  data() {
    return {
      isTransition: false,
      discoveryPersonVisible: false,
      discoveryDepartVisible: false,
      discoveryTaskVisible: false,
      indexVisible: true,
      graphType: '关系探索',
      // eslint-disable-next-line no-undef
      imageHost: apiServices.imageHost,
      tooltipObj: {
        lianxian: '关系', trun: '关系方向'
        // lianxian: '关系', wenzi: '关系说明', trun: '关系方向'
        // , yuanquan: '对象边框', yinying: '对象阴影'
      },
      clickTimer: null,
      graphReady: false,
      graphCreationTime: '',
      graphData: { nodes: [], edges: [] },
      graph: {
        '临时图': {
          graph: null
        },
        '关系探索': {
          creationTime: null,
          graph: null,
          tool: { lianxian: true, wenzi: false, trun: true, yuanquan: false, yinying: false },
          nodeTypeFilter: ['image', 'DEPART', 'TASK']
        },
        '对象探索': {
          searchValue: '',
          creationTime: null,
          graph: null,
          tool: { lianxian: true, wenzi: false, trun: true, yuanquan: false, yinying: false },
          nodeTypeFilter: ['image', 'DEPART', 'TASK']
        },
        '相对关系': {
          creationTime: null,
          graph: null,
          tool: { lianxian: true, wenzi: false, trun: true, yuanquan: false, yinying: false },
          nodeTypeFilter: ['image', 'DEPART', 'TASK']
        }
      },
      curColors: {
        edge: '',
        edgeLabel: '',
        nodeLabel: '',
        arrow: {}
      },
      // 默认配置
      defaultConf: {
        nodeStateStyles: {
          highlightNode: { // 鼠标移入节点后，相关节点的的状态
            opacity: 1,
            'text-shape': { // https://www.yuque.com/mo-college/weekly/ypovn2
              opacity: 1
            }
          },
          weakenNode: {
            opacity: 0.1,
            'text-shape': { // https://www.yuque.com/mo-college/weekly/ypovn2
              opacity: 0.1
            }
          }
        },
        edgeStateStyles: {
          highlightEdgeDark: { // 鼠标移入节点后，相关连线的的状态
            stroke: '#ffffff'
          },
          weakenEdgeDark: { // 经典黑时，移入节点后，非相关连线的颜色
            stroke: '#071631'
          },
          weakenEdgeLight: { // 朴素白，科技蓝时，移入节点后，非相关连线的颜色
            stroke: '#f5f5f5'
          }
        },
        defaultNode: { // 默认节点样式
          color: '#5B8FF9',
          style: {
            // lineWidth: 2,
            // fill: '#C6E5FF'
          },
          labelCfg: {
            style: {
              fill: 'white',
              fontSize: 16
            }
          }
        },
        defaultEdge: { // 默认连线样式
          type: 'quadratic',
          style: {
            stroke: '#fa0f1b',
            lineWidth: 1,
            lineAppendWidth: 2,
            endArrow: { // 结束箭头的颜色？
              path: constants.G6ArrowPath,
              fill: '#e2e2e2'
            }
          },
          labelCfg: { // 节点内部文字样式
            autoRotate: true,
            style: {
              fill: 'white'
            }
          }
        }
      }
    }
  },
  computed: {
    ...mapState({
      theme: state => state.theme
    })
  },
  watch: {
    theme(theme) {
      const edge = (theme === 'light' || theme === 'blue') ? '#e2e2e2' : '#324E6B' // 边线颜色
      const edgeLabel = (theme === 'light' || theme === 'blue') ? '#01172E' : '#F5F5F5' // 连线文字颜色
      const nodeLabel = (theme === 'light' || theme === 'blue') ? '#01172E' : '#F5F5F5' // 节点颜色
      const arrow = { path: constants.G6ArrowPath, fill: edge } // 箭头颜色
      // 赋值
      this.curColors = { edge, edgeLabel, nodeLabel, arrow }
      // 重画
      const arr = ['关系探索', '对象探索', '相对关系']
      arr.forEach(each => {
        const graph = this.graph[each].graph
        if (!graph) return
        graph.setAutoPaint(false)
        // 更新【连线】
        graph.getEdges().forEach(e => {
          const model = e.getModel()
          graph.updateItem(e, {
            style: {
              stroke: this.curColors.edge,
              startArrow: model.twoWay ? this.curColors.arrow : false,
              endArrow: this.curColors.arrow
            },
            labelCfg: {
              autoRotate: true,
              style: {
                fill: this.curColors.edgeLabel // 连线的文字
              }
            }
          })
        })
        // 人员和部门【节点】的文字颜色
        graph.getNodes().forEach(eachNode => {
          const model = eachNode.getModel()
          if (model.type === 'TASK') return
          graph.updateItem(eachNode, {
            img: model.img,
            labelCfg: {
              style: {
                fill: this.curColors.nodeLabel // 人员和部门的文字颜色
              }
            }
          })
        })
        // TODO 修改任务节点的颜色
        graph.getNodes().forEach(eachNode => {
          const model = eachNode.getModel()
          const fill = (model.type === 'TASK') && THEME_CONFIG[this.theme].TASK[model.taskType]
          graph.updateItem(eachNode, {
            style: {
              fill: fill
            }
          })
        })
        // graph.getNodes().forEach(eachNode => {
        //   graph.updateItem(eachNode, Object.assign({}, eachNode.getModel(), {
        //     labelCfg: {
        //       style: {
        //         fill: labelColor
        //       }
        //     }
        //   }))
        // })
        graph.paint()
        graph.setAutoPaint(true)
      })
    }
  },
  mounted() {
    window.onresize = debounce((value) => {
      this.resizeCurGraph()
    }, 1000)
    // 获取数据
    this.initDiscovery()
  },
  destroyed() {
    window.onresize = null
  },
  methods: {
    async initDiscovery() {
      const edgeColor = (this.theme === 'light' || this.theme === 'blue') ? '#dddddd' : '#324E6B' // 默认连线的颜色
      const edgeLabelColor = (this.theme === 'light' || this.theme === 'blue') ? '#01172E' : '#F5F5F5'
      // 重新赋值
      this.defaultConf.defaultEdge.style.stroke = edgeColor
      this.defaultConf.defaultEdge.style.endArrow.fill = edgeColor
      this.defaultConf.defaultEdge.labelCfg.style.fill = edgeLabelColor
      this.defaultConf.defaultNode.labelCfg.style.fill = edgeLabelColor

      const loading = this.$loading({
        fullscreen: true,
        lock: true,
        text: '数据请求中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      // const cacheKey = 'OKR_CACHE_DISCOVERY'
      // let cachedData = sessionStorage.getItem(cacheKey)
      // if (!cachedData) {
      //   const result = await this.getDiscoveryData()
      //   if (result === 'error') {
      //     loading.close()
      //     return
      //   }
      //   const nodes = this.optimizeNodes(result.nodes)
      //   const edges = this.optimizeEdges(result.edges)
      //   const simplifyEdges = this.optimizeEdges(result.simplifyEdges)
      //   cachedData = { nodes, edges, simplifyEdges }
      //   //  非主线程的业务, 交给异步去执行
      //   setTimeout(() => {
      //     sessionStorage.setItem(cacheKey, JSON.stringify(cachedData))
      //   }, 1000)
      // } else {
      //   cachedData = JSON.parse(cachedData)
      // }
      // this.graphData = cachedData

      // this.graph[this.graphType].creationTime = new Date()

      const result = await this.getDiscoveryData()
      if (result === 'error') {
        loading.close()
        return
      }
      // 保存时间，用于显示
      this.graphCreationTime = result.explorerCache ? moment().subtract(1, 'days').format('YYYY-MM-DD') : moment().format('YYYY-MM-DD HH:mm')
      // 处理节点
      const nodes = this.optimizeNodes(result.nodes)
      const edges = this.optimizeEdges(result.edges, result.nodes)
      const simplifyEdges = this.optimizeEdges(result.simplifyEdges, result.nodes)
      // 保存处理好的数据
      this.graphData = { nodes, edges, simplifyEdges }
      window.localStorage.setItem('abc', JSON.stringify(this.graphData))
      //  非主线程的业务, 交给异步去执行
      setTimeout(() => {
        this.createChart0({ nodes, edges })
      }, 1000)
      // 主业务
      this.createChart1({ nodes, edges: simplifyEdges }).then(graph => {
        setTimeout(() => {
          loading.setText('图形计算中')
        }, 500)
        setTimeout(() => {
          loading.setText('图形绘制中')
        }, 100)
        setTimeout(() => {
          loading.setText('布局参数计算中')
          this.graphReady = true
          graph.fitView(20)
        }, 2000)
        setTimeout(() => {
          loading.close()
          // graph.updateLayout({
          //   gravity: 1
          // })
        }, 3000)
      })
    },
    // 获取数据
    getDiscoveryData() {
      return new Promise(resolve => {
        apiServices.getRelationChartData().then(res => {
          resolve(res.data.object)
        }).catch(() => {
          resolve('error')
        })
      })
    },
    // 进入任务详情页
    gotoDiscoveryTaskDetail(data) {
      this.indexVisible = false
      this.discoveryPersonVisible = false
      this.discoveryDepartVisible = false
      this.discoveryTaskVisible = true
      // this.$refs['discoveryTaskDetail'].show({ taskId: data.id })
      this.getBasicTaskInformation(data.id, 'discoveryTaskDetail')
    },
    // 获取任务信息
    getBasicTaskInformation(id, domName) {
      apiServices.getBaseInformation(id).then(res => {
        const info = res.data.object
        this.$refs[domName].show(info.task, info.taskSnapshot, info.createUser)
      })
    },
    // 进入人员详情页
    gotoDiscoveryPersonDetail(data) {
      this.indexVisible = false
      this.discoveryPersonVisible = true
      this.discoveryDepartVisible = false
      this.discoveryTaskVisible = false
      this.$refs['discoveryPersonDetail'].show(data)
    },
    // 进入部门详情页
    gotoDiscoveryDepartDetail(data) {
      this.indexVisible = false
      this.discoveryPersonVisible = false
      this.discoveryTaskVisible = false
      this.discoveryDepartVisible = true
      this.$refs['discoveryDepartDetail'].show(data)
    },
    // 关闭详情页
    closeDetail() {
      this.indexVisible = true
      this.discoveryPersonVisible = false
      this.discoveryDepartVisible = false
      this.discoveryTaskVisible = false
      this.$nextTick(_ => {
        this.resizeCurGraph()
      })
    },
    // 调整大小？
    resizeCurGraph() {
      const ref = this.$refs[this.graphType]
      this.graph[this.graphType].graph.changeSize(ref.clientWidth, ref.clientHeight)
      this.graph[this.graphType].graph.fitView(20)
    },
    // 样式改变？
    onStyleFilterChange(val) {
      this.graph[this.graphType].tool[val] = !this.graph[this.graphType].tool[val]
      const isShow = this.graph[this.graphType].tool[val]
      const curGraph = this.graph[this.graphType].graph
      if (!curGraph) return
      if (val === 'lianxian') {
        curGraph.getEdges().forEach(e => {
          isShow ? e.show() : e.hide()
        })
      }
      if (val === 'wenzi') {
        const isShow = this.graph[this.graphType].tool[val]
        curGraph.getEdges().forEach((e) => {
          const index = e.getModel().id.split('|')[1] * 1
          curGraph.updateItem(e, {
            label: isShow ? this.graphData.edges[index].relationshipAbbreviation : ''
          })
        })
      }
      if (val === 'trun') {
        const edgeColor = (this.theme === 'light' || this.theme === 'blue') ? '#e2e2e2' : '#324E6B'
        curGraph.getEdges().forEach((e, index) => {
          const model = e.getModel()
          curGraph.updateItem(e, Object.assign(e.getModel(), {
            style: {
              startArrow: {
                path: isShow && model.twoWay ? constants.G6ArrowPath : '',
                fill: edgeColor
              },
              endArrow: {
                path: isShow ? constants.G6ArrowPath : '',
                fill: edgeColor
              }
            }
          }))
        })
        // const isShow = this.graph[this.graphType].tool[val]
        // const endArrow = { path: constants.G6ArrowPath, fill: '#e2e2e2' }
        // // curGraph.edge(edge => {
        // //   edge.style.endArrow = isShow ? endArrow : false
        // //   return edge
        // // })
        // curGraph.getEdges().forEach((e, index) => {
        //   // e.setOriginStyle({ endArrow: isShow ? endArrow : false })
        //   e.getModel().style.endArrow = isShow ? endArrow : false
        //   // e.style.endArrow = isShow ? endArrow : false
        //   curGraph.refreshItem(e)
        // })
        // curGraph.paint()
      }
    },
    // 节点类型改变
    onNodeTypeFilterChange(val) {
      const curGraph = this.graph[this.graphType].graph
      if (!curGraph) return
      const nodeIds = []
      curGraph.getNodes().forEach(e => {
        if (val.includes(e.getModel().type)) {
          e.show()
        } else {
          e.hide()
          nodeIds.push(e.getModel().id)
        }
      })
      curGraph.getEdges().forEach(e => {
        if (nodeIds.includes(e.getModel().source) || nodeIds.includes(e.getModel().target)) {
          e.hide()
        } else {
          e.show()
        }
      })
    },
    // 当单选框改变（关系探索，对象探索，相对关系）
    onRadioGroupChange(val) {
      if (val === '关系探索') {
        // this.createChart1()
      }
      if (val === '对象探索') {
        this.createChart2()
      }
      if (val === '相对关系') {
        this.createChart3()
      }
      this.resizeCurGraph()
    },
    // 创建chart0？
    createChart0(data) { // 这是个临时中间图, 主要考虑是用来处理一些数据.
      if (this.graph['临时图'].graph) return
      const ref = this.$refs['临时图']
      const graph = new G6.Graph({
        container: ref,
        width: ref.clientWidth,
        height: ref.clientHeight,
        ...this.defaultConf
      })
      graph.data(data || {})
      graph.render()
      this.graph['临时图'].graph = graph
    },
    // 创建chart1 - 关系探索
    createChart1(data) {
      return new Promise(resolve => {
        if (this.graph[this.graphType].graph) return
        const ref = this.$refs['关系探索']
        // TODO
        const defaultConf = Object.assign({}, this.defaultConf, { defaultNode: { labelCfg: { style: { fontSize: 22 }}}})
        const graph = new G6.Graph({
          container: ref,
          width: ref.clientWidth,
          height: ref.clientHeight,
          modes: {
            default: ['drag-canvas', 'drag-node', 'zoom-canvas']
          },
          layout: {
            type: 'force',
            preventOverlap: true, // 是否避免重叠，默认true
            animate: false,
            // 节点作用力，正数代表节点之间的引力作用，负数代表节点之间的斥力作用
            nodeStrength: node => {
              if (node.type === 'image') return -1000
              if (node.type === 'DEPART') return -5000
              if (node.type === 'TASK') return -800
              return -500
            },
            // 边长度
            linkDistance: edge => {
              // 人员 -> 部门
              if (edge.source.type === 'image' && edge.target.type === 'DEPART') return 100
              // 部门 -> 人员
              if (edge.source.type === 'DEPART' && edge.target.type === 'image') return 150
              // 任务->人员， 人员->任务
              if (edge.source.type === 'TASK' && edge.target.type === 'image' || edge.source.type === 'image' && edge.target.type === 'TASK') return 400
              // 任务 -> 部门, 部门 -> 任务
              if ((edge.source.type === 'TASK' && edge.target.type === 'DEPART') || (edge.source.type === 'DEPART' && edge.target.type === 'TASK')) return 1500
              return 500
              // },
              // // 边的作用力，默认根据节点的出入度自适应
              // edgeStrength: edge => {
              //   if (edge.source.type === 'TASK') {
              //     return 0.7
              //   }
              //   return 0.1
            }
            // workerEnabled: true,
            // type: 'fruchterman',
            // gravity: 0.5,
            // speed: 5
            // linkDistance: 100,
            // preventOverlap: true,
            // type: 'force'
          },
          animate: true, // Boolean，切换布局时是否使用动画过度，默认为 false
          animateCfg: {
            duration: 1000 // Number，一次动画的时长
          },
          ...defaultConf
        })
        graph.data(data || {})
        // ...
        graph.on('node:mouseenter', evt => {
          this.onMouseenterNode(graph, evt)
        })
        graph.on('node:mouseleave', evt => {
          this.clearAllStats(graph, evt)
        })
        graph.on('canvas:click', evt => {
          this.clearAllStats(graph, evt)
        })
        graph.on('node:click', (e) => {
          // 防抖操作,防止双击事件触发单击
          clearTimeout(this.clickTimer)
          graph.focusItem(e.item)
          this.clickTimer = setTimeout(() => {
            const model = e.item.getModel()
            if (model.type === 'image') {
              this.$refs['discoveryPersonDialog'].show(e.item)
            }
            if (model.type === 'TASK') {
              this.$refs['discoveryTaskDialog'].show(e.item)
            }
            if (model.type === 'DEPART') {
              this.$refs['discoveryDepartDialog'].show(e.item)
            }
          }, 200)
        })
        // ...
        graph.on('node:dragstart', function(e) {
          graph.layout()
          refreshDragedNodePosition(e)
        })
        graph.on('node:drag', function(e) {
          refreshDragedNodePosition(e)
        })
        graph.on('node:dragend', function(e) {
          e.item.get('model').fx = null
          e.item.get('model').fy = null
        })

        function refreshDragedNodePosition(e) {
          const model = e.item.get('model')
          model.fx = e.x
          model.fy = e.y
        }

        graph.fitView(5000000)
        // 渲染
        graph.render()
        // graph.changeData(data || {})
        this.graph[this.graphType].graph = graph
        resolve(graph)
      })
    },
    // 创建chart2 - 对象探索
    createChart2(data) {
      if (this.graph[this.graphType].graph) return
      const ref = this.$refs['对象探索']
      const graph = new G6.Graph({
        container: ref,
        width: ref.clientWidth,
        height: ref.clientHeight,
        fitView: true,
        fitViewPadding: 20,
        fitCenter: true,
        modes: {
          default: ['drag-canvas', 'drag-node', 'zoom-canvas']
        },
        layout: {
          workerEnabled: true,
          type: 'radial',
          unitRadius: 200,
          nodeSpacing: 300,
          preventOverlap: true,
          maxPreventOverlapIteration: 100
        },
        animate: true,
        animateCfg: {
          duration: 1000 // Number，一次动画的时长
        },
        ...this.defaultConf
      })
      graph.data(data || {})
      graph.on('node:mouseenter', evt => {
        this.onMouseenterNode(graph, evt)
      })
      graph.on('node:mouseleave', evt => {
        this.clearAllStats(graph, evt)
      })
      graph.on('canvas:click', evt => {
        this.clearAllStats(graph, evt)
      })
      graph.on('node:click', (e) => {
        // 防抖操作,防止双击事件触发单击
        clearTimeout(this.clickTimer)
        this.clickTimer = setTimeout(() => {
          const model = e.item.getModel()
          const item = this.graph['关系探索'].graph.findById(model.id)
          if (model.type === 'image') {
            this.$refs['discoveryPersonDialog'].show(item)
          }
          if (model.type === 'TASK') {
            this.$refs['discoveryTaskDialog'].show(item)
          }
          if (model.type === 'DEPART') {
            this.$refs['discoveryDepartDialog'].show(item)
          }
        }, 300)
      })
      graph.on('node:dblclick', (e) => {
        clearTimeout(this.clickTimer)
        const model = e.item.getModel()
        const node = this.graph['临时图'].graph.findById(model.id)
        const edges = node.getEdges() || []
        graph.setAutoPaint(false)
        edges.forEach(e => {
          const edgeModel = e.getModel()
          if (edgeModel.source !== model.id) {
            const newModel = JSON.parse(JSON.stringify(e.getSource().getModel()))
            newModel.x = model.x
            newModel.y = model.y
            if (!graph.findById(newModel.id)) graph.addItem('node', newModel)
          }
          if (edgeModel.target !== model.id) {
            const newModel = JSON.parse(JSON.stringify(e.getTarget().getModel()))
            newModel.x = model.x
            newModel.y = model.y
            if (!graph.findById(newModel.id)) graph.addItem('node', newModel)
          }
          if (!graph.findById(edgeModel.id)) {
            graph.addItem('edge', Object.assign({}, edgeModel, {
              style: {
                stroke: this.curColors.edge,
                startArrow: edgeModel.twoWay ? this.curColors.arrow : false,
                endArrow: this.curColors.arrow
              },
              labelCfg: {
                autoRotate: true,
                style: {
                  fill: this.curColors.edgeLabel
                }
              }
            }))
          }
        })

        graph.paint()
        graph.setAutoPaint(true)
        graph.layout()
        // graph.updateLayout({
        //   type: 'radial',
        //   unitRadius: 50,
        // })

        // graph.setAutoPaint(false)
        // graph.getEdges().forEach((edge) => {
        //   graph.setItemState(edge, 'highlight', true)
        //   edge.toFront()
        // })
        // graph.paint()
        // graph.setAutoPaint(true)

        // this.graphData.edges.forEach(e => {
        //   if (e.source === model.id) {
        //     e.getSource().getModel()
        //     graph.addItem('group', model);
        //   }
        //
        //   const sModel = e.getSource().getModel()
        //   const tModel = e.getTarget().getModel()
        //   if (sModel.type === 'image' && sModel.id !== model.id) {
        //   }
        // })
      })
      graph.render()
      this.graph[this.graphType].graph = graph
    },
    // 创建chart3 - 相对关系
    createChart3(data) {
      if (this.graph[this.graphType].graph) return
      const ref = this.$refs['相对关系']
      const graph = new G6.Graph({
        container: ref,
        width: ref.clientWidth,
        height: ref.clientHeight,
        // fitView: true,
        // fitCenter: true,
        // fitViewPadding: 20,
        modes: {
          default: ['drag-canvas', 'drag-node', 'zoom-canvas']
        },
        layout: {},
        animate: true,
        animateCfg: {
          duration: 1000 // Number，一次动画的时长
        },
        ...this.defaultConf
      })
      graph.data(data || {})
      graph.on('node:mouseenter', evt => {
        this.onMouseenterNode(graph, evt)
      })
      graph.on('node:mouseleave', evt => {
        this.clearAllStats(graph, evt)
      })
      graph.on('canvas:click', evt => {
        this.clearAllStats(graph, evt)
      })
      graph.on('node:click', (e) => {
        // 防抖操作,防止双击事件触发单击
        clearTimeout(this.clickTimer)
        this.clickTimer = setTimeout(() => {
          const model = e.item.getModel()
          const item = this.graph['关系探索'].graph.findById(model.id)
          if (model.type === 'image') {
            this.$refs['discoveryPersonDialog'].show(item)
          }
          if (model.type === 'TASK') {
            this.$refs['discoveryTaskDialog'].show(item)
          }
          if (model.type === 'DEPART') {
            this.$refs['discoveryDepartDialog'].show(item)
          }
        }, 300)
      })
      graph.render()
      this.graph[this.graphType].graph = graph
    },
    // 搜索事件
    onSearchGraph2() {
      const ref = this.graph['对象探索']
      if (!ref.searchValue) return
      const node = this.graphData.nodes.find(e => e.id === ref.searchValue)
      if (!node) return
      const point = ref.graph.getPointByClient(this.$refs['对象探索'].clientWidth, this.$refs['对象探索'].clientHeight)
      node.x = point.x / 2
      node.y = point.y / 2
      ref.graph.read({ nodes: [node] })
    },
    // 搜索事件
    onSearchGraph3() {
      const ref = this.graph['相对关系']
      if (!ref.searchValue1 || !ref.searchValue2) {
        this.$message.error('未正确选择对象')
        return
      }
      if (ref.searchValue1 === ref.searchValue2) {
        this.$message.error('对象选择重复')
        return
      }
      const object1 = this.graphData.nodes.find(e => e.id === ref.searchValue1)
      const object2 = this.graphData.nodes.find(e => e.id === ref.searchValue2)

      const object1RelatedEdges = this.graphData.edges.filter(e => e.source === object1.id || e.target === object1.id)
      let object1RelatedNodesIds = []
      object1RelatedEdges.forEach(e => {
        if (object1.id !== e.source) return object1RelatedNodesIds.push(e.source)
        if (object1.id !== e.target) return object1RelatedNodesIds.push(e.target)
      })
      object1RelatedNodesIds = uniq(object1RelatedNodesIds)

      const object2RelatedEdges = this.graphData.edges.filter(e => e.source === object2.id || e.target === object2.id)
      let object2RelatedNodesIds = []
      object2RelatedEdges.forEach(e => {
        if (object2.id !== e.source) return object2RelatedNodesIds.push(e.source)
        if (object2.id !== e.target) return object2RelatedNodesIds.push(e.target)
      })
      object2RelatedNodesIds = uniq(object2RelatedNodesIds)
      const intersectionNodeIds = intersection(object1RelatedNodesIds, object2RelatedNodesIds)
      let intersectionNodes = []
      let intersectionEdges = intersectionBy(object1RelatedEdges, object2RelatedEdges, 'id')
      if (intersectionNodeIds.length) {
        intersectionNodes = this.graphData.nodes.filter(e => intersectionNodeIds.includes(e.id))
        const edges1 = object1RelatedEdges.filter(e => {
          const a = intersectionNodeIds.includes(e.source) && object1.id === e.target
          const b = intersectionNodeIds.includes(e.target) && object1.id === e.source
          return a || b
        })
        const edges2 = object2RelatedEdges.filter(e => (intersectionNodeIds.includes(e.source) && object2.id === e.target) || (intersectionNodeIds.includes(e.target) && object2.id === e.source))
        intersectionEdges = [...intersectionEdges, ...edges1, ...edges2]
      }

      const point = ref.graph.getPointByClient(this.$refs['相对关系'].clientWidth, this.$refs['相对关系'].clientHeight)
      // this.graph['相对关系'].graph.clear()
      const nodes = [
        // Object.assign({ x: point.x / 3, y: point.y / 2 }, object1),
        // Object.assign({ x: point.x / 3 * 2, y: point.y / 2 }, object2),
        Object.assign({}, object1, { x: point.x / 3, y: point.y / 2 }),
        Object.assign({}, object2, { x: point.x / 3 * 2, y: point.y / 2 }),
        ...intersectionNodes.map(e => {
          // e.x = point.x / 2
          // e.y = point.y / 2
          return e
        })
      ]
      ref.graph.read({
        nodes,
        edges: intersectionEdges.map(edge => {
          return Object.assign({}, edge, {
            style: {
              stroke: this.curColors.edge,
              startArrow: edge.twoWay ? this.curColors.arrow : false,
              endArrow: this.curColors.arrow
            },
            labelCfg: {
              autoRotate: true,
              style: {
                fill: this.curColors.edgeLabel
              }
            }
          })
        })
      })
    },
    // +-----------------------------------------------------------------------------------------------------
    // | 优化【节点】
    // +-----------------------------------------------------------------------------------------------------
    optimizeNodes(nodes) {
      return nodes.map(node => {
        const scale = 1.3 // 业务人员 控制大小
        node.size = 70
        node.style = node.style || {}
        // 人员
        if (node.type === 'USER') {
          node.type = 'image'
          node.size = 40 // 用戶节点大小
          if (!node.initScore) node.size = 40 * scale
          if (node.initScore > 0 && node.initScore < 200) node.size = 56 * scale
          if (node.initScore >= 200) node.size = 64 * scale
          // node.img = `${this.imageHost}${node.headPortrait}`
          node.img = `${this.imageHost}${node.headPortrait}?imgType=compressionSmall`
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
          if (!node.okrScore || node.okrScore <= 8) node.size = 32 * scale
          if (node.okrScore > 8 && node.okrScore <= 12) node.size = 36 * scale
          if (node.okrScore > 12 && node.okrScore <= 17) node.size = 38 * scale
          if (node.okrScore > 17) node.size = 40

          node.style.fill = '#dbdbdb'
          let taskIcon = taskIconGrey
          if (node.taskType === '挑战任务') {
            node.style.fill = (this.theme === 'dark') ? '#736313' : '#FFF2B2'
            taskIcon = taskIconYellow
          }
          if (node.taskType === '专项任务') {
            node.style.fill = (this.theme === 'dark') ? '#224839' : '#B7E8CD'
            taskIcon = taskIconGreen
          }
          if (node.taskType === '部门任务') {
            node.style.fill = (this.theme === 'dark') ? '#4C2830' : '#F1C1C7'
            taskIcon = taskIconRed
          }
          node.icon = { show: true, width: node.size - 10, height: node.size - 10, img: taskIcon }
          node.style.lineWidth = 0
        }
        // 部门
        if (node.type === 'DEPART') {
          node.size = 70 * scale
          node.style.fill = '#38afe0'
          node.style.lineWidth = 0
          node.icon = { show: true, width: node.size, height: node.size, img: departIconHighlight }
          node.label = node.abbreviation || node.name
        }
        return node
      })
    },
    // +-----------------------------------------------------------------------------------------------------
    // | 优化【连线】
    // +-----------------------------------------------------------------------------------------------------
    optimizeEdges(edges, nodes) {
      edges = this.deleteLineBetweenTasks(edges, nodes) // 先删，必须在第一部
      edges = this.addPropertyToEdges(edges)
      // edges = this.addDifferentCurveOffset(edges)
      return edges
    },
    // 添加属性
    addPropertyToEdges(edges) {
      return edges.map((edge, index) => {
        edge.id = 'edge|' + index
        edge.style = edge.style || JSON.parse(JSON.stringify(this.defaultConf.defaultEdge.style))
        edge.style.startArrow = edge.twoWay ? this.defaultConf.defaultEdge.style.endArrow : false
        edge.curveOffset = 0
        return edge
      })
    },
    // 如果有相同【起点和终点】的连线，就要给曲线不同的弧度
    addDifferentCurveOffset(edges) {
      const multiSameDirectionEdges = edges.reduce((result, each, index) => { // 统计相同【起点和终点】的连线
        const key = each.source + each.target
        result[key] ? result[key].push(index) : result[key] = [index]
        return result
      }, {})
      // ...
      const result = edges.map((edge, index) => {
        const key = edge.source + edge.target
        const sameEdgeCounts = multiSameDirectionEdges[key].length
        if (sameEdgeCounts > 1) {
          const theIndex = multiSameDirectionEdges[key].findIndex(e => e === index)
          edge.curveOffset = 40 * theIndex + 30
        }
        return edge
      })
      return result
    },
    // 删除【任务与任务之间】的连线
    deleteLineBetweenTasks(edges, nodes) {
      const result = []
      edges.forEach(edge => {
        const sourceType = nodes.find(node => node.id === edge.source).type
        const targetType = nodes.find(node => node.id === edge.target).type
        if (!(sourceType === 'TASK' && targetType === 'TASK')) result.push(edge)
      })
      return result
    },
    // +-----------------------------------------------------------------------------------------------------
    // | 鼠标在节点移入移除
    // +-----------------------------------------------------------------------------------------------------
    // 当鼠标移入节点后高亮
    highlightTask(graph, node) {
      const model = node.getModel()
      if (model.type === 'TASK') {
        let img = taskIconGrey
        if (model.taskType === '挑战任务') {
          img = taskIconYellow
        }
        if (model.taskType === '专项任务') {
          img = taskIconGreen
        }
        if (model.taskType === '部门任务') {
          img = taskIconRed
        }
        graph.updateItem(node, {
          icon: { img }
        })
      }
      if (model.type === 'DEPART') {
        const img = departIconHighlight
        graph.updateItem(node, {
          icon: { img },
          node: {
            style: {
              fill: '#38afe0'
            }
          }
        })
      }
    },
    // 清除所有状态
    clearAllStats(graph, evt) {
      graph.setAutoPaint(false)
      graph.getNodes().forEach((node) => {
        graph.clearItemStates(node)
        this.highlightTask(graph, node)
      })
      graph.getEdges().forEach((edge) => {
        graph.clearItemStates(edge)
        // graph.updateItem(edge, Object.assign(edge.getModel(), {
        //   style: { stroke: this.theme === 'light' || this.theme === 'blue' ? '#e2e2e2' : '#324E6B' }
        // }))
      })
      // 清除边的label
      const edges = evt.item ? evt.item.getEdges() : []
      edges.forEach((edge) => {
        graph.clearItemStates(edge)
        graph.updateItem(edge, {
          label: ''
        })
      })
      graph.paint()
      graph.setAutoPaint(true)
    },
    // 鼠标移入节点
    onMouseenterNode(graph, evt) {
      const item = evt.item
      graph.setAutoPaint(false) // 是否继续画画?
      graph.getNodes().forEach((node) => {
        graph.clearItemStates(node)
        graph.setItemState(node, 'weakenNode', true) // 所有节点 显示弱化效果
        // 任务节点 更改图标样式
        const model = node.getModel()
        if (model.type === 'TASK') {
          let img = taskIconGrey
          if (model.taskType === '挑战任务') {
            img = this.theme === 'dark' ? taskIconYellowD : taskIconYellowL
          }
          if (model.taskType === '专项任务') {
            img = this.theme === 'dark' ? taskIconGreenD : taskIconGreenL
          }
          if (model.taskType === '部门任务') {
            img = this.theme === 'dark' ? taskIconRedD : taskIconRedL
          }
          graph.updateItem(node, {
            icon: { img }
          })
        }
        if (model.type === 'DEPART') {
          const img = this.theme === 'dark' ? departIconWeakenDark : departIconWeakenLight
          graph.updateItem(node, {
            icon: { img },
            node: {
              style: {
                fill: this.theme === 'dark' ? '#0a1d38' : '#c9ecff'
              }
            }
          })
        }
      })
      // graph.setItemState(item, 'dark', false)
      graph.setItemState(item, 'highlightNode', true) // 当前鼠标移入的节点，显示高亮效果

      // TODO
      setTimeout(() => {
        this.highlightTask(graph, item) // 当前节点，显示高亮效果
      })

      // 遍历所有边线
      graph.getEdges().forEach((edge) => {
        const source = edge.getSource()
        const target = edge.getTarget()
        if (source === item) { // 如果【连线的起点】是当前鼠标移入节点
          graph.setItemState(target, 'weakenNode', false)
          graph.setItemState(target, 'highlightNode', true)
          if (this.theme === 'dark') {
            graph.setItemState(edge, 'highlightEdgeDark', true)
          }
          this.highlightTask(graph, target)
          edge.toFront()
        } else if (target === item) { // 如果【连线的终点】是当前鼠标移入节点
          graph.setItemState(source, 'weakenNode', false)
          graph.setItemState(source, 'highlightNode', true)
          if (this.theme === 'dark') {
            graph.setItemState(edge, 'highlightEdgeDark', true)
          }
          this.highlightTask(graph, source)
          edge.toFront()
        } else {
          const theme = this.theme === 'dark' ? 'weakenEdgeDark' : 'weakenEdgeLight'
          graph.setItemState(edge, theme, true)
        }
      })
      // 遍历所有连线
      item.getEdges().forEach((e) => {
        const index = e.getModel().id.split('|')[1] * 1
        const rawEdges = this.graphType === '关系探索' ? this.graphData.simplifyEdges : this.graphData.edges
        graph.updateItem(e, {
          label: rawEdges[index].relationshipAbbreviation || ''
        })
      })
      graph.paint()
      graph.setAutoPaint(true)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  span {
    vertical-align: text-bottom;
  }

  /deep/ .el-radio-button:last-child .el-radio-button__inner {
    border-right: none;
  }

  /deep/ .el-radio-button:first-child .el-radio-button__inner {
    border-left: none;
  }

  /deep/ .el-radio-button__inner {
    border: none;
  }

  .discovery-wrapper {
    width: 100%;
    height: 100%;
  }

  .c-header {
    height: 38px;
    padding-right: 15px;
    background-color: #01172E;
    position: absolute;
    margin: 20px 15px 0 15px;
    width: calc(100% - 58px);
    border-radius: 4px;
    box-shadow: 0 0 13px 0 rgba(1, 23, 46, 0.2);
    color: white;
  }

  .transition-btn {
    position: absolute;
    top: 20px;
    right: 10px;
    width: 38px;
    text-align: center;
    height: 38px;
    line-height: 38px;
    cursor: pointer;
    z-index: 99;
    background-color: #29A8FF;
    border-radius: 4px;
    box-shadow: 0 0 13px 0 rgba(1, 23, 46, 0.2);
    color: white;
  }

  .container {
    /*background-color: #020215;*/
    background: url("../../assets/img/discovery_bg_dark.png");
    background-position: left top;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  }

  .move-out {
    position: absolute;
    z-index: -1;
  }

  .publish-time {
    position: absolute;
    right: 0;
    margin: 75px 15px 0 15px;
  }

  .obj-selector {
    position: absolute;
    left: 0;
    top: 0;
    margin: 75px 15px 0 15px;
    border-radius: 4px;
    background-color: #01172E;
    box-shadow: 0 0 13px 0 rgba(1, 23, 46, 0.2);
  }

  .light, .blue {
    .c-header {
      color: #01172E;
      background-color: white;
    }

    .obj-selector {
      background-color: white;
    }
  }
  /*.light {
    .container {
      background: url("../../assets/img/discovery_bg_light.png");
    }
  }
  .blue {
    .container {
      background: url("../../assets/img/discovery_bg_blue.png");
    }
  }*/
</style>
