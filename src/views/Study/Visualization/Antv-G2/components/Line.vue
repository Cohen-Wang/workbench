<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <div class="box">
          <blockquote>基础折线图</blockquote>
          <a-button icon="redo" @click="refresh"></a-button>
          <div id="lineContainer" class="graph">
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

export default {
  name: 'LineStudy',
  components: {
    GoBack,
    MyComponent
  },
  data() {
    return {
      visible: false,
      // 数据
      graphData: [],
      chart: null
    }
  },
  watch: {
    graphData() {
      this.changeChart()
    }
  },
  methods: {
    // +---------------------------------------------------------------------------------------------
    // | 页面
    // +---------------------------------------------------------------------------------------------
    show() {
      this.visible = true
      if (!this.chart) {
        this.get()
      }
    },
    goBack() {
      this.visible = false
    },
    // +---------------------------------------------------------------------------------------------
    // | 获取数据
    // +---------------------------------------------------------------------------------------------
    async get() {
      this.graphData = await this.getData()
      this.initChart()
    },
    // 数据
    getData() {
      return new Promise(resolve => {
        const url = '/antv-g2/line'
        this.$axios.get(url).then(res => {
          const result = res.data.records // 赋值
          resolve(result)
        })
      })
    },
    async refresh() {
      this.graphData = await this.getData()
    },
    // +---------------------------------------------------------------------------------------------
    // | 雷达图
    // +---------------------------------------------------------------------------------------------
    // 画图
    initChart() {
      this.chart = new Chart({
        container: 'lineContainer',
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

      this.chart.line().position('year*value').color('city').label('value')
      this.chart.point().position('year*value').color('city')
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
    background-color: #FEFEFE;
    height: 500px;
    margin-top: 10px;
  }
</style>
