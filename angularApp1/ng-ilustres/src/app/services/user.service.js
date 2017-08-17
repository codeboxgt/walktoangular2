"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
var auth_service_1 = require("./auth.service");
var user_1 = require("../classes/user");
var ng2_file_upload_1 = require("ng2-file-upload");
var UserService = (function () {
    function UserService(http, router, auth) {
        this.http = http;
        this.router = router;
        this.auth = auth;
        this.charactersUrl = 'http://localhost:3008';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    UserService.prototype.logIn = function (user) {
        var url = this.charactersUrl + "/auth/login";
        return this.http.post(url, user, { headers: this.headers })
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    UserService.prototype.logOut = function () {
        localStorage.removeItem('ng-token');
        this.router.navigate(['dashboard']);
    };
    UserService.prototype.createUser = function (user) {
        var url = this.charactersUrl + "/user/create";
        return this.http.post(url, user, { headers: this.headers })
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    UserService.prototype.getUserById = function (id) {
        var url = this.charactersUrl + "/user/get/" + id;
        return this.http.get(url, { headers: this.auth.setAuthHeaders() })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    UserService.prototype.uploadAvatar = function (file) {
        var res;
        this.uploader = new ng2_file_upload_1.FileUploader({
            url: this.charactersUrl + "/user/upload/avatar",
            authTokenHeader: this.auth.getToken()
        });
        this.uploader.queue[0]._file = file;
        file.upload = this.uploader.queue[0].upload();
        file.upload
            .toPromise()
            .then(function (response) {
            res = response.json();
        })
            .catch(this.handleError);
        return res;
    };
    UserService.prototype.updateAvatar = function (fileUrl) {
        var user = new user_1.User();
        user.avatar = fileUrl;
        var url = this.charactersUrl + "/user/update/avatar/" + this.auth.getUserLogged();
        return this.http.put(url, user, { headers: this.auth.setAuthHeaders() })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        console.error("Ha ocurrido un error: " + error + ".");
        return Promise.reject(error.message || error);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router, auth_service_1.AuthService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map