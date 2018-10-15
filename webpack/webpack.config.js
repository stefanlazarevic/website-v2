// This is a common config file used as base for both server and client webpack configuration.
const path = require('path');
const ROOT_PATH = path.resolve(__dirname, '../');

module.exports = {
  stats: 'errors-only',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@app': `${ROOT_PATH}/src/app`,
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
