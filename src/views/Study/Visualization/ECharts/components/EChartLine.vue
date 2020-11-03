<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <div class="box">
          <blockquote>折线图</blockquote>
          <div id="pox" style="height: 400px;"></div>
        </div>
      </div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'
import echarts from 'echarts'

// 模拟数据
const option = {
  xAxis: {
    type: 'category',
    position: 'bottom', // 放在什么位置，默认：'bottom'
    offset: 0,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '最高气温',
      type: 'line',
      color: ['green'],
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
}

export default {
  name: 'EChartLine',
  components: {
    GoBack,
    MyComponent
  },
  data() {
    return {
      visible: false,
      //
      myChart: null
    }
  },
  // mounted 是关键
  mounted: function() {
    this.getRetention()
    // 建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
    window.addEventListener('resize', function() {
      this.myChart.resize()
    })
  },
  methods: {
    getRetention: function() {
      this.myChart = echarts.init(document.getElementById('pox'))
      this.myChart.setOption(option)
    },
    // +---------------------------------------------------------------------------------------------
    // | 页面
    // +---------------------------------------------------------------------------------------------
    show() {
      this.visible = true
      // this.get()
    },
    goBack() {
      this.visible = false
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

