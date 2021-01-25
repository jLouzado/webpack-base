const { mode } = require('webpack-nano/argv')
const { MiniHtmlWebpackPlugin } = require('mini-html-webpack-plugin')
const { WebpackPluginServe } = require('webpack-plugin-serve')

module.exports = {
  watch: mode === 'development',
  // enable if `watch` isn't working, or you're on a container w/o file events
  // watchOptions: {
  //   aggregateTimeout: 300, // Delay the first rebuild (in ms)
  //   poll: 1000, // Poll using interval (in ms or a boolean)
  //   ignored: /node_modules/ // Ignore to decrease CPU usage
  // },
  entry: ['./src', 'webpack-plugin-serve/client'],
  mode,
  plugins: [
    new MiniHtmlWebpackPlugin({ context: { title: 'Webpack Base' } }),
    new WebpackPluginServe({
      port: process.env.PORT || 8080,
      static: './dist',
      liveReload: true,
      waitForBuild: true
    })
  ]
}
