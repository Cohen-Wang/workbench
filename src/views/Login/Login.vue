<template>
  <Layout>
    <div slot="container">
      <a-tabs default-active-key="1"
              size="default"
              type="line"
              :animated="false"
              tabPosition="top"
              :tabBarGutter="10">
        <!-- 账户密码登录 -->
        <a-tab-pane key="1">
          <span slot="tab">
            <a-icon type="login"/>
            账户密码登录
          </span>
          <a-form-model ref="loginForm"
                        :model="loginForm"
                        :rules="loginRules">
            <a-form-model-item prop="username">
              <a-input type="text"
                       allowClear
                       v-model="loginForm.username"
                       placeholder="用户名">
                <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
              </a-input>
            </a-form-model-item>
            <a-form-model-item prop="password">
              <a-input type="password"
                       allowClear
                       v-model="loginForm.password"
                       placeholder="密码">
                <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
              </a-input>
            </a-form-model-item>
            <a-form-model-item>
              <a-checkbox v-model="loginForm.autoLogin"
                          :checked="loginForm.autoLogin">
                记住我
              </a-checkbox>
              <a class="login-form-forgot" href="" style="float: right">忘记密码？</a>
              <a-button type="primary"
                        block
                        :loading="loginLoading"
                        @click.native.prevent="handleSubmit">
                登 录
              </a-button>
              <a href="javascript:void(0)" @click="$router.push('/register')">注册</a>
            </a-form-model-item>
          </a-form-model>
        </a-tab-pane>
        <!-- 手机号登录 -->
        <a-tab-pane key="2">
          <span slot="tab">
            <a-icon type="phone"/>
            手机号登录
          </span>
        </a-tab-pane>
      </a-tabs>
    </div>
  </Layout>
</template>

<script>
import Layout from './components/Layout'

export default {
  name: 'Login',
  components: { Layout },
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '123456',
        autoLogin: false
      },
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      loginLoading: false
    }
  },
  methods: {
    // 登录
    handleSubmit() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loginLoading = true
          this.$axios.post('http://jsonplaceholder.typicode.com/posts/1/comments').then(res => {
            if (this.loginForm.username === 'admin' && this.loginForm.password === '123456') {
              // 存储token
              const token = JSON.stringify({ username: 'admini', password: '123456' })
              localStorage.setItem('token', token)
              // 跳转
              this.$router.push('/')
            } else {
              this.$message.error('用户名或密码错误', 3)
            }
          }).finally(() => {
            this.loginLoading = false
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
