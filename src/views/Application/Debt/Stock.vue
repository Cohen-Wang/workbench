<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">Excel练习</div>
    </div>
    <div class="panel-body panel-body-box">
      <!-- 按钮区 -->
      <div style="overflow: hidden;">
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
      <!-- 表单区 -->
      <!--<div>
        <a-divider>表单区</a-divider>
        <div>表单区</div>
      </div>-->
      <!-- 图形区 -->
      <div>
        <a-divider>图形区</a-divider>
        <div>
          <div ref="graph" style="height: 300px; width: 90%; background-color: #F8F8F8;"/>
        </div>
      </div>
      <!-- 表格区 -->
      <div>
        <a-divider>表格区</a-divider>
        <div>
          <a-table :columns="columns"
                   :data-source="data"
                   size="small"
                   bordered>
          </a-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import XLSX from 'xlsx'
import { Chart } from '@antv/g2'

const EXCEL_HEADER = ['*名称', '*日期', '*值']
const EXCEL_DATA_MAP = ['name', 'date', 'value']

const columns = [
  {
    title: '序号',
    width: 50,
    align: 'center',
    customRender: (text, record, index) => `${index + 1}`
  },
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    ellipsis: true,
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' }
  },
  {
    title: '时间',
    dataIndex: 'date',
    key: 'date',
    align: 'center',
    ellipsis: true
  },
  {
    title: '值',
    dataIndex: 'value',
    key: 'value',
    align: 'center',
    ellipsis: true
  }
  // {
  //   title: '操作',
  //   key: 'action',
  //   scopedSlots: { customRender: 'action' }
  // }
]
const data = [
  {
    key: '1',
    name: '张三',
    date: '2020-01-01',
    value: 1,
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: '李四',
    date: '2020-02-02',
    value: 5,
    tags: ['loser']
  },
  {
    key: '3',
    name: '王五',
    date: '2020-03-03',
    value: 7,
    tags: ['cool', 'teacher']
  },
  {
    key: '4',
    name: '王五',
    date: '2020-04-04',
    value: 9,
    tags: ['cool', 'teacher']
  },
  {
    key: '5',
    name: '王五',
    date: '2020-05-05',
    value: 2,
    tags: ['cool', 'teacher']
  },
  {
    key: '6',
    name: '王五',
    date: '2020-06-06',
    value: 6,
    tags: ['cool', 'teacher']
  },
  {
    key: '7',
    name: '王五',
    date: '2020-07-07',
    value: 3,
    tags: ['cool', 'teacher']
  },
  {
    key: '8',
    name: '王五',
    date: '2020-08-08',
    value: 8,
    tags: ['cool', 'teacher']
  },
  {
    key: '9',
    name: '王五',
    date: '2020-09-09',
    value: 10,
    tags: ['cool', 'teacher']
  },
  {
    key: '10',
    name: '王五',
    date: '2020-10-10',
    value: 6,
    tags: ['cool', 'teacher']
  },
  {
    key: '11',
    name: '王五',
    date: '2020-11-11',
    value: 6,
    tags: ['cool', 'teacher']
  },
  {
    key: '12',
    name: '王五',
    date: '2020-12-12',
    value: 5,
    tags: ['cool', 'teacher']
  }
]

export default {
  name: 'Stock',
  data() {
    return {
      columns,
      chart: null,
      downloadTemplateHref: 'workbench/static/stock_module.xlsx',
      data
    }
  },
  mounted() {
    this.initChart()
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
            console.log('sheetDataInArray', sheetDataInArray)
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
            batchArray = this.formatData(batchArray)
            console.log('batchArray', batchArray)
            this.data = batchArray
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
      let result = JSON.parse(JSON.stringify(arr))
      result = this.formatSubjectId(result) // 增加【id】，固定为空字符串
      result = this.formatSubjectChoiceType(result) // 增加【choicesType】，固定值0，不知道作用
      result = this.formatSubjectLevel(result) // 转换【难度】
      result = this.formatSubjectCategory(result) // 转换【专业范围】
      result = this.formatSubjectAnswer(result) // 处理answer
      result = this.formatSubjectOptions(result) // 处理options
      return result
    },
    // 处理【类型】
    formatSubjectLevel(arr) {
      return arr.map(e => Object.assign(e, {
        level: +e.level
      }))
    },
    // 处理【专业范围】
    formatSubjectCategory(arr) {
      // return arr.map(e => Object.assign(e, {
      //   categoryId: this.subjectCategoryEnum[e.categoryId]
      // }))
      return arr.map(e => Object.assign(e, {
        categoryId: e.categoryId.split('/').map(e2 => this.subjectCategoryEnum[e2]).join(',')
      }))
    },
    // 处理【answer】
    formatSubjectAnswer(arr) {
      return arr.map(e => Object.assign(e, {
        answer: {
          subjectId: '',
          // answer: e.answer.split('/').join(','),
          answer: e.answer.split('').join(','),
          answerType: '',
          score: ''
        }
      }))
    },
    // 处理【options】
    formatSubjectOptions(arr) {
      arr.forEach((e, i) => {
        e.options = []
        const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
        arr.forEach(e2 => {
          if (e[e2]) {
            e.options.push({
              subjectChoicesId: '',
              optionName: e2,
              optionContent: e[e2]
            })
          }
        })
      })
      return arr
    },
    // 添加【choicesType】字段
    formatSubjectChoiceType(arr) {
      return arr.map(e => Object.assign(e, {
        choicesType: 0
      }))
    },
    // 添加【id】字段
    formatSubjectId(arr) {
      return arr.map(e => Object.assign(e, {
        id: ''
      }))
    },
    // +---------------------------------------------------------------------------------------------
    // | 图形
    // +---------------------------------------------------------------------------------------------
    // 图形
    initChart() {
      const chart = new Chart({
        container: this.$refs['graph'],
        width: this.$refs['graph'].clientWidth,
        height: this.$refs['graph'].clientHeight,
        autoFit: true,
        padding: [30, 50, 50, 50]
      })

      chart.data(this.data)

      chart.scale({
        date: {
          range: [0, 1]
        },
        value: {
          min: 0,
          nice: true
        }
      })

      chart.tooltip({
        showCrosshairs: true, // 展示 Tooltip 辅助线
        shared: true
      })

      chart.line().position('date*value').color('city').label('value')
      chart.point().position('date*value').color('city')
      chart.render()

      this.chart = chart
    },
    changeChart() {
      console.log('更新数据后')
      // 更新数据
      this.chart.changeData(this.graphData)
    }
  }
}
</script>

<style scoped lang="less"></style>
