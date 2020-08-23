<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <div>
          <!-- resolve -->
          <div class="box">
            <a-row :gutter="24">
              <a-col :span="24">
                <blockquote>1.Promise.resolve()</blockquote>
              </a-col>
              <a-col :span="12">
            <pre class="well">
const promise = Promise.resolve('aaa')

promise.then(res => {
  console.log(res) // aaa
})
            </pre>
              </a-col>
              <a-col :span="12">
            <pre class="well">
const promise = new Promise(resolve => {
  resolve('aaa')
})

promise.then(res => {
  console.log(res) // aaa
})
            </pre>
              </a-col>
            </a-row>
          </div>
          <!-- reject -->
          <div class="box">
            <a-row :gutter="24">
              <a-col :span="24">
                <blockquote>2.Promise.reject()</blockquote>
              </a-col>
              <a-col :span="12">
            <pre class="well">
const promise = Promise.reject('aaa')

promise.then(res => {
  // ...
}).catch(err => {
  console.log(err) // aaa
})
            </pre>
              </a-col>
              <a-col :span="12">
            <pre class="well">
const promise = new Promise((resolve, reject) => {
  reject('aaa')
})

promise.then(res => {
  // ...
}).catch(err => {
  console.log(err) // aaa
})
            </pre>
              </a-col>
            </a-row>
          </div>
          <!-- all -->
          <div class="box">
            <a-row :gutter="24">
              <a-col :span="24">
                <blockquote>3.Promise.all()</blockquote>
              </a-col>
              <a-col :span="12">
            <pre class="well">
const promise_1 = Promise.resolve('aaa')
const promise_2 = Promise.resolve('bbb')
const promise_3 = Promise.resolve('ccc')

promise.all([promise_1, promise_2, promise_3]).then(res => {
  console.log(res) // ['aaa', 'bbb', 'ccc']，类型：数组；用结构取值
}
            </pre>
              </a-col>
            </a-row>
          </div>
          <!-- race -->
          <div class="box">
            <a-row :gutter="24">
              <a-col :span="24">
                <blockquote>4.Promise.race()</blockquote>
              </a-col>
              <a-col :span="12">
            <pre class="well">
const promise_1 = Promise.resolve('aaa')
const promise_2 = Promise.reject('bbb')
const promise_3 = Promise.resolve('ccc')

promise.all([promise_1, promise_2, promise_3]).then(res => {
  console.log(res) // 'aaa'， 第二个报错，后面不执行
}
            </pre>
              </a-col>
            </a-row>
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
  name: 'Promise',
  components: {
    GoBack,
    MyComponent
  },
  data() {
    return {
      visible: false,
      debug: true
    }
  },
  computed: {
    promiseResolve() {
      // eslint-disable-next-line vue/no-async-in-computed-properties
      return Promise.resolve('这是一个resolve结果')
    }
  },
  methods: {
    // +---------------------------------------------------------------------------------------------
    // | 页面
    // +---------------------------------------------------------------------------------------------
    show() {
      this.visible = true
      this.userLogin().then(res => {
        console.log(res)
      })
    },
    goBack() {
      this.visible = false
    },
    userLogin() {
      return new Promise((resolve, reject) => {
        window.setTimeout(() => {
          if (this.debug) {
            resolve({
              response: true
            })
          } else {
            reject('失败1')
          }
        }, 2000)
      })
    }
  }
}
</script>

<style scoped></style>
