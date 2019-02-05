import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import nunjucks from 'nunjucks';

const app = express();

app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('templates'));
app.use('/static', express.static('dist/client/'));
app.use('/static', express.static('static', {
  immutable: true,
  maxAge: '0.5y',
}));

// Configure template engine.
nunjucks.configure('views', {
  autoescape: true,
  express: app,
});

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
  }));
  // Not working now. Need to also enable in client js.
  // const hotModuleMiddleware = require('webpack-hot-middleware');
  // app.use(hotModuleMiddleware(compiler));
}

app.get('/', (req, res) => {
  res.render('index.html');
});

export default app;
