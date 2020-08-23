<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <a-button type="primary" @click="handleClick">点击我，请求，查看控制台</a-button>
      </div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'

export default {
  name: 'Fetch',
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
    handleClick() {
      const url = './Fetch.json'
      const data = { username: 'abc', password: 123 }
      fetch(url, data).then(function(res) {
        console.log(res)
        // return res.json()
      }).then(function(myJson) {
        console.log(myJson)
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
