"use strict";
/// <reference path="../typings/custom.d.ts" />
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_client_1 = require("../database/prisma.client");
const erroUserExists = {
    error: 'USER EXISTS'
};
const erroUserNotExists = {
    error: 'USER NOT EXISTS'
};
const erroTechNotExists = {
    error: 'TECHNOLOGY NOT EXISTS'
};
class UserHandle {
    static create(infos) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield prisma_client_1.prisma.user.create({
                    data: {
                        name: infos.name,
                        username: infos.username
                    }
                });
                console.log(user);
                return {
                    status: 201,
                    message: "CREATED!"
                };
            }
            catch (error) {
                return {
                    status: 400,
                    message: error
                };
            }
        });
    }
    static list() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield prisma_client_1.prisma.user.findMany();
                console.log(users);
                return {
                    status: 200,
                    message: users
                };
            }
            catch (error) {
                return {
                    status: 400,
                    message: error
                };
            }
        });
    }
    static delete(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { key } = data;
            try {
                const deleted = yield prisma_client_1.prisma.user.delete({
                    where: {
                        username: key
                    }
                });
                return {
                    status: 200,
                    message: "DELETED"
                };
            }
            catch (error) {
                return {
                    status: 400,
                    message: error
                };
            }
        });
    }
}
exports.default = UserHandle;
// function addUser(req: Request, res: Response) {
//   const user = new User(req.body.name, req.body.username);
//   users.push(user);
//   return res.status(201).send(user.toJSON());
// }
// //MIDDLEWARES
// function getUserByUsername(req: Request, res: Response, next: NextFunction) {
//   const { username } = req.headers;
//   const user = users.find(user => username === user.getUsername());
//   if (user) {
//     req.user = user;
//     return next();
//   } else {
//     return res.status(404).send(erroUserNotExists);
//   }
// }
// function checkExistsUserAccount(req: Request, res: Response, next: NextFunction) {
//   const { username } = req.body;
//   const exists = users.find(user => username === user.getUsername());
//   if (exists) {
//     return res.status(400).send(erroUserExists);
//   } else {
//     return next();
//   }
// }
// function getTechByID(id: string, user: User) {  
//   const tech = user.getTechs().find( tech => id === tech.getID());
//   if (tech) {
//     return tech;
//   } else {
//     return false;
//   }
// }
// //CONTROLLERS
// function addUser(req: Request, res: Response) {
//   const user = new User(req.body.name, req.body.username);
//   users.push(user);
//   return res.status(201).send(user.toJSON());
// }
// function listUsers(req: Request, res: Response): any {
//   res.status(200).send(users);
// }
