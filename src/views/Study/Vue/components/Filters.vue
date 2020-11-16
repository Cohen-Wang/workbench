<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <!-- ... -->
        <a-divider orientation="left">filters</a-divider>
        <span>值：</span><a-input v-model="attachSize"/>
        <p>{{ attachSize | filterSize }}</p>
      </div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'

export default {
  name: 'Filters',
  components: {
    GoBack,
    MyComponent
  },
  data() {
    return {
      visible: false,
      attachSize: 0
    }
  },
  filters: {
    filterSize(attachSize) {
      attachSize = parseInt(attachSize)
      // kb
      attachSize = (attachSize / 1024).toFixed(2)
      // 少于100kb，单位用kb
      if (attachSize < 100) {
        return attachSize + 'kb'
      } else {
        // mb
        attachSize = (attachSize / 1024).toFixed(2)
      }
      attachSize = attachSize + ''
      if (attachSize.length > 5) {
        attachSize = attachSize.substring(0, 4)
      }
      attachSize = attachSize + 'M'
      return attachSize
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
