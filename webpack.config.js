const webpack = require('webpack')
const path = require('path')

/* Plugins */
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development'
})

const ASSET_PATH = process.env.ASSET_PATH || '/'

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './bootstrap/bundler-entry-point.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    publicPath: ASSET_PATH
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
      test: /\.scss$/,
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
    new CopyWebpackPlugin([ { from: 'assets', to: 'assets' } ]),
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
    }),
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static'
    // }),
    extractSass
  ],
  externals: {
    angular: 'angular'
  },
  devtool: 'cheap-eval-source-map'
}

