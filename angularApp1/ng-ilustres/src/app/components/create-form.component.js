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
var router_1 = require("@angular/router");
var character_service_1 = require("../services/character.service");
var historicalCharacter_1 = require("../classes/historicalCharacter");
var CreateCharacterComponent = (function () {
    function CreateCharacterComponent(service, router) {
        this.service = service;
        this.router = router;
        this.fileToUpload = [];
        this.newHC = new historicalCharacter_1.HistoricalCharacter();
    }
    CreateCharacterComponent.prototype.onSave = function () {
        var _this = this;
        this.service.postHistoricalCharacter(this.newHC)
            .then(function (response) {
            console.log(response);
            _this.router.navigate(['/characters']);
        });
    };
    CreateCharacterComponent.prototype.onChange = function (fileInput) {
        var _this = this;
        this.fileToUpload = fileInput.target.files;
        this.service.uploadAvatar(this.fileToUpload)
            .subscribe(function (response) {
            _this.newHC.avatar = response.data.url;
        });
    };
    return CreateCharacterComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", historicalCharacter_1.HistoricalCharacter)
], CreateCharacterComponent.prototype, "newHC", void 0);
CreateCharacterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: '../templates/create-form.component.html',
        styles: [
            ".ng-valid[required], .ng-valid.required  {\n            border-left: 5px solid #42A948; /* green */\n          }\n\n          .ng-invalid:not(form)  {\n            border-left: 5px solid #a94442; /* red */\n           }"
        ]
    }),
    __metadata("design:paramtypes", [character_service_1.CharacterService,
        router_1.Router])
], CreateCharacterComponent);
exports.CreateCharacterComponent = CreateCharacterComponent;
//# sourceMappingURL=create-form.component.js.map