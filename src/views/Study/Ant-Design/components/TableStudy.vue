<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <!-- table -->
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
                  <a-popconfirm title="确认删除?" ok-text="确认" ok-type="danger" cancel-text="取消" @confirm="deleteItem(text)">
                    <a>删除</a>
                  </a-popconfirm>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </span>
        </a-table>
      </div>
    </my-component>
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
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'

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
  name: 'TableStudy',
  components: {
    GoBack,
    MyComponent
  },
  data() {
    return {
      visible: false,
      //
      table: {
        columns,
        data: [],
        loading: false
      },
      drawer: {
        visible: false,
        data: []
      }
    }
  },
  methods: {
    // +---------------------------------------------------------------------------------------------
    // | 页面
    // +---------------------------------------------------------------------------------------------
    show() {
      this.visible = true
      this.getTableData()
    },
    goBack() {
      this.visible = false
    },
    // +---------------------------------------------------------------------------------------------
    // | 获取数据
    // +---------------------------------------------------------------------------------------------
    // 获取数据
    getTableData() {
      const url = '/ant-design/table'
      this.table.loading = true
      this.$axios.get(url).then(res => {
        if (!res.statusText) return this.$message.error('没有获取到数据')
        this.table.data = res.data.records
      }).catch(err => {
        console.log(err)
      }).finally(() => {
        this.table.loading = false
      })
    },
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

<style lang="less" scoped></style>
