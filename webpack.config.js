const webpack = require('webpack')
const path = require('path')

/* Plugins */
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development'
})

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/, // Don't forget to exclude all non-transpilable js files! so it won't run slow
      use: [{
        loader: 'ng-annotate-loader',
        options: { es6: true }
      }, {
        loader: 'babel-loader',
        options: {
          presets: ['env'],
          plugins: []
        }
      }]
    }, {
      test: /\.pug$/,
      use: ['raw-loader', 'pug-html-loader']
    }, {
      test: /\.(sass|scss)$/,
      use: extractSass.extract({
        use: [{
          loader: 'to-string-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }],
        // use style-loader in development
        fallback: 'style-loader'
      })
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']), // Delete dist every build
    new HtmlWebpackPlugin({ // Creates an index.html with all srcs and links
      alwaysWriteToDisk: true,
      template: 'index.html'
    }),
    new HtmlWebpackHarddiskPlugin(), // Saves the in-memory bundle to disk
    extractSass
  ],
  devtool: 'source-map'
}
