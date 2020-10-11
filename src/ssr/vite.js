require('dotenv').config()

const path = require('path')
const { createServer } = require('vite')
const { showBanner } = require('./utils/banner')

const myPlugin = ({
  root, // project root directory, absolute path
  app, // Koa app instance
  server, // raw http server instance
  watcher // chokidar file watcher instance
}) => {
  app.use(async (ctx, next) => {
    // You can do pre-processing here - this will be the raw incoming requests
    // before vite touches it.
    if (ctx.path.endsWith('.scss')) {
      // Note vue <style lang="xxx"> are supported by
      // default as long as the corresponding pre-processor is installed, so this
      // only applies to <link ref="stylesheet" href="*.scss"> or js imports like
      // `import '*.scss'`.
      // console.log('pre processing: ', ctx.url)
      ctx.type = 'css'
      ctx.body = 'body { border: 1px solid red }'
    }

    // ...wait for vite to do built-in transforms
    await next()

    // Post processing before the content is served. Note this includes parts
    // compiled from `*.vue` files, where <template> and <script> are served as
    // `application/javascript` and <style> are served as `text/css`.
    if (ctx.response.is('js')) {
      // console.log('post processing: ', ctx.url)
      // console.log(ctx.body) // can be string or Readable stream
    }
  })
}

createServer({
  alias: {
    '/@/': path.resolve(__dirname, '..')
  },
  configureServer: [myPlugin]
}).listen(process.env.PORT).then(r => showBanner())
