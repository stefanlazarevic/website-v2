const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('../webpack.config.js');
const webpack = require('webpack');
const webpackNodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ROOT_PATH = path.resolve(__dirname, '../../');

const config = {
  name: 'server.prod',
  target: 'node',
  entry: `${ROOT_PATH}/src/server/server.js`,
  output: {
    filename: 'server.bundle.js',
    path: `${ROOT_PATH}/build`,
    publicPath: '/',
  },
  externals: [webpackNodeExternals()],
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __isBrowser__: 'false',
    }),
    new CleanWebpackPlugin('build/server.*', {
      root: ROOT_PATH,
      verbose: false,
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
};

module.exports = merge(baseConfig, config);
