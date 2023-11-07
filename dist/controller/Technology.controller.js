"use strict";
/// <reference path="../typings/express.d.ts" />
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
class TechHandler {
    static list(user) {
        return __awaiter(this, void 0, void 0, function* () {
            user;
            try {
                const techs = yield prisma_client_1.prisma.technology.findMany({
                    where: {
                        userId: user.id
                    }
                });
                return {
                    status: 200,
                    message: techs
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
    static create(infos, user) {
        return __awaiter(this, void 0, void 0, function* () {
            user;
            try {
                const tech = yield prisma_client_1.prisma.technology.create({
                    data: {
                        title: infos.title,
                        deadline: new Date(infos.deadline),
                        userId: user.id
                    }
                });
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
    static delete(data, user) {
        return __awaiter(this, void 0, void 0, function* () {
            user;
            const { id } = data;
            try {
                yield prisma_client_1.prisma.technology.delete({
                    where: {
                        id: id,
                        userId: user.id
                    }
                });
                return {
                    status: 200,
                    message: 'DELETED!'
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
    static update(tech, user, infos) {
        return __awaiter(this, void 0, void 0, function* () {
            tech;
            user;
            try {
                const t = yield prisma_client_1.prisma.technology.update({
                    where: {
                        id: tech.id,
                        userId: user.id
                    },
                    data: {
                        title: infos.title,
                        deadline: new Date(infos.deadline)
                    }
                });
                return {
                    status: 200,
                    message: "MODIFIED!"
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
    static done(tech, user) {
        return __awaiter(this, void 0, void 0, function* () {
            tech;
            user;
            try {
                yield prisma_client_1.prisma.technology.update({
                    where: {
                        id: tech.id,
                        userId: user.id
                    },
                    data: {
                        studied: true
                    }
                });
                return {
                    status: 200,
                    message: "DONE!"
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
exports.default = TechHandler;
