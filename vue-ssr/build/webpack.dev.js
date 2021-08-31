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
    historyApiFallback: true,
    port: 3003,
    proxy: {
      '/krryblog': {
        target: 'https://ainyi.com',  // 目标接口域名
        changeOrigin: true,  // 是否跨域
        secure: true,  // 如果是https接口，需要配置这个参数
        pathRewrite: {'^/krryblog' : ''}
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    })
  ]
})