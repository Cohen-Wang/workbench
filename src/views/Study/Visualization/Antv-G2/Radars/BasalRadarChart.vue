<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">雷达图</div>
    </div>
    <div class="panel-body panel-body-box">
      <div class="box">
        <blockquote>雷达图</blockquote>
        <a-radio-group v-model="graphData">
          <a-radio-button v-for="(dataItem, dataIndex) in DATA_OPTIONS"
                          :key="dataIndex"
                          :value="dataItem.value">
            {{ dataItem.label }}
          </a-radio-button>
        </a-radio-group>
        <div id="basic" class="graph">
          <!-- 图形 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2'
import DataSet from '@antv/data-set'

const { DataView } = DataSet
const DATA_OPTIONS = [
  {
    label: '数据1',
    value: [
      { item: 'Design', '铜站': 70, '龚站': 30, '总厂': 50 },
      { item: 'Development', '铜站': 60, '龚站': 70, '总厂': 50 },
      { item: 'Marketing', '铜站': 50, '龚站': 60, '总厂': 50 },
      { item: 'Users', '铜站': 40, '龚站': 50, '总厂': 50 },
      { item: 'Sales', '铜站': 60, '龚站': 40, '总厂': 50 },
      { item: 'UX', '铜站': 50, '龚站': 60, '总厂': 50 }
    ]
  },
  {
    label: '数据2',
    value: [
      { item: 'Design', '铜站': 50, '龚站': 60, '总厂': 70 },
      { item: 'Development', '铜站': 50, '龚站': 60, '总厂': 70 },
      { item: 'Marketing', '铜站': 50, '龚站': 60, '总厂': 70 },
      { item: 'Users', '铜站': 50, '龚站': 60, '总厂': 70 },
      { item: 'Sales', '铜站': 50, '龚站': 60, '总厂': 70 },
      { item: 'UX', '铜站': 50, '龚站': 60, '总厂': 70 }
    ]
  }
]

export default {
  name: 'BasalRadarChart',
  data() {
    return {
      DATA_OPTIONS,
      graphData: DATA_OPTIONS[0].value,
      chart: null
    }
  },
  watch: {
    graphData() {
      const dv = new DataView().source(this.graphData)
      this.$nextTick()
      this.chart.changeData(dv.rows)
      // this.chart.render()
    }
  },
  created() {
  },
  mounted() {
    this.graphRender()
  },
  methods: {
    // 画图
    graphRender() {
      const dv = new DataView().source(this.graphData)
      // ...
      dv.transform({
        type: 'fold',
        fields: ['铜站', '龚站', '总厂'], // 展开字段集
        key: 'user', // key字段
        value: 'score' // value字段
      })

      // 使用 G2 进行绘图的入口
      this.chart = new Chart({
        container: 'basic',
        renderer: 'canvas',
        padding: 50,
        // appendPadding: 20,
        visible: true,
        autoFit: true
      })

      // 装载数据源
      this.chart.data(dv.rows)
      // 比例
      this.chart.scale('score', { min: 0, max: 80 })
      // 坐标系配置
      this.chart.coordinate('polar', { radius: 0.8 }) // 整个大小比例
      // 鼠标移入图形
      this.chart.tooltip({
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
      this.chart.axis('item', {
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
      this.chart.axis('score', {
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
      this.chart.line().position('item*score').color('user').size(2) // 围绕线的lineWidth
      // 围绕的点
      this.chart.point().position('item*score').color('user').shape('circle').size(4).style({ stroke: '#fff', lineWidth: 1, fillOpacity: 1 })
      // 区域
      this.chart.area().position('item*score').color('user')
      // 渲染
      this.chart.render()
    }
  }
}
</script>

<style lang="less" scoped>
  .graph {
    background-color: #f8f8f8;
    width: 500px;
    height: 500px;
    margin-top: 10px;
  }
</style>
