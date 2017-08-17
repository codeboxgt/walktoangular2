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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var character_service_1 = require("../services/character.service");
require("rxjs/add/operator/switchMap");
var historicalCharacter_1 = require("../classes/historicalCharacter");
var ng_block_ui_1 = require("ng-block-ui");
var UpdateCharacterComponent = (function () {
    function UpdateCharacterComponent(fb, characterService, route, location, router) {
        this.fb = fb;
        this.characterService = characterService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.fileToUpload = [];
        this.createForm();
    }
    UpdateCharacterComponent.prototype.createForm = function () {
        this.updateForm = this.fb.group({
            'name': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(2)])],
            'bio': [null],
            'avatar': [null]
        });
    };
    UpdateCharacterComponent.prototype.setValuesForm = function (character) {
        this.updateForm.patchValue({
            name: character.name,
            bio: character.bio,
            avatar: character.avatar == null ? 'http://unsplash.it/200/200' : character.avatar
        });
    };
    UpdateCharacterComponent.prototype.updateCharacter = function (formValue) {
        var _this = this;
        this.blockUI.start();
        this.character.avatar = formValue.avatar;
        this.character.name = formValue.name;
        this.character.bio = formValue.bio;
        this.characterService.putHistoricalCharacter(this.character)
            .then(function (response) {
            _this.blockUI.stop();
            setTimeout(function () {
                _this.router.navigate(['/characters']);
            }, 1500);
        });
        console.log(this.character);
    };
    UpdateCharacterComponent.prototype.onChange = function (fileInput) {
        var _this = this;
        console.log(fileInput);
        this.fileToUpload = fileInput.target.files;
        this.characterService.uploadAvatar(this.fileToUpload)
            .subscribe(function (response) {
            console.log(response.data.url);
            // this.character.avatar = response.data.url
            _this.updateForm.patchValue({
                avatar: response.data.url
            });
        });
    };
    UpdateCharacterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blockUI.start('Cargando Informacion...');
        this.route.params
            .switchMap(function (params) { return _this.characterService.getHistoricalCharacter(+params['id']); })
            .subscribe(function (character) {
            _this.character = character;
            _this.setValuesForm(character);
            _this.blockUI.stop();
        });
    };
    return UpdateCharacterComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", historicalCharacter_1.HistoricalCharacter)
], UpdateCharacterComponent.prototype, "character", void 0);
__decorate([
    ng_block_ui_1.BlockUI(),
    __metadata("design:type", Object)
], UpdateCharacterComponent.prototype, "blockUI", void 0);
UpdateCharacterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-reactive-forms',
        templateUrl: '../templates/update-form.component.html',
        styles: [
            ".ng-valid[required], .ng-valid.required  {\n            border-left: 5px solid #42A948; /* green */\n        }\n\n        .ng-invalid:not(form)  {\n            border-left: 5px solid #a94442; /* red */\n        }"
        ]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        character_service_1.CharacterService,
        router_1.ActivatedRoute,
        common_1.Location,
        router_1.Router])
], UpdateCharacterComponent);
exports.UpdateCharacterComponent = UpdateCharacterComponent;
//# sourceMappingURL=update-form.component.js.map