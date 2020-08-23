<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">Clone</div>
    </div>
    <div class="panel-body panel-body-box">
      123
    </div>
  </div>
</template>

<script>
export default {
  name: 'Clone',
  data() {
    return {
      debug: 1,
      arr1: [
        { progress: [{ name: 'a1', image: '../image/a1.png' }, { name: 'a2', image: '../image/a2.png' }] },
        { progress: [{ name: 'b1', image: '../image/b1.png' }, { name: 'b2', image: '../image/b2.png' }] },
        { progress: [{ name: 'c1', image: '../image/c1.png' }, { name: 'c2', image: '../image/c2.png' }] }
      ],
      arr2: []
    }
  },
  methods: {
    clone() {
      switch (this.debug) {
        // 浅
        case 1: this.arr2 = [...this.arr1]; break
        // case 1: obj2 = { ...obj1 }; break; // 对象
        // 浅
        case 2: [...this.arr2] = this.arr1; break
        // 浅
        case 3: this.arr2.push(...this.arr1); break
        // 浅
        case 4: this.arr2 = Array.from(this.arr1); break
        // 深
        case 5: this.arr2 = JSON.parse(JSON.stringify(this.arr1)); break
        // 深
        // case 6: this.arr2 = _.cloneDeep(this.arr1); break
        // 浅
        case 7: this.arr2 = Object.assign(this.arr1); break // arr1 === arr2: true
        // 浅
        case 8: this.arr2 = Object.assign([], this.arr1); break // arr1 === arr2: false
        //
        case 9: this.arr2 = this.arr1; break
        //
        default: break
      }
      // ...
      // 改变arr2
      this.arr2[0]['progress'][0]['name'] = '--------------------------'
      // 查看结果
      console.log('DEBUG:', this.debug)
      console.log('arr1 === arr2:', this.arr1 === this.arr2)
      console.log('arr1:', this.arr1)
      console.log('arr2:', this.arr2)
    }
  }
}
</script>

<style scoped></style>
