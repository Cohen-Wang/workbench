<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">Null传导运算符</div>
    </div>
    <div class="panel-body panel-body-box">
      <blockquote>
        如果读取对象内部的某个属性，往往需要判断一下该对象是否存在。比如，要读取message.body.user.firstName，安全的写法是写成下面这样。
      </blockquote>
      <p>
        <kbd>const firstName = (message && message.body && message.body.user && message.body.user.firstName) || 'default';</kbd>
      </p>
      <blockquote>
        这样的层层判断非常麻烦，因此现在有一个提案，引入了“Null
        传导运算符”（null propagation
        operator）<code>?.</code>，简化上面的写法。
      </blockquote>
      <p>
        <kbd>const firstName = message?.body?.user?.firstName || 'default';</kbd>
      </p>
      <blockquote>
        上面代码有三个?.运算符，只要其中一个返回null或undefined，就不再往下运算，而是返回undefined。
      </blockquote>
      <p>“Null 传导运算符”有四种用法。</p>
      <p><kbd>obj?.prop</kbd> <samp>// 读取对象属性</samp></p>
      <p><kbd>obj?.[expr]</kbd> <samp>// 读取对象属性</samp></p>
      <p><kbd>func?.(...args)</kbd> <samp>// 函数或对象方法的调用</samp></p>
      <p><kbd>new C?.(...args)</kbd> <samp>// 构造函数的调用</samp></p>
      <blockquote>
        传导运算符之所以写成obj?.prop，而不是obj?prop，是为了方便编译器能够区分三元运算符?:（比如obj?prop:123）。
      </blockquote>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NullOperator',
  data() {
    return {
      m: {
        a: {
          b: {}
        }
      }
    }
  },
  created() {
    this.show()
  },
  methods: {
    show() {
      const result = this.m?.a?.b?.c || 'default'
      console.log(result)
    }
  }
}
</script>

<style scoped></style>
