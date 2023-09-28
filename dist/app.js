"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = __importDefault(require("./model/User"));
const User_controller_1 = require("./model/User.controller");
const PORT = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
//CREATE
app.post('/users', (req, res) => {
    const user = new User_1.default(req.body.name, req.body.username);
    res.status(201).send((0, User_controller_1.addUser)(user));
});
//READ
app.get('/users', (req, res) => {
    res.status(200).send((0, User_controller_1.listUsers)());
});
app.listen(PORT, () => {
    console.log(`APP RUNNING IN PORT ${PORT}`);
});
