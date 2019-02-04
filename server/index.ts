import dotenv from 'dotenv';
import http from 'http';

import app from './App';

// Inject environment variable from .env
dotenv.config();

const server = http.createServer(app);
server.listen(process.env.PORT, () => {
  console.log('Server is available on 127.0.0.1:3000 ');
});
