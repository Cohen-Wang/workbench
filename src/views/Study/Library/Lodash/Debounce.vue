<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">debounce</div>
    </div>
    <div class="panel-body panel-body-box">
      <div class="box">
        <a-row :gutter="30">
          <a-col :span="12">
            <blockquote>input时，没有debounce</blockquote>
            <a-form layout="vertical">
              <a-form-item>
                <a-input placeholder="请快速输入"
                         @change="changeA">
                </a-input>
              </a-form-item>
            </a-form>
            <pre class="well" v-text="obj.a"></pre>
          </a-col>
          <a-col :span="12">
            <blockquote>input时，有debounce</blockquote>
            <a-form layout="vertical">
              <a-form-item>
                <a-input placeholder="请快速输入"
                         @change="changeB">
                </a-input>
              </a-form-item>
            </a-form>
            <pre class="well" v-text="obj.b"></pre>
          </a-col>
        </a-row>
      </div>
      <div class="box">
        <a-row :gutter="30">
          <a-col :span="12">
            <blockquote>window.resize时，没有debounce</blockquote>
            <pre class="well">window.width = {{ this.quickInfo.w }}</pre>
            <pre class="well">window.height = {{ this.quickInfo.h }}</pre>
          </a-col>
          <a-col :span="12">
            <blockquote>window.resize时，有debounce</blockquote>
            <pre class="well">window.width = {{ this.slowInfo.w }}</pre>
            <pre class="well">window.height = {{ this.slowInfo.h }}</pre>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
import debounce from 'lodash.debounce'

export default {
  name: 'Debounce',
  data() {
    this.changeB = debounce(this.changeB, 800)
    this.getInfoSlow = debounce(this.getInfoSlow, 800)
    return {
      obj: {
        a: 1111,
        b: 2222
      },
      quickInfo: {
        w: 0,
        h: 0
      },
      slowInfo: {
        w: 0,
        h: 0
      }
    }
  },
  computed: {},
  created() {
    window.addEventListener('resize', () => {
      this.getInfoQuick()
    })
    window.addEventListener('resize', () => {
      this.getInfoSlow()
    })
  },
  methods: {
    // input
    changeA(e) {
      this.obj.a = e.target.value
    },
    changeB(e) {
      this.obj.b = e.target.value
    },
    // window.resize
    getInfoQuick() {
      this.quickInfo.w = window.innerWidth
      this.quickInfo.h = window.innerHeight
    },
    getInfoSlow() {
      this.slowInfo.w = window.innerWidth
      this.slowInfo.h = window.innerHeight
    }
  }
}
</script>

<style scoped>

</style>
