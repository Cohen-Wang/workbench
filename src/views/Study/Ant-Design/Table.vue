<template>
  <div>
    <div class="panel panel-primary">
      <div class="panel-heading">
        <div class="panel-title">Table(表格)</div>
      </div>
      <div class="panel-body panel-body-box">
        <a-table :columns="table.columns"
                 :data-source="table.data"
                 :loading="table.loading"
                 :scroll="{ x: 200 }"
                 row-key="id"
                 size="middle"
                 bordered>
          <span slot="customTitle"><a-icon type="smile-o"/> 名字</span>
          <!-- 头像 -->
          <span slot="portrait" slot-scope="portrait">
            <a-avatar :src="portrait" shape="square" :size="19"/>
          </span>
          <a slot="name" slot-scope="name">{{ name }}</a>
          <!-- tags -->
          <span slot="tags" slot-scope="tags">
            <a-tag v-for="(tag, index) in tags" :key="index" :color="tag.color">
              {{ tag.title }}
            </a-tag>
          </span>
          <!-- 操作 -->
          <span slot="action" slot-scope="text, record">
            <a @click="checkItem(text, record)">查看</a>
            <a-divider type="vertical"/>
            <a-dropdown>
              <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                更多 <a-icon type="down"/>
              </a>
              <a-menu slot="overlay">
                <a-menu-item>
                  <a @click="editItem(text)">编辑</a>
                </a-menu-item>
                <a-menu-item>
                  <!--<a @click="deleteItem(text)">删除</a>-->
                  <a-popconfirm title="确认删除?"
                                ok-text="确认"
                                ok-type="danger"
                                cancel-text="取消"
                                @confirm="deleteItem(text)">
                    <a>删除</a>
                  </a-popconfirm>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </span>
        </a-table>
      </div>
    </div>
    <!-- 抽屉 -->
    <a-drawer title="Basic Drawer"
              placement="right"
              :closable="false"
              :visible="drawer.visible"
              :width="600"
              :after-visible-change="afterVisibleChange"
              @close="closeDrawer">
      <pre class="well" v-text="drawer.data"></pre>
    </a-drawer>
  </div>
</template>

<script>
import Mock from 'mockjs'
import samplesize from 'lodash.samplesize'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 50,
    key: 'id'
  },
  {
    title: '头像',
    dataIndex: 'portrait',
    key: 'portrait',
    width: 60,
    ellipsis: true,
    scopedSlots: { customRender: 'portrait' }
  },
  {
    dataIndex: 'name',
    key: 'name',
    width: 80,
    ellipsis: true,
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' }
  },
  {
    title: '标签',
    dataIndex: 'tags',
    key: 'tags',
    width: 170,
    ellipsis: true,
    scopedSlots: { customRender: 'tags' }
  },
  {
    title: '生日',
    dataIndex: 'birthday',
    key: 'birthday',
    width: 130,
    ellipsis: true
  },
  {
    title: '邮件',
    dataIndex: 'email',
    width: 240,
    ellipsis: true,
    key: 'email'
  },
  {
    title: '电话',
    key: 'telephone',
    dataIndex: 'telephone',
    width: 130,
    ellipsis: true
  },
  {
    title: '网页',
    key: 'website',
    dataIndex: 'website',
    width: 150,
    ellipsis: true
  },
  {
    title: '大学',
    key: 'college',
    dataIndex: 'college',
    width: 80,
    ellipsis: true
  },
  {
    title: '地址',
    key: 'address',
    width: 150,
    dataIndex: 'address',
    ellipsis: true,
    children: [
      {
        title: '省',
        dataIndex: 'address.province',
        key: 'province',
        width: 100,
        ellipsis: true
      },
      {
        title: '市',
        dataIndex: 'address.city',
        key: 'city',
        width: 100,
        ellipsis: true
      },
      {
        title: '县',
        dataIndex: 'address.county',
        key: 'county',
        width: 100,
        ellipsis: true
      }
    ]
  },
  {
    title: '操作',
    key: 'action',
    width: 100,
    ellipsis: true,
    scopedSlots: {
      customRender: 'action'
    }
  }
]

export default {
  name: 'Table',
  data() {
    const data = Mock.mock({
      'data|10-200': [
        {
          'id|+1': 1,
          'name': '@cname',
          'portrait': '@image',
          'tags|1': () => {
            const arr = [
              { title: '达人', color: 'red' },
              { title: '小人', color: 'pink' },
              { title: '疯子', color: 'orange' },
              { title: '棚子', color: 'green' },
              { title: '狂人', color: 'cyan' },
              { title: '欲望者', color: 'blue' },
              { title: '情人', color: 'purple' }
            ]
            return samplesize(arr, ~~(Math.random() * 3) + 1)
          },
          'birthday': '@date("yyyy年MM月dd日")',
          'telephone': () => {
            const prefix = ['131', '132', '135', '136', '150', '152', '189']
            return samplesize(prefix, 1) + Mock.mock(/\d{8}/)
          },
          'email': '@email',
          'website': '@website',
          'college|1': ['清华大学', '北京大学', '复旦大学', '南开大学'],
          'address': {
            'county': '@county',
            'region': '@region',
            'province': '@province',
            'city': '@city',
            'zip': '@zip'
          }
        }
      ]
    })
    return {
      table: {
        columns,
        data: data.data,
        loading: false
      },
      drawer: {
        visible: false,
        data: []
      }
    }
  },
  created() {
    // this.getTableData()
  },
  methods: {
    // 获取数据
    // getTableData() {
    //   const url = 'http://jsonplaceholder.typicode.com/users'
    //   this.table.loading = true
    //   this.$axios.get(url).then(res => {
    //     if (!res.statusText) return this.$message.error('没有获取到数据', 2000)
    //     this.table.data = res.data
    //   }).catch(err => {
    //     console.log(err)
    //   }).finally(() => {
    //     this.table.loading = false
    //   })
    // },
    // +---------------------------------------------------------------------------------------------
    // | 表格
    // +---------------------------------------------------------------------------------------------
    // 查看
    checkItem(item) {
      this.drawer.visible = true
      this.drawer.data = item
    },
    // 删除
    deleteItem(item) {
      this.table.data.splice(this.table.data.indexOf(item), 1)
    },
    // 编辑
    editItem(item) {
      this.$message.info(JSON.stringify(item))
    },
    // +---------------------------------------------------------------------------------------------
    // | 抽屉
    // +---------------------------------------------------------------------------------------------
    // 当改变抽屉显示或隐藏时触发
    afterVisibleChange() {
      console.log('afterVisibleChange')
    },
    // 关闭
    closeDrawer() {
      this.drawer.visible = false
      this.drawer.data = []
    }
  }
}
</script>

<style scoped></style>
