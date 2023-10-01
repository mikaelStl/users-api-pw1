import { Request, Response, NextFunction } from 'express';
import User from '../model/User';

const erroUserExists = {
    error: 'User exists'
}

const users: User[] = [];

//MIDDLEWARES
function checkExistsUserAccount (req: Request, res: Response, next: NextFunction) {
    const { username } = req.body || req.headers;    

    const exists = users.find( user => username === user.getUsername());
    if (exists) {
        return res.status(400).send(erroUserExists);
    } else {        
        // res.status(200).send(exists);
        return next();
    }
}

function getUserByUsername(req: Request, res: Response, next: NextFunction) {
    const { username } = req.body || req.headers;

}

function addUser(req: Request, res: Response) {
    const user = new User(req.body.name, req.body.username);

    users.push(user);
    return res.status(201).send(user.toJSON());
}

function listUsers(req: Request, res: Response): any {
    res.status(200).send(users);
}

export { addUser,/*  findUser, */ listUsers, checkExistsUserAccount, users }