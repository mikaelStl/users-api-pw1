import { Router, Request, Response } from 'express';
import UserHandler from '../controller/User.controller';
import { checkExistsUserAccount } from '../middlewares/User.middleware';

const userRouter = Router();

/* USERS */
//CREATE
userRouter.post('/', checkExistsUserAccount, (req: Request, res: Response) => {
  UserHandler.create(req.body).then( resp => { res.status(resp.status).send(resp.message) });
});

//READ
userRouter.get('/', (req: Request, res: Response) => {
  UserHandler.list().then( resp => {res.status(resp.status).json(resp.message)});
});

// //DELETE
userRouter.delete('/', (req: Request, res: Response) => {
  UserHandler.delete(req.body).then( resp => res.status(resp.status).send(resp.message));
})

export default userRouter;