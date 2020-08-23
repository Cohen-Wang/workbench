<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <!-- ... -->
      </div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'

export default {
  name: 'Clone',
  components: {
    GoBack,
    MyComponent
  },
  data() {
    return {
      visible: false,
      debug: 1,
      arr1: [
        { progress: [{ name: 'a1', image: '../image/a1.png' }, { name: 'a2', image: '../image/a2.png' }] },
        { progress: [{ name: 'b1', image: '../image/b1.png' }, { name: 'b2', image: '../image/b2.png' }] },
        { progress: [{ name: 'c1', image: '../image/c1.png' }, { name: 'c2', image: '../image/c2.png' }] }
      ],
      arr2: []
    }
  },
  created() {
    this.clone()
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
    // ...
    clone() {
      switch (this.debug) {
        case 1: this.arr2 = [...this.arr1]; break // 浅 // case 1: obj2 = { ...obj1 }; break; // 对象
        case 2: [...this.arr2] = this.arr1; break // 浅
        case 3: this.arr2.push(...this.arr1); break // 浅
        case 4: this.arr2 = Array.from(this.arr1); break // 浅
        case 5: this.arr2 = JSON.parse(JSON.stringify(this.arr1)); break // 深
        // case 6: this.arr2 = _.cloneDeep(this.arr1); break // 深
        case 7: this.arr2 = Object.assign(this.arr1); break // arr1 === arr2: true // 浅
        case 8: this.arr2 = Object.assign([], this.arr1); break // arr1 === arr2: false // 浅
        case 9: this.arr2 = this.arr1; break //
        default: break //
      }
      // ...
      // 改变arr2
      this.arr2[0]['progress'][0]['name'] = '----------'
      // 查看结果
      console.log('DEBUG:', this.debug)
      console.log('arr1 === arr2:', this.arr1 === this.arr2)
      console.log('arr1:', this.arr1)
      console.log('arr2:', this.arr2)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
