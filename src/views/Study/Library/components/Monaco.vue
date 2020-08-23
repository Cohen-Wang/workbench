<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <div class="box">
          <blockquote>基础</blockquote>
          <div ref="base" class="editor">
            <!-- 编辑器 -->
          </div>
        </div>
      </div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'
import * as monaco from 'monaco-editor'

export default {
  name: 'Monaco',
  components: {
    GoBack,
    MyComponent
  },
  data() {
    return {
      visible: false,
      // ...
      editor: null,
      // 黑色主题，vs是白色主题，我喜欢黑色
      curTheme: 'vs-dark'
    }
  },
  created() {
    console.log('monaco', monaco)
  },
  methods: {
    // +---------------------------------------------------------------------------------------------
    // | 页面
    // +---------------------------------------------------------------------------------------------
    show() {
      this.visible = true
      // 注意这个初始化没有指定model，可以自己创建一个model，然后使用this.editor.setModel设置进去
      // 创建model时指定uri，之后可以通过monaco.editor.getModel(uri)获取指定的model
      // 没有设置model的话，接下来的代码没有办法执行
      this.editor = monaco.editor.create(this.$refs.base, { theme: this.curTheme, automaticLayout: true })
    },
    goBack() {
      this.visible = false
    }
  }
}
</script>

<style lang="less" scoped>
  .editor {
    height: 400px;
  }
</style>
