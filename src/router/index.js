import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Layout/Index'
import Login from '../views/Login/Login'
import Register from '../views/Login/Register'

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
  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },
  {
    path: '/', name: 'dashboard', component: Index, isShow: false, redirect: '/home',
    children: [
      { path: '/home', name: 'home', meta: { title: '首页', icon: 'menu' }, component: () => import('@/views/Home.vue') }
    ]
  },
  {
    path: '/study', name: 'study', component: Index, isShow: true, meta: { title: '学习', icon: 'credit-card' }, redirect: '/study/css',
    children: [
      { path: '/study/css', name: 'css', meta: { title: 'CSS', icon: 'trophy' }, component: () => import('@/views/Study/CSS/Index.vue') },
      { path: '/study/javascript', name: 'javascript', meta: { title: 'Javascript', icon: 'cloud-server' }, component: () => import('@/views/Study/Javascript/Index.vue') },
      { path: '/study/es6', name: 'es6', meta: { title: 'ES6', icon: 'deployment-unit' }, component: () => import('@/views/Study/ES6/Index.vue') },
      {
        path: '/study/vue',
        name: 'vue',
        component: () => import('@/views/Study/Vue/Index.vue'),
        meta: { title: 'VUE', icon: 'fork' },
        redirect: '/study/vue/property',
        children: [
          {
            path: '/study/vue/property',
            name: 'property',
            meta: { title: 'Vue属性（property）' },
            component: () => import('@/views/Study/Vue/Property.vue')
          },
          {
            path: '/study/vue/lifecycle',
            name: 'lifecycle',
            meta: { title: '生命周期（lifecycle）' },
            component: () => import('@/views/Study/Vue/Lifecycle.vue')
          },
          {
            path: '/study/vue/watch',
            name: 'watch',
            meta: { title: '侦听属性（watch）' },
            component: () => import('@/views/Study/Vue/Watch.vue')
          },
          {
            path: '/study/vue/slot',
            name: 'slot',
            meta: { title: '插槽（slot）' },
            component: () => import('@/views/Study/Vue/MySlot.vue')
          },
          {
            path: '/study/vue/router',
            name: 'router',
            meta: { title: '路由（router）' },
            component: () => import('@/views/Study/Vue/Router.vue')
          },
          {
            path: '/study/vue/routerTest',
            name: 'routerTest',
            meta: { title: '路由测试（router）' },
            component: () => import('@/views/Study/Vue/RouterTest.vue')
          },
          {
            path: '/study/vue/transition',
            name: 'transition',
            meta: { title: '过渡（transition）' },
            component: () => import('@/views/Study/Vue/Transition.vue')
          },
          {
            path: '/study/vue/mixins',
            name: 'mixins',
            meta: { title: '混入（mixins）' },
            component: () => import('@/views/Study/Vue/Mixins.vue')
          },
          {
            path: '/study/vue/forceUpdate',
            name: 'forceUpdate',
            meta: { title: '强制更新（forceUpdate）' },
            component: () => import('@/views/Study/Vue/$forceUpdate.vue')
          },
          {
            path: '/study/vue/key',
            name: 'key',
            meta: { title: '循环（key）' },
            component: () => import('@/views/Study/Vue/Key.vue')
          }
        ]
      },
      {
        path: '/study/library',
        name: 'library',
        component: () => import('@/views/Study/Library/Index.vue'),
        meta: { title: '常用工具库', icon: 'rocket' }
      },
      {
        path: '/study/visualization',
        name: 'visualization',
        component: () => import('@/views/Study/Visualization/Index.vue'),
        meta: { title: '数据可视化', icon: 'area-chart' },
        redirect: '/study/visualization/antv-g6',
        children: [
          {
            path: '/study/visualization/svg',
            name: 'svg',
            component: () => import('@/views/Study/Visualization/SVG/SVG.vue'),
            meta: { title: 'SVG', icon: 'dot-chart' }
          },
          {
            path: '/study/visualization/antv-g6',
            name: 'antv-g6',
            component: () => import('@/views/Study/Visualization/Antv-G6/Index.vue'),
            meta: { title: 'Antv-G6', icon: 'dot-chart' },
            redirect: '/study/visualization/antv-g6/fruchterman',
            children: [
              {
                path: '/study/visualization/antv-g6/fruchterman',
                name: 'fruchterman',
                meta: { title: '图布局' },
                component: () => import('@/views/Study/Visualization/Antv-G6/Fruchterman.vue')
              },
              {
                path: '/study/visualization/antv-g6/force',
                name: 'force',
                meta: { title: '力导向图布局' },
                component: () => import('@/views/Study/Visualization/Antv-G6/Force.vue')
              },
              {
                path: '/study/visualization/antv-g6/tree',
                name: 'tree',
                meta: { title: '定制树图元素' },
                component: () => import('@/views/Study/Visualization/Antv-G6/Tree.vue')
              }
            ]
          },
          {
            path: '/study/visualization/antv-g2',
            name: 'antv-g2',
            component: () => import('@/views/Study/Visualization/Antv-G2/Index.vue'),
            meta: { title: 'Antv-G2', icon: 'dot-chart' }
          },
          {
            path: '/study/visualization/echarts',
            name: 'echarts',
            component: () => import('@/views/Study/Visualization/Antv-G6/Index.vue'),
            meta: { title: 'ECharts', icon: 'dot-chart' },
            redirect: '/study/visualization/echarts/category',
            children: [
              {
                path: '/study/visualization/echarts/category',
                name: 'category',
                meta: { title: '图布局' },
                component: () => import('@/views/Study/Visualization/ECharts/Category.vue')
              }
            ]
          },
          {
            path: '/study/visualization/d3',
            name: 'd3',
            component: () => import('@/views/Study/Visualization/D3/Index.vue'),
            meta: { title: 'D3', icon: 'dot-chart' },
            redirect: '/study/visualization/d3/force',
            children: [
              {
                path: '/study/visualization/d3/basis',
                name: 'basis',
                meta: { title: '基础' },
                component: () => import('@/views/Study/Visualization/D3/Basis.vue')
              },
              {
                path: '/study/visualization/d3/histogram',
                name: 'histogram',
                meta: { title: '直方图' },
                component: () => import('@/views/Study/Visualization/D3/Histogram.vue')
              },
              {
                path: '/study/visualization/d3/line-graph',
                name: 'line-graph',
                meta: { title: '折线图' },
                component: () => import('@/views/Study/Visualization/D3/LineGraph.vue')
              },
              {
                path: '/study/visualization/d3/pie-graph',
                name: 'pie-graph',
                meta: { title: '饼图' },
                component: () => import('@/views/Study/Visualization/D3/PieGraph.vue')
              },
              {
                path: '/study/visualization/d3/force',
                name: 'd3-force',
                meta: { title: '力导图' },
                component: () => import('@/views/Study/Visualization/D3/Force/Force.vue')
              }
            ]
          }
        ]
      },
      {
        path: '/study/ant-design',
        name: 'ant-design',
        component: () => import('@/views/Study/Ant-Design/Index.vue'),
        meta: { title: 'Ant-Design', icon: 'dot-chart' }
      },
      {
        path: '/study/higher-order-function',
        name: 'higher-order-function',
        component: () => import('@/views/Study/HigherOrderFunction/Index.vue'),
        meta: { title: '高阶函数', icon: 'reconciliation' },
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
  { path: '/404', name: '404', isShow: false, component: () => import('@/views/404.vue') },
  // 一定要放在最后一个，因为路由匹配是按顺序匹配的，只有当匹配了所有的都找不到才说明是不存在的页面
  { path: '/*', redirect: '/404' }
]

const router = new VueRouter({
  routes, // 配置
  base: '/workbench/', // 应用的基路径。例如，如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 '/app/'。默认值: '/'
  mode: 'history', // 路由的使用模式   #/home(hash)   /home(h5 history)
  modules: {} // 进行路由模块划分
})

// 拦截器
router.beforeEach((to, from, next) => {
  const isLogin = !!localStorage.getItem('token')
  if (to.path === '/login' || to.path === '/register') {
    next()
  } else {
    isLogin ? next() : next('/login')
  }
})

export default router
