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
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
var CharacterService = (function () {
    function CharacterService(http) {
        this.http = http;
        this.charactersUrl = 'http://localhost:3008';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    // getHistoricalCharacters(): Promise<HistoricalCharacter[]> {
    //     let url = `${this.charactersUrl}/characters`;
    //     return this.http.get(url)
    //                .toPromise()
    //                .then(response=>response.json().data as HistoricalCharacter[])
    //                .catch(this.handleError);
    // }
    CharacterService.prototype.getHistoricalCharacters = function () {
        var url = this.charactersUrl + "/characters";
        return this.http.get(url)
            .map(function (response) {
            return response.json().data;
        });
    };
    CharacterService.prototype.handleError = function (error) {
        console.error("Ha ocurrido un error:");
        console.log(error);
        return Promise.reject(error.message || error);
    };
    CharacterService.prototype.getHistoricalCharacter = function (id) {
        var url = this.charactersUrl + "/character/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    CharacterService.prototype.postHistoricalCharacter = function (hc) {
        var url = this.charactersUrl + "/character";
        return this.http.post(url, hc, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    CharacterService.prototype.putHistoricalCharacter = function (hc) {
        var url = this.charactersUrl + "/update/character/" + hc.id;
        return this.http.put(url, hc, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    CharacterService.prototype.uploadAvatar = function (fileToUpload) {
        console.log(fileToUpload);
        var result;
        var formData = new FormData();
        var files = fileToUpload;
        formData.append("file[]", files[0], files[0]['name']);
        var url = this.charactersUrl + "/character/upload/avatar";
        return this.http.post(url, formData)
            .map(function (response) {
            return response.json();
        });
    };
    return CharacterService;
}());
CharacterService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CharacterService);
exports.CharacterService = CharacterService;
//# sourceMappingURL=character.service.js.map