/// <reference path="./typings/custom.d.ts" />

import express, { NextFunction, Request, Response } from 'express';
import { addUser, listUsers,addTech , listTech, checkExistsUserAccount, getUserByUsername, updateTitleDeadline } from './controller/User.controller';
import Technology from './model/Technology';

const PORT = 3000;

const app = express();
app.use(express.json());

/* USERS */
//CREATE
app.post('/users', checkExistsUserAccount, addUser);

//READ
app.get('/users', listUsers);

/* TECHNOLOGIES */
//CREATE
app.post('/technologies', getUserByUsername, addTech);

//READ
app.get('/technologies', getUserByUsername, listTech);

//UPDATE
app.put('/technologies/:id', getUserByUsername, updateTitleDeadline);

app.listen(PORT, () => {
  console.log(`APP RUNNING IN PORT ${PORT}`);
});