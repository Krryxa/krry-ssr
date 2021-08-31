const path = require('path')
const merge = require('webpack-merge').merge
const base = require('./webpack.base')
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = merge(base, {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, '../src/main.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].js'
  },
  devServer: {
    open: true,
    port: 3003
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    })
  ]
})