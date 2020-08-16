<template>
  <a-layout>
    <!-- navbar -->
    <a-layout-header style="padding: 0;">
      <slot name="top"></slot>
    </a-layout-header>
    <!-- content -->
    <a-layout-content class="content">
      <!-- 面包屑导航 -->
      <div class="breadcrumb">
        <a-breadcrumb separator="/">
          <template v-for="(item, index) in breadcrumbItem">
            <a-breadcrumb-item :key="index">
              <!-- 路径页面，可以点击跳转 -->
              <router-link v-if="breadcrumbItem.indexOf(item) !== breadcrumbItem.length - 1"
                           :to="item.path">
                {{ item.title }}
              </router-link>
              <!-- 当前页面，不能点击 -->
              <span v-else>{{ item.title }}</span>
            </a-breadcrumb-item>
          </template>
        </a-breadcrumb>
      </div>
      <!-- 内容 -->
      <div class="view">
        <slot name="content"></slot>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script>
export default {
  name: 'LayoutContent',
  data() {
    return {
      breadcrumbItem: []
    }
  },
  created() {
    this.initBreadcrumItem(this.$route)
  },
  watch: {
    $route(route) {
      this.initBreadcrumItem(route)
    }
  },
  methods: {
    initBreadcrumItem(route) {
      // 初始化首页
      const breadcrumbItem = [{ path: '/', title: '后台管理系统' }]
      // 当前路径，注意这里用map的坑
      route.matched.forEach(item => {
        if (item.meta && item.meta.title) {
          breadcrumbItem.push({
            path: item.path ? item.path : '/',
            title: item.meta.title
          })
        }
      })
      // 合并
      this.breadcrumbItem = breadcrumbItem
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  height: calc(100vh - 64px);
  background-color: #dce0e6;
  padding: 10px;

  .breadcrumb {
    height: 21px;
    background-color: #ffffff;
    margin-bottom: 10px;
    border-radius: 4px;
    padding: 0 10px;
  }

  .view {
    height: calc(100vh - 115px);
    overflow: auto;
    position: relative;
  }
}
</style>
