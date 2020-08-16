<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <div class="box">
          <blockquote>基础折线图</blockquote>
          <a-radio-group v-model="graphData">
            <a-radio-button v-for="(dataItem, dataIndex) in DATA_OPTIONS"
                            :key="dataIndex"
                            :value="dataItem.value">
              {{ dataItem.label }}
            </a-radio-button>
          </a-radio-group>
          <div id="container1" class="graph">
            <!-- 图形 -->
          </div>
        </div>
      </div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'
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
  name: 'LineStudy',
  components: {
    GoBack,
    MyComponent
  },
  data() {
    return {
      visible: false,
      //
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
  mounted() {
    this.initChart()
  },
  methods: {
    // +---------------------------------------------------------------------------------------------
    // | 页面
    // +---------------------------------------------------------------------------------------------
    show() {
      this.visible = true
      // this.get()
    },
    goBack() {
      this.visible = false
    },
    // +---------------------------------------------------------------------------------------------
    // | 获取数据
    // +---------------------------------------------------------------------------------------------
    // async get() {
    //   this.graphData = await this.getData()
    //   this.initChart()
    // },
    // // 数据
    // getData() {
    //   return new Promise(resolve => {
    //     const url = '/antv-g2/radar'
    //     this.$axios.get(url).then(res => {
    //       const result = res.data.records // 赋值
    //       resolve(result)
    //     })
    //   })
    // },
    // async refresh() {
    //   this.graphData = await this.getData()
    // },
    // +---------------------------------------------------------------------------------------------
    // | 雷达图
    // +---------------------------------------------------------------------------------------------
    // 画图
    initChart() {
      this.chart = new Chart({
        container: 'container1',
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
    width: 500px;
    height: 500px;
    margin-top: 10px;
  }
</style>
