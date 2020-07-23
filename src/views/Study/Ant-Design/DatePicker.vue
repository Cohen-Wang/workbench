<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">DatePicker(日期选择器)</div>
    </div>
    <div class="panel-body panel-body-box">
      <a-date-picker @change="onChange"/>
      <hr/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DatePicker',
  methods: {
    onChange(moment) {
      console.log(moment)
      console.log(moment.format('YYYY-MM-DD HH:mm:ss'))
    }
  }
}
</script>

<style scoped></style>
