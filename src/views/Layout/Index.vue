<template>
  <div class="d-flex">
    <!-- 左侧 -->
    <!-- sidebar -->
    <layout-sidebar/>
    <!-- 右侧 -->
    <div class="flex-1">
      <LayoutContent>
        <NavHeader slot="top"></NavHeader>
        <router-view slot="content"></router-view>
      </LayoutContent>
    </div>
  </div>
</template>

<script>
import NavHeader from './NavHeader'
import LayoutContent from './LayoutContent'
import LayoutSidebar from './LayoutSidebar'

export default {
  name: 'Index',
  components: {
    LayoutSidebar,
    NavHeader,
    LayoutContent
  },
  methods: {}
}
</script>

<style lang="less" scoped></style>
