import express, { Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { stackRouter } from './modules/stack';
import { clerkWebhookHandler } from './modules/auth';

const app = express();

// loading middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// route splitting
app.use('/api/v1/stacks', stackRouter);

app.use('/webhook/handler/clerk', clerkWebhookHandler);

// welcome route on /
app.get('/', (_, res: Response) => {
  res.json({ msg: 'Welcome' });
});

export default app;
