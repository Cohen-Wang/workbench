<template>
  <div>
    <a-drawer :visible="visible"
              :title="data.date"
              :width="600"
              placement="right"
              :closable="true"
              @close="hideDrawer">
      <div class="drawer-body">
        <template v-if="data.china && data.china.length">
          <a-alert v-for="(item, index) in data.china"
                   :key="index"
                   :type="ALERT_LEVEL_TYPE[item.level]"
                   :message="`${index + 1}. ${item.event}`"
                   banner/>
        </template>
        <template v-if="data.other && data.other.length">
          <a-alert v-for="(item, index) in data.other"
                   :key="index"
                   :type="ALERT_LEVEL_TYPE[item.level]"
                   :message="`${index + 1}. ${item.event}`"
                   banner/>
        </template>
      </div>
    </a-drawer>
  </div>
</template>

<script>
import { ALERT_LEVEL_TYPE } from '@/constant'

export default {
  name: 'StockDrawer',
  data() {
    return {
      ALERT_LEVEL_TYPE,
      // ...
      visible: false,
      data: {}
    }
  },
  methods: {
    // +----------------------------------------------------------------------------------------------------------------
    // | 抽屉
    // +----------------------------------------------------------------------------------------------------------------
    showDrawer(data) {
      this.visible = true
      this.data = data
    },
    hideDrawer() {
      this.visible = false
    }
  }
}
</script>

<style lang="less" scoped>
  .drawer-body {
    height: calc(100vh - 110px);
    overflow-y: auto;
  }
</style>
