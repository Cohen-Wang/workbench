<template>
  <a-menu mode="vertical"
          theme="dark"
          class="layout-sidebar"
          @click="handleClick">
    <!-- 只有一个元素 -->
    <template v-for="item in notHasChildrenRouter">
      <a-menu-item :key="item.path" titleClick="handleTitleClick">
        <a-icon v-if="item.meta.icon"
                :type="item.meta.icon"/>
        {{ item.meta.title}}
      </a-menu-item>
    </template>
    <!-- 多个元素 -->
    <template v-for="item in hasChildrenRouter">
      <a-sub-menu :key="item.name">
                <span slot="title">
                    <a-icon v-if="item.meta.icon"
                            :type="item.meta.icon"/>
                    <span>{{ item.meta.title }}</span>
                </span>
        <!-- 子元素无孙元素 -->
        <template v-for="item2 in item.children">
          <a-menu-item :key="item2.path">
            {{ item2.meta.title }}
          </a-menu-item>
        </template>
        <!-- 子元素有孙元素 -->
        <!--<a-sub-menu key="sub1-2" title="Submenu">
            <a-menu-item key="5">
                Option 5
            </a-menu-item>
            <a-menu-item key="6">
                Option 6
            </a-menu-item>
        </a-sub-menu>-->
      </a-sub-menu>
    </template>
  </a-menu>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LayoutSidebar',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['routes', 'currentNav']),
    currentRoute() {
      return this.routes.find(item => item.name === this.currentNav).children
    },
    hasChildrenRouter() {
      return this.currentRoute.filter(router => router.children)
    },
    notHasChildrenRouter() {
      return this.currentRoute.filter(router => !router.children)
    }
  },
  methods: {
    handleClick(option) {
      const { key } = option
      this.$router.push(key)
    }
  },
  created() {}
}
</script>

<style lang="less" scoped>
.layout-sidebar {
  height: calc(100vh - 64px);
  overflow-y: auto;
}
</style>
