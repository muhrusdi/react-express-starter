const path = require('path')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const base = require('./webpack.config.js')

const paths = {
  public: path.resolve(__dirname, 'public'),
  src: path.resolve(__dirname, './server')
}

const config = {
  target: 'node',
  externals: [nodeExternals()],
  entry: path.join(paths.src, 'index.js'),
  output: {
    path: paths.public,
    publicPath: paths.public,
    filename: 'server.js'
  }
}

module.exports = merge(base, config)