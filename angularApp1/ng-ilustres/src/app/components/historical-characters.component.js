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
var character_service_1 = require("../services/character.service");
var HistoricalCharactersComponent = (function () {
    function HistoricalCharactersComponent(characterService) {
        this.characterService = characterService;
    }
    HistoricalCharactersComponent.prototype.getHistoricalCharacters = function () {
        var _this = this;
        //Promises
        /*this.characterService.getHistoricalCharacters()
            .then(characters => this.characters = characters);*/
        //Observables
        this.characterService.getHistoricalCharacters()
            .subscribe(function (data) { return _this.characters = data; });
    };
    HistoricalCharactersComponent.prototype.onSelect = function (character) {
        this.selectedCharacter = character;
    };
    HistoricalCharactersComponent.prototype.ngOnInit = function () {
        this.getHistoricalCharacters();
    };
    return HistoricalCharactersComponent;
}());
HistoricalCharactersComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-characters',
        templateUrl: '../templates/historical-characters.component.html',
        styleUrls: ['../styles/historical-characters.component.css']
    }),
    __metadata("design:paramtypes", [character_service_1.CharacterService])
], HistoricalCharactersComponent);
exports.HistoricalCharactersComponent = HistoricalCharactersComponent;
//# sourceMappingURL=historical-characters.component.js.map