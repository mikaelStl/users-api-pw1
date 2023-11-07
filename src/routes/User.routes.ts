import { Router, Request, Response } from 'express';
import UserHandle from '../controller/User.controller';

const userRouter = Router();

/* USERS */
//CREATE
userRouter.post('/', (req: Request, res: Response) => {
  UserHandle.create(req.body).then( resp => { res.status(resp.status).send(resp.message) });
});

//READ
userRouter.get('/', (req: Request, res: Response) => {
  UserHandle.list().then( resp => {res.status(resp.status).json(resp.message)});
});


// //DELETE
userRouter.delete('/', (req: Request, res: Response) => {
  UserHandle.delete(req.body).then( resp => res.status(resp.status).send(resp.message));
})

/* TECHNOLOGIES */
// //CREATE
// app.post('/technologies', getUserByUsername, addTech);

// //READ
// app.get('/technologies', getUserByUsername, listTech);

// //UPDATE
// app.put('/technologies/:id', getUserByUsername, updateTitleDeadline);

// app.patch('/technologies/:id/studied', getUserByUsername, doneTech);

// //DELETE
// app.delete('/technologies/:id', getUserByUsername, deleteTech);

export default userRouter;