<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">font-awesome</div>
    </div>
    <div class="panel-body panel-body-box">
      <div>
        <blockquote>1.安装：</blockquote>
        <p><kbd>npm install font-awesome --save</kbd></p>
      </div>
      <hr class="mb-50"/>

      <div>
        <blockquote>2.可以在<code>main.js</code>全局引用。 也可以在<code>组件</code>中局部引用。</blockquote>
        <p>注意路径：<kbd>import 'font-awesome/css/font-awesome.css'</kbd></p>
      </div>
      <hr class="mb-50"/>

      <div>
        <blockquote>3.使用方法</blockquote>
        <p><kbd>&lt;i class="fa fa-cart-plus"&gt;&lt;/i&gt;</kbd></p>
        <div class="d-flex">
          <div class="flex-1">
            <div class="icon  font-lightgray font-40 lh-40 mb-10"><i class="fa fa-cart-plus"></i></div>
            <div class="icon  font-lightgray font-60 lh-40 mb-10"><i class="fa fa-cart-plus"></i></div>
            <div class="icon  font-lightgray font-80 lh-40 mb-10"><i class="fa fa-cart-plus"></i></div>
          </div>
          <div class="flex-1">
            <div class="icon  font-lightgray font-40 lh-40 mb-10"><i class="fa fa-thermometer-quarter"></i></div>
            <div class="icon  font-lightgray font-60 lh-40 mb-10"><i class="fa fa-thermometer-quarter"></i></div>
            <div class="icon  font-lightgray font-80 lh-40 mb-10"><i class="fa fa-thermometer-quarter"></i></div>
          </div>
          <div class="flex-1">
            <div class="icon  font-lightgray font-40 lh-40 mb-10"><i class="fa fa-university"></i></div>
            <div class="icon  font-lightgray font-60 lh-40 mb-10"><i class="fa fa-university"></i></div>
            <div class="icon  font-lightgray font-80 lh-40 mb-10"><i class="fa fa-university"></i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'font-awesome/css/font-awesome.css'

export default {
  name: 'FontAwesome'
}
</script>

<style scoped>
  .icon {
    border: 1px dashed #eee;
    text-align: center;
  }
</style>
