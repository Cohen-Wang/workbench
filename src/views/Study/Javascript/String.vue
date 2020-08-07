<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">String方法</div>
    </div>
    <div class="panel-body panel-body-box">
      <div class="box">
        <blockquote>arr.toString()</blockquote>
        <pre class="well">
          {{ arr1.toString() }}
        </pre>
        <pre class="well">
          {{ arr2.toString() }}
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StringVue',
  data() {
    return {
      arr1: [1, 2, 3, 4, 5],
      arr2: ['a', 'b', 'c']
    }
  }
}
</script>

<style scoped>

</style>
