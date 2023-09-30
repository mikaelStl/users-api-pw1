"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Technology {
    constructor(name, deadline) {
        this.id = (0, uuid_1.v4)();
        this.title = name;
        this.done = false;
        this.deadline = new Date(deadline);
        this.created_at = new Date();
    }
}
exports.default = Technology;
