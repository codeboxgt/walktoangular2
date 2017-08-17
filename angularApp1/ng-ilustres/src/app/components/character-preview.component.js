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
var historicalCharacter_1 = require("../classes/historicalCharacter");
var CharacterPreviewComponent = (function () {
    function CharacterPreviewComponent(router) {
        this.router = router;
    }
    CharacterPreviewComponent.prototype.onSelect = function (character) {
        this.character = character;
    };
    CharacterPreviewComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.character.id]);
    };
    return CharacterPreviewComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", historicalCharacter_1.HistoricalCharacter)
], CharacterPreviewComponent.prototype, "character", void 0);
CharacterPreviewComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'character-preview',
        templateUrl: '../templates/character-preview.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router])
], CharacterPreviewComponent);
exports.CharacterPreviewComponent = CharacterPreviewComponent;
//# sourceMappingURL=character-preview.component.js.map