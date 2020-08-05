<template>
  <div>
    <a-menu mode="horizontal"
            :selected-keys="[currentNav]"
            style="height: 64px;line-height: 64px;">
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
      <a-form-model :model="individuationDialog.form" :label-col="{ span: 4 }" :wrapper-col="{ span: 14 }">
        <a-form-model-item label="选择主题">
          <a-radio-group v-model="individuationDialog.form.theme" @change="changeTheme">
            <a-radio-button v-for="(styleItem, styleIndex) in THEME_CONFIG"
                            :key="styleIndex"
                            :value="styleItem.value">
              {{ styleItem.label }}
            </a-radio-button>
          </a-radio-group>
        </a-form-model-item>
      </a-form-model>
    </a-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { THEME_CONFIG } from '@/global/config'

export default {
  name: 'NavHeader',
  data() {
    return {
      THEME_CONFIG,
      // 个性化
      individuationDialog: {
        visible: false,
        form: {
          theme: 'light'
        }
      }
    }
  },
  computed: {
    ...mapGetters(['routes', 'currentNav', 'theme']),
    showRouter() {
      return this.routes.filter(e => e.isShow)
    }
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
    // 切换主题
    changeTheme(e) {
      const theme = e.target.value
      this.$store.commit('SET_CURRENT_THEME', theme)
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
  },
  created() {}
}
</script>

<style lang="less" scoped></style>
