const webpack = require("webpack")
const path = require("path")
const { VueLoaderPlugin } = require('vue-loader')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader','css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: ['vue-style-loader','css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader','css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          esModule: false,
          name: 'img/[name].[contenthash:7].[ext]'
        }
      },
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    // new CleanWebpackPlugin()
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.join(__dirname, '../src')
    }
  }
}