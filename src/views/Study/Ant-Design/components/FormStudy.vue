<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <div class="content">
          <div class="left">
            <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
              <a-form-model-item label="名称：">
                <a-input v-model="form.name"/>
              </a-form-model-item>
              <a-form-model-item label="地址：">
                <a-select v-model="form.region"
                          placeholder="请输入地址">
                  <a-select-option value="shanghai">
                    Zone one
                  </a-select-option>
                  <a-select-option value="beijing">
                    Zone two
                  </a-select-option>
                </a-select>
              </a-form-model-item>
              <a-form-model-item label="日期">
                <a-date-picker v-model="form.date1"
                               show-time
                               type="date"
                               placeholder="请选择日期"
                               style="width: 100%;"/>
              </a-form-model-item>
              <a-form-model-item label="InstantDelivery">
                <a-switch v-model="form.delivery"/>
              </a-form-model-item>
              <a-form-model-item label="类型：">
                <a-checkbox-group v-model="form.type">
                  <a-checkbox value="1" name="type">
                    Online
                  </a-checkbox>
                  <a-checkbox value="2" name="type">
                    Promotion
                  </a-checkbox>
                  <a-checkbox value="3" name="type">
                    Offline
                  </a-checkbox>
                </a-checkbox-group>
              </a-form-model-item>
              <a-form-model-item label="资源：">
                <a-radio-group v-model="form.resource">
                  <a-radio value="1">
                    Sponsor
                  </a-radio>
                  <a-radio value="2">
                    Venue
                  </a-radio>
                </a-radio-group>
              </a-form-model-item>
              <a-form-model-item label="描述：">
                <a-input v-model="form.desc" type="textarea"/>
              </a-form-model-item>
              <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
                <a-button type="primary" @click="onSubmit">
                  Create
                </a-button>
                <a-button style="margin-left: 10px;">
                  Cancel
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
      </div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'

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
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: '',
        desc: ''
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
      flex: 1;
      margin-right: 10px;
    }

    .right {
      width: 50%;
      height: 100%;
    }
  }
</style>
