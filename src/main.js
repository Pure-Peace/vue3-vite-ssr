import { create } from './app'

const { app, router } = create('client')

// this will hydrate the app
router.isReady().then(() => {
  app.mount('#app', true)
})
