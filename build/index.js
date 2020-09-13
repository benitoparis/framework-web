"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./user");
var user = new user_1.User('bernard', 23);
console.log(user.get('name'));
console.log(user.get('age'));
