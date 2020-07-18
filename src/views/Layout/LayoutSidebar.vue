<template>
  <a-menu mode="vertical"
          theme="dark"
          class="layout-sidebar"
          @click="handleClick">
    <!-- 只有一个元素 -->
    <template v-for="item in notHaveChildrenRouter">
      <a-menu-item :key="item.path" titleClick="handleTitleClick">
        <a-icon v-if="item.meta.icon"
                :type="item.meta.icon"/>
        {{ item.meta.title}}
      </a-menu-item>
    </template>
    <!-- 多个元素 -->
    <template v-for="item in haveChildrenRouter">
      <a-sub-menu :key="item.name">
        <span slot="title">
          <a-icon v-if="item.meta.icon"
                  :type="item.meta.icon"/>
          <span>{{ item.meta.title }}</span>
        </span>
        <!-- 子元素无孙元素 -->
        <!-- eslint-disable-next-line -->
        <template v-for="item2 in item.children" v-if="!item2.children">
          <a-menu-item :key="item2.path">
            {{ item2.meta.title }}
          </a-menu-item>
        </template>
        <!-- 子元素有孙元素 -->
        <!-- eslint-disable-next-line -->
        <template v-for="item2 in item.children" v-if="item2.children">
          <a-sub-menu :key="item2.path">
            <span slot="title">
              <span>{{ item2.meta.title }}</span>
            </span>
            <template v-for="item3 in item2.children">
              <a-menu-item :key="item3.path">
                {{ item3.meta.title }}
              </a-menu-item>
            </template>
          </a-sub-menu>
        </template>
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
    haveChildrenRouter() {
      return this.currentRoute.filter(router => router.children)
    },
    notHaveChildrenRouter() {
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
