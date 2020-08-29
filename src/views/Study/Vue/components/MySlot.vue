<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">插槽(slot)</div>
    </div>
    <div class="panel-body">
      <blockquote>
        插槽，也就是slot，是组件的一块HTML模板，这块模板显示不显示、以及怎样显示由父组件来决定。
        实际上，一个slot最核心的两个问题这里就点出来了，是显示不显示和怎样显示。
      </blockquote>

      <p class="lead">单个插槽 | 默认插槽 | 匿名插槽</p>
      <my-slot-child>
        <b>我是在父组件里写的文字，被插在匿名插槽</b>
      </my-slot-child>
      <hr/>

      <p class="lead">具名插槽</p>
      <my-slot-child>
        <b>我是在父组件里写的文字，被插在匿名插槽</b>
        <b slot="nameSlot">我是在父组件里写的文字，被插在具名插槽</b>
      </my-slot-child>
      <hr/>

      <p class="lead">作用域插槽 | 带数据的插槽</p>
      <p class="lead">
        而作用域插槽，父组件只需要提供一套样式（在确实用作用域插槽绑定的数据的前提下）。
      </p>
      <my-slot-child>
        <b>我是在父组件里写的文字，被插在匿名插槽</b>
        <b slot="nameSlot">我是在父组件里写的文字，被插在具名插槽</b>
        <template slot="scopeSlot" slot-scope="list">
          <ul>
            <li v-for="item in list.data" :key="item.name">
              {{ item.name }} - {{ item.age }}
            </li>
          </ul>
        </template>
      </my-slot-child>
    </div>
  </div>
</template>

<script>
import MySlotChild from './MySlotChild'

export default {
  name: 'MySlot',
  components: {
    MySlotChild
  }
}
</script>

<style scoped></style>
