<template>
  <div>
    <div class="root">
      <card-index :title="'Javascript'" :data="DEFAULT_CONFIG" @showDetail="showDetail"/>
    </div>
    <!-- 详情组件 -->
    <console v-if="activeComponent === 'Console'" ref="Console" class="component"/>
    <my-cursor v-if="activeComponent === 'MyCursor'" ref="MyCursor" class="component"/>
    <fetch v-if="activeComponent === 'Fetch'" ref="Fetch" class="component"/>
    <string v-if="activeComponent === 'String'" ref="String" class="component"/>
    <worker v-if="activeComponent === 'Worker'" ref="Worker" class="component"/>
    <open v-if="activeComponent === 'Open'" ref="Open" class="component"/>
    <geolocation v-if="activeComponent === 'Geolocation'" ref="Geolocation" class="component"/>
    <h5-video v-if="activeComponent === 'H5Video'" ref="H5Video" class="component"/>
    <traversal v-if="activeComponent === 'Traversal'" ref="Traversal" class="component"/>
    <interval-and-callback v-if="activeComponent === 'IntervalAndCallback'" ref="IntervalAndCallback" class="component"/>
    <type-script-study v-if="activeComponent === 'type-script-study'" ref="type-script-study" class="component"/>
  </div>
</template>

<script>
import CardIndex from '@/components/CardIndex'
import Console from './components/Console'
import MyCursor from './components/MyCursor'
import Fetch from './components/Fetch'
import String from './components/String'
import Worker from './components/Worker'
import Open from './components/Open'
import Geolocation from './components/Geolocation'
import Video from './components/Video'
import Traversal from './components/Traversal'
import IntervalAndCallback from './components/IntervalAndCallback'
import TypeScriptStudy from './components/TypeScriptStudy'

const DEFAULT_CONFIG = {
  A: [],
  B: [],
  C: [
    { title: 'Console', description: 'Console', ref: 'Console' },
    { title: 'MyCursor', description: 'MyCursor', ref: 'MyCursor' }
  ],
  D: [
    { title: 'Debounce', description: 'Debounce', ref: 'Debounce' }
  ],
  E: [],
  F: [
    { title: 'Fetch', description: 'Fetch', ref: 'Fetch' }
  ],
  G: [
    { title: 'Geolocation', description: 'Geolocation', ref: 'Geolocation' }
  ],
  H: [],
  I: [
    { title: 'IntervalAndCallback', description: '定时器关闭自身，递归调用', ref: 'IntervalAndCallback' }
  ],
  J: [],
  K: [],
  L: [],
  M: [],
  N: [],
  O: [
    { title: 'Open', description: 'Open', ref: 'Open' }
  ],
  P: [],
  Q: [],
  R: [],
  S: [
    { title: 'String', description: 'String', ref: 'String' }
  ],
  T: [
    { title: 'Traversal', description: '遍历 - for', ref: 'Traversal' },
    { title: 'TypeScriptStudy', description: 'TypeScriptStudy', ref: 'TypeScriptStudy' }
  ],
  U: [],
  V: [
    { title: 'video标签学习', description: 'H5的原生视频学习', ref: 'H5Video' }
  ],
  W: [
    { title: 'Worker', description: 'Worker', ref: 'Worker' }
  ],
  X: [],
  Y: [],
  Z: []
}

export default {
  name: 'Index',
  components: {
    CardIndex,
    Console,
    MyCursor,
    Fetch,
    String,
    Worker,
    Open,
    Geolocation,
    'h5-video': Video,
    Traversal,
    IntervalAndCallback,
    TypeScriptStudy
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
