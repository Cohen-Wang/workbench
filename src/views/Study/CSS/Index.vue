<template>
  <div>
    <div class="root">
      <card-index :data="DEFAULT_CONFIG" @showDetail="showDetail"/>
    </div>
    <!-- 详情组件 -->
    <flex ref="Flex" class="component"/>
    <scrollbar ref="Scrollbar" class="component"/>
    <text-overflow ref="TextOverflow" class="component"/>
    <icon-font ref="IconFont" class="component"/>
    <font-awesome ref="FontAwesome" class="component"/>
    <hover ref="Hover" class="component"/>
    <deep ref="Deep" class="component"/>
    <less-loop ref="LessLoop" class="component"/>
  </div>
</template>

<script>
import CardIndex from '@/components/CardIndex'
import Flex from './components/Flex'
import Scrollbar from './components/Scrollbar'
import TextOverflow from './components/TextOverflow'
import IconFont from './components/IconFont'
import FontAwesome from './components/Font-Awesome'
import Hover from './components/Hover'
import Deep from './components/Deep'
import LessLoop from './components/LessLoop'

const DEFAULT_CONFIG = {
  A: [],
  B: [],
  C: [],
  D: [
    { title: 'Deep', description: 'Deep', ref: 'Deep' }
  ],
  E: [],
  F: [
    { title: 'Flex', description: '弹性布局', ref: 'Flex' },
    { title: 'FontAwesome', description: 'font-awesome', ref: 'FontAwesome' }
  ],
  G: [],
  H: [
    { title: 'Hover', description: '移入移出', ref: 'Hover' }
  ],
  I: [
    { title: 'IconFont', description: 'iconfont', ref: 'IconFont' }
  ],
  J: [],
  K: [],
  L: [
    { title: 'Less-loop', description: 'less循环', ref: 'LessLoop' }
  ],
  M: [],
  N: [],
  O: [],
  P: [],
  Q: [],
  R: [],
  S: [
    { title: 'Scrollbar', description: '滚动条', ref: 'Scrollbar' }
  ],
  T: [
    { title: 'TextOverflow', description: '文字超框', ref: 'TextOverflow' }
  ],
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
    Scrollbar,
    TextOverflow,
    IconFont,
    FontAwesome,
    Hover,
    Deep,
    LessLoop
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
