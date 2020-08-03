<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">基础</div>
    </div>
    <div class="panel-body panel-body-box">
      <!-- selectAll() -->
      <div class="box">
        <blockquote>selectAll()</blockquote>
        <div id="selectAll-box">
          <div>A</div>
          <div>B</div>
          <div>C</div>
          <div>D</div>
        </div>
        <div>
          <a-button type="primary" size="small" @click="checkSelectAll">控制台查看</a-button>
        </div>
      </div>
      <!-- append() -->
      <div class="box">
        <blockquote>append()</blockquote>
        <div id="append-box">
          <!-- ... -->
        </div>
        <div>
          <a-button type="primary" size="small" @click="handleAppend">append</a-button>
        </div>
      </div>
      <!-- json() -->
      <div class="box">
        <blockquote>json()</blockquote>
        <div id="json-box">
          <!-- ... -->
        </div>
        <div>
          <a-button type="primary" size="small" @click="handleJson">请求数据</a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3'

export default {
  name: 'Basis',
  created() {},
  methods: {
    // selectAll
    checkSelectAll() {
      console.log('d3:', d3)
      console.log('d3.select(\'#selectAll-box\'):', d3.select('#selectAll-box'))
      console.log('d3.select(\'#selectAll-box\').selectAll(\'div\'):', d3.select('#selectAll-box').selectAll('div'))
    },
    // append()
    handleAppend() {
      // 创建一个svg元素，并设置属性
      const svgObj = d3.select('#append-box').append('svg')
        .attr('width', '500px')
        .attr('height', '200px')
        .attr('fill', 'red')
      // 在svg内添加矩形元素，并设置属性
      svgObj.append('rect')
        .attr('x', '0')
        .attr('y', '0')
        .attr('width', 500)
        .attr('height', 200)
        .attr('fill', '#abcdef')
    },
    // json
    handleJson() {
      d3.json('./BasisData.json', res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>
