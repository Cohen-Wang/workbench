<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">mock.js</div>
    </div>
    <div class="panel-body panel-body-box">
      <pre class="well" v-text="a"></pre>
    </div>
  </div>
</template>

<script>
import Mock from 'mockjs'

export default {
  name: 'Mock',
  data() {
    return {
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
  }
}
</script>

<style scoped>

</style>
