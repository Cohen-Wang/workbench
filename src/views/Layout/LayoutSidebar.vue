<template>
  <div :class="collapsed ? 'w-80' : 'w-240'">
    <div class="logo" :class="theme === 'dark' ? 'logo-dark' : 'logo-light'">
      <a @click="$router.push('/')">
        <img v-show="collapsed" src="@/assets/image/logo.png" width="30" alt=""/>
        <img v-show="!collapsed" src="@/assets/image/logo_with_text.png" width="100" alt=""/>
      </a>
    </div>
    <a-menu mode="inline"
            :theme="theme"
            class="layout-sidebar"
            :inline-collapsed="collapsed"
            @click="handleClick">
      <!-- 只有一个元素 -->
      <template v-for="item in notHaveChildrenRouter">
        <a-menu-item :key="item.path" titleClick="handleTitleClick">
          <a-icon v-if="item.meta.icon" :type="item.meta.icon"/>
          <span>{{ item.meta.title }}</span> <!-- 必须有span包裹，否则字无法收缩 -->
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
              <!-- 孙元素【无】孙孙元素 -->
              <!-- eslint-disable-next-line -->
              <template v-for="item3 in item2.children" v-if="!item3.children">
                <a-menu-item :key="item3.path">
                  {{ item3.meta.title }}
                </a-menu-item>
              </template>
              <!-- 孙元素【有】孙孙元素 -->
              <!-- eslint-disable-next-line -->
              <template v-for="item3 in item2.children" v-if="item3.children">
                <a-sub-menu :key="item3.path">
                <span slot="title">
                  <span>{{ item3.meta.title }}</span>
                </span>

                  <template v-for="item4 in item3.children">
                    <a-menu-item :key="item4.path">
                      {{ item4.meta.title }}
                    </a-menu-item>
                  </template>
                </a-sub-menu>
              </template>
            </a-sub-menu>
          </template>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LayoutSidebar',
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'routes',
      'currentNav',
      'theme',
      'collapsed'
    ]),
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
  }
}
</script>

<style lang="less" scoped>
  .logo {
    height: 64px;
    line-height: 64px;
    text-align: center;
  }

  .logo-dark {
    background-color: #001529;
  }

  .logo-light {
    background-color: #ffffff;
  }

  .layout-sidebar {
    height: calc(100vh - 64px);
    overflow-x: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar{
      display:none;
    }
  }
</style>
