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
            <a-upload-dragger name="file"
                              :multiple="true"
                              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                              @change="handleUpload">
              <p class="ant-upload-drag-icon">
                <a-icon type="inbox"/>
              </p>
              <p class="ant-upload-text">拖拽文件到此区域上传</p>
            </a-upload-dragger>
          </a-col>
          <a-col :span="8">
            2
          </a-col>
        </a-row>
      </div>
      <!-- 表单区 -->
      <div>
        <a-divider>表单区</a-divider>
        <div>表单区</div>
      </div>
      <!-- 图形区 -->
      <div>
        <a-divider>图形区</a-divider>
        <div>
          <div ref="graph" style="height: 300px; background-color: #F8F8F8;"/>
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
import { Chart } from '@antv/g2'

const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    ellipsis: true,
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name1' }
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    align: 'center',
    ellipsis: true
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
    align: 'center',
    ellipsis: true
  },
  {
    title: '标签',
    dataIndex: 'tags',
    key: 'tags',
    align: 'center',
    ellipsis: true,
    scopedSlots: { customRender: 'tags' }
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
    age: 11,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: '李四',
    age: 22,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: '王五',
    age: 33,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]
const graphData = [
  { year: '1991', value: 3 },
  { year: '1992', value: 4 },
  { year: '1993', value: 3.5 },
  { year: '1994', value: 5 },
  { year: '1995', value: 4.9 },
  { year: '1996', value: 6 },
  { year: '1997', value: 7 },
  { year: '1998', value: 9 },
  { year: '1999', value: 13 }
]

export default {
  name: 'Stock',
  data() {
    return {
      columns,
      data,
      chart: null,
      graphData
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    // +---------------------------------------------------------------------------------------------
    // | 上传
    // +---------------------------------------------------------------------------------------------
    // 上传
    handleUpload() {
      console.log(1)
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

      chart.data(this.graphData)

      chart.scale({
        year: {
          range: [0, 1]
        },
        value: {
          min: 0,
          nice: true
        }
      })

      chart.scale('year', {
        range: [0.05, 0.95],
        nice: true
      })

      chart.scale('value', {
        alias: '人数',
        nice: true
      })

      chart.tooltip({
        showCrosshairs: true, // 展示 Tooltip 辅助线
        shared: true
      })

      chart.line().position('year*value').color('city').label('value')
      chart.point().position('year*value').color('city')
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
