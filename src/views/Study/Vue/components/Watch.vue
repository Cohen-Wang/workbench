<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <!-- ... -->
        <a-row :gutter="14">
          <!-- 案例一 -->
          <a-col :span="8">
            <div class="col-box">
              <h3 class="title">基础</h3>
              <p class="des">暂无描述</p>
              <a-form :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                <a-form-item label="firstName1">
                  <a-input v-model="firstName1"/>
                </a-form-item>
                <a-form-item label="lastName">
                  <a-input v-model="lastName" disabled/>
                </a-form-item>
                <a-form-item label="fullName1">
                  <a-input v-model="fullName1" disabled/>
                </a-form-item>
              </a-form>
            </div>
          </a-col>
          <!-- 案例二 -->
          <a-col :span="8">
            <div class="col-box">
              <h3 class="title">对象</h3>
              <p class="des">
                如果watch监测的是一个对象的话，直接使用watch是不行的，此时我们可以借助于computed计算属性来完成。
              </p>
              <a-form :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                <a-form-item label="a.firstName">
                  <a-input v-model="a.firstName"/>
                </a-form-item>
                <a-form-item label="firstName2">
                  <a-input v-model="firstName2" disabled/>
                </a-form-item>
                <a-form-item label="lastName">
                  <a-input v-model="lastName" disabled/>
                </a-form-item>
                <a-form-item label="fullName1">
                  <a-input v-model="fullName2" disabled/>
                </a-form-item>
              </a-form>
            </div>
          </a-col>
          <!-- 案例三 -->
          <a-col :span="8">
            <div class="col-box">
              <p class="title">深度监听</p>
              <a-form :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                <a-form-item label="property">
                  <a-input v-model="property"/>
                </a-form-item>
                <a-form-item label="value">
                  <a-input v-model="value"/>
                </a-form-item>
                <a-form-item label="">
                  <a-button type="primary" @click="handleClick">点击</a-button>
                </a-form-item>
                <pre class="well" v-text="children"></pre>
              </a-form>
            </div>
          </a-col>
        </a-row>
      </div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'

export default {
  name: 'Watch',
  components: {
    GoBack,
    MyComponent
  },
  data() {
    return {
      visible: false,
      // -----------------------
      lastName: 'wang',

      // 案例一
      firstName1: 'cohen',
      fullName1: '',
      // 案例二
      a: {
        firstName: 'cohen'
      },
      fullName2: '',
      // 案例三
      children: {
        name: '小强',
        age: 20,
        sex: '男'
      },
      property: '', // 属性
      value: ''
    }
  },
  computed: {
    // 案例二
    firstName2() {
      return this.a.firstName
    }
  },
  watch: {
    // 案例一
    firstName1(newValue, oldValue) {
      this.fullName1 = `${newValue}  ${this.lastName}`
    },
    // 案例二
    firstName2(newValue, oldValue) {
      this.fullName2 = `${newValue}  ${this.lastName}`
    },
    // 案例三
    children: {
      handler: function(newValue, oldValue) {
        console.log(newValue, oldValue)
      }
      /* deep: true, // 对象内部的属性监听，也叫深度监听 */
    }
    // 'children.name':function(val,oldval){
    //     console.log(val+"aaa")
    // },//键路径必须加上引号
    // lastName:function(val,oldval){
    //     console.log(this.lastName)
    // }
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
    handleClick() {
      if (this.property === '' && this.value === '') return this.$message.error('属性和值不能为空')
      this.children = Object.assign({}, this.children, {
        [this.property]: this.value
      })
      this.property = ''
      this.value = ''
    }
  }
}
</script>

<style lang="less" scoped>
  .col-box {
    box-sizing: border-box;
    border: 2px solid #eee;
    padding-top: 14px;
    padding-left: 6px;
    padding-right: 6px;

    .title {
      text-align: center;
      font: 900 26px/1 "微软雅黑";
      color: cornflowerblue;
    }

    .des {
      font: 900 12px/1 "微软雅黑";
      color: #001529;
    }
  }
</style>
