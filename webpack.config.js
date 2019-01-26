const dotenv = require('dotenv');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

dotenv.config();

const baseConfig = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  resolve: {
    extensions: ['.ts', '.js', '.json', '.css', '.scss', '.tsx'],
  },
  devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: 'ts-loader',
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
    errors: false,
    warnings: true,
  },
};

const clientConfig = {
  entry: {
    client: './client/ts/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'client/'),
    filename: '[name].bundle.js',
  },
    externals: {
    jquery: 'jQuery',
    'materialize-css': 'M',
  },
};

const serverConfig = {
  target: 'node',
  entry: {
    server: './server/index.ts',
  },
  output: {
    path: path.resolve(__dirname, './dist', 'server/'),
    filename: '[name].bundle.js',
  },
  externals: [nodeExternals()]
};

module.exports = {
  clientConfig: Object.assign({}, baseConfig, clientConfig),
  serverConfig: Object.assign({}, baseConfig, serverConfig)
};
