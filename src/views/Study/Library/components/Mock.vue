<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <pre class="well" v-text="a"></pre>
      </div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'
import Mock from 'mockjs'

export default {
  name: 'Mock',
  components: {
    GoBack,
    MyComponent
  },
  data() {
    return {
      visible: false,
      // ...
      a: []
    }
  },
  created() {
    console.log(Mock)
    this.a = Mock.mock({
      'data|10-20': [
        {
          'id|+1': 100000,
          // basic
          '@String': '@String',
          '@Boolean': '@Boolean',
          '@range(10, 20)': '@range(10, 20)',
          // image
          '@image': '@image',
          '@image(\'200x100\')': '@image("200x100")',
          '@image(\'200x100\', \'#fb0a2a\')': '@image("200x100", "#fb0a2a")',
          // color
          '@color': '@color',
          // name
          '@name': '@name',
          '@name(true)': '@name(true)',
          '@first': '@first',
          '@last': '@last',
          '@cname': '@cname',
          '@cfirst': '@cfirst',
          '@clast': '@clast',
          // address
          '@region': '@region',
          '@province': '@province',
          '@city': '@city',
          '@city(true)': '@city(true)',
          '@county': '@county',
          '@county(true)': '@county(true)',
          '@zip': '@zip',
          // text
          '@word(5, 50)': '@word(5, 50)',
          '@cword(5, 50)': '@cword(5, 50)',
          '@title(5, 10)': '@title(5, 10)',
          '@ctitle(5, 10)': '@ctitle(5, 10)',
          '@paragraph(1)': '@paragraph(1,)',
          '@cparagraph(1, 2)': '@cparagraph(1, 2)',
          '@sentence(1)': '@sentence(1)',
          '@csentence(1, 20)': '@csentence(1, 20)',
          // Data
          '@date()': '@date()',
          '@date(\'yyyy-MM-dd\')': '@date("yyyy-MM-dd")',
          '@date(\'yyyy年MM月dd日\')': '@date("yyyy年MM月dd日")',
          '@time()': '@time()',
          '@date(\'HH:mm:ss\')': '@date("HH:mm:ss")'
        }
      ]
    })
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
    }
  }
}
</script>

<style lang="less" scoped>
  .hide-scrollbar {
    height: 500px;
    border: 1px solid #999;
    overflow: auto;

    &::-webkit-scrollbar{
      display:none;
    }

    &>div {
      height: 100px;
      line-height: 100px;
      box-sizing: border-box;
      border: 1px solid #999;
      text-align: center;
    }
  }
</style>
