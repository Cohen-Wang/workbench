<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <div class="box d-flex">
          <div style="width: 500px; margin-right: 20px;">
            <a-transfer v-if="transfer.data.length > 0"
                        :data-source="transfer.data"
                        :titles="['未入选', '入选党员']"
                        :list-style="{ width: '200px', height: '600px' }"
                        show-search
                        :render="item => `${item.id} - ${item.title}`"
                        :target-keys="transfer.targetKeys"
                        :selected-keys="transfer.selectedKeys"
                        @search="transferSearch"
                        @selectChange="transferSelectChange"
                        @change="transferChange"/>
          </div>
          <div class="d-flex" style="flex: 1; justify-content: space-between;">
            <div style="width: 30%;">
              <blockquote>data</blockquote>
              <pre class="well" style="height: 540px;" v-text="transfer.data"/>
            </div>
            <div style="width: 30%;">
              <blockquote>targetKeys</blockquote>
              <pre class="well" style="height: 540px;" v-text="transfer.targetKeys"/>
            </div>
            <div style="width: 30%;">
              <blockquote>selectedKeys</blockquote>
              <pre class="well" style="height: 540px;" v-text="transfer.selectedKeys"/>
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

export default {
  name: 'TransferStudy',
  components: {
    GoBack,
    MyComponent
  },
  data() {
    return {
      visible: false,
      transfer: {
        data: [],
        targetKeys: [],
        selectedKeys: []
      }
    }
  },
  methods: {
    // +---------------------------------------------------------------------------------------------
    // | 页面
    // +---------------------------------------------------------------------------------------------
    show() {
      this.visible = true
      this.get()
    },
    goBack() {
      this.visible = false
    },
    // +---------------------------------------------------------------------------------------------
    // | 请求
    // +---------------------------------------------------------------------------------------------
    async get() {
      const data = await this.getData()
      this.transfer.data = data.map(e => Object.assign({}, e, { key: e.key.toString() })) // key必须是string
      this.transfer.targetKeys = this.transfer.data.filter(e => e.chosen).map(e => e.key)
    },
    getData() {
      return new Promise(resolve => {
        const url = '/ant-design/transfer'
        this.$axios.get(url).then(res => {
          if (!res.statusText) return this.$message.error('没有获取到数据')
          const result = res.data.records
          resolve(result)
        }).catch(err => {
          console.log(err)
        })
      })
    },
    // +---------------------------------------------------------------------------------------
    // | 穿梭框
    // +---------------------------------------------------------------------------------------
    // 点击左右按钮
    transferChange(nextTargetKeys, direction, moveKeys) {
      console.log('transferChange', nextTargetKeys, direction, moveKeys)
      this.transfer.targetKeys = nextTargetKeys
    },
    // 点checkbox时触发
    transferSelectChange(sourceSelectedKeys, targetSelectedKeys) {
      console.log('transferSelectChange', sourceSelectedKeys, targetSelectedKeys)
      this.transfer.selectedKeys = [...sourceSelectedKeys, ...targetSelectedKeys]
    },
    transferSearch(pos, val) {
      console.log('transferSearch', pos, val)
    }
  }
}
</script>

<style scoped>

</style>
