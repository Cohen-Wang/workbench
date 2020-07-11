<template>
  <div class="d-flex">
    <!-- 左侧 -->
    <div class="w-240">
      <div class="logo">
        <a @click="$router.push('/')">
          <img src="@/assets/image/logo.png" alt=""/>
        </a>
      </div>
      <!-- sidebar -->
      <layout-sidebar/>
    </div>
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

<style lang="less" scoped>
.logo {
  /*background: url("../../assets/image/logo.png") center center no-repeat #001529;*/
  background-color: #001529;
  height: 64px;
  line-height: 64px;
  text-align: center;
}
</style>
