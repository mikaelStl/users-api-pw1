import { Request, Response, NextFunction } from 'express';
import { erroTechNotExists } from './err/messages.err';
import { prisma } from "../database/prisma.client";
import { ITech } from '../interfaces/interfaces';

async function getTechByID(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;

  const tech = await prisma.technology.findUnique({
    where: {
      id: id
    }
  }) as ITech;
  
  if (tech) {
    req.tech = tech;
    return next();
  } else {
    return res.status(404).json(erroTechNotExists);
  }
}

export default getTechByID;