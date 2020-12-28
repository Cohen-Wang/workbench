<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <!-- ... -->
        <a-button type="primary"
                  size="large"
                  @click="handleClick">
          开始
        </a-button>
        <span>用户是否在电脑面前：{{ isHere ? '在' : '没在' }}</span>
      </div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'

const delay = (duration, callback) => {
  return window.setTimeout(() => {
    callback && callback()
  }, duration)
}

export default {
  name: 'IntervalAndCallback',
  components: {
    GoBack,
    MyComponent
  },
  data() {
    return {
      visible: false,
      // ...
      count: 0,
      countTimer: null,
      // ...
      timer: null,
      isHere: false
    }
  },
  beforeDestroy() {
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = null
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
    },
    // +---------------------------------------------------------------------------------------------
    // | 正文
    // +---------------------------------------------------------------------------------------------
    handleClick() {
      console.log('点击开始', this.timer)
      if (this.timer) return
      // ...
      this.isHere = true
      this.startCount()
      // 定时器
      this.timer = delay(3 * 1000, () => {
        this.checkOnline()
      })
    },
    // 时间到后，确认用户在线吗
    checkOnline() {
      this.isHere = false
      this.shutCount()
      const _this = this
      this.$confirm({
        title: '提示',
        content: h => <div style='color: lightred;'>请问你要继续学习吗？</div>,
        okText: '继续',
        cancelText: '取消',
        onOk() {
          console.log('点击确定')
          _this.isHere = true
          _this.startCount()
          delay(3 * 1000, () => {
            _this.checkOnline()
          })
        },
        onCancel() {
          console.log('点击取消')
          _this.timer = null
        }
      })
    },
    // +----------------------------------------------------------------------------------------------------------------
    // | 控制台打印count，用于观察
    // +----------------------------------------------------------------------------------------------------------------
    // 开始计时
    startCount() {
      // 如果存在，先清空
      this.shutCount()
      // 执行
      this.countTimer = window.setInterval(() => {
        this.count++
        this.$message.info(`count: ${this.count}`)
      }, 1000)
    },
    // 关闭计时
    shutCount() {
      if (!this.countTimer) return
      clearInterval(this.countTimer)
      this.countTimer = null
      this.count = 0
    }
  }
}
</script>

<style lang="less" scoped>
</style>
