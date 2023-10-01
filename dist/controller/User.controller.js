"use strict";
/// <reference path="../typings/custom.d.ts" />
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = exports.checkExistsUserAccount = exports.listUsers = exports.findUser = exports.addUser = void 0;
const User_1 = __importDefault(require("../model/User"));
const erroUserExists = {
    error: 'User exists'
};
const users = [];
exports.users = users;
//MIDDLEWARES
function checkExistsUserAccount(req, res, next) {
    const { username } = req.body || req.headers || req.params;
    const exists = users.find(user => username === user.getUsername());
    if (exists) {
        req.user = exists;
        return res.status(400).send(erroUserExists);
    }
    else {
        // res.status(200).send(exists);
        return next();
    }
}
exports.checkExistsUserAccount = checkExistsUserAccount;
//CONTROLLERS
function addUser(req, res) {
    const user = new User_1.default(req.body.name, req.body.username);
    users.push(user);
    return res.status(201).send(user.toJSON());
}
exports.addUser = addUser;
function listUsers(req, res) {
    res.status(200).send(users);
}
exports.listUsers = listUsers;
function findUser(req, res) {
    res.status(200);
}
exports.findUser = findUser;
