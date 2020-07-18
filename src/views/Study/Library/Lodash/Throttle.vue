<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">throttle</div>
    </div>
    <div class="panel-body panel-body-box">
      <div class="box">
        <a-row :gutter="30">
          <a-col :span="12">
            <blockquote>input时，没有debounce</blockquote>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Throttle'
}
</script>

<style scoped>

</style>
