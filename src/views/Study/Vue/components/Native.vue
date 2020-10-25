<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <div>
          <a-divider orientation="left">介绍</a-divider>
          <h1>1.给vue组件绑定事件时候，必须加上native ，否则会认为监听的是来自Item组件自定义的事件，</h1>
          <h1>2.prevent 是用来阻止默认的 ，相当于原生的event.preventDefault()</h1>
          <h1>可以理解为该修饰符的作用就是把一个vue组件转化为一个普通的HTML标签，并且该修饰符对普通HTML标签是没有任何作用的。</h1>
        </div>
        <div>
          <a-divider orientation="left">案例</a-divider>
          <button @click="add(this)">普通的html标签，不包含native的按钮</button><br/>
          <!--<button @click.native="add(this)">普通的html标签，包含native的按钮</button><br/>-->
          <a-button type="primary" @click="add('1')">@click="add('1'))</a-button>
          <a-button type="primary" @click.native="add('2')">@click.native="add('2')</a-button>
        </div>
      </div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'

export default {
  name: 'Native',
  components: {
    GoBack,
    MyComponent
  },
  data() {
    return {
      visible: false
      // -----------------------
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
    add(obj) {
      this.$message.info(obj)
    }
  }
}
</script>

<style scoped>

</style>
