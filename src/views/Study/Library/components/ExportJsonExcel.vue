<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <!-- ... -->
        <h1>导出excel插件 - ExportJsonExcel</h1>
        <div class="padding-tb">
          <a-button type="primary" @click="downloadExcel">导出</a-button>
        </div>
        <div>
          <a-table :columns="columns"
                   :data-source="tableData">
            <a slot="name" slot-scope="text">{{ text }}</a>
            <span slot="customTitle">姓名</span>
            <span slot="action" slot-scope="text, record">
              <a>邀请 一 {{ record.name }}</a>
              <a-divider type="vertical"/>
              <a>删除</a>
            </span>
          </a-table>
        </div>
      </div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'
import ExportJsonExcel from 'js-export-excel'

const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' }
  },
  {
    title: '年齡',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: '手机',
    dataIndex: 'phone',
    key: 'phone'
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email'
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' }
  }
]

const tableData = [
  {
    id: '1',
    name: '张三',
    age: 32,
    address: 'New York No. 1 Lake Park',
    phone: '13912345678',
    email: '12443543@qq.com'
  },
  {
    id: '2',
    name: '李四',
    age: 42,
    address: 'London No. 1 Lake Park',
    phone: '13912345678',
    email: '12443543@qq.com'
  },
  {
    id: '3',
    name: '王五',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    phone: '13912345678',
    email: '12443543@qq.com'
  }
]

export default {
  name: 'ExportJsonExcel',
  components: {
    GoBack,
    MyComponent
  },
  data() {
    return {
      visible: false,
      tableData,
      columns
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
    // +---------------------------------------------------------------------------------------------
    // | 正文
    // +---------------------------------------------------------------------------------------------
    downloadExcel() {
      const data = this.tableData ? this.tableData : '' // 表格数据
      const option = {}
      const dataTable = []
      if (data) {
        for (const i in data) {
          if (data) {
            const obj = {
              'id': data[i].id,
              '名称': data[i].name,
              '年龄': data[i].age,
              '地址': data[i].address,
              '手机': data[i].phone,
              '邮箱': data[i].email
            }
            dataTable.push(obj)
          }
        }
      }
      option.fileName = '组织信息'
      option.datas = [
        {
          sheetData: dataTable,
          sheetName: 'sheet',
          sheetFilter: ['id', '年龄', '名称', '手机', '邮箱', '地址'],
          sheetHeader: ['id', '年龄', '名称', '手机', '邮箱', '地址']
        }
      ]

      const toExcel = new ExportJsonExcel(option)
      toExcel.saveExcel()
    }
  }
}
</script>

<style lang="less" scoped>
</style>
