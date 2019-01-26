import dotenv from 'dotenv';
import http from 'http';
import { resolve } from 'path';

import app from './App';

// Inject environment variable from .env
dotenv.config();

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const middleware = require('webpack-dev-middleware');
  const { serverConfig } = require('../webpack.config.js');
  const compiler = webpack(serverConfig);
  app.use(middleware(compiler, {
    logLevel: 'debug',
    stats: {
      colors: true,
    },
    writeToDisk: true,
  }));
}

const server = http.createServer(app);
server.listen(process.env.PORT, () => {
  console.log('Server is available on 127.0.0.1:3000 ');
});
