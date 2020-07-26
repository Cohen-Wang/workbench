<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">TinyMCE</div>
    </div>
    <div class="panel-body panel-body-box">
      <div class="box">
        <div class="pox">
          <div title="双击" @dblclick="handleDblClick('(111)')">双击我 - 插入（111）</div>
          <div title="双击" @dblclick="handleDblClick('(222)')">双击我 - 插入（222）</div>
          <div title="双击" @dblclick="handleDblClick('(333)')">双击我 - 插入（333）</div>
        </div>
        <!-- main -->
        <tiny-editor v-model="message"
                     :debug="true"
                     :height="100"
                     :statusbar="false"
                     :plugin="false"
                     :toolbar="false"
                     @onClick="handleClick"/>
        <div class="message" v-text="message"></div>
      </div>
    </div>
  </div>
</template>

<script>
import TinyEditor from '@/components/tinymce-editor'

export default {
  name: 'TinyMCE',
  components: {
    TinyEditor
  },
  data() {
    return {
      message: ''
    }
  },
  methods: {
    // 鼠标单击的事件
    handleClick(e, editor) {
      console.log('Element clicked')
      console.log(e)
      console.log(editor)
    },
    handleDblClick(msg) {
      this.message += msg
    }
  }
}
</script>

<style lang="less" scoped>
  .pox {
    display: flex;
    margin-bottom: 20px;

    div {
      border: 1px solid #eeeeee;
      padding: 6px 15px;
      margin-right: 20px;
      cursor: pointer;
    }
  }

  .message {
    margin-top: 20px;
    padding: 10px 15px;
    background-color: #e8e8e8;
    border-radius: 4px;
  }
</style>
