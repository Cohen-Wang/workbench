<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <div style="height: calc(100vh - 260px); overflow-x: hidden; overflow-y: auto; padding-right: 15px;">
          <a-form-model ref="ruleForm"
                        :model="form"
                        :rules="rules"
                        layout="vertical">
            <div>
              <a-divider orientation="left">输入框</a-divider>
              <a-row :gutter="20">
                <!-- 用户名 -->
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8" :xxl="6">
                  <a-form-model-item label="用户名" prop="name">
                    <a-input v-model="form.name" placeholder="请输入用户名" :maxLength="20"/>
                  </a-form-model-item>
                </a-col>
                <!-- 密码 -->
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8" :xxl="6">
                  <a-form-model-item label="密码" prop="password">
                    <a-input v-model="form.password" placeholder="请输入密码" :maxLength="20"/>
                  </a-form-model-item>
                </a-col>
                <!-- 确认密码 -->
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8" :xxl="6">
                  <a-form-model-item label="确认密码" prop="confirmPassword">
                    <a-input v-model="form.confirmPassword" placeholder="请输入确认密码" :maxLength="20"/>
                  </a-form-model-item>
                </a-col>
                <!-- 电话号码 -->
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8" :xxl="6">
                  <a-form-model-item label="电话号码" prop="phone">
                    <a-input v-model="form.phone" placeholder="请输入电话号码" :maxLength="11"/>
                  </a-form-model-item>
                </a-col>
                <!-- 邮箱 -->
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8" :xxl="6">
                  <a-form-model-item label="邮箱" prop="email">
                    <a-input v-model="form.email" placeholder="请输入邮箱" :maxLength="20"/>
                  </a-form-model-item>
                </a-col>
              </a-row>
            </div>

            <div>
              <a-divider orientation="left">单选框</a-divider>
              <a-row :gutter="20">
                <!-- 性别 -->
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8" :xxl="6">
                  <a-form-model-item label="性别" prop="gender">
                    <a-radio-group v-model="form.gender">
                      <a-radio v-for="(item, index) in GENDER_CONFIG"
                               :key="index"
                               :label="item.label"
                               :value="item.value">
                        {{ item.label }}
                      </a-radio>
                    </a-radio-group>
                  </a-form-model-item>
                </a-col>
              </a-row>
            </div>

            <div>
              <a-divider orientation="left">单选框</a-divider>
              <a-row :gutter="20">
                <!-- 地址 -->
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8" :xxl="6">
                  <a-form-model-item label="地址" prop="address">
                    <a-select v-model="form.address"
                              placeholder="请输入地址">
                      <a-select-option value="shanghai">Zone one</a-select-option>
                      <a-select-option value="beijing">Zone two</a-select-option>
                    </a-select>
                  </a-form-model-item>
                </a-col>
              </a-row>
            </div>

            <div>
              <a-divider orientation="left">日期</a-divider>
              <a-row :gutter="20">
                <!-- 生日 -->
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8" :xxl="6">
                  <a-form-model-item label="生日" prop="birthday">
                    <a-date-picker v-model="form.birthday"
                                   show-time
                                   type="date"
                                   placeholder="请选择日期"
                                   style="width: 100%;"/>
                  </a-form-model-item>
                </a-col>
              </a-row>
            </div>

            <div>
              <a-divider orientation="left">树形下拉框</a-divider>
              <a-row :gutter="20">
                <!-- 家族 -->
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8" :xxl="6">
                  <a-form-model-item label="家族">
                    <a-tree-select v-model="form.address"
                                   style="width: 100%"
                                   show-search
                                   :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
                                   :tree-data="TREE_DATA_CONFIG"
                                   placeholder="请选择所在家族"
                                   tree-default-expand-all
                                   @search="onSearchFamily">
                    </a-tree-select>
                  </a-form-model-item>
                </a-col>
              </a-row>
            </div>

            <div>
              <a-divider orientation="left">开关</a-divider>
              <a-row :gutter="20">
                <!-- 接收推送 -->
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8" :xxl="6">
                  <a-form-model-item label="接收推送">
                    <a-switch v-model="form.allowMessage"/>
                  </a-form-model-item>
                </a-col>
              </a-row>
            </div>

            <div>
              <a-divider orientation="left">复选框</a-divider>
              <a-row :gutter="20">
                <!-- 语言 -->
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8" :xxl="6">
                  <a-form-model-item label="选择课程">
                    <a-checkbox-group v-model="form.language">
                      <a-row :gutter="6">
                        <a-col :span="12" v-for="(item, index) in LANGUAGE_CONFIG" :key="index">
                          <a-checkbox :value="item.value">
                            {{ item.label }}
                          </a-checkbox>
                        </a-col>
                      </a-row>
                    </a-checkbox-group>
                  </a-form-model-item>
                </a-col>
              </a-row>
            </div>

            <div>
              <a-divider orientation="left">多行文本</a-divider>
              <a-row :gutter="20">
                <!-- 自我描述 -->
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8" :xxl="6">
                  <a-form-model-item label="自我描述">
                    <a-input v-model="form.introduce"
                             type="textarea"
                             placeholder="请填写自我描述"
                             rows="5"
                             style="resize: none"/>
                  </a-form-model-item>
                </a-col>
              </a-row>
            </div>
          </a-form-model>
        </div>
        <!-- 按钮 -->
        <div style="height: 83px; padding-top: 20px; box-shadow: 0 -3px 5px #E8E8E8;display: flex; justify-content: center">
          <a-button-group size="large" block>
            <a-button type="primary"
                      @click="onSubmit">
              检查提交
            </a-button>
            <a-button type="primary"
                      @click="showDrawer">
              查看数据
            </a-button>
          </a-button-group>
        </div>
      </div>
    </my-component>

    <!-- 抽屉 -->
    <a-drawer title="查看数据"
              placement="right"
              :closable="false"
              width="400"
              :visible="drawer.visible"
              @close="hideDrawer"><!--:after-visible-change="afterVisibleChange"-->
      <div>
        <pre style="background-color: #e8e8e8; padding: 6px; border-radius: 4px;" v-text="form"/>
      </div>
    </a-drawer>
  </div>
</template>

<script>
// 工具
import { isPasswordStrong, isPhoneLegal, isEmailLegal } from '@/utils'
// 组件
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

// 验证
// const checkRegisterUsername = (rule, value, callback) => {
//   if (!value) {
//     return callback(new Error('请输入用户名'))
//   }
//   // 检查用户名是否存在
//   // checkExist(value).then(response => {
//   //   if (isNotEmpty(response.data) && response.data.data) {
//   //     callback(new Error('用户名已存在！'))
//   //   } else {
//   //     callback()
//   //   }
//   // })
// }

const FORM = {
  name: '',
  password: '',
  confirmPassword: '',
  phone: '',
  email: '',
  gender: DEFAULT_GENDER,
  birthday: undefined,
  address: undefined,
  region: undefined,
  allowMessage: true,
  language: DEFAULT_LANGUAGE,
  introduce: ''
}
const RULES = {
  name: [
    { required: true, message: '请输入名称', trigger: 'blur' },
    { min: 2, max: 10, message: '字符长度范围应在2~10个', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { validator: isPasswordStrong, trigger: 'blur' }
  ],
  confirmPassword: [
    { required: true, message: '请输入确认密码', trigger: 'blur' },
    { validator: isPasswordStrong, trigger: 'blur' }
  ],
  phone: [
    { required: false, message: '请输入手机号码', trigger: 'blur' },
    { validator: isPhoneLegal, trigger: 'blur' }
  ],
  email: [
    { required: false, message: '请输入邮箱', trigger: 'blur' },
    { validator: isEmailLegal, trigger: 'blur' }
  ],
  gender: [
    { required: true, message: '请选择性别', trigger: ['blur', 'change'] }
  ],
  address: [
    { required: true, message: '请选择地址', trigger: ['blur', 'change'] }
  ],
  birthday: [
    { required: true, message: '请选择生日', trigger: ['blur', 'change'] }
  ],
  region: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],
  date1: [{ required: true, message: 'Please pick a date', trigger: 'change' }],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change'
    }
  ],
  resource: [
    { required: true, message: 'Please select activity resource', trigger: 'change' }
  ],
  desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }]
}

export default {
  name: 'FormStudy',
  components: {
    GoBack,
    MyComponent
  },
  data() {
    // 重复密码验证
    const confirmPasswordCheck = async(rule, value, callback) => {
      if (value !== this.form.password) {
        return callback(new Error('两次输入密码不一致！'))
      } else {
        callback()
      }
    }
    return {
      visible: false,
      // ...
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
      form: Object.assign({}, FORM),
      rules: Object.assign({}, RULES, {
        confirmPassword: [
          { required: true, message: '请输入确认密码', trigger: 'blur' },
          { validator: confirmPasswordCheck, trigger: 'blur' }
        ]
      }),
      // 配置
      GENDER_CONFIG,
      LANGUAGE_CONFIG,
      TREE_DATA_CONFIG,
      drawer: {
        visible: false
      }
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
    // +---------------------------------------------------------------------------------------------
    // | 抽屉
    // +---------------------------------------------------------------------------------------------
    showDrawer() {
      this.drawer.visible = true
    },
    hideDrawer() {
      this.drawer.visible = false
    },
    // 提交
    onSubmit() {
      this.$refs['ruleForm'].validate(valid => {
        if (!valid) return
        this.submit()
      })
    },
    submit() {
      this.$message.success('提交说成功')
    }
  }
}
</script>

<style lang="less" scoped>
</style>
