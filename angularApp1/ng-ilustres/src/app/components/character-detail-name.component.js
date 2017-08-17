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
var common_1 = require("@angular/common");
var character_service_1 = require("../services/character.service");
require("rxjs/add/operator/switchMap");
var historicalCharacter_1 = require("../classes/historicalCharacter");
var data_1 = require("../classes/data");
var CharacterDetailNameComponent = (function () {
    function CharacterDetailNameComponent(characterService, route, location, dtoData) {
        this.characterService = characterService;
        this.route = route;
        this.location = location;
        this.dtoData = dtoData;
        //this.idCharacter = parseInt(this.dtoData.params.id);
    }
    CharacterDetailNameComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.dtoData.params.id);
        this.characterService.getHistoricalCharacter(this.dtoData.params.id)
            .then(function (character) {
            _this.character = character;
        });
        // this.route.params
        //     .switchMap((params: Params) => this.characterService.getHistoricalCharacter(+params['id']))
        //     .subscribe(character => { 
        //         this.character = character
        //     });
    };
    CharacterDetailNameComponent.prototype.goBack = function () {
        this.location.back();
    };
    return CharacterDetailNameComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", historicalCharacter_1.HistoricalCharacter)
], CharacterDetailNameComponent.prototype, "character", void 0);
CharacterDetailNameComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'character-detail',
        templateUrl: '../templates/character-detail.component.html',
        styleUrls: ['../styles/character-detail.component.css']
    }),
    __metadata("design:paramtypes", [character_service_1.CharacterService,
        router_1.ActivatedRoute,
        common_1.Location,
        data_1.dtoData])
], CharacterDetailNameComponent);
exports.CharacterDetailNameComponent = CharacterDetailNameComponent;
//# sourceMappingURL=character-detail-name.component.js.map