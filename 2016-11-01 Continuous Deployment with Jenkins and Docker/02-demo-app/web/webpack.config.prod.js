var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');
var TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    path.join(__dirname, 'src/main.js')
  ],
  resolve: {
    root: path.resolve('src'),
    extensions: ['', '.js', '.jsx', '.json']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].min.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new TransferWebpackPlugin([
      // {from: 'node_modules/bootstrap/dist', to: 'assets/bootstrap'},
      // {from: 'node_modules/jquery/dist', to: 'assets/jquery'},
      // {from: 'node_modules/font-awesome', to: 'assets/font-awesome'},
      {from: 'src/assets/fonts', to: 'assets/fonts'},
      // {from: 'src/assets/icons', to: 'assets/icons'},
      {from: 'src/assets/img', to: 'assets/img'},
      {from: 'src/assets', to: ''},
    ]),
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('[name].min.css'),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      '__DEV__': JSON.stringify(false)
    })
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]---[local]---[hash:base64:5]!postcss')
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]---[local]---[hash:base64:5]!postcss!sass?sourceMap')
    }, {
      test: /\.svg$/,
      loader: "url-loader?limit=1&mimetype=image/svg+xml"
    }, {
      test: /\.(png|jpg|gif|pdf)$/,
      loader: 'url?limit=1'
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'url?limit=1'
    }, {
      test: /\.mp4$/,
      loader: 'url?limit=1&mimetype=video/mp4'
    }]
  },
  postcss: [
    require('autoprefixer'),
    require('postcss-modules-values')
  ]
};
