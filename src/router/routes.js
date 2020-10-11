export default [
  {
    path: '/',
    name: 'Home',
    title: '主页',
    icon: 'home',
    show: true,
    component: () => import('/@/views/Home.vue')
  },
  {
    path: '/ranking',
    name: 'Ranking',
    title: '排行',
    icon: 'up-circle',
    show: true,
    component: () => import('/@/views/Ranking.vue')
  },
  {
    path: '/introduce',
    name: 'Introduce',
    title: '介绍',
    show: false,
    component: () => import('/@/views/Introduce.vue')
  },
  {
    path: '/switcher',
    name: 'Switcher',
    title: '切换器',
    show: false,
    component: () => import('/@/views/Switcher.vue')
  },
  {
    path: '/login',
    name: 'Login',
    title: '登录',
    show: false,
    component: () => import('/@/views/Login.vue')
  },
  {
    path: '/404',
    name: 'page not found',
    title: '页面未找到',
    show: false,
    component: () => import('/@/views/404.vue')
  }
]
