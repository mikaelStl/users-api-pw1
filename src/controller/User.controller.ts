/// <reference path="../typings/custom.d.ts" />

import { Request, Response, NextFunction } from 'express';
import { prisma } from '../database/prisma.client'

import { IResp, IUser } from '../interfaces/interfaces'

const erroUserExists = {
  error: 'USER EXISTS'
}
const erroUserNotExists = {
  error: 'USER NOT EXISTS'
}
const erroTechNotExists = {
  error: 'TECHNOLOGY NOT EXISTS'
}

class UserHandle {
  static async create(infos: any) {
    try {
      const user = await prisma.user.create({
        data: {
          name: infos.name,
          username: infos.username
        }
      });
      console.log(user);
      
      return {
        status: 201,
        message: "CREATED!"
      } as IResp;
    } catch (error) {
      return {
        status: 400,
        message: error
      } as IResp;
    }
  }

  static async list() {
    try {
      const users = await prisma.user.findMany();
      console.log(users);
      

      return {
        status: 200,
        message: users
      } as IResp
    } catch (error) {
      return {
        status: 400,
        message: error
      } as IResp;
    }
  }

  static async delete(data: any) {
    const { key } = data;
    try {
      const deleted = await prisma.user.delete({
        where: {
          username: key
        }
      });
      
      return {
        status: 200,
        message: "DELETED"
      } as IResp
    } catch (error) {
      return {
        status: 400,
        message: error
      } as IResp;
    }
  }
}

export default UserHandle;






























// function addUser(req: Request, res: Response) {
//   const user = new User(req.body.name, req.body.username);

//   users.push(user);
//   return res.status(201).send(user.toJSON());
// }

// //MIDDLEWARES
// function getUserByUsername(req: Request, res: Response, next: NextFunction) {
//   const { username } = req.headers;

//   const user = users.find(user => username === user.getUsername());

//   if (user) {
//     req.user = user;
//     return next();
//   } else {
//     return res.status(404).send(erroUserNotExists);
//   }
// }

// function checkExistsUserAccount(req: Request, res: Response, next: NextFunction) {
//   const { username } = req.body;

//   const exists = users.find(user => username === user.getUsername());
//   if (exists) {
//     return res.status(400).send(erroUserExists);
//   } else {
//     return next();
//   }
// }

// function getTechByID(id: string, user: User) {  
//   const tech = user.getTechs().find( tech => id === tech.getID());

//   if (tech) {
//     return tech;
//   } else {
//     return false;
//   }
// }

// //CONTROLLERS
// function addUser(req: Request, res: Response) {
//   const user = new User(req.body.name, req.body.username);

//   users.push(user);
//   return res.status(201).send(user.toJSON());
// }

// function listUsers(req: Request, res: Response): any {
//   res.status(200).send(users);
// }