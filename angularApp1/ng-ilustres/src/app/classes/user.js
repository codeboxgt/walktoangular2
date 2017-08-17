"use strict";
var User = (function () {
    function User(id, username, userLogin, avatar, password) {
        this.id = id;
        this.userLogin = userLogin;
        this.username = username;
        this.avatar = avatar;
        this.password = password;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map