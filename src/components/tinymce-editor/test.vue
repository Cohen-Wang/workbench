<template>
  <section id="tinymce-editor"></section>
</template>

<script>
import './tinymce.min'
import './themes/silver/theme.min'
import './langs/zh_CN'
import './plugins/preview/plugin.min'

export default {
  name: 'Index',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  mounted() {
    tinymce.init({
      selector: '#tinymce-editor',
      language: 'zh_CN', // 语言
      // 菜单栏
      // 去掉最下面的提示
      statusbar: false,
      menubar: 'bar1 bar2',
      menu: {
        bar1: {
          title: '菜单栏1',
          items: 'copy paste'
        },
        bar2: {
          title: '菜单栏2',
          items: 'cut'
        }
      },
      // 工具栏
      toolbar: 'undo redo preview',
      // 插件
      plugins: 'preview',
      // 监听 tinymce初始化完成事件
      setup: (editor) => {
        editor.on('init', (e) => {
          editor.setContent(this.value)
        })
      },
      // 监听input 和 change 事件，实时更新
      init_instance_callback: (editor) => {
        editor.on('input', (e) => {
          this.$emit('input', e.target.innerHTML)
        })
        editor.on('change', (e) => {
          this.$emit('change', e.level.content)
        })
      }
    })
  }
}
</script>

<style lang="less" scoped>
  @import url('./skins/ui/oxide/skin.min.css');
</style>
