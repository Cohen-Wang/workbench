<template>
  <div>
    <div class="padding-left-sm padding-right-lg padding-tb">
      <a-timeline mode="left">
        <a-timeline-item v-for="(dayItem, dayIndex) in data"
                         :key="dayIndex"
                         color="gray">
          <!-- 日期 -->
          <div class="margin-bottom">{{ dayIndex + 1 }}. {{ dayItem.date }} ({{ `星期${moment(dayItem.date).isoWeekday()}` }})</div>
          <!-- 内容 -->
          <div v-if="dayItem.china && dayItem.china.length || dayItem.other && dayItem.other.length"
               style="overflow-x: hidden;">
            <a-row :gutter="50">
              <!-- 中国 -->
              <a-col :span="12">
                <div v-for="(item, index) in dayItem.china"
                     :key="index"
                     class="margin-bottom-xs">
                  <a-alert :type="ALERT_LEVEL_TYPE[item.level]"
                           :message="`${index + 1}. ${item.event}`"/>
                </div>
              </a-col>
              <!-- 外国 -->
              <a-col :span="12">
                <div v-for="(item, index) in dayItem.other"
                     :key="index"
                     class="margin-bottom-xs">
                  <a-alert :type="ALERT_LEVEL_TYPE[item.level]"
                           :message="`${index + 1}. ${item.event}`"/>
                </div>
              </a-col>
            </a-row>
          </div>
          <a-empty v-else
                   :image="Empty.PRESENTED_IMAGE_SIMPLE"
                   description="暂无事件"/>
        </a-timeline-item>
      </a-timeline>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { Empty } from 'ant-design-vue'
import data from './data.js'

const ALERT_LEVEL_TYPE = {
  1: 'error',
  2: 'warning',
  3: 'info',
  4: 'success'
}

export default {
  name: 'StockTimeline',
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
      moment,
      Empty,
      ALERT_LEVEL_TYPE
      // ...
    }
  },
  created() {
    console.log('data', data)
  }
}
</script>

<style scoped>

</style>
