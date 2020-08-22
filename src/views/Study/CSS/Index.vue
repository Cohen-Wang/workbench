<template>
  <div>
    <div class="root">
      <card-index :data="DEFAULT_CONFIG" @showDetail="showDetail"/>
    </div>
    <!-- 详情组件 -->
    <flex ref="Flex" class="component"/>
    <scrollbar ref="Scrollbar" class="component"/>
  </div>
</template>

<script>
import CardIndex from '@/components/CardIndex'
import Flex from './components/Flex'
import Scrollbar from './components/Scrollbar'

const DEFAULT_CONFIG = {
  A: [],
  B: [],
  C: [],
  D: [],
  E: [],
  F: [
    { title: 'Flex', description: '弹性布局', ref: 'Flex' }
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
  S: [
    { title: 'Scrollbar', description: '滚动条', ref: 'Scrollbar' }
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
    Flex,
    Scrollbar
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
