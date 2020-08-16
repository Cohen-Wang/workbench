<template>
  <div>
    <div class="root">
      <card-index :data="DEFAULT_CONFIG" @showDetail="showDetail"/>
    </div>
    <!-- 详情组件 -->
    <bar ref="Bar" class="component"/>
    <my-line ref="Line" class="component"/>
    <radar ref="Radar" class="component"/>
  </div>
</template>

<script>
import CardIndex from '@/components/CardIndex'
import Bar from './components/Bar'
import Line from './components/Line'
import Radar from './components/Radar'

const DEFAULT_CONFIG = {
  A: [],
  B: [
    { title: '柱状图', description: 'bar', ref: 'Bar' }
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
    { title: '折线图', description: 'line', ref: 'Line' }
  ],
  M: [],
  N: [],
  O: [],
  P: [],
  Q: [],
  R: [
    { title: '雷达图', description: 'radar', ref: 'Radar' }
  ],
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
    Bar,
    'my-line': Line,
    Radar
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
