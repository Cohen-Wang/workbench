<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <!-- ... -->
        <ul>
          <li v-for="(item, index) in arr" :key="index">{{ item }}</li>
        </ul>
      </div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'

export default {
  name: 'Lifecycle',
  components: {
    GoBack,
    MyComponent
  },
  data() {
    return {
      visible: false,
      a: '我是内部变量a，此时你看到了我',
      index: 0,
      arr: [],
      timer: null
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
    beforeCreate() {
      this.$notification.success({
        message: 'beforeCreate',
        description: `a: ${this.a}`,
        duration: 10
      })
    },
    created() {
      this.$notification.info({
        message: 'created',
        description: `a: ${this.a}`,
        duration: 10
      })
      // ...
      this.timer = setInterval(() => {
        this.index++
        this.arr.push(this.index)
      }, 1000)
    },
    beforeMount() {
      this.$notification.info({
        message: 'beforeMount',
        description: `a: ${this.a}`,
        duration: 10
      })
    },
    mounted() {
      this.$notification.info({
        message: 'mounted',
        description: `a: ${this.a}`,
        duration: 10
      })
    },
    beforeUpdate() {
      this.$notification.info({
        message: 'beforeUpdate',
        description: `内部变量a: ${this.a}`,
        duration: 10
      })
    },
    updated() {
      this.$notification.info({
        message: 'updated',
        description: `a: ${this.a}`,
        duration: 10
      })
    },
    beforeDestroy() {
      this.$notification.info({
        message: 'beforeDestroy',
        description: `a: ${this.a}`,
        duration: 10
      })
      // ...
      clearInterval(this.timer)
    },
    destroyed() {
      this.$notification.info({
        message: 'destroyed',
        description: `a: ${this.a}`,
        duration: 10
      })
    }
  }
}
</script>

<style lang="less" scoped></style>
