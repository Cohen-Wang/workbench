<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">window.fetch</div>
    </div>
    <div class="panel-body panel-body-box">
      <a-button type="primary" @click="handleClick">点击我，请求，查看控制台</a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Fetch',
  data() {
    return {
      a: 1
    }
  },
  methods: {
    handleClick() {
      const url = './Fetch.json'
      const data = { username: 'abc', password: 123 }
      fetch(url, data).then(function(res) {
        console.log(res)
        // return res.json()
      }).then(function(myJson) {
        console.log(myJson)
      })
    }
  }
}
</script>

<style scoped></style>
