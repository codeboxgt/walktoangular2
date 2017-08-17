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
var data_1 = require("../classes/data");
var DashboardComponent = (function () {
    function DashboardComponent(characterService, router, dtoData) {
        this.characterService = characterService;
        this.router = router;
        this.dtoData = dtoData;
    }
    DashboardComponent.prototype.replaceSpace = function (text) {
        return text.split(' ').join('-');
    };
    DashboardComponent.prototype.goToDetail = function (character) {
        this.dtoData.params = {
            "id": character.id
        };
        this.router.navigate(['character/detail/' + this.replaceSpace(character.name)]);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        //promises
        /*this.characterService.getHistoricalCharacters()
            .then(characters => this.characters = characters.slice(0,5));*/
        var _this = this;
        //Observables
        this.characterService.getHistoricalCharacters()
            .subscribe(function (data) {
            _this.characters = data.slice(0, 5);
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-dashboard',
        templateUrl: '../templates/dashboard.component.html',
        styleUrls: ['../styles/dashboard.component.css']
    }),
    __metadata("design:paramtypes", [character_service_1.CharacterService,
        router_1.Router,
        data_1.dtoData])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map