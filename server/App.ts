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

// Configure template engine.
nunjucks.configure('views', {
  autoescape: true,
  express: app,
});

app.get('/', (req, res) => {
  res.render('index.html');
});

export default app;
