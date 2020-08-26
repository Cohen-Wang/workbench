<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <!-- tree -->
        <div>
          <a-row :gutter="[16, 16]">
            <!-- 添加图标 -->
            <a-col :xs="24" :sm="12" :md="6" :lg="6" :xl="4">
              <blockquote>基础</blockquote>
              <div style="background-color: #f8f8f8;">
                <a-tree v-if="treeData.length > 0"
                        :tree-data="treeData"
                        show-icon
                        default-expand-all
                        :default-selected-keys="['0-0-0']">
                  <a-icon slot="switcherIcon" type="down"/>
                  <a-icon slot="smile" type="smile-o"/>
                  <a-icon slot="meh" type="smile-o"/>
                  <template slot="custom" slot-scope="{ selected }">
                    <a-icon :type="selected ? 'frown' : 'frown-o'"/>
                  </template>
                </a-tree>
              </div>
            </a-col>
            <!-- 点击右键 -->
            <a-col :xs="24" :sm="12" :md="6" :lg="6" :xl="4">
              <blockquote>点击右键</blockquote>
              <div style="background-color: #f8f8f8;">
                <template>
                  <a-dropdown :trigger="[rightClickTrigger]"
                              @visibleChange="dropStatus">
                  <span style="user-select: none">
                    <a-tree :treeData="treeData"
                            @rightClick="rightHandle"
                            @expand="onExpand"/>
                    <!--:selected-keys="selectedKeys"
                        :checkedKeys="checkedKeys"
                        :checkStrictly="checkStrictly"
                        :expandedKeys="iExpandedKeys"
                        :autoExpandParent="autoExpandParent"-->
                  </span>
                    <!--新增右键点击事件,和增加添加和删除功能-->
                    <a-menu slot="overlay" @click="handleMenuClick">
                      <a-menu-item @click="handleAdd" key="1">添加</a-menu-item>
                      <a-menu-item @click="handleDelete" key="2">删除</a-menu-item>
                      <a-menu-item @click="handleCancel" key="3">取消</a-menu-item>
                    </a-menu>
                  </a-dropdown>
                </template>
              </div>
            </a-col>
          </a-row>
        </div>
      </div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'

export default {
  name: 'TreeStudy',
  components: {
    GoBack,
    MyComponent
  },
  data() {
    return {
      visible: false,
      treeData: [], // 请求获取
      rightClickTrigger: ''
    }
  },
  methods: {
    // +---------------------------------------------------------------------------------------------
    // | 页面
    // +---------------------------------------------------------------------------------------------
    show() {
      this.visible = true
      this.get()
    },
    goBack() {
      this.visible = false
    },
    // +---------------------------------------------------------------------------------------------
    // | 请求
    // +---------------------------------------------------------------------------------------------
    async get() {
      this.treeData = await this.getData()
      console.log('this.treeData', this.treeData)
    },
    getData() {
      return new Promise(resolve => {
        const url = '/ant-design/tree'
        this.$axios.get(url).then(res => {
          if (!res.statusText) return this.$message.error('没有获取到数据')
          const result = res.data.records
          resolve(result)
        }).catch(err => {
          console.log(err)
        })
      })
    },
    // +---------------------------------------------------------------------------------------------
    // | 主题
    // +---------------------------------------------------------------------------------------------
    onSelect(selectedKeys, info) {
      console.log('selected', selectedKeys, info)
    },
    onCheck(checkedKeys, info) {
      console.log('onCheck', checkedKeys, info)
    },
    // +---------------------------------------------------------------------------------------------
    // | 点击右键
    // +---------------------------------------------------------------------------------------------
    handleAdd() {
      console.log('handleAdd')
    },
    handleDelete() {
      console.log('handleDelete')
    },
    handleCancel() {
      console.log('handleCancel')
    },
    //
    rightHandle(option) {
      this.rightClickTrigger = 'contextmenu'
      console.log(option.node.eventKey)
    },
    handleMenuClick(e) {
      console.log(e)
    },
    selectedKeys() {
      console.log('selectedKeys')
    },
    checkedKeys() {
      console.log('checkedKeys')
    },
    departTree() {
      console.log('departTree')
    },
    checkStrictly() {
      console.log('checkStrictly')
    },
    iExpandedKeys() {
      console.log('iExpandedKeys')
    },
    autoExpandParent() {
      console.log('autoExpandParent')
    },
    onExpand() {
      console.log('onExpand')
    },
    dropStatus() {
      console.log('dropStatus')
    }
  }
}
</script>

<style lang="less" scoped>
</style>
