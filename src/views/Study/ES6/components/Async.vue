<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">Async-Await</div>
    </div>
    <div class="panel-body panel-body-box">
      <div class="box">
        <blockquote>
          <p>1.async 是 ES7 才有的与异步操作有关的关键字，和 Promise ， Generator 有很大关联的。</p>
          <p>2.返回值:async 函数返回一个 Promise 对象，可以使用 then 方法添加回调函数。</p>
        </blockquote>
      </div>
      <div class="box">
        <blockquote>案例一：非异步 - return</blockquote>
        <pre class="well">
async helloAsync() {
  return 'helloAsync'
},
        </pre>
        <a-button-group>
          <a-button type="primary" @click="handleClick1">点击查看结果，返回promise对象</a-button>
          <a-button type="danger" @click="handleClick2">点击查看返回值</a-button>
        </a-button-group>
      </div>
      <div class="box">
        <blockquote>案例二：异步 - setTimeout</blockquote>
        <pre class="well">
testWait(num) {
  return new Promise((resolve, reject) => {
    // 模拟定义一个返回数据
    num += 30
    // 模拟3秒后才返回数据
    setTimeout(() => {
      resolve(num)
    }, 3000)
  })
},
        </pre>
        <a-form :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <p>
            <a-input v-model.number="price"></a-input>
            <span>price:{{ price }}</span>
          </p>
          <a-button type="primary" @click="getPrice" :loading="btnLoading">点击等待3秒，获取结果</a-button>
        </a-form>
      </div>
      <div class="box">
        <blockquote>多个async</blockquote>
        <a-button type="primary" @click="showDialog('MultiAsyncModal')">查看</a-button>
      </div>
    </div>
    <!-- 组件 -->
    <multi-async-modal ref="MultiAsyncModal"/>
  </div>
</template>

<script>
import MultiAsyncModal from './async/MultiAsyncModal'

export default {
  name: 'AsyncAwait',
  components: {
    MultiAsyncModal
  },
  data() {
    return {
      price: 0,
      btnLoading: false
    }
  },
  methods: {
    // 非异步：return
    async helloAsync() {
      return 'helloAsync'
    },
    handleClick1() {
      console.log(this.helloAsync()) // Promise {<resolved>: "helloAsync"}
      this.$message.info(typeof this.helloAsync(), 3)
    },
    handleClick2() {
      this.helloAsync().then(res => {
        this.$message.info(res, 3)
      })
    },
    // 异步：setTimeout
    testWait(num) {
      return new Promise((resolve, reject) => {
        // 模拟定义一个返回数据
        num += 30
        // 模拟3秒后才返回数据
        setTimeout(() => {
          resolve(num)
        }, 3000)
      })
    },
    async getPrice() {
      this.btnLoading = true
      this.price = await this.testWait(this.price)
      this.btnLoading = false
    },
    showDialog(refName) {
      this.$refs[refName].show()
    }
  }
}
</script>

<style lang="less" scoped></style>
