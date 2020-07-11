<template>
  <a-menu
    mode="horizontal"
    :default-selected-keys="[currentNav]"
    style="height: 64px;line-height: 64px;"
  >
    <template v-for="(item, index) in routes" v-if="item.isShow">
      <a-menu-item :key="item.name" @click="handleClick">
        <a-icon v-if="item.meta.icon" :type="item.meta.icon" />
        {{ item.meta.title ? item.meta.title : "" }}
      </a-menu-item>
    </template>

    <a-dropdown style="float: right;padding-right: 30px;">
      <a class="ant-dropdown-link" @click="e => e.preventDefault()">
        王海涛
        <a-icon type="down" />
      </a>
      <a-menu slot="overlay">
        <a-menu-item>
          <a href="javascript:void(0)">个人中心</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:void(0)">个性化</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:void(0)" @click="logout">退出登录</a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </a-menu>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "navHeader",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["routes", "currentNav"])
  },
  methods: {
    // 导航条点击
    handleClick(option) {
      const { key } = option;
      this.$store.commit("SET_CURRENT_NAV", key);
    },
    // 退出登录
    logout() {
      this.$confirm({
        title: "确认退出登录吗？",
        okText: "确认",
        onOk() {
          return new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
          }).catch(() => console.log("Oops errors!"));
        },
        cancelText: "取消",
        onCancel() {}
      });
    }
  },
  created() {}
};
</script>

<style lang="less" scoped></style>
