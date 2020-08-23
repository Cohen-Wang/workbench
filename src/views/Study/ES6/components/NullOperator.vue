<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <div class="box">
          <blockquote>null合并运算符【??】</blockquote>
          <pre class="well">
const a = null
const b = a ?? 'hello world'
console.log(b) // hello world
        </pre>
        </div>
        <div class="box">
          <blockquote>null条件运算符【?.】</blockquote>
          <pre class="well" v-text="m"></pre>
          <pre class="well">
const length = this.m?.a.b.length
console.log(length) // 4
        </pre>
          <p>如果读取对象内部的某个属性，往往需要判断一下该对象是否存在。比如，要读取message.body.user.firstName，安全的写法是写成下面这样。</p>
          <p><kbd>const firstName = (message && message.body && message.body.user && message.body.user.firstName) || 'default';</kbd></p>
          <p>这样的层层判断非常麻烦，因此现在有一个提案，引入了“Null 传导运算符”（null propagation operator）<code>?.</code>，简化上面的写法。</p>
          <p><kbd>const firstName = message?.body?.user?.firstName || 'default';</kbd></p>
          <p>上面代码有三个?.运算符，只要其中一个返回null或undefined，就不再往下运算，而是返回undefined。</p>
          <p>“Null 传导运算符”有四种用法。</p>
          <p><kbd>obj?.prop</kbd> <samp>// 读取对象属性</samp></p>
          <p><kbd>obj?.[expr]</kbd> <samp>// 读取对象属性</samp></p>
          <p><kbd>func?.(...args)</kbd> <samp>// 函数或对象方法的调用</samp></p>
          <p><kbd>new C?.(...args)</kbd> <samp>// 构造函数的调用</samp></p>
          <p><code>传导运算符之所以写成obj?.prop，而不是obj?prop，是为了方便编译器能够区分三元运算符?:（比如obj?prop:123）。</code></p>
        </div>
      </div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'

export default {
  name: 'NullOperator',
  components: {
    GoBack,
    MyComponent
  },
  data() {
    return {
      visible: false,
      m: {
        a: {
          b: [1, 2, 3, 4]
        }
      },
      a: null
    }
  },
  created() {
    this.getResult()
    // null合并运算符【??】
    const b = this.a ?? 'hello world'
    console.log('b', b)
    // null条件运算符【?.】
    const length = this.m?.a.b.length
    console.log(length) // 4
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
    getResult() {
      const result = this.m?.a?.b?.c || 'default'
      console.log(result)
    }
  }
}
</script>

<style scoped></style>
