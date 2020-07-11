<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="title">Worker</div>
    </div>
    <div class="panel-body panel-body-box">
      <blockquote>等待worker1处理 a: {{ a }}</blockquote>
      <blockquote>等待worker1处理 b: {{ b }}</blockquote>
      <blockquote>等待worker1处理 c: {{ c }}</blockquote>
    </div>
  </div>
</template>

<script>
const fibonacci = n => {
  if (n === 1 || n === 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

export default {
  name: "Worker",
  data() {
    return {
      worker: null,
      a: 0,
      b: 0,
      c: 0
    };
  },
  created() {
    // 通过this.$worker.run这个方法，跑起一个worker，
    // worker是在另外的线程里面跑的，所以可以在run的第一个参数函数里面执行一个非常大计算的操作
    // run方法像Promise一样提供.then和.catch，then的参数就是run第一个参数函数的返回值
    console.time("time1");
    this.worker = this.$worker
      .run(fibonacci, [43])
      .then(res => {
        console.log("res - 1:", res);
        this.a = res;
        console.timeEnd("time1");
      })
      .catch(e => {
        console.log(e);
      });

    console.time("time2");
    this.worker = this.$worker
      .run(fibonacci, [43])
      .then(res => {
        console.log("res - 2:", res);
        this.b = res;
        console.timeEnd("time2");
      })
      .catch(e => {
        console.log(e);
      });

    console.time("time3");
    this.worker = this.$worker
      .run(fibonacci, [43])
      .then(res => {
        console.log("res - 3:", res);
        this.c = res;
        console.timeEnd("time3");
      })
      .catch(e => {
        console.log(e);
      });
  },
  methods: {
    destroyed() {
      // 通过赋值null的方式，释放掉worker引用，这样就可以关闭worker，这是作者在github上说的
      this.worker = null;
    }
  }
};
</script>

<style scoped></style>
