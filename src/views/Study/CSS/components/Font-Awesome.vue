<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <div>
          <blockquote>1.安装：</blockquote>
          <p><kbd>npm install font-awesome &#45;&#45;save</kbd></p>
        </div>
        <hr class="mb-50"/>

        <div>
          <blockquote>2.可以在<code>flexibleManagement.js</code>全局引用。 也可以在<code>组件</code>中局部引用。</blockquote>
          <p>注意路径：<kbd>import 'font-awesome/css/font-awesome.css'</kbd></p>
        </div>
        <hr class="mb-50"/>

        <div>
          <blockquote>3.使用方法</blockquote>
          <p><kbd>&lt;i class="fa fa-cart-plus"&gt;&lt;/i&gt;</kbd></p>
          <div class="d-flex">
            <div class="flex-1">
              <div class="icon  font-lightgray font-40 lh-40 mb-10"><i class="fa fa-cart-plus"></i></div>
              <div class="icon  font-lightgray font-60 lh-40 mb-10"><i class="fa fa-cart-plus"></i></div>
              <div class="icon  font-lightgray font-80 lh-40 mb-10"><i class="fa fa-cart-plus"></i></div>
            </div>
            <div class="flex-1">
              <div class="icon  font-lightgray font-40 lh-40 mb-10"><i class="fa fa-thermometer-quarter"></i></div>
              <div class="icon  font-lightgray font-60 lh-40 mb-10"><i class="fa fa-thermometer-quarter"></i></div>
              <div class="icon  font-lightgray font-80 lh-40 mb-10"><i class="fa fa-thermometer-quarter"></i></div>
            </div>
            <div class="flex-1">
              <div class="icon  font-lightgray font-40 lh-40 mb-10"><i class="fa fa-university"></i></div>
              <div class="icon  font-lightgray font-60 lh-40 mb-10"><i class="fa fa-university"></i></div>
              <div class="icon  font-lightgray font-80 lh-40 mb-10"><i class="fa fa-university"></i></div>
            </div>
          </div>
        </div>
      </div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'
import 'font-awesome/css/font-awesome.css'

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

<style scoped>
  .icon {
    border: 1px dashed #eee;
    text-align: center;
  }
</style>
