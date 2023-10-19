/// <reference path="./typings/custom.d.ts" />

import express from 'express';
import { addUser, listUsers, checkExistsUserAccount, getUserByUsername } from './controller/User.controller';
import { addTech, listTech, updateTitleDeadline, doneTech, deleteTech } from './controller/Technology.controller';

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

app.patch('/technologies/:id/studied', getUserByUsername, doneTech);

//DELETE
app.delete('/technologies/:id', getUserByUsername, deleteTech);

app.listen(PORT, () => {
  console.log(`APP RUNNING IN PORT ${PORT}`);
});