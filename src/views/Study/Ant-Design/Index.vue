<template>
  <div>
    <div class="root">
      <card-index title="CSS" :data="DEFAULT_CONFIG" @showDetail="showDetail"/>
    </div>
    <!-- 详情组件 -->
    <table-study ref="TableStudy" class="component"/>
    <transfer-study ref="TransferStudy" class="component"/>
    <form-study ref="FormStudy" class="component"/>
  </div>
</template>

<script>
import CardIndex from '@/components/CardIndex'
import TableStudy from './components/TableStudy'
import TransferStudy from './components/TransferStudy'
import FormStudy from './components/FormStudy'

const DEFAULT_CONFIG = {
  A: [],
  B: [],
  C: [],
  D: [],
  E: [],
  F: [
    { title: '表单', description: 'form', ref: 'FormStudy' }
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
  T: [
    { title: '表格', description: 'table', ref: 'TableStudy' },
    { title: '穿梭框', description: 'transfer', ref: 'TransferStudy' }
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
    TableStudy,
    TransferStudy,
    FormStudy
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
