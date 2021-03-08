<template>
  <a-modal title="个性化"
           :visible="visible"
           :width="MODAL_SIZE['df']"
           okText="确认"
           cancelText="取消"
           @ok="hideModal"
           @cancel="hideModal">
    <a-form-model :label-col="{ span: 4 }" :wrapper-col="{ span: 14 }">
      <a-form-model-item label="选择主题">
        <a-radio-group :value="theme"
                       @change="onChangeTheme"><!-- ❤❤❤❤：千万不能写成v-model="theme" -->
          <a-radio v-for="(themeItem, themeIndex) in THEME_CONFIG"
                   :key="themeIndex"
                   :value="themeItem.value">
            {{ themeItem.label }}
          </a-radio>
        </a-radio-group>
      </a-form-model-item>
    </a-form-model>
  </a-modal>
</template>

<script>
import { MODAL_SIZE, THEME_CONFIG } from '@/const'
import { mapState } from 'vuex'

export default {
  name: 'IndividuationModal',
  data() {
    return {
      MODAL_SIZE,
      THEME_CONFIG,
      // ...
      visible: false
    }
  },
  computed: {
    ...mapState({
      theme: state => state.common.theme
    })
  },
  methods: {
    // +----------------------------------------------------------------------------------------------------------------
    // | 对话框
    // +----------------------------------------------------------------------------------------------------------------
    showModal() {
      this.visible = true
    },
    hideModal() {
      this.visible = false
    },
    // +----------------------------------------------------------------------------------------------------------------
    // | 对话框：个性化
    // +----------------------------------------------------------------------------------------------------------------
    // 切换主题
    onChangeTheme(e) {
      const newValue = e.target.value
      this.$store.dispatch('common/SET_CURRENT_THEME', newValue)
    }
  }
}
</script>

<style lang="less" scoped></style>
