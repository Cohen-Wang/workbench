<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">scrollbar</div>
    </div>
    <div class="panel-body panel-body-box">
      <a-row :gutter="30">
        <a-col :span="6">
          <blockquote>不出现滚动条，但是可以滚动</blockquote>
          <div class="hide-scrollbar">
            <div class="bg-pink">1</div>
            <div class="bg-greenyellow">2</div>
            <div class="bg-orange">3</div>
            <div class="bg-darkgray">4</div>
            <div class="bg-pink">5</div>
            <div class="bg-yellow">6</div>
            <div class="bg-pink">7</div>
            <div class="bg-lightgray">9</div>
            <div class="bg-pink">10</div>
            <div class="bg-greenyellow">11</div>
            <div class="bg-orange">12</div>
            <div class="bg-darkgray">13</div>
            <div class="bg-pink">14</div>
            <div class="bg-yellow">15</div>
            <div class="bg-pink">16</div>
            <div class="bg-lightgray">17</div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Scrollbar'
}
</script>

<style scoped lang="less">
  .hide-scrollbar {
    height: 500px;
    border: 1px solid #999;
    overflow: auto;

    &::-webkit-scrollbar{
      display:none;
    }

    &>div {
      height: 100px;
      line-height: 100px;
      box-sizing: border-box;
      border: 1px solid #999;
      text-align: center;
    }
  }
</style>
