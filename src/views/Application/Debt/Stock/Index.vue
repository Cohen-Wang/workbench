<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">重要事件</div>
    </div>
    <div class="panel-body panel-body-box">
      <!-- 按钮区 -->
      <div class="margin-bottom">
        <a-row :gutter="16">
          <a-col :span="8">
            <div class="d-flex">
              <!-- 导入 -->
              <a-upload name="file"
                        :before-upload="handleBeforeUpload"
                        @change="handleChangeUpload">
                <a-button type="primary"><a-icon type="upload"/>Excel</a-button>
              </a-upload>
              <!-- 下载模板 -->
              <a-button type="link">
                <a :href="downloadTemplateHref" target="_self">
                  下载模板
                </a>
              </a-button>
            </div>
          </a-col>
          <a-col :span="8">
            <!-- ??? -->
          </a-col>
        </a-row>
      </div>
      <!-- 标签页 -->
      <a-tabs type="card">
        <a-tab-pane key="1" tab="时间轴">
          <stock-timeline :data="data" class="tab-content-height"/>
        </a-tab-pane>
        <a-tab-pane key="2" tab="日历">
          <stock-calendar class="tab-content-height"/>
        </a-tab-pane>
        <a-tab-pane key="3" tab="表格">
          <stock-table class="tab-content-height"/>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
import XLSX from 'xlsx'
// 组件
import StockCalendar from './components/stock-calendar'
import StockTable from './components/stock-table'
import StockTimeline from './components/stock-timeline'

const EXCEL_HEADER = ['日期', '中国', '外国']
const EXCEL_DATA_MAP = ['date', 'china', 'other']

export default {
  name: 'Stock',
  components: {
    StockCalendar,
    StockTable,
    StockTimeline
  },
  data() {
    return {
      downloadTemplateHref: '/assets/stock.xlsx',
      data: []
    }
  },
  mounted() {
    // this.initChart()
  },
  methods: {
    // +---------------------------------------------------------------------------------------------
    // | 导入
    // +---------------------------------------------------------------------------------------------
    handleChangeUpload(info) {
      console.log('handleChangeUpload')
    },
    // 上传
    handleBeforeUpload(file) {
      console.log('handleBeforeUpload')
      if (!this.checkFile(file)) return false // 检查文件
      // 读取数据
      const fileReader = new FileReader()
      fileReader.onload = ev => {
        try {
          // 获取原始数据
          const data = ev.target.result
          const XLSXObject = XLSX.read(data, {
            type: 'binary'
          })
          // 获取第一页数据
          let batchArray = []
          const SheetNameList = Object.keys(XLSXObject.Sheets)
          SheetNameList.forEach((eachSheet, index) => {
            if (index > 0) {
              return false
            }
            console.log('eachSheet', eachSheet)
            var sheetDataInArray = XLSX.utils.sheet_to_json(XLSXObject.Sheets[eachSheet], { header: 1 })
            // 判断是否为空表格
            if (!sheetDataInArray.length) {
              this.$message.error(`${eachSheet}中未发现数据。`)
              return false
            }
            // 检查表格标题是否按照模板填写
            if (JSON.stringify(sheetDataInArray[0]) !== JSON.stringify(EXCEL_HEADER)) {
              this.$message.error(`${eachSheet}的格式不正确，请使用模板导入。`)
              return false
            }
            // 去掉第一行
            sheetDataInArray.shift()
            // 处理成中间格式
            batchArray = this.parseSheetData(sheetDataInArray)
            if (!batchArray) {
              return false
            }
            if (!batchArray.length) {
              this.$message.error('没有满足格式要求的数据可导入')
              return false
            }
            console.log('batchArray', batchArray)
            // 检查数据是否合法
            // if (!this.checkData(batchArray)) {
            //   return false
            // }
            // 处理成后端格式
            batchArray = this.formatData(JSON.parse(JSON.stringify(batchArray)))
            this.data = batchArray
            console.log('data', this.data)
          })
        } catch (e) {
          this.$message.warning(e)
          return false
        }
      }
      fileReader.readAsBinaryString(file)
      // debug
      return false
    },
    // +---------------------------------------------------------------------------------------------
    // | 导入：文件检查
    // +---------------------------------------------------------------------------------------------
    // 导入：检查
    checkFile(file) {
      // if (!this.isFileTypeLegal(file.type)) {
      //   this.$message.error('上传附件只能是 excel 格式!')
      //   return false
      // }
      if (!this.isFileSizeLimit10M(file.size)) {
        this.$message.error('上传附件大小不能超过 10MB!')
        return false
      }
      return true
    },
    // 导入：检查文件类型
    isFileTypeLegal(fileType) {
      return fileType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    },
    // 导入：检查文件大小
    isFileSizeLegal(fileSize, legalSize) {
      return fileSize < legalSize
    },
    // 导入：检查文件大小是否小于10M
    isFileSizeLimit10M(fileSize) {
      return this.isFileSizeLegal(fileSize, 10 * 1024 * 1024)
    },
    // +---------------------------------------------------------------------------------------------
    // | 导入：数据检查
    // +---------------------------------------------------------------------------------------------
    // 格式化数据之前的检查
    // checkData(data) {
    //   let index = -1
    //   if ((index = this.checkDoubleName(data)) !== true) {
    //     this.$message.error(`名称为 ${index} 的题目重复，请修改excel文件。`)
    //     return false
    //   }
    //   if ((index = this.checkSubjectType(EXCEL_SUBJECT_TYPE, data)) !== true) {
    //     this.$message.error(`第${index + 1}行题目，题型不正确，请重新填写。`)
    //     return false
    //   }
    //   if ((index = this.checkSubjectLevel(data)) !== true) {
    //     this.$message.error(`第${index + 1}行题目，难度不正确，应该是0~5的数字，请重新填写。`)
    //     return false
    //   }
    //   if ((index = this.checkSubjectCategory(data)) !== true) {
    //     this.$message.error(`第${index + 1}行题目，没有对应专业范围，请重新填写。`)
    //     return false
    //   }
    //   return true
    // },
    // 处理excel表单数据
    parseSheetData(dataArray) {
      const dataList = []
      let isWrite = false
      dataArray.forEach((rows, index) => {
        const newRows = {}
        for (var i = 0; i < rows.length; i++) {
          if (EXCEL_HEADER[i][0] === '*' && !rows[i]) {
            this.$message.error(`第${index + 1}条数据${EXCEL_HEADER[i].slice(1)}未填写，请填写完整重新导入。`)
            isWrite = true
          }
          newRows[EXCEL_DATA_MAP[i]] = rows[i] || ''
        }
        rows.length ? dataList.push(newRows) : null
      })
      if (isWrite) {
        return false
      }
      return dataList
    },
    // 处理成后端格式
    formatData(arr) {
      const result = arr
      return result
    }
  }
}
</script>

<style scoped lang="less">
  .tab-content-height {
    height: calc(100vh - 350px);
    overflow-y: auto;
  }
</style>
