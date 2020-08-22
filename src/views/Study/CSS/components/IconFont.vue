<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <div class="d-flex">
          <div class="d-flex flex-1 pl-20 pr-20" style="flex-direction: column;">
            <i class="iconfont" style="font-size: 40px;background-color: lightskyblue;">&#xe63d;</i>
            <i class="iconfont" style="font-size: 40px;color: lightskyblue;">&#xe63d;</i>
          </div>
          <div class="d-flex flex-1 pl-20 pr-20" style="flex-direction: column;">
            <i class="iconfont" style="font-size: 40px;background-color: orangered;">&#xe711;</i>
            <i class="iconfont" style="font-size: 40px;color: orangered;">&#xe711;</i>
          </div>
          <div class="d-flex flex-1 pl-20 pr-20" style="flex-direction: column;">
            <i class="iconfont" style="font-size: 40px;background-color: greenyellow;">&#xe62f;</i>
            <i class="iconfont" style="font-size: 40px;color: greenyellow;">&#xe62f;</i>
          </div>
          <div class="d-flex flex-1 pl-20 pr-20" style="flex-direction: column;">
            <i class="iconfont" style="font-size: 40px;background-color: lightgray;">&#xe639;</i>
            <i class="iconfont" style="font-size: 40px;color: lightgray;">&#xe639;</i>
          </div>
        </div>
        <hr>
        <div class="d-flex">
          <div class="d-flex flex-1 pl-20 pr-20" style="flex-direction: column;">
            <input type="submit" class="iconfont" value="&#xe639;" style="font-size: 40px;color: red;">
            <input class="iconfont" type="search" value="" placeholder="&#xe639;" name="keyword">
          </div>
        </div>
        <hr>
        <div class="d-flex">
          <div class="d-flex flex-1 pl-20 pr-20" style="flex-direction: column;">
            <button type="submit" class="iconfont" style="font-size: 40px;color: red;">&#xe639;</button>
          </div>
        </div>
      </div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'

export default {
  name: 'Flex',
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
    }
  }
}
</script>

<style lang="less" scoped>
  .hide-scrollbar {
    height: 500px;
    border: 1px solid #999;
    overflow: auto;

    &::-webkit-scrollbar{
      display:none;
    }

    &>div {
      height: 100px;
      line-height: 100px;
      box-sizing: border-box;
      border: 1px solid #999;
      text-align: center;
    }
  }
</style>
