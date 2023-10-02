/// <reference path="../typings/custom.d.ts" />

import { Request, Response, NextFunction } from 'express';
import User from '../model/User';
import Technology from '../model/Technology';

const erroUserExists = {
  error: 'User exists'
}

const users: User[] = [];

//MIDDLEWARES
function findUserByUsername(req: Request, res: Response, next: NextFunction) {
  const { username } = req.headers;

  const user = users.find(user => username === user.getUsername());

  if (user) {
    req.user = user;
    return next();
  } else {
    return res.status(404).send('NOT FOUND');
  }
}

function checkExistsUserAccount(req: Request, res: Response, next: NextFunction) {
  const { username } = req.body;
  
  const exists = users.find(user => username === user.getUsername());
  if (exists) {
    return res.status(400).send(erroUserExists);
  } else {
    return next();
  }
}

//CONTROLLERS
function addUser(req: Request, res: Response) {
  const user = new User(req.body.name, req.body.username);

  users.push(user);
  return res.status(201).send(user.toJSON());
}

function listUsers(req: Request, res: Response): any {
  res.status(200).send(users);
}

function listTech(req: Request, res: Response){
  res.status(200).send(req.user.technologies);
}

function addTech(req: Request, res: Response) {
  const tech = new Technology(req.body.title, req.body.deadline);

  req.user.addTech(tech);

  res.status(201).send('CREATED');
}

export { addUser, listUsers, addTech, listTech, checkExistsUserAccount, findUserByUsername }