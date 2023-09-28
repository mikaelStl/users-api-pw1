"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listUsers = exports.findUser = exports.addUser = void 0;
const users = [];
function addUser(user) {
    if (!findUser(user.getUsername())) {
        users.push(user);
        return user.toJSON();
    }
}
exports.addUser = addUser;
function findUser(username) {
    users.map((user) => {
        if (user.getUsername() === username) {
            return user;
        }
        else {
            return false;
        }
    });
}
exports.findUser = findUser;
function listUsers() {
    const usersJSON = users.map((user) => {
        user.toJSON();
    });
    return JSON.stringify(usersJSON);
}
exports.listUsers = listUsers;
