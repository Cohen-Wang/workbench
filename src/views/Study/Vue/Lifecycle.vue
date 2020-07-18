<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">生命周期</div>
    </div>
    <div class="panel-body panel-body-box">
      <ul>
        <li v-for="(item, index) in arr" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lifecycle',
  data() {
    return {
      a: '我是内部变量a，此时你看到了我',
      index: 0,
      arr: [],
      timer: null
    }
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
</script>

<style scoped lang="less"></style>
