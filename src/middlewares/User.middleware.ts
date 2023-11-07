import { Request, Response, NextFunction } from 'express';
import { erroUserExists, erroUserNotExists } from './err/messages.err';
import { prisma } from '../database/prisma.client';
import { IUser } from '../interfaces/interfaces';

// //MIDDLEWARES
async function getUserByUsername(req: Request, res: Response, next: NextFunction) {
  const { username } = req.headers as { username: string };

  const user = await prisma.user.findUnique({
    where: {
      username
    }
  }) as IUser;

  if (user) {
    req.user = user;
    return next();
  } else {
    return res.status(404).json(erroUserNotExists);
  }
}

async function checkExistsUserAccount(req: Request, res: Response, next: NextFunction) {
  const { username } = req.body;
  
  const exists = await prisma.user.findUnique({
    where: {
      username
    }
  }) as IUser;

  if (exists) {
    return res.status(400).json(erroUserExists);
  } else {
    return next();
  }
}

export { getUserByUsername, checkExistsUserAccount }
