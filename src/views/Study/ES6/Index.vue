<template>
  <div>
    <div class="root">
      <card-index :data="DEFAULT_CONFIG" @showDetail="showDetail"/>
    </div>
    <!-- 详情组件 -->
    <clone ref="Clone" class="component"/>
    <async ref="Async" class="component"/>
    <nullOperator ref="NullOperator" class="component"/>
    <promise ref="Promise" class="component"/>
    <square ref="Square" class="component"/>
    <my-symbol ref="Symbol" class="component"/>
  </div>
</template>

<script>
import CardIndex from '@/components/CardIndex'
import Clone from './components/Clone'
import Async from './components/Async'
import NullOperator from './components/NullOperator'
import Promise from './components/Promise'
import Square from './components/Square'
import MySymbol from './components/Symbol'

const DEFAULT_CONFIG = {
  A: [
    { title: 'Async', description: 'Async', ref: 'Async' }
  ],
  B: [],
  C: [
    { title: 'NullOperator', description: 'NullOperator', ref: 'NullOperator' }
  ],
  D: [],
  E: [],
  F: [],
  G: [],
  H: [],
  I: [],
  J: [],
  K: [],
  L: [],
  M: [],
  N: [
    { title: 'Clone', description: 'Clone', ref: 'Clone' }
  ],
  O: [],
  P: [
    { title: 'Promise', description: 'Promise', ref: 'Promise' }
  ],
  Q: [],
  R: [],
  S: [
    { title: 'Square', description: 'Square', ref: 'Square' },
    { title: 'Symbol', description: 'Symbol', ref: 'Symbol' }
  ],
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
    Clone,
    Async,
    NullOperator,
    Promise,
    Square,
    MySymbol
  },
  data() {
    return {
      DEFAULT_CONFIG
    }
  },
  methods: {
    // ...
    showDetail(ref) {
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
