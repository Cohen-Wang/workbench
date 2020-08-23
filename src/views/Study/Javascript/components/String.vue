<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <div class="box">
          <blockquote>arr.toString()</blockquote>
          <pre class="well">
          {{ arr1.toString() }}
        </pre>
          <pre class="well">
          {{ arr2.toString() }}
        </pre>
        </div>
      </div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'

export default {
  name: 'StringVue',
  components: {
    GoBack,
    MyComponent
  },
  data() {
    return {
      visible: false,
      arr1: [1, 2, 3, 4, 5],
      arr2: ['a', 'b', 'c']
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
  }
}
</script>

<style lang="less" scoped>
</style>
