<template>
  <div class="root">
    <div id="potencyChart">
      <!-- 作图 -->
    </div>
  </div>
</template>

<script>
import potency from './dist/potency.js'
import { data } from './dist/data'

const random = (min, max) => {
  return Math.random() * (max - min) + min
}

const formatData = (data, start, end) => {
  // const length = data.length
  let x, y
  return data.map((item, index) => {
    // const r = Math.PI * 2 / 6 * index
    // console.log('r', r)
    x = Math.cos(random(0, 360) * Math.PI / 180) * random(start, end)
    y = Math.sin(random(0, 360) * Math.PI / 180) * random(start, end)
    return Object.assign({}, item, { x, y })
  })
  // if (length < 6) {
  //   const r = Math.PI * 2 / length
  //   x = Math.cos(r) * (end - start) + random(5, 10)
  //   y = Math.cos(r) * (end - start) + random(5, 10)
  // } else {
  //   const r = Math.PI * 2 / 6
  //   x = Math.cos(r) * (end - start) + random(5, 10)
  //   y = Math.cos(r) * (end - start) + random(5, 10)
  // }
  // return {
  //   x,
  //   y
  // }
}

export default {
  name: 'Potency',
  data() {
    return {
      excellentData: [], // 先进员工
      generalData: [] // 普通员工
    }
  },
  mounted() {
    alert('mounted')
    // 获取数据
    this.getData()
  },
  methods: {
    // +--------------------------------------------------------------------------------------------
    // | 接口
    // +--------------------------------------------------------------------------------------------
    // 评先选优-先进员工
    getExcellent() {
      // return new Promise((resolve, reject) => {
      //   apiServices.getExcellent().then(res => {
      //     resolve(res.data.object)
      //   }).catch(err => {
      //     reject(err)
      //   })
      // })
    },
    // 评先选优-普通员工 (返回分数值是account字段)
    getGeneral() {
      // return new Promise((resolve, reject) => {
      //   apiServices.getGeneral().then(res => {
      //     resolve(res.data.object)
      //   }).catch(err => {
      //     reject(err)
      //   })
      // })
    },
    // 请求数据
    async getData() {
      this.excellentData = await this.getExcellent()
      this.generalData = await this.getGeneral()
      // console.log('this.excellentData', this.excellentData)
      // console.log('this.generalData', this.generalData)
      this.firstLevelData = data.object.slice(0, 5)
      this.secondLevelData = data.object.filter(e => ~~e.account <= 100 && ~~e.account >= 80)
      this.thirdLevelData = data.object.filter(e => ~~e.account <= 80)
      // 画图
      this.$nextTick(() => {
        this.renderChart()
      })
    },
    // +--------------------------------------------------------------------------------------------
    // | 画图
    // +--------------------------------------------------------------------------------------------
    renderChart() {
      console.log('potency', potency)

      // 处理数据
      this.firstLevelData = formatData(this.firstLevelData, 30, 70)
      this.secondLevelData = formatData(this.secondLevelData, 170, 300).slice(0, 10)
      this.thirdLevelData = formatData(this.thirdLevelData, 430, 570).slice(0, 15)
      // 初始化
      potency.init({
        id: 'potencyChart',
        firstLevelData: this.firstLevelData,
        secondLevelData: this.secondLevelData,
        thirdLevelData: this.thirdLevelData
      })
      potency.tempShow()
    }
  }
}
</script>

<style lang="less" scoped>
  .root {
    width: 100%;
    height: 100%;
  }

  #potencyChart {
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
  }
</style>
