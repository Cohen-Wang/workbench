<template>
  <div>
    <a-calendar fullscreen>
      <div slot="dateCellRender"
           slot-scope="value"
           class="pointer"
           @click="showDrawer(getListData(value))">
        <template v-if="getListData(value).china && getListData(value).china.length">
          <a-alert v-for="(item, index) in getListData(value).china"
               :key="index"
               :type="ALERT_LEVEL_TYPE[item.level]"
               :message="`${index + 1}. ${item.event}`"
               banner/>
        </template>
        <template v-if="getListData(value).other && getListData(value).other.length">
          <a-alert v-for="(item, index) in getListData(value).other"
                   :key="index"
                   :type="ALERT_LEVEL_TYPE[item.level]"
                   :message="`${index + 1}. ${item.event}`"
                   banner/>
        </template>
      </div>
    </a-calendar>

    <!-- 抽屉 -->
    <stock-drawer ref="StockDrawer"/>
  </div>
</template>

<script>
import moment from 'moment'
import { ALERT_LEVEL_TYPE } from '@/constant'
import StockDrawer from './stock-drawer'

export default {
  name: 'StockCalendar',
  components: {
    StockDrawer
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      ALERT_LEVEL_TYPE,
      // ...
      visible: false
    }
  },
  created() {
  },
  methods: {
    getListData(value) {
      return this.data.filter(e => e.date === moment(value).format('YYYY-MM-DD'))[0]
    },
    // +----------------------------------------------------------------------------------------------------------------
    // | 抽屉
    // +----------------------------------------------------------------------------------------------------------------
    showDrawer(data) {
      this.$refs['StockDrawer'].showDrawer(data)
    }
  }
}
</script>

<style scoped>

</style>
