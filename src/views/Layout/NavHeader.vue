<template>
  <div>
    <a-menu mode="horizontal"
            :theme="theme"
            :selected-keys="[currentNav]"
            style="height: 64px;line-height: 64px;">
      <a-button size="small"
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
          王海涛
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
            <a href="javascript:void(0)" @click="logout">退出登录</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </a-menu>
    <!-- 个性化对话框 -->
    <a-modal title="个性化"
             :visible="individuationDialog.visible"
             :width="600"
             okText="确认"
             cancelText="取消"
             @ok="handleOk"
             @cancel="hideIndividuationDialog">
      <a-form-model :label-col="{ span: 4 }" :wrapper-col="{ span: 14 }">
        <a-form-model-item label="选择主题">
          <a-radio-group v-model="theme">
            <a-radio v-for="(themeItem, themeIndex) in THEME_CONFIG"
                     :key="themeIndex"
                     :value="themeItem.value">
              {{ themeItem.label }}
            </a-radio>
          </a-radio-group>
        </a-form-model-item>
      </a-form-model>
    </a-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { THEME_CONFIG, DEFAULT_THEME, DEFAULT_COLLAPSED } from '@/global/config'

export default {
  name: 'NavHeader',
  data() {
    return {
      THEME_CONFIG,
      //
      theme: null,
      collapsed: null,
      // 个性化
      individuationDialog: {
        visible: false,
        form: {
          // theme: 'light'
        }
      }
    }
  },
  computed: {
    ...mapGetters(['routes', 'currentNav']),
    showRouter() {
      return this.routes.filter(e => e.isShow)
    }
  },
  watch: {
    theme(newValue) {
      this.$store.commit('SET_CURRENT_THEME', newValue)
    },
    collapsed(newValue) {
      this.$store.commit('SET_CURRENT_COLLAPSED', newValue)
    }
  },
  created() {
    this.theme = window.localStorage.getItem('theme') || DEFAULT_THEME
    // JSON.parse('false') => false
    this.collapsed = JSON.parse(window.localStorage.getItem('collapsed')) || DEFAULT_COLLAPSED
    // 如果是第一次，就保存
    this.$store.commit('SET_CURRENT_THEME', this.theme)
    this.$store.commit('SET_CURRENT_COLLAPSED', this.collapsed)
  },
  methods: {
    // 导航条点击
    handleClick(option) {
      const { key } = option
      this.$store.commit('SET_CURRENT_NAV', key)
    },
    // 【个性化对话框】
    // 打开
    showIndividuationDialog() {
      this.individuationDialog.visible = true
    },
    // 切换导航菜单宽度
    toggleCollapsed() {
      this.collapsed = !this.collapsed
      this.$store.commit('SET_CURRENT_COLLAPSED', this.collapsed)
    },
    // 确定
    handleOk() {
      // ?
      this.hideIndividuationDialog()
    },
    // 隐藏对话框
    hideIndividuationDialog() {
      this.individuationDialog.visible = false
    },
    // 退出登录
    logout() {
      const _this = this
      this.$confirm({
        title: '确认退出登录吗？',
        okText: '确认',
        cancelText: '取消',
        onCancel() {},
        onOk() {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              // 清除token
              localStorage.removeItem('token')
              // 跳转login
              _this.$router.push('/login')
              // 为了关闭loading
              resolve('关闭')
            }, 1000)
          }).catch(() => {
            console.log('Oops errors!')
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped></style>
