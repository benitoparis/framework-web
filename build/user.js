"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    // Méthode pour renvoyer la valeur d'une propriété
    User.prototype.get = function (property) {
        if (property === 'name') {
            return this.name;
        }
        else if (property === 'age') {
            return this.age;
        }
    };
    return User;
}());
exports.User = User;
