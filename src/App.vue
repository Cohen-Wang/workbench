<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<style lang="less" scoped>
  @import './assets/iconfont/iconfont.css';

  #app {
    width: 100%;
    height: 100%;
  }
</style>
