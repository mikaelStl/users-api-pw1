"use strict";
/// <reference path="../typings/custom.d.ts" />
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserByUsername = exports.checkExistsUserAccount = exports.listTech = exports.addTech = exports.listUsers = exports.addUser = void 0;
const User_1 = __importDefault(require("../model/User"));
const Technology_1 = __importDefault(require("../model/Technology"));
const erroUserExists = {
    error: 'User exists'
};
const users = [];
//MIDDLEWARES
function findUserByUsername(req, res, next) {
    const { username } = req.headers;
    const user = users.find(user => username === user.getUsername());
    if (user) {
        req.user = user;
        return next();
    }
    else {
        return res.status(404).send('NOT FOUND');
    }
}
exports.findUserByUsername = findUserByUsername;
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
function listTech(req, res) {
    res.status(200).send(req.user.technologies);
}
exports.listTech = listTech;
function addTech(req, res) {
    const tech = new Technology_1.default(req.body.title, req.body.deadline);
    req.user.addTech(tech);
    res.status(201).send('CREATED');
}
exports.addTech = addTech;
