<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <div class="box">
          <blockquote>基础柱状图</blockquote>
          <a-button icon="redo" @click="refresh"></a-button>
          <div id="barContainer" class="graph">
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
  name: 'Bar',
  components: {
    GoBack,
    MyComponent
  },
  data() {
    return {
      visible: false,
      //
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
      this.get()
    },
    goBack() {
      this.visible = false
    },
    // +---------------------------------------------------------------------------------------------
    // | 获取数据
    // +---------------------------------------------------------------------------------------------
    async get() {
      this.graphData = await this.getData()
      console.log(this.graphData)
      this.initChart()
    },
    // 数据
    getData() {
      return new Promise(resolve => {
        const url = '/antv-g2/bar'
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
      // 初始化canvas
      this.chart = new Chart({
        container: 'barContainer',
        autoFit: true,
        padding: [50, 30, 80, 30]
      })
      // 绑定数据
      this.chart.data(this.graphData)
      // tooltip的提示文字
      this.chart.scale('value', { alias: '销售额(万)' })
      // X轴
      this.chart.axis('type', {
        tickLine: {
          alignTick: false
        },
        label: {
          style: {
            stroke: 'red'
          }
        }
      })
      // Y轴刻度，是否拉条横线
      this.chart.axis('value', true)
      // ???
      this.chart.tooltip({ showMarkers: false })
      this.chart.interval().position('type*value')
      this.chart.interaction('element-active')
      // 添加文本标注
      this.graphData.forEach((item) => {
        this.chart
          .annotation()
          .text({
            position: [item.type, item.value],
            content: item.value,
            style: {
              textAlign: 'center'
            },
            offsetY: -30
          })
          .text({
            position: [item.type, item.value],
            content: (item.percent * 100).toFixed(0) + '%',
            style: {
              textAlign: 'center'
            },
            offsetY: -12
          })
      })
      // 渲染
      this.chart.render()
    },
    // 更新数据时
    changeChart() {
      console.log('更新数据后')
      // 清空标注，及其配置
      this.chart.annotation().clear(true)
      // 重写标注
      this.graphData.forEach(item => {
        this.chart
          .annotation()
          .text({
            position: [item.type, item.value],
            content: item.value,
            style: {
              textAlign: 'center'
            },
            offsetY: -30
          })
          .text({
            position: [item.type, item.value],
            content: (item.percent * 100).toFixed(0) + '%',
            style: {
              textAlign: 'center'
            },
            offsetY: -12
          })
      })
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

