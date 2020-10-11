import { createSSRApp } from 'vue'
import App from './App.vue'
import createRouter from './router'
import i18n from './i18n'
import store from './store'

import SvgIcon from '/@/components/SvgIcon.vue'

import '/@/assets/css/global.less'

export const create = function (type) {
  if (type === 'client') {
    try {
      Object.assign(window.process, { client: true })
    } catch { window.process = { client: true } }
  }
  const router = createRouter(type)
  const app = createSSRApp(App)

  app.use(store)
  app.use(router)
  app.use(i18n)

  app.component('svg-icon', SvgIcon)

  return { app, router }
}
