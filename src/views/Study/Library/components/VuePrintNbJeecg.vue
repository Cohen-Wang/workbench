<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <!-- ... -->
        <h1>打印插件</h1>
        <div id="printMe">
          <pre v-text="content"/>
        </div>
        <a-divider/>
        <a-button v-print="'#printMe'" type="primary">打印</a-button>
      </div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'

export default {
  name: 'VuePrintNbJeecg',
  components: {
    GoBack,
    MyComponent
  },
  data() {
    return {
      visible: false,
      content: [
        {
          name: '张三',
          age: 23
        },
        {
          name: '李四',
          age: 33
        }
      ]
    }
  },
  methods: {
    // +---------------------------------------------------------------------------------------------
    // | 页面
    // +---------------------------------------------------------------------------------------------
    show() {
      this.visible = true
    },
    goBack() {
      this.visible = false
    }
    // +---------------------------------------------------------------------------------------------
    // | 正文
    // +---------------------------------------------------------------------------------------------
  }
}
</script>

<style lang="less" scoped>
</style>
