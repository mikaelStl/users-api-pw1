"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class User {
    constructor(name, username) {
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.username = username;
    }
    addTech(tech) {
        this.technologies.push(tech);
    }
    toJSON() {
        return {
            id: this.id,
            name: this.name,
            username: this.username,
            technologies: this.technologies
        };
    }
    getUsername() {
        return this.username;
    }
}
exports.default = User;
