"use strict";
/// <reference path="../typings/custom.d.ts" />
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByUsername = exports.checkExistsUserAccount = exports.listUsers = exports.addUser = void 0;
const User_1 = __importDefault(require("../model/User"));
const erroUserExists = {
    error: 'USER EXISTS'
};
const erroUserNotExists = {
    error: 'USER NOT EXISTS'
};
const erroTechNotExists = {
    error: 'TECHNOLOGY NOT EXISTS'
};
const users = [];
//MIDDLEWARES
function getUserByUsername(req, res, next) {
    const { username } = req.headers;
    const user = users.find(user => username === user.getUsername());
    if (user) {
        req.user = user;
        return next();
    }
    else {
        return res.status(404).send(erroUserNotExists);
    }
}
exports.getUserByUsername = getUserByUsername;
function checkExistsUserAccount(req, res, next) {
    const { username } = req.body;
    const exists = users.find(user => username === user.getUsername());
    if (exists) {
        return res.status(400).send(erroUserExists);
    }
    else {
        return next();
    }
}
exports.checkExistsUserAccount = checkExistsUserAccount;
function getTechByID(id, user) {
    const tech = user.getTechs().find(tech => id === tech.getID());
    if (tech) {
        return tech;
    }
    else {
        return false;
    }
}
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
