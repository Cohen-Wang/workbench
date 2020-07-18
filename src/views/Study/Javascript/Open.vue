<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">
        window.open
      </div>
    </div>
    <div class="panel-body panel-body-box">
      <div class="container">
        <div>
          <h1>open() 方法用于打开一个新的浏览器窗口或查找一个已命名的窗口。</h1>
          <h1>window.open(URL,name,specs,replace)</h1>
        </div>
        <!-- url -->
        <div class="box">
          <a-row :gutter="30">
            <a-col :span="24">
              <blockquote><h3>1.url</h3></blockquote>
            </a-col>
            <a-col :span="12" class="mb-20">
              <pre class="well">window.open()</pre>
              <a-button type="primary" @click="click_1_1">打开</a-button>
            </a-col>
            <a-col :span="12" class="mb-20">
              <pre class="well">window.open('https://www.baidu.com')</pre>
              <a-button type="primary" @click="click_1_2">打开</a-button>
            </a-col>
          </a-row>
        </div>
        <!-- name -->
        <div class="box">
          <a-row :gutter="30">
            <a-col :span="24">
              <blockquote><h3>2.name</h3></blockquote>
            </a-col>
            <a-col :span="12" class="mb-20">
              <pre class="well">window.open('https://www.baidu.com')</pre>
              <a-button type="primary" @click="click_2_1">打开</a-button>
            </a-col>
            <a-col :span="12" class="mb-20">
              <pre class="well">window.open('https://www.baidu.com', '_blank')</pre>
              <a-button type="primary" @click="click_2_2">打开</a-button>
            </a-col>
            <a-col :span="12" class="mb-20">
              <pre class="well">window.open('https://www.baidu.com', '_parent')</pre>
              <a-button type="primary" @click="click_2_3">打开</a-button>
            </a-col>
            <a-col :span="12" class="mb-20">
              <pre class="well">window.open('https://www.baidu.com', '_self')</pre>
              <a-button type="primary" @click="click_2_4">打开</a-button>
            </a-col>
            <a-col :span="12" class="mb-20">
              <pre class="well">window.open('https://www.baidu.com', '_top')</pre>
              <a-button type="primary" @click="click_2_5">打开</a-button>
            </a-col>
          </a-row>
        </div>
        <!-- specs -->
        <div class="box">
          <a-row :gutter="30">
            <a-col :span="24">
              <blockquote><h3>3.specs</h3></blockquote>
            </a-col>
            <a-col :span="12" class="mb-20">
              <pre class="well">window.open('https://www.baidu.com', '_blank', 'height=500, width=500, top=200, left=200')</pre>
              <a-button type="primary" @click="click_3_1">打开</a-button>
            </a-col>
          </a-row>
        </div>
        <!-- replace -->
        <div class="box">
          <a-row :gutter="30">
            <a-col :span="24">
              <blockquote><h3>4.replace</h3></blockquote>
            </a-col>
            <a-col :span="12" class="mb-20">
              <pre class="well">window.open('https://www.baidu.com', '_blank', 'height=500, width=500, top=200, left=200')</pre>
              <a-button type="primary" @click="click_3_1">打开</a-button>
            </a-col>
          </a-row>
        </div>
        <!-- 效果 -->
        <div class="box">
          <a-row :gutter="30">
            <a-col :span="24">
              <blockquote><h3>5.效果</h3></blockquote>
            </a-col>
            <a-col :span="6" class="mb-20">
              <a-form layout="horizontal" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }">
                <a-form-item label="name">
                  <a-select allowClear @change="nameChange">
                    <a-select-option v-for="item in nameOptions"
                                     :key="item.value"
                                     :value="item.value">
                      {{ item.label }}
                    </a-select-option>
                  </a-select>
                </a-form-item>
                <a-form-item label="height">
                  <a-input v-model="params.height" type="number" step="100"/>
                </a-form-item>
                <a-form-item label="width">
                  <a-input v-model="params.width" type="number" step="100"/>
                </a-form-item>
                <a-form-item label="top">
                  <a-input v-model="params.top" type="number" step="100"/>
                </a-form-item>
                <a-form-item label="left">
                  <a-input v-model="params.left" type="number" step="100"/>
                </a-form-item>
                <a-form-item label="toolbar">
                  <a-select allowClear @change="toolbarChange">
                    <a-select-option v-for="item in toolbarOptions"
                                     :key="item"
                                     :value="item">
                      {{ item }}
                    </a-select-option>
                  </a-select>
                </a-form-item>
                <a-form-item label="menubar">
                  <a-select allowClear @change="menubarChange">
                    <a-select-option v-for="item in menubarOptions"
                                     :key="item"
                                     :value="item">
                      {{ item }}
                    </a-select-option>
                  </a-select>
                </a-form-item>
                <a-form-item label="resizable">
                  <a-select allowClear @change="resizableChange">
                    <a-select-option v-for="item in resizableOptions"
                                     :key="item"
                                     :value="item">
                      {{ item }}
                    </a-select-option>
                  </a-select>
                </a-form-item>
                <a-form-item label="location">
                  <a-select allowClear @change="locationChange">
                    <a-select-option v-for="item in locationOptions"
                                     :key="item"
                                     :value="item">
                      {{ item }}
                    </a-select-option>
                  </a-select>
                </a-form-item>
                <a-form-item label="status">
                  <a-select allowClear @change="statusChange">
                    <a-select-option v-for="item in statusOptions"
                                     :key="item"
                                     :value="item">
                      {{ item }}
                    </a-select-option>
                  </a-select>
                </a-form-item>
                <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
                  <a-button type="primary" @click="handleClick">打开</a-button>
                </a-form-item>
              </a-form>
            </a-col>
            <a-col :span="6" class="mb-20">
              <div><pre class="well" v-text="params"></pre></div>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Iframe',
  data() {
    return {
      params: {
        url: 'https://www.baidu.com',
        name: '_blank',
        height: 500,
        width: 500,
        top: 200,
        left: 200,
        toolbar: 'yes',
        menubar: 'yes',
        resizable: 'yes',
        location: 'yes',
        status: 'yes'
      },
      nameOptions: [
        { label: '不填写', value: '' },
        { label: '新弹窗', value: '_blank' },
        { label: '父（_parent）', value: '_parent' },
        { label: '父（_self）', value: '_self' },
        { label: '父（_top）', value: '_top' }
      ],
      toolbarOptions: ['yes', 'no'],
      menubarOptions: ['yes', 'no'],
      resizableOptions: ['yes', 'no'],
      locationOptions: ['yes', 'no'],
      statusOptions: ['yes', 'no']
    }
  },
  methods: {
    // url
    click_1_1() {
      window.open()
    },
    click_1_2() {
      window.open('https://www.baidu.com')
    },
    // name
    click_2_1() {
      window.open('https://www.baidu.com')
    },
    click_2_2() {
      window.open('https://www.baidu.com', '_blank')
    },
    click_2_3() {
      window.open('https://www.baidu.com', '_parent')
    },
    click_2_4() {
      window.open('https://www.baidu.com', '_self')
    },
    click_2_5() {
      window.open('https://www.baidu.com', '_top')
    },
    // specs
    click_3_1() {
      window.open('https://www.baidu.com', '_blank', 'height=500, width=500, top=200, left=200')
    },
    // 效果
    handleClick() {
      window.open(
        this.params.url,
        this.params.name,
        `height=${this.params.height},
        width=${this.params.width},
        top=${this.params.top},
        left=${this.params.left},
        toolbar=${this.params.toolbar},
        menubar=${this.params.menubar},
        scrollbars=${this.params.scrollbars},
        resizable=${this.params.resizable},
        location=${this.params.location},
        status=${this.params.status}`
      )
    },
    nameChange(val) {
      this.params.name = val
    },
    toolbarChange(val) {
      this.params.toolbar = val
    },
    menubarChange(val) {
      this.params.menubar = val
    },
    resizableChange(val) {
      this.params.resizable = val
    },
    locationChange(val) {
      this.params.location = val
    },
    statusChange(val) {
      this.params.status = val
    }
  }
}
</script>

<style scoped lang="less"></style>
