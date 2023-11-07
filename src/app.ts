/// <reference path="./typings/custom.d.ts" />

import express from 'express';
import userRouter from './routes/User.routes';

const PORT = 3000;

const app = express();
app.use(express.json());
app.use('/users', userRouter);

app.listen(PORT, () => {
  console.log(`APP RUNNING IN PORT ${PORT}`);
});