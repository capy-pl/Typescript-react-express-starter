const dotenv = require('dotenv');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

dotenv.config();

const baseConfig = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ],
  },
  stats: {
    builtAt: true,
    errors: true,
    warnings: true,
  },
};

const clientConfig = {
  entry: {
    client: './client/ts/index.tsx',
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.json', '.scss', '.css'],
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'client'),
    filename: '[name].bundle.js',
    publicPath: "/static/"
  },
  externals: {
    jquery: 'jQuery',
    'materialize-css': 'M',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};

const serverConfig = {
  target: 'node',
  entry: {
    server: './server/index.ts',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'server'),
    filename: '[name].bundle.js',
  },
  externals: [nodeExternals()]
};

module.exports = {
  clientConfig: Object.assign({}, baseConfig, clientConfig),
  serverConfig: Object.assign({}, baseConfig, serverConfig)
};
