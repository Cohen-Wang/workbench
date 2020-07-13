<template>
  <div>123</div>
</template>

<script>

const createCache = () => {
  const cache = {} // cache对象中以键值对的形式存储我们的缓存数据
  const index = [] // index数组中该存储键，这个键是有顺序，可以方便我们做超出容量的处理
  return function(key, value) {
    // 如果传了值，就说名是设置值
    if (value !== undefined) {
      // 将数据存入cache对象，做缓存
      cache[key] = value
      // 将键存入index数组中，以和cache中的数据进行对应
      index.push(key)
      // 判断缓存中的数据数量是不是超出了限制
      if (index.length >= 50) {
        // 如果超出了限制
        // 删除掉最早存储缓存的数据
        // 最早存入缓存的数据的键是在index数组的第一位
        // 使用数组的shift方法可以获取并删除掉数组的第一个元素
        const tempKey = index.shift()
        // 获取到最早加入缓存的这个数据的键，可以使用它将数据从缓存各种删除
        delete cache[tempKey]
      }
    }
    return cache[key]
  }
}

export default {
  name: 'CreateCache',
  data() {
    return {
      cache: createCache()
    }
  },
  created() {
    this.cache('name', 'cohen')
    console.log(this.cache)
    console.log(this.cache('name'))
  }
}
</script>

<style scoped></style>
