<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">基础折线图</div>
    </div>
    <div class="panel-body panel-body-box">
      <div class="box">
        <blockquote>基础折线图</blockquote>
        <a-radio-group v-model="graphData">
          <a-radio-button v-for="(dataItem, dataIndex) in DATA_OPTIONS"
                          :key="dataIndex"
                          :value="dataItem.value">
            {{ dataItem.label }}
          </a-radio-button>
        </a-radio-group>
        <div id="container" class="graph">
          <!-- 图形 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2'

const DATA_OPTIONS = [
  {
    label: '数据1',
    value: [
      { year: '1991', value: 3 },
      { year: '1992', value: 4 },
      { year: '1993', value: 3.5 },
      { year: '1994', value: 5 },
      { year: '1995', value: 4.9 },
      { year: '1996', value: 6 },
      { year: '1997', value: 7 },
      { year: '1998', value: 9 },
      { year: '1999', value: 13 }
    ]
  },
  {
    label: '数据2',
    value: [
      { year: '1991', value: 1 },
      { year: '1992', value: 3 },
      { year: '1993', value: 2 },
      { year: '1994', value: 5 },
      { year: '1995', value: 4 },
      { year: '1996', value: 7 },
      { year: '1997', value: 6 },
      { year: '1998', value: 9 },
      { year: '1999', value: 11 }
    ]
  }
]

export default {
  name: 'BasalLineChart',
  data() {
    return {
      DATA_OPTIONS,
      graphData: DATA_OPTIONS[0].value,
      chart: null
    }
  },
  watch: {
    graphData() {
      this.changeChart()
    }
  },
  created() {
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      this.chart = new Chart({
        container: 'container',
        autoFit: true,
        padding: [30, 50, 50, 50]
      })

      this.chart.data(this.graphData)
      this.chart.scale({
        year: {
          range: [0, 1]
        },
        value: {
          min: 0,
          nice: true
        }
      })

      this.chart.tooltip({
        showCrosshairs: true, // 展示 Tooltip 辅助线
        shared: true
      })

      this.chart.line().position('year*value').label('value')
      this.chart.point().position('year*value')

      this.chart.render()
    },
    changeChart() {
      console.log('更新数据后')
      // 更新数据
      this.chart.changeData(this.graphData)
    }
  }
}
</script>

<style lang="less" scoped>
  .graph {
    background-color: #f8f8f8;
    height: 400px;
    margin-top: 10px;
  }
</style>
