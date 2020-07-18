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
      url: '/assets/case/canvas/',
      layoutCfg: [
        { name: '雷达', path: '' }
      ]
    }
  },
  methods: {
    handleClick(path) {
      console.log(this.url + path)
      window.open('/index.html', '_blank', 'height=800, width=800, top=200, left=200')
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
