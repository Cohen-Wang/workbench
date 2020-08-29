<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <!-- ... -->
        <blockquote>
          迫使Vue实例重新渲染。注意它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。
        </blockquote>
        <blockquote>
          但是如果对于一个复杂的对象，例如一个对象数组，你直接去给数组上某一个元素增加属性，或者直接把数组的length变成0，vue就无法知道发生了改变。
        </blockquote>
        <pre class="well" v-text="arr"></pre>
        <a-button type="primary" @click="handleClick">$forceUpdate</a-button>
      </div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'

export default {
  name: 'ForceUpdate',
  components: {
    GoBack,
    MyComponent
  },
  data() {
    return {
      visible: false,
      arr: [
        { name: 'cohen', age: 23, school: ['西华师范大学', '西南财经大学'] },
        { name: 'kobe', age: 33 }
      ]
    }
  },
  created() {
    setTimeout(() => {
      this.arr[0].school[0] = '没有读过大学'
      this.$message.info(
        '数组arr已经被改变，但是dom上却并未修改。此时必须强制重新渲染',
        10
      )
    }, 3000)
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
      this.$forceUpdate()
    }
  }
}
</script>

<style lang="less" scoped></style>
