<template>
  <div class="error">
    <img src="@/assets/image/404.png" width="600"/>
    <div class="description">
      <p class="text">很抱歉，页面不小心迷路了 ~</p>
      <a-button type="link"
                size="large"
                icon="swap-left"
                @click="$router.go(-1)">
        返回上一页
      </a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="less" scoped>
.error {
  width: 100%;
  height: 100%;
  padding-top: 150px;
  background-color: #f8fcff;
  text-align: center;

  .description {
    margin-top: 30px;

    .text {
      font: bold 34px/ 1 "微软雅黑";
    }
  }
}
</style>
