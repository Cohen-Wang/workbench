<template>
  <div class="root">
    <card-index title="CSS" :data="DEFAULT_CONFIG" @gotoDetail="gotoDetail"/>
    <!-- 组件 -->
    <div style="position: absolute; top: 0; left: 0;">
      <flex/>
    </div>
  </div>
</template>

<script>
import CardIndex from '@/components/CardIndex'
import Flex from './components/Flex'

const DEFAULT_CONFIG = {
  A: [],
  B: [],
  C: [],
  D: [],
  E: [],
  F: [
    { title: 'Flex', description: '弹性布局', method: 'abc' }
  ],
  G: [],
  H: [],
  I: [],
  J: [],
  K: [],
  L: [],
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
    Flex
  },
  data() {
    return {
      DEFAULT_CONFIG
    }
  },
  methods: {
    gotoDetail(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="less" scoped>
  .root {
    position: relative;
    height: calc(100vh - 116px);
    overflow: auto;
  }
</style>
