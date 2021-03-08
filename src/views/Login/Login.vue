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
                        :model="form"
                        :rules="rules">
            <a-form-model-item prop="username">
              <a-input type="text"
                       allowClear
                       v-model="form.username"
                       placeholder="用户名">
                <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
              </a-input>
            </a-form-model-item>
            <a-form-model-item prop="password">
              <a-input type="password"
                       allowClear
                       v-model="form.password"
                       placeholder="密码">
                <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
              </a-input>
            </a-form-model-item>
            <a-form-model-item>
              <a-checkbox v-model="form.autoLogin"
                          :checked="form.autoLogin">
                记住我
              </a-checkbox>
              <a class="login-form-forgot" href="" style="float: right">忘记密码？</a>
              <a-button type="primary"
                        block
                        :loading="loading"
                        @click.native.prevent="onLogin">
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
import { mapActions } from 'vuex'

const FORM = {
  username: 'admin',
  password: '123456',
  autoLogin: false
}

const RULES = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ]
}

const FORM = {
  username: 'admin',
  password: '123456',
  autoLogin: false
}

const RULES = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ]
}

export default {
  name: 'Login',
  components: { Layout },
  data() {
    return {
      form: JSON.parse(JSON.stringify(FORM)),
      rules: Object.assign({}, RULES),
      loading: false
    }
  },
  methods: {
    ...mapActions([
      'SET_TOKEN',
      'SET_USER_INFO'
    ]),
    // 登录
    onLogin() {
      this.$refs['loginForm'].validate(valid => {
        if (!valid) return
        this.login()
      })
    },
    login() {
      this.loading = true
      this.$axios.post('http://jsonplaceholder.typicode.com/posts/1/comments').then(res => {
<<<<<<< HEAD
        if (this.form.username === 'admin' && this.form.password === '123456') {
          // 存储token
          const token = JSON.stringify({ username: 'admin', password: '123456' })
          localStorage.setItem('token', token)
=======
        if (this.form.password === '123456') {
          /**
           * 模拟后台返回数据
           */
          // 模拟存储token
          const token = {
            username: 'admin',
            password: '123456'
          }
          this.SET_TOKEN(encodeURI(JSON.stringify(token)))
          // 模拟存储用户信息
          const userInfo = {
            realName: this.form.username,
            avatarUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1729510474,1941158659&fm=26&gp=0.jpg'
          }
          this.SET_USER_INFO(userInfo)
>>>>>>> f4f60bd93dd3c4c64a047bce0db6419d6943929b
          // 跳转
          this.$router.push('/')
        } else {
          this.$message.error('用户名或密码错误', 3)
        }
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style lang="less" scoped></style>
