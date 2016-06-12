import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// 引入组件
import App from './App'
import Home from './components/Home'
import timeEntries from './components/TimeEntries'
import logTime from './components/logTime'

/* eslint-disable no-new */
/*
new Vue({
  el: 'body',
  components: { App }
})
*/
Vue.use(VueRouter)
Vue.use(VueResource)

// 路由需要一个根组件
// const App = Vue.extends({})

// 创建一个路由实例
const router = new VueRouter()

// 路由规则
router.map({
  '/Home': { // 访问地址
    name: 'Home', // 路由名字
    component: Home
  },
  '/time-entries': {
    component: timeEntries,
    subRoutes: {
      '/log-time': {
        component: logTime
      }
    }
  }
})

/*
router.redirect({
  '*': '/index'
})
*/
router.start(App, 'body')
