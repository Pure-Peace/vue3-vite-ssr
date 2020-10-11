const chalk = require('chalk')
const { successBox } = require('./formatting')
const { getFormattedMemoryUsage } = require('./memory')

const isDev = process.env.NODE_ENV === 'development'

function showBanner (options, showMemoryUsage = true) {
  const opt = Object.assign({
    messages: [],
    bannerColor: 'green',
    name: process.env.npm_package_name || 'vue3-ssr',
    version: process.env.npm_package_version || 'exotic',
    rendering: 'unknown',
    target: 'server' + (isDev ? ' (Vite)' : '')
  }, options)
  const titleLines = []
  const messageLines = []

  // Name and version
  titleLines.push(`${chalk[opt.bannerColor].bold(opt.name)} @ v${opt.version}\n`)

  const label = name => chalk.bold.cyan(`▸ ${name}:`)

  // Environment
  titleLines.push(`${label('Node')}        v${process.env.npm_config_node_version}`)
  titleLines.push(`${label('Environment')} ${process.env.NODE_ENV}`)

  // Rendering
  titleLines.push(`${label('Rendering')}   ${opt.rendering}`)

  // Target
  titleLines.push(`${label('Target')}      ${opt.target}`)

  if (showMemoryUsage) {
    titleLines.push('\n' + getFormattedMemoryUsage())
  }

  // Listeners
  messageLines.push(chalk.bold(`${chalk.green('△')} Listening: `) + chalk.underline.blue(`http://${process.env.HOST}:${process.env.PORT}`))

  // Add custom messages
  if (opt.messages.length) {
    messageLines.push('', ...opt.messages)
  }

  process.stdout.write(successBox(messageLines.join('\n'), titleLines.join('\n')))
}

module.exports = {
  showBanner
}
