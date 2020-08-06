<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">雷达图</div>
    </div>
    <div class="panel-body panel-body-box">
      <div class="box">
        <blockquote>雷达图</blockquote>
        <div id="container">
          <!-- 图形 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataSet from '@antv/data-set'
import { Chart } from '@antv/g2'

const data = [
  { item: 'Design', a: 70, b: 30 },
  { item: 'Development', a: 60, b: 70 },
  { item: 'Marketing', a: 50, b: 60 },
  { item: 'Users', a: 40, b: 50 },
  { item: 'Test', a: 60, b: 70 },
  { item: 'Language', a: 70, b: 50 },
  { item: 'Technology', a: 50, b: 40 },
  { item: 'Support', a: 30, b: 40 },
  { item: 'Sales', a: 60, b: 40 },
  { item: 'UX', a: 50, b: 60 }
]
const { DataView } = DataSet
const dv = new DataView().source(data)

export default {
  name: 'BasalRadarChart',
  data() {
    return {}
  },
  created() {
  },
  mounted() {
    console.dir(DataSet)
    console.dir(dv)
    this.graphRender()
  },
  methods: {
    graphRender() {
      dv.transform({
        type: 'fold',
        fields: ['a', 'b'], // 展开字段集
        key: 'user', // key字段
        value: 'score' // value字段
      })

      const chart = new Chart({
        container: 'container',
        autoFit: true,
        height: 500
      })
      chart.data(dv.rows)
      chart.scale('score', {
        min: 0,
        max: 80
      })

      chart.coordinate('polar', {
        radius: 0.8 // 整个大小比例
      })

      // 鼠标移入图形
      chart.tooltip({
        shared: true,
        showCrosshairs: true,
        // 鼠标移入后，显示的线的点
        crosshairs: {
          line: {
            style: {
              lineDash: [4, 4], // 点的距离
              stroke: '#333' // 点的颜色
            }
          }
        }
      })

      // ？
      chart.axis('item', {
        line: null,
        tickLine: null,
        grid: {
          line: {
            style: {
              lineDash: null
            }
          }
        }
      })

      // ？
      chart.axis('score', {
        line: null,
        tickLine: null,
        grid: {
          line: {
            type: 'line',
            style: {
              lineDash: null
            }
          }
        }
      })

      // 围绕的线
      chart
        .line()
        .position('item*score')
        .color('user')
        .size(2) // 围绕线的lineWidth

      // 围绕的点
      chart
        .point()
        .position('item*score')
        .color('user')
        .shape('circle')
        .size(4)
        .style({
          stroke: '#fff',
          lineWidth: 1,
          fillOpacity: 1
        })

      // 区域
      chart.area().position('item*score').color('user')

      // 渲染
      chart.render()
    }
  }
}
</script>

<style scoped>

</style>
