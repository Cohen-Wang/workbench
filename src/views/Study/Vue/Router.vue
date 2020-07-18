<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">Router</div>
    </div>
    <div class="panel-body panel-body-box">
      <div class="box">
        <a-row :gutter="30">
          <a-col :span="12">
            <pre class="well" v-text="route"></pre>
          </a-col>
          <a-col :span="12">
            <pre class="well" v-text="router"></pre>
          </a-col>
        </a-row>
      </div>
      <div class="box">
        <a-row :gutter="30">
          <a-col :span="12">
            <a-form layout="vertical">
              <a-form-item label="名字">
                <a-input type="text" v-model="name"/>
              </a-form-item>
              <a-form-item label="年龄">
                <a-input type="number" v-model.number="age"/>
              </a-form-item>
              <a-form-item>
                <a-button type="primary" @click="querySend">query发送</a-button>
              </a-form-item>
              <a-form-item>
                <a-button type="primary" @click="paramSend">params发送</a-button>
              </a-form-item>
            </a-form>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Router',
  data() {
    return {
      route: Object.keys(this.$route),
      router: Object.keys(this.$router),
      name: 'cohen',
      age: 23
    }
  },
  methods: {
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

<style scoped></style>
