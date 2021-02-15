<template>
  <div>
    <div class="padding-left-sm padding-right-lg padding-tb">
      <a-timeline mode="left">
        <a-timeline-item v-for="(dayItem, dayIndex) in data"
                         :key="dayIndex">
          <div class="margin-bottom text-blue text-bold">{{ dayItem.date }} ({{ `星期${moment(dayItem.date).day()}` }})</div>
          <div style="overflow-x: hidden;">
            <a-row :gutter="20">
              <a-col :span="12">
                <a-card size="small" title="中国">
                  <div slot="extra" class="bg-red">
                    <a-rate v-model="rateValue" disabled/>
                  </div>
                  <div>
                    <div v-for="(item, index) in dayItem.china.events"
                       :key="index">
                      <span>{{ index + 1 }}.</span><span>{{ item }}</span>
                    </div>
                  </div>
                </a-card>
              </a-col>
              <a-col :span="12">
                <a-card size="small" title="外国" class="bg-red">
                  <a-rate slot="extra" v-model="rateValue" disabled/>
                  <div v-for="(item, index) in dayItem.other.events"
                     :key="index">
                    <span>{{ index + 1 }}.</span><span>{{ item }}</span>
                  </div>
                </a-card>
              </a-col>
            </a-row>
          </div>
        </a-timeline-item>
      </a-timeline>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import data from './data.js'

export default {
  name: 'StockTimeline',
  data() {
    return {
      moment,
      // ...
      rateValue: 5,
      data
    }
  },
  created() {
    console.log('data', data)
  }
}
</script>

<style scoped>

</style>
