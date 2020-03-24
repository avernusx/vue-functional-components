import Vue from 'vue'
import VueRouter from 'vue-router'
import CommonBenchmark from '../views/benchmarks/common'
import FunctionalBenchmark from '../views/benchmarks/functional'
import HtmlSlots from '../views/slots/html'
import JsxSlots from '../views/slots/jsx'
import JsSlots from '../views/slots/js'
import HtmlScopedSlots from '../views/scoped-slots/html'
import JsxScopedSlots from '../views/scoped-slots/jsx'
import JsScopedSlots from '../views/scoped-slots/js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/benchmarks/common',
    component: CommonBenchmark
  },
  {
    path: '/benchmarks/functional',
    component: FunctionalBenchmark
  },
  {
    path: '/slots/js',
    component: JsSlots
  },
  {
    path: '/slots/jsx',
    component: JsxSlots
  },
  {
    path: '/slots/html',
    component: HtmlSlots
  },
  {
    path: '/scoped-slots/js',
    component: JsScopedSlots
  },
  {
    path: '/scoped-slots/jsx',
    component: JsxScopedSlots
  },
  {
    path: '/scoped-slots/html',
    component: HtmlScopedSlots
  },
]

const router = new VueRouter({
  routes
})

export default router
