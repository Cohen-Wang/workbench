<template>
  <div>
    <div class="root">
      <card-index :title="'常用工具库'" :data="DEFAULT_CONFIG" @showDetail="showDetail"/>
    </div>
    <!-- 详情组件 -->
    <mock ref="Mock" class="component"/>
    <moment ref="Moment" class="component"/>
    <monaco ref="Monaco" class="component"/>
    <tinyMCE ref="TinyMCE" class="component"/>
    <debounce ref="Debounce" class="component"/>
    <throttle ref="Throttle" class="component"/>
    <flatten ref="Flatten" class="component"/>
    <day-js ref="DayJs" class="component"/>
    <vue-pdf ref="VuePDF" class="component"/>
    <vue-video-player ref="VueVideoPlayer" class="component"/>
  </div>
</template>

<script>
import CardIndex from '@/components/CardIndex'
import Mock from './components/Mock'
import Moment from './components/Moment'
import Monaco from './components/Monaco'
import TinyMCE from './components/TinyMCE'
import Debounce from './components/Lodash.Debounce'
import Throttle from './components/Lodash.Throttle'
import Flatten from './components/Lodash.Flatten'
import DayJs from './components/DayJs'
import VuePDF from './components/VuePDF'
import VueVideoPlayer from './components/VueVideoPlayer'

const DEFAULT_CONFIG = {
  A: [],
  B: [],
  C: [],
  D: [
    { title: 'Debounce', description: 'Debounce', ref: 'Debounce' },
    { title: 'DayJs', description: 'DayJs', ref: 'DayJs' }
  ],
  E: [],
  F: [
    { title: 'Flatten', description: 'Flatten', ref: 'Flatten' }
  ],
  G: [],
  H: [],
  I: [],
  J: [],
  K: [],
  L: [],
  M: [
    { title: 'Mock', description: 'Mock', ref: 'Mock' },
    { title: 'Moment', description: 'Moment', ref: 'Moment' },
    { title: 'Monaco', description: 'Monaco', ref: 'Monaco' }
  ],
  N: [],
  O: [],
  P: [],
  Q: [],
  R: [],
  S: [],
  T: [
    { title: 'TinyMCE', description: 'TinyMCE', ref: 'TinyMCE' },
    { title: 'Throttle', description: 'Throttle', ref: 'Throttle' }
  ],
  U: [],
  V: [
    { title: 'VuePDF', description: 'VuePDF', ref: 'VuePDF' },
    { title: 'vue播放器', description: 'vue 播放器插件 之 vue-video-player', ref: 'VueVideoPlayer' }
  ],
  W: [],
  X: [],
  Y: [],
  Z: []
}

export default {
  name: 'Index',
  components: {
    CardIndex,
    Mock,
    Moment,
    Monaco,
    TinyMCE,
    Debounce,
    Throttle,
    Flatten,
    DayJs,
    'vue-pdf': VuePDF,
    VueVideoPlayer
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
