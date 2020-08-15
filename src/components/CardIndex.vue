<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">{{ title }}</div>
    </div>
    <div class="panel-body panel-body-box">
      <template v-if="Object.keys(data).length > 0">
        <div v-for="(cfgItem, cfgKey, cfgIndex) in data"
             :key="cfgIndex"
             class="box">
          <blockquote>{{ cfgKey }}</blockquote>
          <a-row :gutter="[16, 16]">
            <a-col v-for="(item, index) in cfgItem" :key="index" :xs="24" :sm="12" :md="8" :lg="8" :xl="6" :xxl="4">
              <a-card hoverable @click="gotoDetail(item.method)">
                <img slot="cover"
                     alt="example"
                     :src="item.src || 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'"/>
                <a-card-meta :title="item.title || '暂无标题' " :description="item.description || '暂无描述'"/>
              </a-card>
            </a-col>
          </a-row>
        </div>
      </template>
      <a-empty v-else description="暂无数据"/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CardIndex',
  props: {
    title: {
      type: String,
      default: '暂无标题'
    },
    data: {
      type: Object,
      default: {}
    }
  },
  methods: {
    gotoDetail(method) {
      this.$emit('gotoDetail', method)
    }
  }
}
</script>

<style scoped>

</style>
