<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">moment.js</div>
    </div>
    <div class="panel-body panel-body-box">
      <blockquote>初识moment</blockquote>
      <p>
        <kbd>moment()</kbd> <samp>// {{ moment() }}</samp>
      </p>
      <p>moment方法：</p>
      <ul class="list-unstyled">
        <li v-for="(item, index) in momentFunctions" :key="index">
          {{ index + 1 }}: {{ item }}
        </li>
      </ul>
      <hr/>

      <p class="lead">
        2. <code>add</code> 是增加时间的含义，<code>subtract</code>
        是减少时间的含义，里面填入具体增加的数量与单位。当填入负数时，增加-1小时等于减1小时。valueOf可将其转换为时间戳。
      </p>
      <p><code>add()</code></p>
      <p>
        <kbd>moment().add(-1, 'hour')</kbd>
        <samp>// {{ moment().add(-1, "hour") }}</samp>
      </p>
      <p>
        <kbd>moment().add(-1, 'hour').format("YYYY-MM-DD HH:mm:ss")</kbd>
        <samp>// {{ moment().add(-1, "hour").format("YYYY-MM-DD HH:mm:ss") }}</samp>
      </p>
      <p>
        <kbd>moment().add(-1, 'hour').valueOf()</kbd>
        <samp>// {{ moment().add(-1, "hour").valueOf() }}</samp>
      </p>
      <p>
        <kbd>moment().add(1, 'day')</kbd>
        <samp>// {{ moment().add(1, "day") }}</samp>
      </p>
      <p>
        <kbd>moment().add(1, 'day').format("YYYY-MM-DD HH:mm:ss")</kbd>
        <samp>// {{ moment().add(1, "day").format("YYYY-MM-DD HH:mm:ss") }}</samp>
      </p>
      <p>
        <kbd>moment().add(1, 'day').valueOf()</kbd>
        <samp>// {{ moment().add(1, "day").valueOf() }}</samp>
      </p>
      <p><code>注意：</code></p>
      <p>
        <kbd>moment().add(7, 'days').add(1, 'months')</kbd>
        <samp>// {{ moment().add(7, "days").add(1, "months") }}</samp>
      </p>
      <p>
        <kbd>moment().add({ days: 7, months: 1 })</kbd>
        <samp>// {{ moment().add({ days: 7, months: 1 }) }}</samp>
      </p>

      <p><code>substract()</code></p>
      <p>
        <kbd>moment().subtract(-1, 'days')</kbd>
        <samp>// {{ moment().subtract(-1, "days") }}</samp>
      </p>
      <p>
        <kbd>moment().subtract(-1, 'days').format("YYYY-MM-DD HH:mm:ss")</kbd>
        <samp>// {{ moment().subtract(-1, "days").format("YYYY-MM-DD HH:mm:ss") }}</samp>
      </p>
      <p>
        <kbd>moment().subtract(-1, 'days').valueOf()</kbd>
        <samp>// {{ moment().subtract(-1, "days").valueOf() }}</samp>
      </p>
      <p>
        <kbd>moment().subtract(1, 'year')</kbd>
        <samp>// {{ moment().subtract(1, "year") }}</samp>
      </p>
      <p>
        <kbd>moment().subtract(1, 'year').format("YYYY-MM-DD HH:mm:ss")</kbd>
        <samp>// {{ moment().subtract(1, "year").format("YYYY-MM-DD HH:mm:ss") }}</samp>
      </p>
      <p>
        <kbd>moment().subtract(1, 'year').valueOf()</kbd>
        <samp>// {{ moment().subtract(1, "year").valueOf() }}</samp>
      </p>
      <hr/>

      <p class="lead">4. <code>diff</code> 求得两个日期的差值</p>
      <p>
        <kbd>moment([2008, 9]).diff(moment([2007, 0]), 'years') </kbd>
        <samp>// {{ moment([2008, 9]).diff(moment([2007, 0]), "years") }}</samp>
      </p>
      <p>
        <kbd>moment([2008, 9]).diff(moment([2007, 0]), 'years', true)</kbd>
        <samp>// {{ moment([2008, 9]).diff(moment([2007, 0]), "years", true) }}</samp>
      </p>
      <hr/>

      <p class="lead">6. <code>format</code>日期格式化</p>
      <p>
        <kbd>moment().format()</kbd> <samp>// {{ moment().format() }} </samp>
      </p>
      <p>
        <kbd>moment().format('YYYY年MM月DD日 HH时mm分ss秒')</kbd>
        <samp>// {{ moment().format("YYYY年MM月DD日 HH时mm分ss秒") }} </samp>
      </p>
      <p>
        <kbd>moment().format("YYYY-MM-DD HH:mm:ss")</kbd>
        <samp>// {{ moment().format("YYYY-MM-DD HH:mm:ss") }} </samp>
      </p>
      <p>
        <kbd>moment().format("YYYY-MM-DD hh:mm:ss")</kbd>
        <samp>// {{ moment().format("YYYY-MM-DD hh:mm:ss") }} // 注意：H一定要大写！ 写成hh:mm:ss时，15:00会改写成3:00</samp>
      </p>
      <p>
        <kbd>moment().format("YYYY-MM-DD")</kbd>
        <samp>// {{ moment().format("YYYY-MM-DD") }}</samp>
      </p>
      <p>
        <kbd>moment().format("YYY-MM-DD")</kbd>
        <samp>// {{ moment().format("YYY-MM-DD") }}</samp>
      </p>
      <p>
        <kbd>moment().format("YY-MM-DD")</kbd>
        <samp>// {{ moment().format("YY-MM-DD") }}</samp>
      </p>
      <p>
        <kbd>moment().format("HH:mm:ss")</kbd>
        <samp>// {{ moment().format("HH:mm:ss") }}</samp>
      </p>
      <p>
        <kbd>moment().format("hh:mm:ss")</kbd>
        <samp>// {{ moment().format("hh:mm:ss") }}</samp>
      </p>
      <p>
        <kbd>moment().format("dddd")</kbd>
        <samp>// {{ moment().format("dddd") }}</samp>
      </p>
      <p>
        <kbd>moment().format('MMMM Do YYYY, h:mm:ss a')</kbd>
        <samp>// {{ moment().format("MMMM Do YYYY, h:mm:ss a") }}</samp>
      </p>
      <hr/>

      <p class="lead">7. <code>from</code>相对时间</p>
      <p>
        <kbd>moment([1985, 3, 17]).from(moment())</kbd>
        <samp>// {{ moment([1985, 3, 17]).from(moment()) }} </samp>
      </p>
      <p>
        <kbd>moment([1985, 3, 17]).from(moment(), true)</kbd>
        <samp>// {{ moment([1985, 3, 17]).from(moment(), true) }} </samp>
      </p>
      <hr/>

      <p class="lead">8. <code>fromNow</code>相对时间</p>
      <p>
        <kbd>moment("19850317", "YYYYMMDD").fromNow()</kbd>
        <samp>// {{ moment("19850317", "YYYYMMDD").fromNow() }} </samp>
      </p>
      <p>
        <kbd>moment([1985, 3, 17]).fromNow()</kbd>
        <samp>// {{ moment([1985, 3, 17]).fromNow() }} </samp>
      </p>
      <p>
        <kbd>moment([1985, 3, 17]).fromNow(true)</kbd>
        <samp>// {{ moment([1985, 3, 17]).fromNow(true) }} </samp>
      </p>
      <p>
        <kbd>moment("20080512", "YYYYMMDD").fromNow()</kbd>
        <samp>// {{ moment("20080512", "YYYYMMDD").fromNow() }} </samp>
      </p>
      <p>
        <kbd>moment("2008", "YYYY").fromNow()</kbd>
        <samp>// {{ moment("2008", "YYYY").fromNow() }} </samp>
      </p>
      <p>
        <kbd>moment().startOf('day').fromNow()</kbd>
        <samp>// {{ moment().startOf("day").fromNow() }}</samp>
      </p>
      <p>
        <kbd>moment().endOf('day').fromNow()</kbd>
        <samp>// {{ moment().endOf("day").fromNow() }}</samp>
      </p>
      <p>
        <kbd>moment().startOf('hour').fromNow()</kbd>
        <samp>// {{ moment().startOf("hour").fromNow() }}</samp>
      </p>
      <hr/>

      <p class="lead">9. <code>to</code></p>
      <p>
        <kbd>moment(["19850317", "YYYYMMDD"]).to(moment())</kbd>
        <samp>// {{ moment(["19850317", "YYYYMMDD"]).to(moment()) }} </samp>
      </p>
      <p>
        <kbd>moment([1985, 3, 17]).to(moment())</kbd>
        <samp>// {{ moment([1985, 3, 17]).to(moment()) }} </samp>
      </p>
      <p>
        <kbd>moment([1985, 3, 17]).to(moment(), true)</kbd>
        <samp>// {{ moment([1985, 3, 17]).to(moment(), true) }} </samp>
      </p>
      <p>
        <kbd>moment([1985, 3, 17]).to(moment([2006, 10, 25]), true)</kbd>
        <samp>// {{ moment([1985, 3, 17]).to(moment([2006, 10, 25]), true) }}</samp>
      </p>
      <hr/>

      <p class="lead">
        10. <code>toNow</code>这类似于
        moment.fromNow，但给出相反的间隔：a.fromNow() = - a.toNow()
      </p>
      <p>
        <kbd>moment([1985, 3, 17]).toNow()</kbd>
        <samp>// {{ moment([1985, 3, 17]).toNow() }} </samp>
      </p>
      <p>
        <kbd>moment([1985, 3, 17]).toNow(true)</kbd>
        <samp>// {{ moment([1985, 3, 17]).toNow(true) }} </samp>
      </p>
      <hr/>

      <p class="lead">
        27.设置起始时间。<code>startOf</code>
        对原moment设置为某一时间的单位的起始时间。<code>endOf</code>
        是将开始时间变成了结束时间
      </p>
      <p><code>startOf</code></p>
      <p>
        <kbd>moment().startOf('year').format('YYYY-MM-DD HH:mm:ss')</kbd>
        <samp>// {{ moment().startOf("year").format("YYYY-MM-DD HH:mm:ss") }}</samp>
      </p>
      <p>
        <kbd>moment().startOf('month').format('YYYY-MM-DD HH:mm:ss')</kbd>
        <samp>// {{ moment().startOf("month").format("YYYY-MM-DD HH:mm:ss") }}</samp>
      </p>
      <p>
        <kbd>moment().startOf('week').format('YYYY-MM-DD HH:mm:ss')</kbd>
        <samp>// {{ moment().startOf("week").format("YYYY-MM-DD HH:mm:ss") }} // 不是中国时间</samp>
      </p>
      <p>
        <kbd>moment().startOf('day').format('YYYY-MM-DD HH:mm:ss')</kbd>
        <samp>// {{ moment().startOf("day").format("YYYY-MM-DD HH:mm:ss") }}</samp>
      </p>
      <p>
        <kbd>moment().startOf('hour').format('YYYY-MM-DD HH:mm:ss')</kbd>
        <samp>// {{ moment().startOf("hour").format("YYYY-MM-DD HH:mm:ss") }}</samp>
      </p>
      <p>
        <kbd>moment().startOf('minute').format('YYYY-MM-DD HH:mm:ss')</kbd>
        <samp>// {{ moment().startOf("minute").format("YYYY-MM-DD HH:mm:ss") }}</samp>
      </p>

      <p><code>endOf</code></p>
      <p>
        <kbd>moment().endOf('year').format('YYYY-MM-DD HH:mm:ss')</kbd>
        <samp>// {{ moment().endOf("year").format("YYYY-MM-DD HH:mm:ss") }}</samp>
      </p>
      <p>
        <kbd>moment().endOf('month').format('YYYY-MM-DD HH:mm:ss')</kbd>
        <samp>// {{ moment().endOf("month").format("YYYY-MM-DD HH:mm:ss") }}</samp>
      </p>
      <p>
        <kbd>moment().endOf('week').format('YYYY-MM-DD HH:mm:ss')</kbd>
        <samp>// {{ moment().endOf("week").format("YYYY-MM-DD HH:mm:ss") }} // 不是中国时间</samp>
      </p>
      <p>
        <kbd>moment().endOf('day').format('YYYY-MM-DD HH:mm:ss')</kbd>
        <samp>// {{ moment().endOf("day").format("YYYY-MM-DD HH:mm:ss") }}</samp>
      </p>
      <p>
        <kbd>moment().endOf('hour').format('YYYY-MM-DD HH:mm:ss')</kbd>
        <samp>// {{ moment().endOf("hour").format("YYYY-MM-DD HH:mm:ss") }}</samp>
      </p>
      <p>
        <kbd>moment().endOf('minute').format('YYYY-MM-DD HH:mm:ss')</kbd>
        <samp>// {{ moment().endOf("minute").format("YYYY-MM-DD HH:mm:ss") }}</samp>
      </p>
      <hr/>

      <p class="lead">
        36.使用 Unix时间戳进行初始化，相当于moment(timestamp *
        1000)方法。unix方法同样可以获取时间戳。
      </p>
      <p>
        <kbd>moment.unix(1318781876)</kbd>
        <samp>// {{ moment.unix(1318781876) }}</samp>
      </p>
      <hr/>

      <p class="lead">*.时间戳</p>
      <p>
        <kbd>moment(1234567891234).format('YYYY-MM-DD HH:mm:ss')</kbd>
        <samp>// {{ moment(1234567891234).format("YYYY-MM-DD HH:mm:ss") }}</samp>
      </p>
      <hr/>

      <p class="lead">*.最近几天</p>
      <p>
        <kbd>[moment().add(-7, 'day').format('YYYY-MM-DD '), moment().format('YYYY-MM-DD ')]</kbd>
        <samp>// {{ [moment().add(-7, "day").format("YYYY-MM-DD "), moment().format("YYYY-MM-DD ")] }}</samp>
      </p>
      <p>
        <kbd>[moment().add(-14, 'day').format('YYYY-MM-DD '), moment().format('YYYY-MM-DD ')]</kbd>
        <samp>// {{ [moment().add(-14, "day").format("YYYY-MM-DD "), moment().format("YYYY-MM-DD ")] }}</samp>
      </p>
      <p>
        <kbd>[moment().add(-30, 'day').format('YYYY-MM-DD '), moment().format('YYYY-MM-DD ')]</kbd>
        <samp>// {{ [moment().add(-30, "day").format("YYYY-MM-DD "), moment().format("YYYY-MM-DD ")] }}</samp>
      </p>
      <hr/>

      <p class="lead">*.Number</p>
      <p>
        <kbd>typeof(moment().format('MM'))</kbd>
        <samp>// {{ typeof moment().format("MM") }}</samp>
      </p>
      <p>
        <kbd>typeof(moment().format('MM') - 1)</kbd>
        <samp>// {{ typeof (moment().format("MM") - 1) }}</samp>
      </p>
      <p>
        <kbd>Number(moment().format('MM') - 1)</kbd>
        <samp>// {{ Number(moment().format("MM") - 1) }}</samp>
      </p>
      <hr/>

      <blockquote>实战</blockquote>
      <a-button
        type="link"
        @click="$router.push('/study/ant-design/datePicker')">
        Ant Design - DatePicker
      </a-button>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import 'moment/locale/zh-cn'

export default {
  name: 'Moment',
  data() {
    return {
      moment,
      // eslint-disable-next-line no-proto
      momentFunctions: Object.keys(moment().__proto__)
    }
  },
  created() {
    console.dir(moment)
  },
  methods: {}
}
</script>

<style scoped></style>
