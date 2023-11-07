"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_controller_1 = __importDefault(require("../controller/User.controller"));
const userRouter = (0, express_1.Router)();
/* USERS */
//CREATE
userRouter.post('/', (req, res) => {
    User_controller_1.default.create(req.body).then(resp => { res.status(resp.status).send(resp.message); });
});
//READ
userRouter.get('/', (req, res) => {
    User_controller_1.default.list().then(resp => { res.status(resp.status).json(resp.message); });
});
// //DELETE
userRouter.delete('/', (req, res) => {
    User_controller_1.default.delete(req.body).then(resp => res.status(resp.status).send(resp.message));
});
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
exports.default = userRouter;
