<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">Router</div>
    </div>
    <div class="panel-body panel-body-box">
      <div class="box">
        你好，你是【{{ age }}】岁的【{{ name }}】
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RouterTest',
  data() {
    return {
      name: '',
      age: 0
    }
  },
  created() {
    console.log(this.$route)
    // ...
    if (Object.keys(this.$route.query).length) {
      alert('query传参')
      const { name, age } = this.$route.query
      this.name = name
      this.age = age
    }
    if (Object.keys(this.$route.params).length) {
      alert('params传参')
      const { name, age } = this.$route.params
      this.name = name
      this.age = age
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
