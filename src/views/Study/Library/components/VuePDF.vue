<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <!-- ... -->
        <div>
          <div class="content">
            <div class="content-header">
              <a-button type="primary" size="small" @click="changePdfPage(0)">上一页</a-button>
              <a-button type="primary" size="small" @click="changePdfPage(1)">下一页</a-button>
              <span style="color: #FFFFFF;"><i>{{ pdf.currentPage }}</i> / <i>{{ pdf.pageCount }}</i></span>
            </div>
            <div class="content-body">
              <div class="content-body-center">
                <pdf ref="pdf"
                     :src="pdf.src"
                     :page="pdf.currentPage"
                     @num-pages="pdf.pageCount = $event"
                     @page-loaded="pdf.currentPage = $event"
                     @loaded="loadPdfHandler"><!--加载事件-->
                </pdf>
              </div>
            </div>
          </div>
        </div>
      </div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'
import pdf from 'vue-pdf'

export default {
  name: 'VuePDF',
  components: {
    GoBack,
    MyComponent,
    pdf
  },
  data() {
    return {
      visible: false,
      pdf: {
        src: 'https://dakaname.oss-cn-hangzhou.aliyuncs.com/file/2018-12-28/1546003237411.pdf', // pdf文件地址
        currentPage: 1, // pdf文件页码
        pageCount: 0, // pdf文件总页数
        fileType: 'pdf' // 文件类型
      }
    }
  },
  created() {
    // 有时PDF文件地址会出现跨域的情况,这里最好处理一下
    this.pdf.src = pdf.createLoadingTask(this.pdf.src)
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
    // | 正文
    // +---------------------------------------------------------------------------------------------
    // 改变PDF页码,val传过来区分上一页下一页的值,0上一页,1下一页
    changePdfPage(val) {
      // console.log(val)
      if (val === 0 && this.pdf.currentPage > 1) {
        this.pdf.currentPage--
        // console.log(this.currentPage)
      }
      if (val === 1 && this.pdf.currentPage < this.pdf.pageCount) {
        this.pdf.currentPage++
        // console.log(this.currentPage)
      }
    },
    // pdf加载时
    loadPdfHandler(e) {
      this.$message.info('pdf资源加载成功')
      this.pdf.currentPage = 1 // 加载的时候先加载第一页
    }
  }
}
</script>

<style lang="less" scoped>
  .content {
    background-color: #333333;
    height: calc(100vh - 187px);
    overflow-y: auto;

    .content-header {
      padding: 6px 10px;
      background-color: rgba(0, 0, 0, 0.65);
    }

    .content-body {
      padding-top: 15px;
      padding-bottom: 15px;

      .content-body-center {
        width: 1000px;
        margin: 0 auto;
      }
    }
  }
</style>
