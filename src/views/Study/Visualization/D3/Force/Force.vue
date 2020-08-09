<template>
  <div>
    <div class="panel panel-primary">
      <div class="panel-heading">
        <div class="panel-title">力导图</div>
        <div class="panel-editor">
          <a href="javascript:void(0);" @click="showEditorDialog" style="color: #fff;">编辑</a>
        </div>
      </div>
      <div class="panel-body panel-body-box">
        <div id="container" class="graph-box">
          <!-- ... -->
        </div>
      </div>
    </div>
    <!-- 编辑对话框 -->
    <a-modal title="编辑"
             :visible="editorDialog.visible"
             :width="500"
             :mask-closable="false"
             cancel-text="取消"
             ok-text="确定"
             @ok="onConfirm"
             @cancel="hideEditorDialog">
      <a-form-model :model="editorDialog.form" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
        <a-form-model-item label="任务类型">
          <template v-for="(taskItem, taskIndex) in TASK_TYPE_CONFIG">
            <span :key="taskIndex" style="margin-right: 16px;">
              <a-icon  type="cloud" :style="{ color: taskItem.color }" style="margin-right: 6px;"/>
              {{ taskItem.label }}
            </span>
          </template>
        </a-form-model-item>
        <a-form-model-item label="图形类型">
          <a-radio-group v-model="editorDialog.form.graphType">
            <a-radio v-for="(item, index) in GRAPH_TYPE_CONFIG"
                     :key="index"
                     :value="item">
              {{ item }}
            </a-radio>
          </a-radio-group>
        </a-form-model-item>
        <!-- 关系探索 -->
        <template v-if="editorDialog.form.graphType === '关系探索'">
          <a-form-model-item label="显示对象">
            <a-checkbox-group v-model="editorDialog.form.objectsList">
              <a-checkbox v-for="(objectItem, objectIndex) in SHOW_OBJECT_CONFIG"
                          :key="objectIndex"
                          :value="objectItem">
                {{ objectItem }}
              </a-checkbox>
            </a-checkbox-group>
          </a-form-model-item>
        </template>
        <!-- 对象探索 -->
        <template v-if="editorDialog.form.graphType === '对象探索'">
          <a-form-model-item label="选择对象">
            <a-select v-model="editorDialog.form.SingleObject" placeholder="请先选择对象">
              <a-select-opt-group label="人员">
                <a-select-option v-for="(item, index) in imageNode" :key="index" :value="item.id">
                  {{ item.name }}
                </a-select-option>
              </a-select-opt-group>
              <a-select-opt-group label="部门">
                <a-select-option v-for="(item, index) in departNode" :key="index" :value="item.id">
                  {{ item.name }}
                </a-select-option>
              </a-select-opt-group>
              <a-select-opt-group label="任务">
                <a-select-option v-for="(item, index) in taskNode" :key="index" :value="item.id">
                  {{ item.name }}
                </a-select-option>
              </a-select-opt-group>
            </a-select>
          </a-form-model-item>
        </template>
        <!-- 相对关系 -->
        <template v-if="editorDialog.form.graphType === '相对关系'">
          <a-form-model-item label="对象1">
            <a-select v-model="editorDialog.form.relatedObject.first" placeholder="请先选择对象">
              <a-select-opt-group label="人员">
                <a-select-option v-for="(item, index) in imageNode" :key="index" :value="item.id">
                  {{ item.name }}
                </a-select-option>
              </a-select-opt-group>
              <a-select-opt-group label="部门">
                <a-select-option v-for="(item, index) in departNode" :key="index" :value="item.id">
                  {{ item.name }}
                </a-select-option>
              </a-select-opt-group>
              <a-select-opt-group label="任务">
                <a-select-option v-for="(item, index) in taskNode" :key="index" :value="item.id">
                  {{ item.name }}
                </a-select-option>
              </a-select-opt-group>
            </a-select>
          </a-form-model-item>
          <a-form-model-item label="对象2">
            <a-select v-model="editorDialog.form.relatedObject.second" placeholder="请先选择对象">
              <a-select-opt-group label="人员">
                <a-select-option v-for="(item, index) in imageNode" :key="index" :value="item.id">
                  {{ item.name }}
                </a-select-option>
              </a-select-opt-group>
              <a-select-opt-group label="部门">
                <a-select-option v-for="(item, index) in departNode" :key="index" :value="item.id">
                  {{ item.name }}
                </a-select-option>
              </a-select-opt-group>
              <a-select-opt-group label="任务">
                <a-select-option v-for="(item, index) in taskNode" :key="index" :value="item.id">
                  {{ item.name }}
                </a-select-option>
              </a-select-opt-group>
            </a-select>
          </a-form-model-item>
        </template>
      </a-form-model>
      <pre class="well" v-text="editorDialog.form"></pre>
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
import { mapGetters } from 'vuex'

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
const SHOW_OBJECT_CONFIG = ['人员', '部门', '任务']
const DEFAULT_OBJECTS_LIST = ['人员', '部门', '任务']
// 显示哪种关系
const GRAPH_TYPE_CONFIG = ['关系探索', '对象探索', '相对关系']
const DEFAULT_GRAPH_TYPE = '关系探索'

export default {
  name: 'Force',
  data() {
    return {
      edges: data.edges,
      nodes: data.nodes,
      // 编辑对话框
      editorDialog: {
        visible: false,
        form: {
          graphType: DEFAULT_GRAPH_TYPE,
          // 关系探索
          objectsList: DEFAULT_OBJECTS_LIST, // 展示对象
          // 对象探索
          SingleObject: null,
          // 相对关系
          relatedObject: {
            first: null,
            second: null
          }
        }
      },
      TASK_TYPE_CONFIG,
      SHOW_OBJECT_CONFIG,
      GRAPH_TYPE_CONFIG,
      allObject: [] // 根据数据，求得所有对象
    }
  },
  computed: {
    ...mapGetters(['theme']),
    // 人员节点
    imageNode() {
      return this.allObject.filter(e => e.type === 'image')
    },
    // 部门节点
    departNode() {
      return this.allObject.filter(e => e.type === 'DEPART')
    },
    // 任务节点
    taskNode() {
      return this.allObject.filter(e => e.type === 'TASK')
    }
  },
  watch: {
    theme(newValue, oldValue) {
      console.log(newValue, oldValue)
      document.getElementById('container').style.backgroundImage = `url("${THEME_BG[newValue]}")`
      flexibleManagement.setConfig(config[newValue])
      flexibleManagement.reset()
    },
    'editorDialog.form.graphType': {
      handler: function() {
        console.log('改变图形类型')
      }
    }
  },
  mounted() {
    // 正文
    this.$nextTick(() => {
      // 设置背景图
      document.getElementById('container').style.backgroundImage = `url("${THEME_BG[this.theme]}")`
      // 画图
      this.show()
    })
  },
  methods: {
    show() {
      // ???
      this.allObject = data.nodes
      console.log(this.allObject)
      // 处理数据
      this.edges = dataManage.optimizeSource(this.edges, data.nodes)
      this.edges = dataManage.optimizeTarget(this.edges, data.nodes)
      // 初始化
      flexibleManagement.init({
        id: 'container',
        nodes: this.nodes,
        edges: this.edges,
        config: config[this.theme]
      })
      // ?
      flexibleManagement.render()
    },
    // +-------------------------------------------------------------------------------------------
    // + 对话框
    // +-------------------------------------------------------------------------------------------
    // 打开编辑对话框
    showEditorDialog() {
      this.editorDialog.visible = true
    },
    // 点击确定
    onConfirm() {
      // ?
      this.editorDialog.visible = false
    },
    // 关闭
    hideEditorDialog() {
      this.editorDialog.visible = false
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
    background: url("../../../../../assets/image/discovery_bg_blue.png");
    height: 100%;
    user-select: none;
  }
</style>
