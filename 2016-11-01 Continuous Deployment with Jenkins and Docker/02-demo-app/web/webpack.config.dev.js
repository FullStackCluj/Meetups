var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    path.join(__dirname, 'src/main.js')
  ],
  resolve: {
    root: path.resolve('src'),
    extensions: ['', '.js', '.jsx', '.json']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  watchOptions: {
    poll: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new TransferWebpackPlugin([
      // {from: 'node_modules/bootstrap/dist', to: 'assets/bootstrap'},
      // {from: 'node_modules/jquery/dist', to: 'assets/jquery'},
      // {from: 'node_modules/font-awesome', to: 'assets/font-awesome'},
      {from: 'src/assets/fonts', to: 'assets/fonts'},
      // {from: 'src/assets/icons', to: 'assets/icons'},
      {from: 'src/assets/img', to: 'assets/img'},
      {from: 'src/assets', to: ''},
    ]),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      '__DEV__': JSON.stringify(process.env.NODE_ENV)
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
      loaders: [
        'style',
        'css?modules&&importLoaders=1&localIdentName=[name]---[local]---[hash:base64:5]',
        'postcss'
      ]
    }, {
      test: /\.scss$/,
      loaders: [
        'style',
        'css?modules&&importLoaders=1&localIdentName=[name]---[local]---[hash:base64:5]',
        'postcss',
        'sass?sourceMap'
      ]
    }, {
      test: /\.svg$/,
      loader: "url-loader?limit=1&mimetype=image/svg+xml"
    }, {
      test: /\.(png|jpg|gif|pdf)$/,
      loader: 'url?limit=1'
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'url?limit=1'
    },
      {
        test: /\.html$/,
        loader: 'html-loader?attrs[]=video:src'
      },
      {
        test: /\.mp4$/,
        loader: 'url?limit=1&mimetype=video/mp4'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port: 3000
  },
  postcss: [
    require('autoprefixer'),
    require('postcss-modules-values')
  ]
};
