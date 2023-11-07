"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_controller_1 = __importDefault(require("../controller/User.controller"));
const User_middleware_1 = require("../middlewares/User.middleware");
const userRouter = (0, express_1.Router)();
/* USERS */
//CREATE
userRouter.post('/', User_middleware_1.checkExistsUserAccount, (req, res) => {
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
exports.default = userRouter;
