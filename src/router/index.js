import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Layout/Index'

Vue.use(VueRouter)

/**
 * 报错解决方案
 * Error: Avoided redundant navigation to current location: '/home'.'
 * @type {{(location: RawLocation): Promise<Route>; (location: RawLocation, onComplete?: Function, onAbort?: ErrorHandler): void}}
 * 有空了解下为什么会有这个报错！！
 */
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Index,
    isShow: false,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        meta: { title: '首页', icon: 'menu' },
        component: () => import('@/views/Home.vue')
      }
    ]
  },
  {
    path: '/study',
    name: 'study',
    component: Index,
    isShow: true,
    meta: { title: '学习', icon: 'credit-card' },
    redirect: '/study/axios',
    children: [
      {
        path: '/study/axios',
        name: 'axios',
        meta: { title: 'axios', icon: 'credit-card' },
        component: () => import('@/views/Study/Axios/Axios.vue')
      },
      {
        path: '/study/css',
        name: 'css',
        component: () => import('@/views/Study/CSS/Index.vue'),
        meta: { title: 'CSS', icon: 'bulb' },
        redirect: '/study/css/flex',
        children: [
          {
            path: '/study/css/flex',
            name: 'flex',
            meta: { title: 'flex' },
            component: () => import('@/views/Study/CSS/Flex.vue')
          },
          {
            path: '/study/css/deep',
            name: 'deep',
            meta: { title: 'deep' },
            component: () => import('@/views/Study/CSS/Deep.vue')
          },
          {
            path: '/study/css/textOverflow',
            name: 'textOverflow',
            meta: { title: 'textOverflow' },
            component: () => import('@/views/Study/CSS/TextOverflow.vue')
          },
          {
            path: '/study/css/scrollbar',
            name: 'scrollbar',
            meta: { title: 'scrollbar' },
            component: () => import('@/views/Study/CSS/Scrollbar.vue')
          },
          {
            path: '/study/css/font-awesome',
            name: 'font-awesome',
            meta: { title: 'font-awesome' },
            component: () => import('@/views/Study/CSS/Font-Awesome.vue')
          },
          {
            path: '/study/css/iconfont',
            name: 'iconfont',
            meta: { title: 'iconfont' },
            component: () => import('@/views/Study/CSS/IconFont.vue')
          }
        ]
      },
      {
        path: '/study/less',
        name: 'less',
        component: () => import('@/views/Study/Less/Index.vue'),
        meta: { title: 'Less', icon: 'bulb' },
        redirect: '/study/less/loop',
        children: [
          {
            path: '/study/less/loop',
            name: 'loop',
            meta: { title: 'loop(循环)' },
            component: () => import('@/views/Study/Less/Loop.vue')
          }
        ]
      },
      {
        path: '/study/javascript',
        name: 'javascript',
        component: () => import('@/views/Study/Javascript/Index.vue'),
        meta: { title: 'Javascript', icon: 'bulb' },
        redirect: '/study/javascript/console',
        children: [
          {
            path: '/study/javascript/console',
            name: 'console',
            meta: { title: 'console' },
            component: () => import('@/views/Study/Javascript/Console.vue')
          },
          {
            path: '/study/javascript/worker',
            name: 'worker',
            meta: { title: 'worker' },
            component: () => import('@/views/Study/Javascript/Worker.vue')
          },
          {
            path: '/study/javascript/fetch',
            name: 'fetch',
            meta: { title: 'window.fetch' },
            component: () => import('@/views/Study/Javascript/Fetch.vue')
          },
          {
            path: '/study/javascript/open',
            name: 'open',
            meta: { title: 'window.open' },
            component: () => import('@/views/Study/Javascript/Open.vue')
          },
          {
            path: '/study/javascript/iframe',
            name: 'iframe',
            meta: { title: 'window.iframe' },
            component: () => import('@/views/Study/Javascript/IFrame.vue')
          }
        ]
      },
      {
        path: '/study/es6',
        name: 'es6',
        component: () => import('@/views/Study/ES6/Index.vue'),
        meta: { title: 'ES6', icon: 'bulb' },
        redirect: '/study/es6/async-await',
        children: [
          {
            path: '/study/es6/symbol',
            name: 'symbol',
            meta: { title: 'symbol' },
            component: () => import('@/views/Study/ES6/Symbol.vue')
          },
          {
            path: '/study/es6/null-propagation-operator',
            name: 'null-propagation-operator',
            meta: { title: 'Null传导运算符' },
            component: () => import('@/views/Study/ES6/NullOperator.vue')
          },
          {
            path: '/study/es6/async-await',
            name: 'async-await',
            meta: { title: 'Async&Await' },
            component: () => import('@/views/Study/ES6/Async-Await.vue')
          }
        ]
      },
      {
        path: '/study/vue',
        name: 'vue',
        component: () => import('@/views/Study/Vue/Index.vue'),
        meta: { title: 'VUE', icon: 'smile' },
        redirect: '/study/vue/property',
        children: [
          {
            path: '/study/vue/property',
            name: 'property',
            meta: { title: 'Vue属性' },
            component: () => import('@/views/Study/Vue/Property.vue')
          },
          {
            path: '/study/vue/watch',
            name: 'watch',
            meta: { title: '侦听属性(watch)' },
            component: () => import('@/views/Study/Vue/Watch.vue')
          },
          {
            path: '/study/vue/slot',
            name: 'slot',
            meta: { title: '插槽(slot)' },
            component: () => import('@/views/Study/Vue/MySlot.vue')
          },
          {
            path: '/study/vue/router',
            name: 'router',
            meta: { title: '路由(router)' },
            component: () => import('@/views/Study/Vue/Router.vue'),
            beforeEnter: (to, from, next) => {
              console.log(to, from, next)
              alert('我是在router目录下的index.js文件里，用的路由的拦截器')
              next()
            }
          },
          {
            path: '/study/vue/transition',
            name: 'transition',
            meta: { title: '过渡(transition)' },
            component: () => import('@/views/Study/Vue/Transition.vue')
          },
          {
            path: '/study/vue/mixins',
            name: 'mixins',
            meta: { title: '混入(mixins)' },
            component: () => import('@/views/Study/Vue/Mixins.vue')
          },
          {
            path: '/study/vue/forceUpdate',
            name: 'forceUpdate',
            meta: { title: 'forceUpdate' },
            component: () => import('@/views/Study/Vue/$forceUpdate.vue')
          },
          {
            path: '/study/vue/key',
            name: 'key',
            meta: { title: 'key' },
            component: () => import('@/views/Study/Vue/Key.vue')
          }
        ]
      },
      {
        path: '/study/library',
        name: 'library',
        component: () => import('@/views/Study/Library/Index.vue'),
        meta: { title: '常用工具库', icon: 'smile' },
        redirect: '/study/library/moment',
        children: [
          {
            path: '/study/library/moment',
            name: 'moment',
            meta: { title: 'moment.js' },
            component: () => import('@/views/Study/Library/Moment.vue')
          },
          {
            path: '/study/library/lodash',
            name: 'lodash',
            meta: { title: 'lodash.js', icon: 'smile' },
            component: () => import('@/views/Study/Library/Index.vue'),
            redirect: '/study/library/lodash/debounce',
            children: [
              {
                path: '/study/library/lodash/debounce',
                name: 'debounce',
                meta: { title: 'debounce（防抖）' },
                component: () => import('@/views/Study/Library/Lodash/Debounce.vue')
              },
              {
                path: '/study/library/lodash/throttle',
                name: 'throttle',
                meta: { title: 'throttle（节流）' },
                component: () => import('@/views/Study/Library/Lodash/Throttle.vue')
              }
            ]
          }
        ]
      },
      {
        path: '/study/antv-g6',
        name: 'antv-g6',
        component: () => import('@/views/Study/Antv-G6/Index.vue'),
        meta: { title: '蚂蚁数据可视化(Antv-G6)', icon: 'dot-chart' },
        redirect: '/study/antv-g6/fruchterman',
        children: [
          {
            path: '/study/antv-g6/fruchterman',
            name: 'fruchterman',
            meta: { title: '图布局' },
            component: () => import('@/views/Study/Antv-G6/Fruchterman.vue')
          },
          {
            path: '/study/antv-g6/force',
            name: 'force',
            meta: { title: '力导向图布局' },
            component: () => import('@/views/Study/Antv-G6/Force.vue')
          }
        ]
      },
      {
        path: '/study/echarts',
        name: 'echarts',
        component: () => import('@/views/Study/Antv-G6/Index.vue'),
        meta: { title: 'ECharts', icon: 'dot-chart' },
        redirect: '/study/echarts/category',
        children: [
          {
            path: '/study/echarts/category',
            name: 'category',
            meta: { title: '图布局' },
            component: () => import('@/views/Study/ECharts/Category.vue')
          }
        ]
      },
      {
        path: '/study/ant-design',
        name: 'ant-design',
        component: () => import('@/views/Study/Ant-Design/Index.vue'),
        meta: { title: 'Ant-Design', icon: 'dot-chart' },
        redirect: '/study/ant-design/table',
        children: [
          {
            path: '/study/ant-design/table',
            name: 'table',
            meta: { title: 'Table(表格)' },
            component: () => import('@/views/Study/Ant-Design/Table.vue')
          },
          {
            path: '/study/ant-design/datePicker',
            name: 'datePicker',
            meta: { title: 'DatePicker(日期选择器)' },
            component: () => import('@/views/Study/Ant-Design/DatePicker.vue')
          }
        ]
      },
      {
        path: '/study/higher-order-function',
        name: 'higher-order-function',
        component: () => import('@/views/Study/HigherOrderFunction/Index.vue'),
        meta: { title: '高阶函数', icon: 'dot-chart' },
        redirect: '/study/higher-order-function/createCache',
        children: [
          {
            path: '/study/higher-order-function/createCache',
            name: 'createCache',
            meta: { title: '创建缓存' },
            component: () => import('@/views/Study/HigherOrderFunction/CreateCache.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/case',
    name: 'case',
    component: Index,
    isShow: true,
    meta: { title: '案例', icon: 'file' },
    redirect: '/case/index',
    children: [
      {
        path: '/case/index',
        name: 'index',
        meta: { title: '所有案例', icon: 'credit-card' },
        component: () => import('@/views/Case/Index.vue')
      }
    ]
  },
  {
    path: '/application',
    name: 'application',
    component: Index,
    isShow: true,
    meta: { title: '应用', icon: 'file' },
    redirect: '/application/debt',
    children: [
      {
        path: '/application/debt',
        name: 'debt',
        meta: { title: '债务', icon: 'credit-card' },
        component: () => import('@/views/Application/Debt/Debt.vue')
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    isShow: false,
    component: () => import('@/views/404.vue')
  }/*,
  // 一定要放在最后一个，因为路由匹配是按顺序匹配的，只有当匹配了所有的都找不到才说明是不存在的页面
  {
    path: '/!*',
    redirect: '/404'
  }*/
]

const router = new VueRouter({
  routes, // 配置
  base: '/workbench/', // 应用的基路径。例如，如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 '/app/'。默认值: '/'
  mode: 'history', // 路由的使用模式   #/home(hash)   /home(h5 history)
  modules: {} // 进行路由模块划分
})

export default router
