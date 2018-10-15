const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ReactLoadablePlugin = require('react-loadable/webpack')
  .ReactLoadablePlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('../webpack.config.js');
const ROOT_PATH = path.resolve(__dirname, '../../');
const FILENAME = '[name].[chunkhash].js';

const config = {
  name: 'client.prod',
  target: 'web',
  entry: {
    main: `${ROOT_PATH}/src/client/Client.jsx`,
  },
  output: {
    filename: `js/${FILENAME}`,
    chunkFilename: FILENAME,
    path: `${ROOT_PATH}/build/public`,
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __isBrowser__: 'true',
    }),
    new CleanWebpackPlugin('build/public/*', {
      root: ROOT_PATH,
      verbose: true,
    }),
    new CopyWebpackPlugin([
      {
        from: `${ROOT_PATH}/src/app/assets/public`,
        to: `${ROOT_PATH}/build/public`,
        ignore: ['*.ejs'],
      },
    ]),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: `js/${FILENAME}`,
      minChunks: module =>
        module.context && module.context.indexOf('node_modules') !== -1,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime',
      filename: `js/${FILENAME}`,
      minChunks: Infinity,
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new ReactLoadablePlugin({ filename: 'build/public/react-loadable.json' }),
    new HtmlWebpackPlugin({
      template: `${ROOT_PATH}/src/app/assets/public/index.prod.ejs`,
      filename: '../index.html', // Since the output is build/public we need to step one directory out.
      inject: false,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes: true,
        removeEmptyAttributes: true,
        minifyJS: true,
        xhtml: true,
      },
      PUBLIC_PATH: '/',
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      extractComments: true,
      output: {
        comments: false,
      },
    }),
  ],
};

module.exports = merge(baseConfig, config);
