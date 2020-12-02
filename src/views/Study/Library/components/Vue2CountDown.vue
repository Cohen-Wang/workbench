<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <!-- ... -->
        <div>
          <a-form-model layout="vertical">
            <a-row :gutter="15">
              <a-col :span="8">
                <a-form-model-item label="currentTime">
                  <a-date-picker mode="time"
                                 style="width: 100%;"
                                 show-time
                                 @change="onCurrentChange"/>
                </a-form-model-item>
                <a-input v-model.number="currentTime"/>
                <p>{{ moment(currentTime).format('YYYY-MM-DD HH:mm:ss') }}</p>
              </a-col>
              <a-col :span="8">
                <a-form-model-item label="startTime">
                  <a-date-picker mode="time"
                                 style="width: 100%;"
                                 show-time
                                 @change="onStartChange"/>
                </a-form-model-item>
                <a-input v-model.number="startTime"/>
                <p>{{ moment(startTime).format('YYYY-MM-DD HH:mm:ss') }}</p>
              </a-col>
              <a-col :span="8">
                <a-form-model-item label="endTime">
                  <a-date-picker mode="time"
                                 style="width: 100%;"
                                 show-time
                                 @change="onEndChange"/>
                </a-form-model-item>
                <a-input v-model.number="endTime"/>
                <p>{{ moment(endTime).format('YYYY-MM-DD HH:mm:ss') }}</p>
              </a-col>
            </a-row>
          </a-form-model>
        </div>
        <a-divider>倒计时</a-divider>
        <div>
          <p>
            <a-button type="primary" :loading="!isStart" @click="startCountDown">开始</a-button>
            <span>isStart: {{ isStart }}</span>
          </p>
          <span>剩余时间:</span>
          <count-down v-if="isStart"
                      :current-time="currentTime"
                      :start-time="startTime"
                      :end-time="endTime"
                      :tip-text="'-距离考试开始-'"
                      :tip-text-end="'-距离考试结束-'"
                      :end-text="'-考试结束-'"
                      :hourTxt="':'"
                      :minutesTxt="':'"
                      :secondsTxt="''"
                      @start_callback="countDownS_cb(1)"
                      @end_callback="countDownE_cb(1)">
          </count-down>
        </div>
      </div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'
import CountDown from 'vue2-countdown'
import moment from 'moment'

export default {
  name: 'Vue2CountDown',
  components: {
    GoBack,
    MyComponent,
    CountDown
  },
  data() {
    return {
      moment,
      visible: false,
      currentTime: new Date().getTime(),
      startTime: new Date().getTime() + 10 * 1000,
      endTime: new Date().getTime() + 15 * 1000,
      // currentTime: 1606914328122 + 12 * 1000,
      // startTime: 1606914338122,
      // endTime: 1606914343122,
      isStart: true
    }
  },
  methods: {
    // +---------------------------------------------------------------------------------------------
    // | 页面
    // +---------------------------------------------------------------------------------------------
    show() {
      this.visible = true
    },
    goBack() {
      this.visible = false
    },
    // +---------------------------------------------------------------------------------------------
    // | 页面
    // +---------------------------------------------------------------------------------------------
    onCurrentChange(date, dateString) {
      this.currentTime = date.valueOf()
    },
    onStartChange(date, dateString) {
      this.startTime = date.valueOf()
    },
    onEndChange(date, dateString) {
      this.endTime = date.valueOf()
    },
    startCountDown() {
      this.isStart = false
      setTimeout(() => {
        this.isStart = true
      }, 500)
    },
    // 倒计时
    // 开始考试时，回调函数
    countDownS_cb: function(x) {
      this.$message.info('开始，回调函数')
    },
    // 倒计时结束时，毁掉函数
    countDownE_cb: function(x) {
      this.$message.info('结束，回调函数')
    },
    // 剩余时间处理
    validateExamTime() {
      // getCurrentTime().then(res => {
      //   const currentTime = moment(res.data.data)
      //   if (currentTime.isAfter(this.exam.endTime)) { // 设置的考试时期已结束
      //     messageWarn(this, '考试已结束')
      //   } else if (currentTime.isBefore(this.exam.startTime)) { // 设置的考试时期未开始
      //     messageWarn(this, '考试未开始')
      //   } else {
      //     this.startExam() // 开始考试
      //     const current = currentTime.valueOf()
      //     this.currentTime = current
      //     this.startTime = current
      //     this.subjectStartTime = current
      //     // this.endTime = moment(this.exam.endTime).valueOf() // 错误的开源代码
      //     this.endTime = this.examRecord.endTime
      //     this.disableSubmit = false
      //     // console.log('this.exam', this.exam)
      //     // console.log('this.examRecord', this.examRecord)
      //     // console.log(this.currentTime, this.startTime, this.endTime)
      //   }
      // }).catch(() => {
      //   messageFail(this, '开始考试失败！')
      // })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
