import compression from 'compression';
import express from 'express';
import helmet from 'helmet';

const app = express();

app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('../templates'));
app.use('/static', express.static('dist/client/'));

app.get('/', (req, res) => {
  res.status(200).send('Hello World!!!~~~');
});

export default app;
