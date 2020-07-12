<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">window.console</div>
    </div>
    <div class="panel-body panel-body-box">
      <div>
        <blockquote>console的所有方法</blockquote>
        <ul class="list-unstyled">
          <li v-for="(item, index) in consoleObj" :key="item">
            <span class="color-blue">{{ index+1 }}: </span> <span class="color-red">{{ item }}</span>
          </li>
        </ul>
      </div>
      <hr>
      <div>
        <blockquote>1.console.debug</blockquote>
        <a-button type="primary" @click="debug">console.debug(obj)</a-button>
      </div>
      <hr>
      <div>
        <blockquote>2.console.error</blockquote>
        <a-button type="primary" @click="error">console.error(obj)</a-button>
      </div>
      <hr>
      <div>
        <blockquote>3.console.info</blockquote>
        <a-button type="primary" @click="info">console.info(obj)</a-button>
      </div>
      <hr>
      <div>
        <blockquote>4.console.log</blockquote>
        <a-button type="primary" @click="log">console.log(obj)</a-button>
      </div>
      <hr>
      <div>
        <blockquote>5.console.warn</blockquote>
        <a-button type="primary" @click="warn">console.warn(obj)</a-button>
      </div>
      <hr>
      <div>
        <blockquote>6.console.dir</blockquote>
        <a-button type="primary" @click="dir">console.dir(obj)</a-button>
      </div>
      <hr>
      <div>
        <blockquote>7.console.dirxml</blockquote>
        <a-button type="primary" @click="dirxml">console.dirxml(obj)</a-button>
      </div>
      <hr>
      <div>
        <blockquote>10~12.console.groupCollapsed</blockquote>
        <a-button type="primary" @click="groupCollapsed">console.groupCollapsed(obj)</a-button>
      </div>
      <hr>
      <div>
        <blockquote>13.console.clear</blockquote>
        <a-button type="primary" @click="clear">console.clear()</a-button>
      </div>
      <hr>
      <div>
        <blockquote>14~15.console.count</blockquote>
        <a-button type="primary" @click="count">console.count(obj)</a-button>
      </div>
      <hr>
      <div>
        <blockquote>16.console.assert</blockquote>
        <a-button type="primary" @click="assert">console.assert(obj)</a-button>
      </div>
      <hr>
      <div>
        <blockquote>19~21.console.time</blockquote>
        <a-button type="primary" @click="time">console.time()</a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Console',
  data() {
    return {
      obj: {
        name: 'cohen',
        age: 23,
        school: ['西华师范大学', '四川大学']
      }
    }
  },
  computed: {
    consoleObj() {
      return Object.keys(console)
    }
  },
  created() { },
  methods: {
    log() {
      console.log(this.obj)
    },
    info() {
      console.info(this.obj)
    },
    dir() {
      console.dir(this.obj)
    },
    dirxml() {
      console.dirxml(this.obj)
    },
    debug() {
      console.debug(this.obj)
    },
    warn() {
      console.warn(this.obj)
    },
    error() {
      console.error(this.obj)
    },
    count() {
      console.count(this.obj)
    },
    assert() {
      console.assert(this.obj)
    },
    groupCollapsed() {
      console.groupCollapsed()
      console.dir(this.obj)
      console.groupEnd()
    },
    clear() {
      console.clear()
    },
    time() {
      const timeName = 'cost time is:'
      console.time(timeName)
      const num = 1000000
      let result = 0
      for (let i = 0; i < num; i++) {
        result += i
      }
      console.log('result:', result)
      console.timeEnd(timeName)
    }
  }
}
</script>

<style scoped></style>
