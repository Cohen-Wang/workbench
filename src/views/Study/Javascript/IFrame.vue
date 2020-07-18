<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">
        window.open
      </div>
    </div>
    <div class="panel-body panel-body-box">
      123
    </div>
  </div>
</template>

<script>
export default {
  name: 'Iframe',
  data() {
    return {
      a: 1
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
  .container {

    .row {
      margin-left: -15px;
      margin-right: -15px;
      margin-bottom: 40px;
      padding-bottom: 20px;
      border-bottom: 2px dashed #e8e8e8;
      display: flex;
      flex-wrap: wrap;

      .col {
        width: 50%;
        padding: 10px 15px;
        border-right: 2px dashed #e8e8e8;
      }
    }
  }
</style>
