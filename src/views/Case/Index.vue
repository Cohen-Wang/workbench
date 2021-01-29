<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">案例集合</div>
    </div>
    <div class="panel-body panel-body-box">
      <div v-for="(layoutItem, key, index) in layoutCfg"
           :key="index"
           class="box">
        <blockquote>{{ key }}</blockquote>
        <a-row>
          <a-col :span="4"
                 class="mb-20"
                 v-for="item in layoutItem"
                 :key="item.name">
            <a-button type="dashed" @click="handleClick(item.path)">
              {{ item.name }}
            </a-button>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      url: 'http://localhost:8080',
      layoutCfg: {
        canvas: [
          { name: 'OKR柔性管理', path: '/workbench/case/d3/okr-flexible-management' },
          { name: '力导图-地理', path: '/workbench/case/d3/force-geography' },
          { name: '评先选优', path: '/workbench/case/d3/potency' }
        ],
        video: [
          { name: 'ChimeePlayer', path: '/workbench/case/video/chimee-player' }
        ]
      }
    }
  },
  methods: {
    handleClick(path) {
      window.open(this.url + path)
    }
  }
}
</script>

<style scoped lang="less">
  .box {
    padding-bottom: 20px;
    margin-bottom: 40px;
    border-bottom: 2px dashed #e8e8e8;
  }
</style>
