<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <!-- ... -->
        <div class="box">
          <a-row :gutter="30">
            <a-col :span="12">
              <blockquote>this.$route</blockquote>
              <pre class="well" v-text="route"></pre>
            </a-col>
            <a-col :span="12">
              <blockquote>this.$router</blockquote>
              <pre class="well" v-text="router"></pre>
            </a-col>
          </a-row>
        </div>
        <div class="box">
          <a-row :gutter="30">
            <a-col :span="24">
              <blockquote>试一试</blockquote>
            </a-col>
            <a-col :span="6">
              <a-form layout="vertical">
                <a-form-item label="名字">
                  <a-input type="text" v-model="name"/>
                </a-form-item>
                <a-form-item label="年龄">
                  <a-input type="number" v-model.number="age"/>
                </a-form-item>
                <a-form-item>
                  <a-button-group>
                    <a-button type="primary" @click="querySend">query发送</a-button>
                    <a-button type="primary" @click="paramSend">params发送</a-button>
                  </a-button-group>
                </a-form-item>
              </a-form>
            </a-col>
          </a-row>
        </div>
      </div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'

export default {
  name: 'Router',
  components: {
    GoBack,
    MyComponent
  },
  data() {
    return {
      visible: false,
      route: Object.keys(this.$route),
      router: Object.keys(this.$router),
      name: 'cohen',
      age: 23
    }
  },
  created() {
    console.log('this.$route:', this.$route)
    console.log('this.$router:', this.$router)
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
    querySend() {
      this.$router.push({
        path: '/study/vue/routerTest',
        query: {
          name: this.name,
          age: this.age
        }
      })
    },
    paramSend() {
      this.$router.push({
        name: 'routerTest',
        params: {
          name: this.name,
          age: this.age
        }
      })
    }
  }
}
</script>

<style lang="less" scoped></style>
