<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <!-- ... -->
        <a-button type="primary" @click="handleClick">点击</a-button>

        <div>
          <!-- 无过渡效果 -->
          <div v-if="isShow" class="box">无过渡效果</div>
          <!-- 有过渡效果 -->
          <!--<transition name="fade"
                      appear
                      :duration="1000"
                      enter-active-class="animated fadeInDown"
                      leave-active-class="animated bounceOutRight"
                      @before-enter="beforeEnter"
                      @enter="enter"
                      @after-enter="afterEnter"
                      @enter-cancelled="enterCancelled"
                      @before-leave="beforeLeave"
                      @leave="leave"
                      @after-leave="afterLeave"
                      @leave-cancelled="leaveCancelled">
              <div v-if="isShow" class="box">有过渡效果1</div>
          </transition>-->

          <transition name="fade" :duration="3000">
            <div class="box" v-if="isShow">
              <p>hello</p>
            </div>
          </transition>

          <transition name="slide-fade" :duration="1000">
            <div class="box" v-if="isShow">
              <p>hello</p>
            </div>
          </transition>
        </div>
      </div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'

export default {
  // name: "transition",// ❤❤❤❤ 这个名字不能写成transition，否则会递归调用，导致栈溢出
  name: 'TransitionStudy',
  components: {
    GoBack,
    MyComponent
  },
  data() {
    return {
      visible: false,
      isShow: false
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
    handleClick() {
      this.isShow = !this.isShow
    },

    // --------
    // 进入中
    // 动画进入前
    // --------
    beforeEnter: function(el) {
      console.log('beforeEnter')
    },
    // 此回调函数是可选项的设置
    // 与 CSS 结合时使用
    // 动画进入时
    enter: function(el, done) {
      console.log('enter')
      done()
    },
    // 动画进入后
    afterEnter: function(el) {
      console.log('afterEnter')
    },
    // 动画进入完成
    enterCancelled: function(el) {
      console.log('enterCancelled')
    },
    // --------
    // 离开时
    // --------
    beforeLeave: function(el) {
      console.log('beforeLeave')
    },
    // 此回调函数是可选项的设置
    // 与 CSS 结合时使用
    leave: function(el, done) {
      console.log('leave')
      done()
    },
    afterLeave: function(el) {
      console.log('afterLeave')
    },
    // leaveCancelled 只用于 v-show 中
    leaveCancelled: function(el) {
      console.log('leaveCancelled')
    }
  }
}
</script>

<style lang="less" scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    /* .fade-leave-active below version 2.1.8 */
    opacity: 0;
  }

  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }

  .box {
    height: 200px;
    background-color: #ff456e;
    margin-bottom: 30px;
  }
</style>
