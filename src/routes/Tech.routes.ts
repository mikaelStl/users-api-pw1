import { Router, Request, Response } from 'express';
import { getUserByUsername } from '../middlewares/User.middleware';
import TechHandler from '../controller/Technology.controller';
import getTechByID from '../middlewares/Tech.middleware';

const techRouter = Router();

//CREATE
techRouter.post('/', getUserByUsername, (req: Request, res: Response) => {
  TechHandler.create(req.body, req.user).then( resp => { res.status(resp.status).send(resp.message) });
})

//READ
techRouter.get('/', getUserByUsername, (req: Request, res: Response) => {
  TechHandler.list(req.user).then( resp => { res.status(resp.status).send(resp.message) });
})

//UPDATE
techRouter.put('/:id',getUserByUsername, getTechByID, (req: Request, res: Response) => {
  TechHandler.update(req.tech, req.user, req.body).then( resp => { res.status(resp.status).send(resp.message) });
});

techRouter.patch('/:id/studied',getUserByUsername, getTechByID, (req: Request, res: Response) => {
  TechHandler.done(req.tech, req.user).then( resp => { res.status(resp.status).send(resp.message) });
});

//DELETE
techRouter.delete('/:id',getUserByUsername, (req: Request, res: Response) => {
  TechHandler.delete(req.params, req.user).then( resp => { res.status(resp.status).send(resp.message) });
});

export default techRouter;