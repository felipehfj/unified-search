import express from 'express';
import boom from 'express-boom';
import cors from 'cors';
import { errors } from 'celebrate';
import morgan from 'morgan';
import helmet from 'helmet'

import routes from './routes';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan("combined"));
}

app.use(express.json());
app.use(boom());
app.use(cors());
app.use(helmet());
app.use(routes);
app.use(errors());

export default app;
