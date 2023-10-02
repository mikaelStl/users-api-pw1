"use strict";
/// <reference path="./typings/custom.d.ts" />
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_controller_1 = require("./controller/User.controller");
const PORT = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
/* USERS */
//CREATE
app.post('/users', User_controller_1.checkExistsUserAccount, User_controller_1.addUser);
//READ
app.get('/users', User_controller_1.listUsers);
/* TECHNOLOGIES */
//CREATE
app.post('/technologies', User_controller_1.findUserByUsername, User_controller_1.addTech);
//READ
app.get('/technologies', User_controller_1.findUserByUsername, User_controller_1.listTech);
app.listen(PORT, () => {
    console.log(`APP RUNNING IN PORT ${PORT}`);
});
