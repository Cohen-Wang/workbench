<template>
  <div>
    <a-menu mode="horizontal"
            :theme="theme"
            :selected-keys="[currentNav]"
            style="height: 64px; line-height: 64px;">
      <a-button size="small"
                type="link"
                :icon="collapsed ? 'menu-unfold' : 'menu-fold'"
                style="margin: 0 20px;"
                @click="toggleCollapsed"/>
      <!-- 左边 -->
      <template v-for="item in showRouter">
        <a-menu-item :key="item.name" @click="handleClick">
          <a-icon v-if="item.meta.icon" :type="item.meta.icon"/>
          {{ item.meta.title ? item.meta.title : "" }}
        </a-menu-item>
      </template>
      <!-- 右边 -->
      <a-dropdown style="float: right;padding-right: 30px;">
        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
          <a-badge :count="1">
            <a-avatar shape="square"
                      :src="userInfo.avatarUrl"/>
          </a-badge>
          {{ userInfo.realName }}
          <a-icon type="down"/>
        </a>
        <a-menu slot="overlay">
          <a-menu-item>
            <a href="javascript:void(0)">个人中心</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:void(0)" @click="showIndividuationDialog">个性化</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:void(0)" @click="onLogout">退出登录</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </a-menu>

    <!-- 个性化对话框 -->
    <individuation-modal ref="IndividuationModal"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import IndividuationModal from '@/components/modal/IndividuationModal'

export default {
  name: 'NavHeader',
  components: {
    IndividuationModal
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'routes',
      'currentNav',
      'theme',
      'collapsed',
      'userInfo'
    ]),
    showRouter() {
      return this.routes.filter(e => e.isShow)
    }
  },
  methods: {
    ...mapActions([
      'SET_CURRENT_COLLAPSED',
      'REMOVE_USER_INFO',
      'REMOVE_TOKEN'
    ]),
    // 导航条点击
    handleClick(option) {
      const { key } = option
      this.$store.commit('SET_CURRENT_NAV', key)
    },
    // +----------------------------------------------------------------------------------------------------------------
    // | 对话框：个性化
    // +----------------------------------------------------------------------------------------------------------------
    // 打开
    showIndividuationDialog() {
      this.$refs['IndividuationModal'].showModal()
    },
    // +----------------------------------------------------------------------------------------------------------------
    // | 切换导航菜单宽度
    // +----------------------------------------------------------------------------------------------------------------
    toggleCollapsed() {
      this.SET_CURRENT_COLLAPSED(!this.collapsed)
    },
    // +----------------------------------------------------------------------------------------------------------------
    // | 退出登录
    // +----------------------------------------------------------------------------------------------------------------
    onLogout() {
      const _this = this
      this.$confirm({
        title: '确认退出登录吗？',
        okText: '确认',
        cancelText: '取消',
        onCancel() {},
        onOk() {
          _this.logout()
        }
      })
    },
    logout() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // 清除token
          this.REMOVE_USER_INFO()
          this.REMOVE_TOKEN()
          // 跳转login
          this.$router.push('/login')
          // 为了关闭loading
          resolve('关闭')
        }, 1000)
      }).catch(() => {
        console.log('Oops errors!')
      })
    }
  }
}
</script>

<style lang="less" scoped></style>
