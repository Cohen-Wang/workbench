<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">$forceUpdate</div>
    </div>
    <div class="panel-body panel-body-box">
      <blockquote>
        迫使Vue实例重新渲染。注意它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。
      </blockquote>
      <blockquote>
        但是如果对于一个复杂的对象，例如一个对象数组，你直接去给数组上某一个元素增加属性，或者直接把数组的length变成0，vue就无法知道发生了改变。
      </blockquote>
      <pre class="well" v-text="arr"></pre>
      <a-button type="primary" @click="handleClick">$forceUpdate</a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "forceUpdate",
  data() {
    return {
      arr: [
        { name: "cohen", age: 23, school: ["西华师范大学", "西南财经大学"] },
        { name: "kobe", age: 33 }
      ]
    };
  },
  created() {
    setTimeout(() => {
      this.arr[0].school[0] = "没有读过大学";
      this.$message.info(
        "数组arr已经被改变，但是dom上却并未修改。此时必须强制重新渲染",
        10
      );
    }, 3000);
  },
  methods: {
    handleClick() {
      this.$forceUpdate();
    }
  }
};
</script>

<style scoped></style>
