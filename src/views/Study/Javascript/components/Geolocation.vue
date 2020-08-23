<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        123
      </div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'

export default {
  name: 'Geolocation',
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
      this.getGeo()
      console.log('navigator', navigator)
      console.log('navigator.geolocation', navigator.geolocation)
    },
    goBack() {
      this.visible = false
    },
    getGeo() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log('position', position)
          console.log(`纬度：${position.coords.latitude}`)
          console.log(`经度：${position.coords.longitude}`)
        }, (error) => {
          const msg = error.code + '\n' + error.message
          console.log(msg)
        })
      } else {
        alert('您当前浏览器不支持或者你取消了获取当前位置信息')
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
