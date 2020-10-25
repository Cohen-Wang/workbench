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
  const result = []
  let index = 0
  while (result.length < data.length) {
    const x = Math.cos(random(0, 360) * Math.PI / 180) * random(start, end)
    const y = Math.sin(random(0, 360) * Math.PI / 180) * random(start, end)
    // 判断（如果生成的时候，就重合，那么需要重来）
    let flag = true
    for (let i = 0; i < result.length; i++) {
      // 两个圆的距离
      const distance = Math.sqrt(Math.pow(x - result[i].x, 2) + Math.pow(y - result[i].y, 2))
      if (distance < 80) { // 这里最好是小于，不要用小于等于，以免和碰撞判断发生矛盾
        flag = false
      }
    }

    if (!result.length || flag) {
      result.push(Object.assign({}, data[index], { x, y }))
      index++
    }
  }
  return result
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
      this.firstLevelData = formatData(this.firstLevelData.slice(0, 3), 30, 70)
      this.secondLevelData = formatData(this.secondLevelData.slice(0, 10), 170, 300)
      this.thirdLevelData = formatData(this.thirdLevelData.slice(0, 15), 430, 570)
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
