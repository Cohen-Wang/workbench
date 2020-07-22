<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">Table(表格)</div>
    </div>
    <div class="panel-body panel-body-box">
      <a-table :columns="columns"
               :data-source="tableData"
               size="small"
               :loading="loading"
               bordered>
        <span slot="customTitle"><a-icon type="smile-o"/> 名字</span>
        <span slot="action" slot-scope="text, record">
          <a @click="deleteRow(text, record)">删除</a>
          <a-divider type="vertical"/>
          <a @click="edit(text, record)">编辑</a>
          <a-divider type="vertical"/>
          <a class="ant-dropdown-link"> More actions <a-icon type="down"/> </a>
        </span>
      </a-table>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 50,
    key: 'id'
  },
  {
    dataIndex: 'name',
    key: 'name',
    width: 180,
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' }
  },
  {
    title: '邮件',
    width: 240,
    dataIndex: 'email',
    key: 'email'
  },
  {
    title: '电话',
    width: 200,
    dataIndex: 'phone',
    key: 'phone'
  },
  {
    title: '网页',
    width: 150,
    dataIndex: 'website',
    key: 'website'
  },
  {
    title: '地址',
    width: 150,
    dataIndex: 'address.city',
    key: 'address'
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: {
      customRender: 'action'
    }
  }
]

export default {
  name: 'Table',
  data() {
    return {
      columns,
      tableData: [],
      // ...
      loading: false
    }
  },
  created() {
    this.getTableData()
  },
  methods: {
    // 获取数据
    getTableData() {
      const url = 'http://jsonplaceholder.typicode.com/users'
      this.loading = true
      this.$axios.get(url).then(res => {
        if (!res.statusText) return this.$message.error('没有获取到数据', 2000)
        this.tableData = res.data
        console.log(this.tableData)
      }).catch(err => {
        console.log(err)
      }).finally(() => {
        this.loading = false
      })
    },
    // 删除
    deleteRow(item) {
      console.log(item)
      this.tableData.splice(this.tableData.indexOf(item), 1)
    },
    // 编辑
    edit(item) {
      console.log(item)
    }
  }
}
</script>

<style scoped></style>
