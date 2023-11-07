/// <reference path="./typings/express.d.ts" />

import express from 'express';
import userRouter from './routes/User.routes';
import techRouter from './routes/Tech.routes';

const PORT = 3000;

const app = express();
app.use(express.json());

//ROUTES
app.use('/users', userRouter);
app.use('/technologies', techRouter)

app.listen(PORT, () => {
  console.log(`APP RUNNING IN PORT ${PORT}`);
});