<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">loop(循环)</div>
    </div>
    <div class="panel-body panel-body-box">
      <blockquote>请查看global.less文件</blockquote>
      <div class="d-flex bg-lightgray">
        <div class="flex-group-0 w-p-50 pl-20 pr-20">
          <div class="content">
            <div class="w-10 mb-10">w-10</div>
            <div class="w-20 mb-10">w-20</div>
            <div class="w-30 mb-10">w-30</div>
            <div class="w-40 mb-10">w-40</div>
            <div class="w-50 mb-10">w-50</div>
            <div class="w-60 mb-10">w-60</div>
            <div class="w-70 mb-10">w-70</div>
            <div class="w-80 mb-10">w-80</div>
            <div class="w-90 mb-10">w-90</div>
            <div class="w-100 mb-10">w-100</div>
          </div>
        </div>
        <div class="flex-group-0 w-p-50 pl-20 pr-20">
          <div class="content">
            <div class="w-p-10 mb-10">w-p-10 mb-10</div>
            <div class="w-p-20 mb-20">w-p-20 mb-20</div>
            <div class="w-p-30 mb-30">w-p-30 mb-30</div>
            <div class="w-p-40 mb-40">w-p-40 mb-40</div>
            <div class="w-p-50 mb-50">w-p-50 mb-50</div>
            <div class="w-p-60 mb-60">w-p-60 mb-60</div>
            <div class="w-p-70 mb-70">w-p-70 mb-70</div>
            <div class="w-p-80 mb-80">w-p-80 mb-80</div>
            <div class="w-p-90 mb-90">w-p-90 mb-90</div>
            <div class="w-p-100 mb-100">w-p-100 mb-100</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loop'
}
</script>

<style lang="less" scoped>
.content {
  & > div {
    background-color: coral;
    white-space: nowrap;
  }
}
</style>
