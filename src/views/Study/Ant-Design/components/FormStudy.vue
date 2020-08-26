<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <!-- 主题 -->
        <div class="content">
          <div class="left">
            <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
              <!-- 用户名 -->
              <a-form-model-item label="用户名" required>
                <a-input v-model="form.name" placeholder="请输入用户名"/>
              </a-form-model-item>
              <!-- 性别 -->
              <a-form-model-item label="性别" required>
                <a-radio-group v-model="form.gender">
                  <a-radio v-for="(item, index) in GENDER_CONFIG"
                           :key="index"
                           :label="item.label"
                           :value="item.value">
                    {{ item.label }}
                  </a-radio>
                </a-radio-group>
              </a-form-model-item>
              <!-- 生日 -->
              <a-form-model-item label="生日" required>
                <a-date-picker v-model="form.birthday"
                               show-time
                               type="date"
                               placeholder="请选择日期"
                               style="width: 100%;"/>
              </a-form-model-item>
              <!-- 地址 -->
              <a-form-model-item label="地址">
                <a-select v-model="form.region"
                          placeholder="请输入地址">
                  <a-select-option value="shanghai">Zone one</a-select-option>
                  <a-select-option value="beijing">Zone two</a-select-option>
                </a-select>
              </a-form-model-item>
              <!-- 树形下拉框 -->
              <a-form-model-item label="家族">
                <a-tree-select v-model="form.address"
                               style="width: 100%"
                               show-search
                               :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
                               :tree-data="TREE_DATA_CONFIG"
                               placeholder="请选择所在家族"
                               tree-default-expand-all><!--@search="onSearchFamily"-->
                </a-tree-select>
              </a-form-model-item>
              <!-- 接收推送 -->
              <a-form-model-item label="接收推送">
                <a-switch v-model="form.allowMessage"/>
              </a-form-model-item>
              <!-- 语言 -->
              <a-form-model-item label="语言" required>
                <a-checkbox-group v-model="form.language">
                  <a-checkbox v-for="(item, index) in LANGUAGE_CONFIG"
                              :key="index"
                              :value="item.value">
                    {{ item.label }}
                  </a-checkbox>
                </a-checkbox-group>
              </a-form-model-item>
              <!-- 自我描述 -->
              <a-form-model-item label="自我描述">
                <a-input v-model="form.introduce"
                         type="textarea"
                         placeholder="请填写自我描述"
                         rows="5"
                         style="resize: none"/>
              </a-form-model-item>
              <!-- 按钮 -->
              <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
                <a-button type="primary" @click="onSubmit">
                  确定
                </a-button>
                <a-button style="margin-left: 10px;">
                  取消
                </a-button>
              </a-form-model-item>
            </a-form-model>
          </div>
          <div class="right">
            <a-affix :target="() => this.$refs.container">
              <pre class="well" v-text="form"></pre>
            </a-affix>
          </div>
        </div>
        <a-divider>Text</a-divider>
      </div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'

// 【配置】性别
const GENDER_CONFIG = [
  { label: '男', value: 1 },
  { label: '女', value: 0 }
]
const DEFAULT_GENDER = 1 // 性别默认值
// 【配置】语言
const LANGUAGE_CONFIG = [
  { label: 'HTML', value: 'HTML' },
  { label: 'CSS', value: 'CSS' },
  { label: 'JAVASCRIPT', value: 'JAVASCRIPT' },
  { label: 'VUE', value: 'VUE' },
  { label: 'REACT', value: 'REACT' },
  { label: 'ANGULAR', value: 'ANGULAR' },
  { label: 'JAVA', value: 'JAVA' },
  { label: 'PHP', value: 'PHP' },
  { label: 'LINUX', value: 'LINUX' },
  { label: 'MYSQL', value: 'MYSQL' },
  { label: 'NODEJS', value: 'NODEJS' }
]
const DEFAULT_LANGUAGE = ['HTML', 'JAVASCRIPT', 'VUE', 'PHP', 'MYSQL']
// 【配置】树形下拉框
const TREE_DATA_CONFIG = [
  {
    title: '赵家',
    value: '赵家',
    key: '0-0',
    children: [
      {
        title: '赵大',
        value: '赵大',
        key: '0-0-1'
      },
      {
        title: '赵二',
        value: '赵二',
        key: '0-0-2'
      }
    ]
  },
  {
    title: '王家',
    value: '王家',
    key: '0-1',
    children: [
      {
        title: '王大',
        value: '王大',
        key: '0-0-1'
      },
      {
        title: '王二',
        value: '王二',
        key: '0-0-2'
      }
    ]
  }
]

export default {
  name: 'FormStudy',
  components: {
    GoBack,
    MyComponent
  },
  data() {
    return {
      visible: false,
      // ...
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
      form: {
        name: '',
        gender: DEFAULT_GENDER,
        birthday: undefined,
        region: undefined,
        allowMessage: true,
        language: DEFAULT_LANGUAGE,
        introduce: ''
      },
      // 配置
      GENDER_CONFIG,
      LANGUAGE_CONFIG,
      TREE_DATA_CONFIG
    }
  },
  methods: {
    // +---------------------------------------------------------------------------------------------
    // | 页面
    // +---------------------------------------------------------------------------------------------
    show() {
      this.visible = true
    },
    goBack() {
      this.visible = false
    },
    // +---------------------------------------------------------------------------------------------
    // | 表单
    // +---------------------------------------------------------------------------------------------
    // 家族
    onSearchFamily() {
      console.log('onSearchFamily', ...arguments)
    },
    onSubmit() {
      console.log('submit!', this.form)
    }
  }
}
</script>

<style lang="less" scoped>
  .content {
    display: flex;

    .left {
      width: 30%;
      margin-right: 10px;
    }

    .right {
      width: 50%;
      height: 100%;
    }
  }
</style>
