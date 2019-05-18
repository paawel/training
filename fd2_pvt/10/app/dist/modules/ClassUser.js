"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.greet = function () {
        return "Hello, " + this.name;
    };
    return User;
}());
exports.User = User;
