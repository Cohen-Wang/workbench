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
             :width="800"
             :mask-closable="false"
             okText="确认"
             cancelText="取消"
             @ok="onConfirm"
             @cancel="hideEditorDialog">
      <p>暂无内容</p>
      <!--<a-form-model :model="form" :label-col="{ span: 4 }" :wrapper-col="{ span: 14 }">
        <a-form-model-item label="选择主题">
          <a-radio-group v-model="form.theme" @change="changeTheme">
            <a-radio-button v-for="(styleItem, styleIndex) in THEME_CONFIG"
                            :key="styleIndex"
                            :value="styleItem.value">
              {{ styleItem.label }}
            </a-radio-button>
          </a-radio-group>
        </a-form-model-item>
      </a-form-model>-->
    </a-modal>
  </div>
</template>

<script>
import config from './Force/config'
import { realData as data } from './Force/data'
import dataManage from './Force/dataManage'
import flexibleManagement from './Force/flexibleManagement'
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

export default {
  name: 'Force',
  data() {
    return {
      edges: data.edges,
      nodes: data.nodes,
      // 编辑对话框
      editorDialog: {
        visible: false
      }
    }
  },
  computed: {
    ...mapGetters(['theme'])
  },
  watch: {
    theme(newValue, oldValue) {
      console.log(newValue, oldValue)
      document.getElementById('container').style.backgroundImage = `url("${THEME_BG[newValue]}")`
      flexibleManagement.setConfig(config[newValue])
      flexibleManagement.reset()
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
    background: url("../../../../assets/image/discovery_bg_blue.png");
    height: 100%;
    user-select: none;
  }
</style>
