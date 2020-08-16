<template>
  <div class="component">
    <div class="component-heading">
      <div style="border-bottom: 2px solid #F8F8F8;">
        <slot name="component-heading"></slot>
      </div>
    </div>
    <div class="component-body">
      <slot name="component-body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyComponent'
}
</script>

<style lang="less" scoped>
  .component {

    .component-heading {
      padding-left: 15px;
      padding-right: 15px;
    }

    .component-body {
      padding: 10px 15px;
    }
  }
</style>
