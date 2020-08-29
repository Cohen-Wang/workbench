<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <div>
          <blockquote>注意：只有当组件在 'keep-alive' 内被切换，才会有activated 和 deactivated 这两个钩子函数</blockquote>
          <a-button-group>
            <a-button type="primary" @click="nowComponent = 'KeepAliveA'">切换A组件</a-button>
            <a-button type="primary" @click="nowComponent = 'KeepAliveB'">切换B组件</a-button>
          </a-button-group>
          <p>{{ nowComponent }}</p>
          <!-- ... -->
          <keep-alive>
            <component :is="nowComponent"></component>
          </keep-alive>
        </div>
      </div>
    </my-component>
    <!-- 组件 -->
    <!--<keep-alive-a/>
    <keep-alive-b/>-->
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'
import KeepAliveA from './KeepAliveA'
import KeepAliveB from './KeepAliveB'

export default {
  name: 'KeepAliveStudy',
  components: {
    GoBack,
    MyComponent,
    KeepAliveA,
    KeepAliveB
  },
  data() {
    return {
      visible: false,
      nowComponent: 'KeepAliveA'
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
