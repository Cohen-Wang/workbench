<template>
  <a-modal title="多个async"
           :visible="visible"
           :footer="false"
           :mask-closable="false"
           @cancel="visible = false">
    <p><span>a：</span><span>{{ a }}</span></p>
    <p><span>b：</span><span>{{ b }}</span></p>
    <p><span>c：</span><span>{{ c }}</span></p>
  </a-modal>
</template>

<script>
export default {
  name: 'MultiAsyncModal',
  data() {
    return {
      visible: false,
      a: 0,
      b: 0,
      c: 0
    }
  },
  created() {
  },
  methods: {
    show() {
      this.reset()
      this.visible = true
      this.getAll()
    },
    async getAll() {
      this.a = await this.getA()
      this.b = await this.getB(this.a)
      this.c = await this.getC(this.b)
    },
    getA() {
      return new Promise(resolve => {
        window.setTimeout(() => {
          const result = 2
          resolve(result)
        }, 2000)
      })
    },
    getB(a) {
      return new Promise(resolve => {
        window.setTimeout(() => {
          const result = a ** 2
          resolve(result)
        }, 2000)
      })
    },
    getC(b) {
      return new Promise(resolve => {
        window.setTimeout(() => {
          const result = b + 17
          resolve(result)
        }, 2000)
      })
    },
    // 第二次进入时
    reset() {
      this.a = 0
      this.b = 0
      this.c = 0
    }
  }
}
</script>

<style scoped>

</style>
