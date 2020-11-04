<template>
  <div>
    <div class="root">
      <card-index :title="'常用工具库'" :data="DEFAULT_CONFIG" @showDetail="showDetail"/>
    </div>
    <!-- 详情组件 -->
    <mock v-if="activeComponent === 'Mock'" ref="Mock" class="component"/>
    <moment v-if="activeComponent === 'Moment'" ref="Moment" class="component"/>
    <monaco v-if="activeComponent === 'Monaco'" ref="Monaco" class="component"/>
    <tinyMCE v-if="activeComponent === 'TinyMCE'" ref="TinyMCE" class="component"/>
    <debounce v-if="activeComponent === 'Debounce'" ref="Debounce" class="component"/>
    <throttle v-if="activeComponent === 'Throttle'" ref="Throttle" class="component"/>
    <flatten v-if="activeComponent === 'Flatten'" ref="Flatten" class="component"/>
    <day-js v-if="activeComponent === 'DayJs'" ref="DayJs" class="component"/>
    <vue-pdf v-if="activeComponent === 'VuePDF'" ref="VuePDF" class="component"/>
    <vue-video-player v-if="activeComponent === 'VueVideoPlayer'" ref="VueVideoPlayer" class="component"/>
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
      DEFAULT_CONFIG,
      activeComponent: ''
    }
  },
  methods: {
    // ...
    showDetail(ref) {
      this.activeComponent = ref
      setTimeout(() => {
        this.$refs[ref].show()
      }, 0)
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
