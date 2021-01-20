<template>
  <div>
    <a-card size="small" title="OKR柔性管理" :body-style="{ padding: 0}">
      <a slot="extra" href="#" @click="showDialog">编辑</a>
      <!-- card-body -->
      <div>
        <a-spin :spinning="loading" size="large" tip="请求数据中...">
          <div id="container" class="graph-box">
            <!-- ... -->
          </div>
        </a-spin>
      </div>
    </a-card>

    <!-- 抽屉：编辑 -->
    <a-drawer :visible="dialog.visible"
              title="编辑"
              placement="right"
              :width="500"
              keyboard
              :mask-closable="false"
              :closable="true"
              @close="hideDialog">
      <div class="drawer-body">
        <a-form-model :model="dialog.form"
                      :label-col="{ span: 6 }"
                      :wrapper-col="{ span: 18 }">
          <a-divider>提示</a-divider>
          <a-form-model-item label="任务类型">
            <template v-for="(taskItem, taskIndex) in TASK_TYPE_CONFIG">
            <span :key="taskIndex"
                  style="margin-right: 16px;">
              <a-icon type="cloud"
                      :style="{ color: taskItem.color }"
                      style="margin-right: 6px;"/>
              {{ taskItem.label }}
            </span>
            </template>
          </a-form-model-item>
          <!-- 主题 -->
          <a-divider>主题</a-divider>
          <a-form-model-item label="主题">
            <a-radio-group v-model="dialog.form.theme"
                           @change="onChangeTheme">
              <a-radio v-for="(item, index) in THEME_CONFIG"
                       :key="index"
                       :value="item.value">
                {{ item.label }}
              </a-radio>
            </a-radio-group>
          </a-form-model-item>
          <!-- 操作 -->
          <a-divider>操作</a-divider>
          <!-- 图形类型 -->
          <a-form-model-item label="图形类型">
            <a-radio-group v-model="dialog.form.graphType"
                           @change="onChangeGraphType">
              <a-radio v-for="(item, index) in GRAPH_TYPE_CONFIG"
                       :key="index"
                       :value="item">
                {{ item }}
              </a-radio>
            </a-radio-group>
          </a-form-model-item>
          <!-- 显示对象 -->
          <a-form-model-item label="显示对象">
            <a-checkbox-group v-model="dialog.form.objectsList"
                              @change="onChangeObjectList">
              <a-checkbox v-for="(objectItem, objectIndex) in SHOW_OBJECT_CONFIG"
                          :key="objectIndex"
                          :value="objectItem.value">
                {{ objectItem.label }}
              </a-checkbox>
            </a-checkbox-group>
          </a-form-model-item>
          <!-- 关系探索 -->
          <template v-if="dialog.form.graphType === '关系探索'">
            <!-- ... -->
          </template>
          <!-- 对象探索 -->
          <template v-if="dialog.form.graphType === '对象探索'">
            <a-form-model-item label="选择对象">
              <a-select v-model="dialog.form.singleObject"
                        placeholder="请先选择对象"
                        @change="onChangeSingleObject">
                <a-select-opt-group label="人员">
                  <a-select-option v-for="(item, index) in imageNode" :key="index" :value="item.id">
                    {{ index + 1 }} : {{ item.name }}
                  </a-select-option>
                </a-select-opt-group>
                <a-select-opt-group label="部门">
                  <a-select-option v-for="(item, index) in departNode" :key="index" :value="item.id">
                    {{ index + 1 }} : {{ item.name }}
                  </a-select-option>
                </a-select-opt-group>
                <a-select-opt-group label="任务">
                  <a-select-option v-for="(item, index) in taskNode" :key="index" :value="item.id">
                    {{ index + 1 }} : {{ item.name }}
                  </a-select-option>
                </a-select-opt-group>
              </a-select>
            </a-form-model-item>
          </template>
          <!-- 相对关系 -->
          <template v-if="dialog.form.graphType === '相对关系'">
            <a-form-model-item label="对象1">
              <a-select v-model="dialog.form.relatedObject.first"
                        placeholder="请先选择对象"
                        @change="onChangeRelatedObjectFirst">
                <a-select-opt-group label="人员">
                  <a-select-option v-for="(item, index) in imageNode" :key="index" :value="item.id">
                    {{ index + 1 }} : {{ item.name }}
                  </a-select-option>
                </a-select-opt-group>
                <a-select-opt-group label="部门">
                  <a-select-option v-for="(item, index) in departNode" :key="index" :value="item.id">
                    {{ index + 1 }} : {{ item.name }}
                  </a-select-option>
                </a-select-opt-group>
                <a-select-opt-group label="任务">
                  <a-select-option v-for="(item, index) in taskNode" :key="index" :value="item.id">
                    {{ index + 1 }} : {{ item.name }}
                  </a-select-option>
                </a-select-opt-group>
              </a-select>
            </a-form-model-item>
            <a-form-model-item label="对象2">
              <a-select v-model="dialog.form.relatedObject.second"
                        placeholder="请先选择对象"
                        @change="onChangeRelatedObjectSecond">
                <a-select-opt-group label="人员">
                  <a-select-option v-for="(item, index) in imageNode" :key="index" :value="item.id">
                    {{ index + 1 }} : {{ item.name }}
                  </a-select-option>
                </a-select-opt-group>
                <a-select-opt-group label="部门">
                  <a-select-option v-for="(item, index) in departNode" :key="index" :value="item.id">
                    {{ index + 1 }} : {{ item.name }}
                  </a-select-option>
                </a-select-opt-group>
                <a-select-opt-group label="任务">
                  <a-select-option v-for="(item, index) in taskNode" :key="index" :value="item.id">
                    {{ index + 1 }} : {{ item.name }}
                  </a-select-option>
                </a-select-opt-group>
              </a-select>
            </a-form-model-item>
          </template>
        </a-form-model>
        <pre class="well" v-text="dialog.form"/>
      </div>
    </a-drawer>
  </div>
</template>

<script>
import config from './dist/config'
import { realData as data } from './dist/data'
import { optimizeTarget, optimizeSource, getRelativeData } from './dist/dataManage'
import flexibleManagement from './dist/flexibleManagement'
// 背景图片
import DiscoveryBgLight from '@/assets/image/discovery_bg_light.png'
import DiscoveryBgBlue from '@/assets/image/discovery_bg_blue.png'
import DiscoveryBgDark from '@/assets/image/discovery_bg_dark.png'
// import { intersection, intersectionBy, uniq } from 'lodash'

const THEME_CONFIG = [
  { label: '朴素白', value: 'light' },
  { label: '工作蓝', value: 'blue' },
  { label: '经典黑', value: 'dark' }
]
// const DEFAULT_THEME = 'light'
// 主题背景配置
const THEME_BG = {
  'light': DiscoveryBgLight,
  'blue': DiscoveryBgBlue,
  'dark': DiscoveryBgDark
}
// 任务类型配置
const TASK_TYPE_CONFIG = [
  { label: '挑战任务', color: '#f8dc00' },
  { label: '专项任务', color: '#53c995' },
  { label: '部门任务', color: '#fc4c78' }
]
// 显示对象配置
const SHOW_OBJECT_CONFIG = [
  { label: '人员', value: 'image' },
  { label: '部门', value: 'DEPART' },
  { label: '任务', value: 'TASK' }
]
const DEFAULT_OBJECTS_LIST = ['image', 'DEPART', 'TASK']
// 显示哪种关系
const GRAPH_TYPE_CONFIG = ['关系探索', '对象探索', '相对关系']
const DEFAULT_GRAPH_TYPE = '关系探索'

export default {
  name: 'Index',
  data() {
    return {
      THEME_CONFIG,
      TASK_TYPE_CONFIG,
      SHOW_OBJECT_CONFIG,
      GRAPH_TYPE_CONFIG,
      // 数据
      loading: false,
      original: {
        nodes: [],
        edges: []
      },
      filter: {
        nodes: [],
        edges: []
      },
      allObject: [], // 根据数据，求得所有对象
      // ...
      imageNode: [],
      departNode: [],
      taskNode: [],
      // 编辑对话框
      dialog: {
        visible: false,
        form: {
          theme: '',
          graphType: DEFAULT_GRAPH_TYPE,
          // 关系探索
          objectsList: DEFAULT_OBJECTS_LIST, // 展示对象
          // 对象探索
          singleObject: null, // 选择的对象
          // 相对关系
          relatedObject: {
            first: null,
            second: null
          }
        }
      }
    }
  },
  created() {},
  mounted() {
    this.dialog.form.theme = (Math.random() > 0.5) ? 'light' : 'dark'
    // 初始化
    this.init()
  },
  methods: {
    // +----------------------------------------------------------------------------------------------------------------
    // | 初始化
    // +----------------------------------------------------------------------------------------------------------------
    async init() {
      // 请求数据
      const { nodes, edges } = await this.getData()
      // 处理数据
      this.original.nodes = nodes
      this.original.edges = optimizeTarget(optimizeSource(edges, nodes), nodes)
      // 请求数据
      this.allObject = this.original.nodes
      this.imageNode = this.allObject.filter(e => e.type === 'image')
      this.departNode = this.allObject.filter(e => e.type === 'DEPART')
      this.taskNode = this.allObject.filter(e => e.type === 'TASK')
      // 正文
      this.$nextTick(() => {
        // 设置背景图
        document.getElementById('container').style.backgroundImage = `url("${THEME_BG[this.dialog.form.theme]}")`
        // 画图
        this.renderGraph()
      })
    },
    // +----------------------------------------------------------------------------------------------------------------
    // | 模拟接口
    // +----------------------------------------------------------------------------------------------------------------
    getData() {
      return new Promise(resolve => {
        this.loading = true
        window.setTimeout(() => {
          resolve(data)
          this.loading = false
        }, 1000)
      })
    },
    // +----------------------------------------------------------------------------------------------------------------
    // | 画图
    // +----------------------------------------------------------------------------------------------------------------
    renderGraph() {
      // 初始化
      flexibleManagement.init({
        id: 'container',
        nodes: this.original.nodes,
        edges: this.original.edges,
        config: config[this.dialog.form.theme]
      })
      // 渲染
      flexibleManagement.render()
    },
    // +----------------------------------------------------------------------------------------------------------------
    // | 对话框
    // +----------------------------------------------------------------------------------------------------------------
    // 显示
    showDialog() {
      this.dialog.visible = true
    },
    // 关闭
    hideDialog() {
      this.dialog.visible = false
    },
    // +----------------------------------------------------------------------------------------------------------------
    // | 切换【主题】
    // +----------------------------------------------------------------------------------------------------------------
    onChangeTheme(e) {
      const theme = e.target.value
      document.getElementById('container').style.backgroundImage = `url("${THEME_BG[theme]}")`
      flexibleManagement.setConfig(config[theme])
      flexibleManagement.reset()
    },
    // +----------------------------------------------------------------------------------------------------------------
    // | 切换【图形类型】
    // +----------------------------------------------------------------------------------------------------------------
    onChangeGraphType(e) {
      // 还原
      this.dialog.form.singleObject = null
      this.dialog.form.relatedObject = { first: null, second: null }
    },
    // +----------------------------------------------------------------------------------------------------------------
    // | 切换【显示对象】
    // +----------------------------------------------------------------------------------------------------------------
    onChangeObjectList(checkedValue) {
      // 清空
      this.filter.nodes = []
      this.filter.edges = []
      // 过滤节点
      checkedValue.forEach(type => {
        this.filter.nodes.push(...this.original.nodes.filter(node => node.type === type))
      })
      // 过滤连线
      // newValue.forEach(type => {
      //   this.filter.edges.push(...this.original.edges.filter(node => node.source.type === type))
      // })
      this.filter.edges = this.original.edges.filter(e => checkedValue.includes(e.source.type) && checkedValue.includes(e.target.type))
      // 设置
      flexibleManagement.setNodes(this.filter.nodes)
      flexibleManagement.setEdges(this.filter.edges)
      flexibleManagement.clear() // 清空
      flexibleManagement.render() // 渲染
    },
    // +----------------------------------------------------------------------------------------------------------------
    // | 【对象探索】切换【选择对象】
    // +----------------------------------------------------------------------------------------------------------------
    onChangeSingleObject(val) {
      const nodes = this.original.nodes.filter(node => node.id === val)
      flexibleManagement.setNodes(nodes)
      flexibleManagement.setEdges([]) // 没有线
      flexibleManagement.clear() // 清空
      flexibleManagement.render() // 渲染
    },
    // +----------------------------------------------------------------------------------------------------------------
    // | 【相对关系】切换【选择对象】
    // +----------------------------------------------------------------------------------------------------------------
    onChangeRelatedObjectFirst(val) {
      if (!this.dialog.form.relatedObject.second) return
      this.changeRelatedObject()
    },
    onChangeRelatedObjectSecond(val) {
      if (!this.dialog.form.relatedObject.first) return
      this.changeRelatedObject()
    },
    changeRelatedObject() {
      // 求出节点
      const node_1 = this.original.nodes.find(node => node.id === this.dialog.form.relatedObject.first)
      const node_2 = this.original.nodes.find(node => node.id === this.dialog.form.relatedObject.second)
      // 获取结果
      const relativeData = getRelativeData(this.original.edges, this.original.nodes, node_1, node_2)
      const nodes = relativeData.nodes
      const edges = relativeData.edges
      // 画图
      flexibleManagement.setNodes(nodes)
      flexibleManagement.setEdges(edges) // 没有线
      flexibleManagement.clear() // 清空
      flexibleManagement.render() // 渲染
    }
  }
}
</script>

<style lang="less" scoped>
  .panel-body-box {
    padding: 0;
    overflow: hidden;
  }

  .graph-box {
    background: url("../../../../assets/image/discovery_bg_blue.png");
    height: calc(100vh - 40px);
    user-select: none;
  }

  .drawer-body {
    max-height: calc(100vh - 103px);
    overflow-y: auto;
  }

  /deep/ .ant-spin-nested-loading > div > .ant-spin {
    max-height: 100%;
  }
</style>
