<template>
  <div>
    <a-drawer :visible="visible"
              :title="data.date"
              :width="600"
              placement="right"
              :closable="true"
              @close="hideDrawer">
      <div class="drawer-body">
        <!-- 中国 -->
        <div>
          <a-divider orientation="left">
            <a-avatar shape="square"
                      :src="require(`@/assets/image/flag/china_flag.jpg`)"/>
          </a-divider>
          <template v-if="data.china && data.china.length">
            <div v-for="(item, index) in data.china"
                 :key="index"
                 class="margin-bottom-sm">
              <a-alert :type="ALERT_LEVEL_TYPE[item.level]"
                       :message="`${index + 1}. ${item.event}`"
                       banner/>
            </div>
          </template>
          <a-empty v-else description="暂无数据"/>
        </div>
        <!-- 外国 -->
        <div>
          <a-divider orientation="left">
            <a-avatar shape="square"
                      :src="require(`@/assets/image/flag/world_flag.jpg`)"/>
          </a-divider>
          <template v-if="data.other && data.other.length">
            <div v-for="(item, index) in data.other"
                 :key="index"
                 class="margin-bottom-sm">
              <a-alert :type="ALERT_LEVEL_TYPE[item.level]"
                       :message="`${index + 1}. ${item.event}`"
                       banner/>
            </div>
          </template>
          <a-empty v-else description="暂无数据"/>
        </div>
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
