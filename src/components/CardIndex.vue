<template>
  <a-card size="small" :title="title">
    <!--<a slot="extra" href="#" @click="showEditorDialog">编辑</a>-->
    <div class="card-box">
      <template v-if="Object.keys(data).length > 0">
        <div v-for="(cfgItem, cfgKey, cfgIndex) in data"
             :key="cfgIndex"
             class="box">
          <blockquote>{{ cfgKey }}</blockquote>
          <template v-if="cfgItem.length > 0">
            <a-row :gutter="[0, 16]">
              <a-col v-for="(item, index) in cfgItem" :key="index" :xs="24" :sm="12" :md="8" :lg="8" :xl="6" :xxl="4">
                <a-card>
                  <img slot="cover"
                       alt="example"
                       :src="item.src || 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'"/>
                  <template slot="actions" class="ant-card-actions">
                    <a-button type="link" @click="showDetail(item.ref)">进入详情</a-button>
                  </template>
                  <a-card-meta :title="item.title || '暂无标题' " :description="item.description || '暂无描述'"/>
                </a-card>
              </a-col>
            </a-row>
          </template>
          <a-empty v-else description="暂无数据"/>
        </div>
      </template>
      <a-empty v-else description="暂无数据"/>
    </div>
  </a-card>
  <!--<div class="bg-white p-10">
    <template v-if="Object.keys(data).length > 0">
      <div v-for="(cfgItem, cfgKey, cfgIndex) in data"
           :key="cfgIndex"
           class="box">
        <blockquote>{{ cfgKey }}</blockquote>
        <template v-if="cfgItem.length > 0">
          <a-row :gutter="[16, 16]">
            <a-col v-for="(item, index) in cfgItem" :key="index" :xs="24" :sm="12" :md="8" :lg="8" :xl="6" :xxl="4">
              <a-card>
                <img slot="cover"
                     alt="example"
                     :src="item.src || 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'"/>
                <template slot="actions" class="ant-card-actions">
                  <a-button type="link" @click="showDetail(item.ref)">进入详情</a-button>
                </template>
                <a-card-meta :title="item.title || '暂无标题' " :description="item.description || '暂无描述'"/>
              </a-card>
            </a-col>
          </a-row>
        </template>
        <a-empty v-else description="暂无数据"/>
      </div>
    </template>
    <a-empty v-else description="暂无数据"/>
  </div>-->
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
    showDetail(method) {
      this.$emit('showDetail', method)
    }
  }
}
</script>

<style lang="less" scoped>
  .card-box {
    height: calc(100vh - 179px);
    overflow: auto;
  }
</style>
