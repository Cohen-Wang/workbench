<template>
  <div>
    <div class="root">
      <card-index title="ECharts" :data="DEFAULT_CONFIG" @showDetail="showDetail"/>
    </div>
    <!-- 详情组件 -->
    <echart-line ref="EChartLine" class="component"/>
  </div>
</template>

<script>
import CardIndex from '@/components/CardIndex'
import EChartLine from './components/EChartLine'

const DEFAULT_CONFIG = {
  A: [],
  B: [
    // { title: '柱状图', description: 'bar', ref: 'Bar' }
  ],
  C: [],
  D: [],
  E: [],
  F: [],
  G: [],
  H: [],
  I: [],
  J: [],
  K: [],
  L: [
    { title: '折线图', description: 'line', ref: 'EChartLine' }
  ],
  M: [],
  N: [],
  O: [],
  P: [],
  Q: [],
  R: [],
  S: [],
  T: [],
  U: [],
  V: [],
  W: [],
  X: [],
  Y: [],
  Z: []
}

export default {
  name: 'Index',
  components: {
    CardIndex,
    'echart-line': EChartLine
  },
  data() {
    return {
      DEFAULT_CONFIG
    }
  },
  methods: {
    // ...
    showDetail(ref) {
      console.log(ref)
      console.dir(this.$refs[ref])
      this.$refs[ref].show()
    }
  }
}
</script>

<style lang="less" scoped>
  .root {
    height: calc(100vh - 116px);
    overflow: auto;
    position: relative;
  }

  .component {
    background-color: #FFFFFF;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
