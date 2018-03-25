const { resolve } = require('path');
const webpack = require('webpack');

module.exports = () => ({
  context: resolve('app'),
  mode: 'development',
  entry: './index.jsx',
  output: {
    filename: 'bundle.js',
    path: resolve('dist'),
    publicPath: '/dist/',
    pathinfo: true,
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['env', 'react'],
            plugins: ['react-hot-loader/babel', 'transform-class-properties'],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
