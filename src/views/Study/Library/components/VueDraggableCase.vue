<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <!-- ... -->
        <div>
          <div class="margin-bottom">
            <div class="margin-bottom">
              <a-button type="primary" class="margin-right" @click="add">添加节点</a-button>
              <a-button type="primary" class="margin-right" @click="replace">替换</a-button>
            </div>
            <div class="">
              <input id="disabled"
                     type="checkbox"
                     v-model="enabled"
                     class="form-check-input"/>
              <label class="form-check-label" for="disabled">DnD enabled</label>
            </div>
          </div>
          <a-divider>内容</a-divider>
          <div>
            <a-row :gutter="20">
              <a-col :span="8">
                <div>
                  <vue-draggable :list="list"
                                 :disabled="!enabled"
                                 class="list-group"
                                 ghost-class="ghost"
                                 :move="checkMove"
                                 @start="dragging = true"
                                 @end="dragging = false">
                    <div v-for="(item, index) in list"
                         :key="index"
                         class="list-group-item">
                      {{ item.id }}. {{ item.name }}
                    </div>
                  </vue-draggable>
                </div>
              </a-col>
              <a-col :span="8">
                <div>
                  <a-row :gutter="20">
                    <vue-draggable :list="list"
                                   :disabled="!enabled"
                                   class="list-group"
                                   ghost-class="ghost"
                                   :move="checkMove"
                                   @start="dragging = true"
                                   @end="dragging = false">
                      <a-col v-for="(item, index) in list"
                             :key="index"
                             :span="8"
                             class="margin-bottom">
                        <a-card :title="item.id">
                          {{ item.name }}
                        </a-card>
                      </a-col>
                    </vue-draggable>
                  </a-row>
                </div>
              </a-col>
              <a-col :span="8">
                <div>
                  <pre v-text="list" style="background-color: #EEEEEE; padding: 10px; border-radius: 6px;"/>
                </div>
              </a-col>
            </a-row>
          </div>
        </div>
      </div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'
import VueDraggable from 'vuedraggable'

export default {
  name: 'VueDraggableCase',
  components: {
    GoBack,
    MyComponent,
    VueDraggable
  },
  data() {
    return {
      visible: false,
      // ...
      enabled: true,
      id: 0,
      list: [
        { id: 1, name: '张三' },
        { id: 2, name: '李四' },
        { id: 3, name: '王五' },
        { id: 4, name: '六二' },
        { id: 5, name: '七八' },
        { id: 6, name: '德华' }
      ]
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
    add: function() {
      this.list.push({ name: 'Juan ' + this.id, id: this.id++ })
    },
    replace: function() {
      this.list = [{ name: 'Edgard', id: this.id++ }]
    },
    checkMove: function(e) {
      window.console.log('Future index: ' + e.draggedContext.futureIndex)
    }
  }
}
</script>

<style lang="less" scoped>
  .wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .item {
    width: 300px;
    height: 50px;
    background-color: #42b983;
    color: #ffffff;
  }

  .buttons {
    margin-top: 35px;
  }

  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }

  .list-group-item {
    box-sizing: border-box;
    border: 1px solid #EEEEEE;
    margin-bottom: 6px;
    padding: 15px;
  }
</style>
