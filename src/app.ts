/// <reference path="./typings/custom.d.ts" />

import express, { NextFunction, Request, Response } from 'express';
import User from './model/User';
import { addUser, listUsers, checkExistsUserAccount, findUser } from './controller/User.controller';
import Technology from './model/Technology';

const PORT = 3000;

const app = express();
app.use(express.json());

/* USERS */
//CREATE
app.post('/users', checkExistsUserAccount, addUser);

//READ
app.get('/users', listUsers);

app.get('/users/:username', checkExistsUserAccount, findUser);

app.listen(PORT, () => {
  console.log(`APP RUNNING IN PORT ${PORT}`);
});