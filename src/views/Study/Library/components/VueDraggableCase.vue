<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <!-- ... -->
        <div>
          <div class="row">
            <div class="col-2">
              <div class="form-group">
                <div class="btn-group-vertical buttons"
                     role="group"
                     aria-label="Basic example">
                  <button class="btn btn-secondary" @click="add">Add</button>
                  <button class="btn btn-secondary" @click="replace">Replace</button>
                </div>

                <div class="form-check">
                  <input id="disabled"
                         type="checkbox"
                         v-model="enabled"
                         class="form-check-input"/>
                  <label class="form-check-label" for="disabled">DnD enabled</label>
                </div>
              </div>
            </div>

            <div class="col-6">
              <h3>Draggable {{ draggingInfo }}</h3>

              <vue-draggable :list="list"
                             :disabled="!enabled"
                             class="list-group"
                             ghost-class="ghost"
                             :move="checkMove"
                             @start="dragging = true"
                             @end="dragging = false">
                <div class="list-group-item"
                     v-for="element in list"
                     :key="element.name">
                  {{ element.name }}
                </div>
              </vue-draggable>
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
      list: [1, 2, 34, 4, 54, 5]
    }
  },
  computed: {
    draggingInfo() {
      return this.dragging ? 'under drag' : ''
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
</style>
