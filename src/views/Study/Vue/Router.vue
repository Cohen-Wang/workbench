<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">Router</div>
    </div>
    <div class="panel-body panel-body-box">
      <div class="box">
        <a-row :gutter="30">
          <a-col :span="12">
            <pre class="well" v-text="route"></pre>
          </a-col>
          <a-col :span="12">
            <pre class="well" v-text="router"></pre>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Router',
  data() {
    return {
      route: Object.keys(this.$route),
      router: Object.keys(this.$router)
    }
  }
}
</script>

<style scoped></style>
