<template>
  <section id="tinymce-editor"></section>
</template>

<script>
import './tinymce.min'
import './themes/silver/theme.min'
/* 语言 */
import './langs/zh_CN'
/* 插件 */
import './plugins/preview/plugin.min'
import './plugins/image/plugin.min'
import './plugins/media/plugin.min'
import './plugins/table/plugin.min'
import './plugins/lists/plugin.min'
import './plugins/contextmenu/plugin.min'
import './plugins/wordcount/plugin.min'
import './plugins/colorpicker/plugin.min'
import './plugins/textcolor/plugin.min'

export default {
  name: 'Index',
  props: {
    debug: {
      type: Boolean,
      defalut: false
    },
    //传入一个value，使组件支持v-model绑定
    value: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 300
    },
    // 是否显示状态栏
    statusbar: {
      type: Boolean,
      default: true
    },
    // 插件配置
    plugins: {
      type: [String, Array, Boolean],
      default: 'lists image media table textcolor wordcount contextmenu'
    },
    // 工具栏配置
    toolbar: {
      type: [String, Array, Boolean],
      default: 'undo redo |  formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image media table | removeformat'
    },
    // 带单兰
    menubar: {
      type: [String, Array, Boolean],
      default: 'bar1 bar2',
    },
    menu: {
      bar1: { title: '菜单栏1', items: 'copy paste' },
      bar2: { title: '菜单栏2', items: 'cut' }
    },
    // disabled: {
    //   type: Boolean,
    //   default: false
    // },
  },
  data() {
    return {
      // 绑定值
      myValue: this.value,
      // 初始化数据
      init: {
        selector: '#tinymce-editor',
        language: 'zh_CN', // 语言
        // 高度
        height: this.height,
        // ？？？？？？？？
        branding: false,
        // 去掉最下面的提示
        statusbar: this.statusbar,
        // 插件
        plugins: this.plugins,
        // 菜单栏
        menubar: this.menubar,
        menu: this.menu,
        // 工具栏
        toolbar: this.toolbar,
        // 监听 tinymce初始化完成事件
        setup: (editor) => {
          editor.on('init', (e) => {
            editor.setContent(this.value)
          })
        },
        // 监听input 和 change 事件，实时更新
        init_instance_callback: (editor) => {
          editor.on('input', (e) => {
            if (this.debug) console.log('input:', e.target.innerHTML)
            this.$emit('input', e.target.innerHTML)
          })
          editor.on('change', (e) => {
            if (this.debug) console.log('change:', e.level.content)
            this.$emit('change', e.level.content)
          })
        }
      }
      //初始化配置
      // init: {
      //   //此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
      //   //如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
      //   images_upload_handler: (blobInfo, success, failure) => {
      //     const img = 'data:image/jpeg;base64,' + blobInfo.base64()
      //     success(img)
      //   }
      // },
    }
  },
  mounted() {
    tinymce.init(this.init)
  },
  methods: {
    // 添加相关的事件，可用的事件参照文档=> https://github.com/tinymce/tinymce-vue => All available events
    // 需要什么事件可以自己增加
    onClick(e) {
      this.$emit('onClick', e, tinymce)
    },
    // 可以添加一些自己的自定义事件，如清空内容
    clear() {
      this.myValue = ''
    }
  },
  watch: {
    value(newValue) {
      this.myValue = newValue
    },
    myValue(newValue) {
      this.$emit('input', newValue)
    }
  }
}
</script>

<style lang="less" scoped>
  @import url('./skins/ui/oxide/skin.min.css');
</style>
