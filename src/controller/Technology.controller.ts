/// <reference path="../typings/custom.d.ts" />

import { Request, Response, NextFunction } from 'express';
import User from '../model/User';
import Technology from '../model/Technology';

const erroTechNotExists = {
  error: 'TECHNOLOGY NOT EXISTS'
}

function getTechByID(id: string, user: User) {  
  const tech = user.getTechs().find( tech => id === tech.getID());

  if (tech) {
    return tech;
  } else {
    return false;
  }
}

//CONTROLLERS
function listTech(req: Request, res: Response){
  res.status(200).send(req.user.technologies);
}

function addTech(req: Request, res: Response) {
  const tech = new Technology(req.body.title, req.body.deadline);

  req.user.addTech(tech);

  res.status(201).send('CREATED');
}

function updateTitleDeadline(req: Request, res: Response) {   
  const { id } = req.params;
  const { title, deadline } = req.body;

  const tech = getTechByID(id, req.user);

  if (tech) {
    tech.update(title, deadline)
    res.status(200).send('SUCCESS!');
  } else {
    res.status(404).send(erroTechNotExists);
  }
}

function doneTech(req: Request, res: Response) {
  const { id } = req.params;

  const tech = getTechByID(id, req.user);

  if (tech) {
    tech.done();
    res.status(200).send('FINISHED!');
  } else {
    res.status(404).send(erroTechNotExists);
  }
}

function deleteTech(req: Request, res: Response) {
  const { id } = req.params;

  const user = req.user;
  const tech = getTechByID(id, req.user);

  if (tech) {
    user.getTechs().splice(user.getTechs().indexOf(tech, 0), 1)
    res.status(200).send('DELETED!');
  } else {
    res.status(404).send(erroTechNotExists);
  }
}

export { addTech, listTech, updateTitleDeadline, doneTech, deleteTech}