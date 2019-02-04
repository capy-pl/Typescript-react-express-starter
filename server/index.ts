import dotenv from 'dotenv';
import http from 'http';

import app from './App';

// Inject environment variable from .env
dotenv.config();

// Use webpack-dev-middleware to watch on client files.
if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const devMiddleware = require('webpack-dev-middleware');
  const {
    clientConfig,
  } = require('../webpack.config.js');
  const compiler = webpack(clientConfig);
  app.use(devMiddleware(compiler, {
    logLevel: 'debug',
    publicPath: clientConfig.output.publicPath,
    stats: {
      colors: true,
    },
    writeToDisk: true,
  }));
  // Not working now. Need to also enable in client js.
  // const hotModuleMiddleware = require('webpack-hot-middleware');
  // app.use(hotModuleMiddleware(compiler));
}

const server = http.createServer(app);
server.listen(process.env.PORT, () => {
  console.log('Server is available on 127.0.0.1:3000 ');
});
