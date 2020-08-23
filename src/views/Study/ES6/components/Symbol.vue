<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <a-button type="primary" @click="handleClick">点击，查看控制台</a-button>
      </div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'

export default {
  name: 'MySymbol',
  components: {
    GoBack,
    MyComponent
  },
  data() {
    return {
      visible: false,
      s: Symbol('school')
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
    handleClick() {
      console.log(this.s)
      console.log(typeof this.s)
      console.log(this.s.description)
      console.log(Boolean(!Symbol(123)))
    }
  }
}
</script>

<style lang="less" scoped>
</style>
