import express, { Request, Response } from 'express';
import User from './model/User';
import { addUser, /* findUser */ listUsers, checkExistsUserAccount } from './controller/User.controller';

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
    app.post('/users', checkExistsUserAccount, addUser);

    //READ
    app.get('/users', listUsers);

app.listen(PORT, () => {
    console.log(`APP RUNNING IN PORT ${PORT}`);
});