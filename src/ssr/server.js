import { create } from '../app'
import { renderToString } from '@vue/server-renderer'

const path = require('path')
const src = path.resolve(__dirname, '../../../../src/')
const { parsed } = require('dotenv').config({ path: path.resolve(src, '../.env') })
const { showBanner } = require(path.resolve(src, 'ssr/utils/banner'))

const express = require('express')
const server = express()

server.use('/_assets', express.static(path.resolve(src, '../dist/client/_assets')))

const handler = (req, res) => {
  const { app, router } = create()
  router.push(req.url)
  router.isReady().then(() => {
    if (router.currentRoute.value.matched.length === 0) {
      res.end()
      return
    }
    (async () => {
      const html = await renderToString(app)
      res.end(`__HTML__`)
    })()
  })
}
server.get('*', handler)

showBanner()
server.listen(parsed.PORT)
