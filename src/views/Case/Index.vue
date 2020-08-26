<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">案例集合</div>
    </div>
    <div class="panel-body panel-body-box">
      <div class="box">
        <blockquote>Canvas案例</blockquote>
        <a-row>
          <a-col :span="4"
                 class="mb-20"
                 v-for="item in layoutCfg"
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
      url: 'http://localhost:8081',
      layoutCfg: [
        { name: 'OKR柔性管理', path: '/workbench/case/d3/okr-flexible-management' }
      ]
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
