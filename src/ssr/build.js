require('dotenv').config()

const path = require('path')
const { ssrBuild, build } = require('vite')
const replace = require('@rollup/plugin-replace')

const globalConfig = {
  minify: 'esbuild',
  alias: {
    '/@/': path.resolve(__dirname, '..')
  }
};

(async () => {
  const clientResult = await build(Object.assign({
    outDir: 'dist/client',
    rollupInputOptions: {
      input: 'src/main'
    }
  }, globalConfig))

  await ssrBuild(Object.assign({
    outDir: 'dist/server',
    rollupOutputOptions: {
      preserveModules: true
    },
    rollupInputOptions: {
      input: 'src/ssr/server',
      preserveEntrySignatures: 'strict',
      plugins: [
        replace({
          __HTML__: clientResult.html.replace('<div id="app">', '<div id="app" data-server-rendered="true">${html}')
        })
      ]
    }
  }, globalConfig))

  process.exit()
})()
