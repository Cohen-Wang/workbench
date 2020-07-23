<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">TinyMCE</div>
    </div>
    <div class="panel-body panel-body-box">
      <div>
        <editor></editor>
      </div>
      <hr class="mt-100 mb-100">

      <div>
        <editor api-key="API_KEY" :init="{plugins: 'wordcount'}"/>
      </div>
      <hr class="mt-100 mb-100">

      <div>
        <editor
                :init="{
    plugins: [
     'lists link image paste help wordcount'
    ],
    toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | help'
  }"/>
      </div>
      <hr class="mt-100 mb-100">
    </div>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'

export default {
  name: 'TinyMCE',
  components: {
    Editor
  }
}
</script>

<style scoped>

</style>
