<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <div class="box">
          <blockquote>雷达图</blockquote>
          <a-button icon="redo" @click="refresh"></a-button>
          <div id="basic" class="graph">
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
import DataSet from '@antv/data-set'
const { DataView } = DataSet

export default {
  name: 'Radar',
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
    // +---------------------------------------------------------------------------------------------
    // | 数据
    // +---------------------------------------------------------------------------------------------
    async get() {
      this.graphData = await this.getData()
      this.initChart()
    },
    // 数据
    getData() {
      return new Promise(resolve => {
        const url = '/antv-g2/radar'
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
      // 中心点到角的线
      this.chart.axis('item', {
        line: null,
        tickLine: null,
        grid: {
          line: {
            style: {
              lineDash: null
            }
          }
        },
        label: {
          offset: 50,
          // 使用 formatter 回调函数
          formatter: val => {
            // return val
            return val.slice(0, 5) + '\n' + val.slice(5, val.length)
          },
          style: {
            fill: 'red',
            fontSize: 14
          }
        }
      })
      // 中间的蜘蛛网
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
      // 自定义 legend - 图形下面的说明
      this.chart.legend({
        items: [
          { name: '铜站', value: '各项花销', marker: { symbol: 'square', style: { fill: '#1890FF', r: 5 }}},
          { name: '龚站', value: '总费用', marker: { symbol: 'square', style: { fill: '#EF626D', r: 5 }}},
          { name: '总厂', value: '总费用', marker: { symbol: 'square', style: { fill: '#9acd32', r: 5 }}}
        ]
      })
      // 围绕的线
      this.chart.line().position('item*score').color('user', ['#1890FF', '#EF626D', '#9acd32']).size(2) // 围绕线的lineWidth
      // 围绕的线的连点
      this.chart
        .point()
        .position('item*score')
        .color('user', ['#1890FF', '#EF626D', '#9acd32'])
        .shape('circle').size(4).style({ stroke: '#fff', lineWidth: 1, fillOpacity: 1 })
      // 区域
      this.chart.area().position('item*score').color('user', ['#1890FF', '#EF626D', '#9acd32'])
      // 渲染
      this.chart.render()
    },
    changeChart() {
      const dv = new DataView().source(this.graphData)
      dv.transform({
        type: 'fold',
        fields: ['铜站', '龚站', '总厂'], // 展开字段集
        key: 'user', // key字段
        value: 'score' // value字段
      })
      // 更新数据
      this.chart.changeData(dv.rows)
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

