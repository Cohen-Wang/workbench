<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">混入(mixins)</div>
    </div>
    <div class="panel-body panel-body-box">
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
  </div>
</template>

<script>
const mixinx1 = {
  created: function() {
    console.log('created from 1')
    this.showSame()
    this.showDiff1()
  },
  mounted: function() {
    console.log('mounted from 1')
  },
  methods: {
    showSame() {
      console.log('showSame from 1')
    },
    showDiff1() {
      console.log('showDiff1 from 1')
    }
  }
}

const mixinx2 = {
  created: function() {
    console.log('created from 2')
    this.showSame()
    this.showDiff2()
  },
  mounted: function() {
    console.log('mounted from 2')
  },
  methods: {
    showSame() {
      console.log('showSame from 2')
    },
    showDiff2() {
      console.log('showDiff2 from 2')
    }
  }
}

export default {
  name: 'Mixins',
  mixins: [mixinx2, mixinx1],
  created() {
    console.log('created from main')
    this.showSame()
    this.showDiff3()
  },
  mounted() {
    console.log('mounted from main')
  },
  methods: {
    showSame() {
      console.log('showSame from main')
    },
    showDiff3() {
      console.log('showDiff3 from main')
    }
  }
}
</script>

<style scoped></style>
