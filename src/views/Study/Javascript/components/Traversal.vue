<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <!-- ... -->
        <h1>Traversal</h1>
        <a-divider orientation="left">123</a-divider>
        <a-button type="primary" @click="onlyBreak">查看</a-button>
        <a-button type="primary" @click="breakWithLabel">查看</a-button>
      </div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'

export default {
  name: 'Traversal',
  components: {
    GoBack,
    MyComponent
  },
  data() {
    return {
      visible: false
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
    // 条件成立break跳出的是内部的循环
    onlyBreak() {
      let num = 0
      for (let i = 0; i < 5; i++) {
        console.log('i:', i)
        for (let j = 0; j < 5; j++) {
          console.log('j+:', j)
          if (i === 3 && j === 3) {
            console.log('break')
            break
          }
          num++
        }
      }
      console.log(num)
    },
    // out就是for循环中的label指向的是当前的循环块
    // 当break out时 跳出的是out指向的代码块
    // continue 同理
    breakWithLabel() {
      let num = 0
      // eslint-disable-next-line no-labels
      out:
      for (let i = 0; i < 5; i++) {
        console.log('i:', i)
        for (let j = 0; j < 5; j++) {
          console.log('j+:', j)
          if (i === 3 && j === 3) {
            console.log('break')
            // eslint-disable-next-line no-labels
            break out
          }
          num++
        }
      }
      console.log(num) // 55
    }
  }
}
</script>

<style lang="less" scoped>
</style>
