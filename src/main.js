import Vue from 'vue'
import App from './App.vue'
import HelloWorld from './components/HelloWorld'
import Header from './components/Header'
import Case1 from './components/Case1'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'//引入axios
import QS from 'qs'

Vue.prototype.qs = QS;
Vue.prototype.$axios=axios//修改原型链，全局使用axios,这样之后可在每个组件的methods中调用$axios命令完成数据请求
Vue.use(ElementUI)
Vue.use(Router)
Vue.config.productionTip = false

const routes = [
  {path: '/',component: App},//注意这里一定不能加s，否则报错
  {path: '/helloworld',component: HelloWorld},
  {path: '/header',component: Header},
  {path: '/case1',component: Case1},
  {path: '*',redirect: '/'}//防输错或者没找到页面路由错误，跳转到首页
]
const router = new Router ({
  routes,
  mode: 'history'
})
new Vue({
  router,//引用router
  render: h => h(App)
}).$mount('#app')
