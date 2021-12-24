"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.lastName = firstName;
        this.lastName = lastName;
        this.fullName = "".concat(firstName, " ").concat(lastName);
    }
    return User;
}());
function greeter(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var user = new User('wang', 'yong');
greeter(user);
