<template>
  <div>
    <div class="root">
      <card-index :title="'Vue'" :data="DEFAULT_CONFIG" @showDetail="showDetail"/>
    </div>
    <!-- 详情组件 -->
    <force-update v-if="activeComponent === 'ForceUpdate'" ref="ForceUpdate" class="component"/>
    <key v-if="activeComponent === 'Key'" ref="Key" class="component"/>
    <lifecycle v-if="activeComponent === 'Lifecycle'" ref="Lifecycle" class="component"/>
    <mixins v-if="activeComponent === 'Mixins'" ref="Mixins" class="component"/>
    <transition-study v-if="activeComponent === 'TransitionStudy'" ref="TransitionStudy" class="component"/>
    <watch v-if="activeComponent === 'Watch'" ref="Watch" class="component"/>
    <router v-if="activeComponent === 'Router'" ref="Router" class="component"/>
    <my-slot v-if="activeComponent === 'MySlot'" ref="MySlot" class="component"/>
    <keep-alive-study v-if="activeComponent === 'KeepAliveStudy'" ref="KeepAliveStudy" class="component"/>
    <native v-if="activeComponent === 'Native'" ref="Native" class="component"/>
    <filters v-if="activeComponent === 'Filters'" ref="Filters" class="component"/>
  </div>
</template>

<script>
import CardIndex from '@/components/CardIndex'
import ForceUpdate from './components/ForceUpdate'
import Key from './components/Key'
import Lifecycle from './components/Lifecycle'
import Mixins from './components/Mixins'
import TransitionStudy from './components/Transition'
import Watch from './components/Watch'
import Router from './components/Router'
import MySlot from './components/MySlot'
import KeepAliveStudy from './components/KeepAliveStudy'
import Native from './components/Native'
import Filters from './components/Filters'

const DEFAULT_CONFIG = {
  A: [],
  B: [],
  C: [],
  D: [
    // { title: 'Deep', description: 'Deep', ref: 'Deep' }
  ],
  E: [],
  F: [
    { title: 'ForceUpdate', description: '强制刷新', ref: 'ForceUpdate' },
    { title: 'Filters', description: '过滤器', ref: 'Filters' }
  ],
  G: [],
  H: [],
  I: [],
  J: [],
  K: [
    { title: 'Key', description: '（v-for）之Key', ref: 'Key' },
    { title: 'KeepAliveStudy', description: 'keep-alive', ref: 'KeepAliveStudy' }
  ],
  L: [
    { title: 'Lifecycle', description: '生命周期', ref: 'Lifecycle' }
  ],
  M: [
    { title: 'Mixins', description: '混合', ref: 'Mixins' },
    { title: 'MySlot', description: '插槽', ref: 'MySlot' }
  ],
  N: [
    { title: 'Native', description: '修饰符Native', ref: 'Native' }
  ],
  O: [],
  P: [],
  Q: [],
  R: [
    { title: 'Router', description: '路由', ref: 'Router' }
  ],
  S: [],
  T: [
    { title: 'TransitionStudy', description: '混合', ref: 'TransitionStudy' }
  ],
  U: [],
  V: [],
  W: [
    { title: 'Watch', description: '监听', ref: 'Watch' }
  ],
  X: [],
  Y: [],
  Z: []
}

export default {
  name: 'Index',
  components: {
    CardIndex,
    ForceUpdate,
    Key,
    Lifecycle,
    Mixins,
    TransitionStudy,
    Watch,
    Router,
    MySlot,
    KeepAliveStudy,
    Native,
    Filters
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
