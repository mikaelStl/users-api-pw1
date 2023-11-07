import { Request } from 'express';
import { ITech, IUser } from '../interfaces/interfaces';

declare module 'express' {
  interface Request {
    user?: IUser;
    tech?: ITech;
  }
}