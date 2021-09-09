const path = require('path')
const merge = require('webpack-merge').merge
const base = require('./webpack.base')
// const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(base, {
  target: 'node',
  entry: './src/entry.server.js',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.server.js',
    libraryTarget: 'commonjs2' // 使用 Node 风格导出模块(Node-style exports)
  },
  plugins: [
    // new VueSSRServerPlugin()
  ]
})