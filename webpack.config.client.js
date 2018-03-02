const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const base = require('./webpack.config.js')

const paths = {
  public: path.resolve(__dirname, 'public'),
  src: path.resolve(__dirname, './client/src')
}

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(paths.src, 'index.html'),
  filename: 'index.html',
  inject: 'body'
})

const config = {
  entry: path.join(paths.src, 'index.js'),
  output: {
    path: paths.public,
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 2323,
    hot: true,
    historyApiFallback: true,
    contentBase: paths.src
  },
  plugins: [
    HtmlWebpackPluginConfig
  ]
  
}
module.exports = merge(base, config)