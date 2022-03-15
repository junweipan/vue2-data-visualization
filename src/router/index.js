import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: 'module-2',
        name: 'Module-2',
        component: () => import('@/views/moduleTwo/index.vue')
      },
      {
        path: 'module-3',
        name: 'Module-3',
        component: () => import('@/views/moduleThree/index.vue')
      }
    ]
  }
]
const router = new VueRouter({
  routes
})

export default router
