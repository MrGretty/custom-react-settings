const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FlowWebpackPlugin = require('flow-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{ test: /\.(js)$/, use: 'babel-loader' }, { test: /\.css$/, use: ['style-loader', 'css-loader'] }],
  },
  resolve: {
    modules: [path.resolve('./src'), path.resolve('./node_modules')],
  },
  mode: 'development',

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new FlowWebpackPlugin(),
  ],
};
