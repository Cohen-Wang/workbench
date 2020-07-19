<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">Promise</div>
    </div>
    <div class="panel-body panel-body-box">
      123
    </div>
  </div>
</template>

<script>
export default {
  name: 'Promise',
  data() {
    return {
      debug: true
    }
  },
  created() {
    this.userLogin().then(res => {
      console.log(res)
    })
  },
  methods: {
    userLogin: (resolve, reject) => {
      window.setTimeout(() => {
        if (this.debug) {
          resolve({
            response: true
          })
        } else {
          reject('失败1')
        }
      }, 2000)
    }
  }
}
</script>

<style scoped>

</style>
