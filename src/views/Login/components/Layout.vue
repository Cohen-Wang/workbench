<template>
  <div class="container">
    <div class="middle">
      <div class="heading">
        <div class="title">前端客栈</div>
      </div>
      <slot name="container"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style lang="less" scoped>
  .container {
    min-width: 800px;
    width: 100%;
    height: 100%;
    background: url("../../../assets/image/login/login-back.svg");
    background-repeat: no-repeat;
    background-position: center 100px;
    background-size: 100%;

    .middle {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      margin: auto;
      width: 312px;
      min-height: 50px;
      max-height: 600px;

      &>div {}
      padding: 10px 15px;

      .heading {
        margin-bottom: 20px;

        .title {
          text-align: center;
          font-family: "方正兰亭超细黑简体",sans-serif;
          font-size: 50px;
          font-weight: bolder;
          color: #777777;
        }
      }
    }
  }
</style>
