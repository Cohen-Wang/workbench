<template>
  <div>
    <p>我是孙子组件</p>
    <div id="box">
      #box - 被爷爷组件修改颜色
    </div>
  </div>
</template>

<script>
export default {
  name: "DeepGrandchild"
};
</script>

<style scoped></style>
