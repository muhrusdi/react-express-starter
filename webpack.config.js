const path = require('path')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV === 'production' ? 'production' : 'development';

const config = {
	resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/, 
        loader: 'babel-loader', 
				exclude: /node_modules/,
				query: {
          plugins: ['babel-plugin-transform-decorators-legacy', 'babel-plugin-transform-object-rest-spread']
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
					{ loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /.*\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'images/[name].[hash].[ext]',
              limit: 20000,
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV)
      }
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new UglifyJSPlugin()
  )
}

module.exports = config