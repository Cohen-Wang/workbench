<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <div class="box">
          <blockquote>自己改变</blockquote>
          <div class="d-flex">
            <div class="box1 w-200 h-200 bg-pink"></div>
          </div>
        </div>
        <div class="box">
          <blockquote>同级改变</blockquote>
          <div class="d-flex">
            <div class="box2 w-200 h-200 bg-pink">box2</div>
            <div class="pox2 w-200 h-200 bg-yellowgreen">pox2</div>
          </div>
        </div>
        <div class="box">
          <blockquote>子级改变</blockquote>
          <div class="d-flex">
            <div class="box3 w-200 h-200 bg-pink">
              <div class="pox3 w-100 h-100 bg-yellowgreen">pox3</div>
            </div>
          </div>
        </div>
        <div class="box">
          <blockquote>多个元素改变</blockquote>
          <div class="d-flex">
            <div class="box4 w-200 h-200 bg-pink">
              <div class="pox41 w-100 h-100 bg-yellowgreen">pox41</div>
            </div>
            <div class="pox42 w-200 h-200 bg-yellowgreen">pox42</div>
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
  name: 'Hover',
  components: {
    GoBack,
    MyComponent
  },
  data() {
    return {
      visible: false
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
    }
  }
}
</script>

<style lang="less" scoped>
  /* 自己改变 */
  /* css */
  /*.box1:hover {*/
  /*  background-color: #5bc0de;*/
  /*}*/
  /* less */
  .box1 {
    &:hover {
      background-color: #FF456E;
    }
  }

  /* 同级 */
  /* css */
  /*.box2:hover+.pox2 {*/
  /*  background-color: #b3d4fc;*/
  /*}*/
  .box2 {
    &:hover {
      background-color: #FF456E;
      +.pox2 {
        background-color: #b3d4fc;
      }
    }
  }

  /* 子级 */
  /* css */
  /*.box3:hover .pox3 {*/
  /*  background-color: #b3d4fc;*/
  /*}*/
  /* less */
  .box3 {
    &:hover {
      background-color: #FF456E;
      .pox3 {
        background-color: #b3d4fc;
      }
    }
  }

  /* 多个元素 */
  /* css */
  /*.box4:hover .pox41,*/
  /*.box4:hover+.pox42{*/
  /*  background-color: red;*/
  /*}*/
  /* less */
  .box4 {
    &:hover {
      .pox41 {
        background-color: red;
      }
      +.pox42 {
        background-color: red;
      }
    }
  }
</style>
