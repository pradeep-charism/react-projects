const commonPaths = require('./common-paths');
const webpack = require('webpack');
const port = process.env.PORT || 3000;
const config = {
  mode: 'development',
  entry: {
    app: `${commonPaths.appEntry}/index.js`
  },
  output: {
    // filename: '[name].[hash].js'
    filename: '[name].js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localsConvention: 'camelCase',
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true
  }
};
module.exports = config;