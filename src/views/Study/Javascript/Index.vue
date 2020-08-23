<template>
  <div>
    <div class="root">
      <card-index :data="DEFAULT_CONFIG" @showDetail="showDetail"/>
    </div>
    <!-- 详情组件 -->
    <console ref="Console" class="component"/>
    <my-cursor ref="MyCursor" class="component"/>
    <fetch ref="Fetch" class="component"/>
    <string ref="String" class="component"/>
    <worker ref="Worker" class="component"/>
    <open ref="Open" class="component"/>
    <geolocation ref="Geolocation" class="component"/>
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
  I: [],
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
  T: [],
  U: [],
  V: [],
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
    Geolocation
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
