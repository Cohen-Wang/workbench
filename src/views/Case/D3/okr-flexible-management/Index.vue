<template>
  <div>
    <a-card size="small" title="OKR柔性管理" :body-style="{ padding: 0}">
      <a slot="extra" href="#" @click="showDialog">编辑</a>
      <div id="container" class="graph-box">
        <!-- ... -->
      </div>
    </a-card>
    <!-- 编辑对话框 -->
    <a-modal title="编辑"
             :visible="dialog.visible"
             :width="500"
             :mask-closable="false"
             :footer="false"
             @cancel="hideDialog">
      <a-form-model :model="dialog.form" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
        <a-divider>提示</a-divider>
        <a-form-model-item label="任务类型">
          <template v-for="(taskItem, taskIndex) in TASK_TYPE_CONFIG">
            <span :key="taskIndex" style="margin-right: 16px;">
              <a-icon  type="cloud" :style="{ color: taskItem.color }" style="margin-right: 6px;"/>
              {{ taskItem.label }}
            </span>
          </template>
        </a-form-model-item>
        <a-divider>主题</a-divider>
        <a-form-model-item label="主题">
          <a-radio-group v-model="dialog.form.theme">
            <a-radio v-for="(item, index) in THEME_CONFIG" :key="index" :value="item.value">{{ item.label }}</a-radio>
          </a-radio-group>
        </a-form-model-item>
        <a-divider>操作</a-divider>
        <a-form-model-item label="图形类型">
          <a-radio-group v-model="dialog.form.graphType">
            <a-radio v-for="(item, index) in GRAPH_TYPE_CONFIG" :key="index" :value="item">{{ item }}</a-radio>
          </a-radio-group>
        </a-form-model-item>
        <!-- 关系探索 -->
        <template v-if="dialog.form.graphType === '关系探索'">
          <a-form-model-item label="显示对象">
            <a-checkbox-group v-model="dialog.form.objectsList">
              <a-checkbox v-for="(objectItem, objectIndex) in SHOW_OBJECT_CONFIG" :key="objectIndex" :value="objectItem.value">{{ objectItem.label }}</a-checkbox>
            </a-checkbox-group>
          </a-form-model-item>
        </template>
        <!-- 对象探索 -->
        <template v-if="dialog.form.graphType === '对象探索'">
          <a-form-model-item label="显示对象">
            <a-checkbox-group v-model="dialog.form.objectsList">
              <a-checkbox v-for="(objectItem, objectIndex) in SHOW_OBJECT_CONFIG" :key="objectIndex" :value="objectItem.value">{{ objectItem.label }}</a-checkbox>
            </a-checkbox-group>
          </a-form-model-item>
          <a-form-model-item label="选择对象">
            <a-select v-model="dialog.form.singleObject" placeholder="请先选择对象">
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
          <a-form-model-item label="显示对象">
            <a-checkbox-group v-model="dialog.form.objectsList">
              <a-checkbox v-for="(objectItem, objectIndex) in SHOW_OBJECT_CONFIG" :key="objectIndex" :value="objectItem.value">{{ objectItem.label }}</a-checkbox>
            </a-checkbox-group>
          </a-form-model-item>
          <a-form-model-item label="对象1">
            <a-select v-model="dialog.form.relatedObject.first" placeholder="请先选择对象">
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
            <a-select v-model="dialog.form.relatedObject.second" placeholder="请先选择对象">
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
      <!--<pre class="well" v-text="dialog.form"></pre>-->
    </a-modal>
  </div>
</template>

<script>
import config from './dist/config'
import { realData as data } from './dist/data'
import dataManage from './dist/dataManage'
import flexibleManagement from './dist/flexibleManagement'
// 背景图片
import DiscoveryBgLight from '@/assets/image/discovery_bg_light.png'
import DiscoveryBgBlue from '@/assets/image/discovery_bg_blue.png'
import DiscoveryBgDark from '@/assets/image/discovery_bg_dark.png'

const THEME_CONFIG = [
  { label: '朴素白', value: 'light' },
  { label: '工作蓝', value: 'blue' },
  { label: '经典黑', value: 'dark' }
]
const DEFAULT_THEME = 'light'
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

// 处理数据
const nodes = data.nodes
const edges = dataManage.optimizeTarget(dataManage.optimizeSource(data.edges, nodes), nodes)

export default {
  name: 'Index',
  data() {
    return {
      original: {
        nodes: nodes,
        edges: edges
      },
      filter: {
        nodes: [],
        edges: []
      },
      // 编辑对话框
      dialog: {
        visible: false,
        form: {
          theme: DEFAULT_THEME,
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
      },
      THEME_CONFIG,
      TASK_TYPE_CONFIG,
      SHOW_OBJECT_CONFIG,
      GRAPH_TYPE_CONFIG,
      allObject: [] // 根据数据，求得所有对象
    }
  },
  computed: {
    // 人员节点集合
    imageNode() { return this.allObject.filter(e => e.type === 'image') },
    // 部门节点集合
    departNode() { return this.allObject.filter(e => e.type === 'DEPART') },
    // 任务节点集合
    taskNode() { return this.allObject.filter(e => e.type === 'TASK') }
  },
  watch: {
    'dialog.form.theme': {
      handler: function(newValue) {
        document.getElementById('container').style.backgroundImage = `url("${THEME_BG[newValue]}")`
        flexibleManagement.setConfig(config[newValue])
        flexibleManagement.reset()
      }
    },
    // 切换图形类型
    'dialog.form.graphType': {
      handler: function() {
        // 还原
        this.dialog.form.singleObject = null
        this.dialog.form.relatedObject = { first: null, second: null }
      }
    },
    // 关系探索 - 切换显示对象
    'dialog.form.objectsList': {
      handler: function(newValue) {
        // 清空
        this.filter.nodes = []
        this.filter.edges = []
        // 过滤节点
        newValue.forEach(type => {
          this.filter.nodes.push(...this.original.nodes.filter(node => node.type === type))
        })
        // 过滤连线（）
        // newValue.forEach(type => {
        //   this.filter.edges.push(...this.original.edges.filter(node => node.source.type === type))
        // })
        this.filter.edges = this.original.edges.filter(e => newValue.includes(e.source.type) && newValue.includes(e.target.type))
        // 设置
        flexibleManagement.setNodes(this.filter.nodes)
        flexibleManagement.setEdges(this.filter.edges)
        flexibleManagement.clear() // 清空
        flexibleManagement.render() // 渲染
      }
    },
    // 对象探索 - 切换对象
    'dialog.form.singleObject': {
      handler: function(newValue) {
        console.log('对象探索 - 切换对象', newValue)
        const nodes = this.original.nodes.filter(node => node.id === newValue)
        flexibleManagement.setNodes(nodes)
        flexibleManagement.setEdges([]) // 没有线
        flexibleManagement.clear() // 清空
        flexibleManagement.render() // 渲染
      }
    },
    // 相对关系 - 切换对象1
    'dialog.form.relatedObject.first': {
      handler: function(newValue) {
        if (!this.dialog.form.relatedObject.second) return
        const node_1_id = this.dialog.form.relatedObject.first
        const node_2_id = this.dialog.form.relatedObject.second
        // ...
        const nodes = [...this.original.nodes.filter(node => node.id === node_1_id), ...this.original.nodes.filter(node => node.id === node_2_id)]
        flexibleManagement.setNodes(nodes)
        flexibleManagement.setEdges([]) // 没有线
        flexibleManagement.clear() // 清空
        flexibleManagement.render() // 渲染
      }
    },
    // 相对关系 - 切换对象2
    'dialog.form.relatedObject.second': {
      handler: function(newValue) {
        if (!this.dialog.form.relatedObject.first) return
        const node_1_id = this.dialog.form.relatedObject.first
        const node_2_id = this.dialog.form.relatedObject.second
        // ...
        const nodes = [...this.original.nodes.filter(node => node.id === node_1_id),
          ...this.original.nodes.filter(node => node.id === node_2_id)]
        flexibleManagement.setNodes(nodes)
        flexibleManagement.setEdges([]) // 没有线
        flexibleManagement.clear() // 清空
        flexibleManagement.render() // 渲染
      }
    }
  },
  mounted() {
    // 正文
    this.$nextTick(() => {
      // 设置背景图
      document.getElementById('container').style.backgroundImage = `url("${THEME_BG[this.theme]}")`
      // 画图
      this.renderGraph()
    })
  },
  methods: {
    renderGraph() {
      // ???
      this.allObject = this.original.nodes
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
    // +-------------------------------------------------------------------------------------------
    // + 对话框
    // +-------------------------------------------------------------------------------------------
    // 打开编辑对话框
    showDialog() {
      this.dialog.visible = true
    },
    // 关闭
    hideDialog() {
      this.dialog.visible = false
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
</style>
