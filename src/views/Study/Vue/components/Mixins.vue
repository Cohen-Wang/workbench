<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <!-- ... -->
        <blockquote>选项合并</blockquote>
        <p class="lead">
          当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”。
        </p>
        <ul class="list-unstyled">
          <li>
            <code>数据对象</code>在内部会进行递归合并，并在发生冲突时以组件数据优先。
          </li>
          <li>
            同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。
          </li>
          <li>
            值为对象的选项，例如 methods、components 和
            directives，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。
          </li>
        </ul>
        <pre class="well">
var mixin = {
  data: function () {
    return {
      message: 'hello',
      foo: 'abc'
    }
  }
}

new Vue({
  mixins: [mixin],
  data: function () {
    return {
      message: 'goodbye',
      bar: 'def'
    }
  },
  created: function () {
    console.log(this.$data)
    // => { message: "goodbye", foo: "abc", bar: "def" }
  }
})
            </pre>
      </div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'

const mixinx1 = {
  created: function() {
    console.log('mixinx1：created')
    this.showSame()
    this.showDiff1()
  },
  mounted: function() {
    console.log('mixinx1：mounted')
  },
  methods: {
    showSame() {
      console.log('mixinx1：showSame')
    },
    showDiff1() {
      console.log('mixinx1：showDiff1')
    }
  }
}

const mixinx2 = {
  created: function() {
    console.log('mixinx2：created')
    this.showSame()
    this.showDiff2()
  },
  mounted: function() {
    console.log('mixinx2：mounted')
  },
  methods: {
    showSame() {
      console.log('mixinx2：showSame')
    },
    showDiff2() {
      console.log('mixinx2：showDiff2')
    }
  }
}

export default {
  name: 'Mixins',
  mixins: [mixinx2, mixinx1],
  components: {
    GoBack,
    MyComponent
  },
  data() {
    return {
      visible: false
    }
  },
  created() {
    console.log('main：created')
    this.showSame()
    this.showDiff3()
  },
  mounted() {
    console.log('main：mounted')
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
    showSame() {
      console.log('main：showSame')
    },
    showDiff3() {
      console.log('main：showDiff3')
    }
  }
}
</script>

<style lang="less" scoped></style>
