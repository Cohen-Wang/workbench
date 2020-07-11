<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">Console</div>
    </div>
    <div class="panel-body panel-body-box">
      <a-button-group>
        <a-button type="primary" @click="log">console.log(obj)</a-button>
        <a-button type="primary" @click="info">console.info(obj)</a-button>
        <a-button type="primary" @click="dir">console.dir(obj)</a-button>
        <a-button type="primary" @click="dirxml">console.dirxml(obj)</a-button>
        <a-button type="primary" @click="debug">console.debug(obj)</a-button>
        <a-button type="primary" @click="warn">console.warn(obj)</a-button>
        <a-button type="primary" @click="error">console.error(obj)</a-button>
        <a-button type="primary" @click="count">console.count(obj)</a-button>
      </a-button-group>
      <hr/>

      <a-button-group>
        <a-button type="primary" @click="assert">console.assert(obj)</a-button>
      </a-button-group>
      <hr/>

      <a-button-group>
        <a-button type="primary" @click="groupCollapsed">console.groupCollapsed(obj)</a-button>
      </a-button-group>
      <hr/>

      <a-button-group>
        <a-button type="primary" @click="time">console.time()</a-button>
      </a-button-group>
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
