<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <a-form layout="vertical">
          <a-form-item>
            <a-input type="number" v-model.number="a"/>
          </a-form-item>
        </a-form>
        <pre class="well">this.a ** 2</pre>
        <p class="lead">平方后结果：{{ squareA }}</p>
      </div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'

export default {
  name: 'Square',
  components: {
    GoBack,
    MyComponent
  },
  data() {
    return {
      visible: false,
      a: 1
    }
  },
  computed: {
    squareA() {
      return this.a ** 2
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

