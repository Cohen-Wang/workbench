<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">Async-Await</div>
    </div>
    <div class="panel-body panel-body-box">
      <a-form :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <p>
          <span>price:</span>
          <span>{{ price }}</span>
        </p>
        <a-button type="primary" @click="getPrice" :loading="btnLoading">
          获取
        </a-button>
      </a-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AsyncAwait',
  data() {
    return {
      price: 0,
      btnLoading: false
    }
  },
  methods: {
    async getPrice() {
      this.btnLoading = true
      this.price = await this.asyncGetPrice()
      this.btnLoading = false
    },
    asyncGetPrice() {
      return new Promise((resolve, reject) => {
        // 模拟定义一个返回数据
        const num = 30
        // 模拟3秒后才返回数据
        setTimeout(() => {
          resolve(num)
        }, 3000)
      })
    }
  }
}
</script>

<style lang="less" scoped></style>
