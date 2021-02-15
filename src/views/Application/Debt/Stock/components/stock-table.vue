<template>
  <div>
    <div>
      <a-table :columns="columns"
               :data-source="data"
               size="small"
               bordered>
      </a-table>
    </div>
  </div>
</template>

<script>

const columns = [
  {
    title: '序号',
    width: 50,
    align: 'center',
    customRender: (text, record, index) => `${index + 1}`
  },
  {
    title: '债务人',
    dataIndex: 'debtor',
    key: 'debtor',
    align: 'center',
    ellipsis: true
  },
  {
    title: '债权人',
    dataIndex: 'creditor',
    key: 'creditor',
    align: 'center',
    ellipsis: true
  },
  {
    title: '时间',
    dataIndex: 'date',
    key: 'date',
    align: 'center',
    ellipsis: true
  },
  {
    title: '金额',
    dataIndex: 'money',
    key: 'value',
    align: 'center',
    ellipsis: true
  }
]

export default {
  name: 'StockTable',
  data() {
    return {
      columns,
      data: []
    }
  }
}
</script>

<style scoped>

</style>
