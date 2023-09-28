import express, { Request, Response } from 'express';
import User from './model/User';
import { addUser, findUser, listUsers } from './model/User.controller';

const PORT = 3000;

const app = express();
app.use(express.json());

//CREATE
app.post('/users', (req: Request, res: Response) => {
    const user = new User(req.body.name, req.body.username);

    res.status(201).send(addUser(user));
});

//READ
app.get('/users', (req: Request, res: Response) => {
    res.status(200).send(listUsers());
});

app.listen(PORT, () => {
    console.log(`APP RUNNING IN PORT ${PORT}`);
});