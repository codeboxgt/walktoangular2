"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var historical_characters_component_1 = require("./components/historical-characters.component");
var character_detail_component_1 = require("./components/character-detail.component");
var dashboard_component_1 = require("./components/dashboard.component");
var character_preview_component_1 = require("./components/character-preview.component");
var create_form_component_1 = require("./components/create-form.component");
var character_detail_name_component_1 = require("./components/character-detail-name.component");
var update_form_component_1 = require("./components/update-form.component");
var character_service_1 = require("./services/character.service");
var user_service_1 = require("./services/user.service");
var auth_service_1 = require("./services/auth.service");
var data_1 = require("./classes/data");
var app_routing_module_1 = require("./routes/app-routing.module");
var ng2_file_upload_1 = require("ng2-file-upload");
var ng_block_ui_1 = require("ng-block-ui");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            app_routing_module_1.AppRoutingModule,
            ng_block_ui_1.BlockUIModule,
            http_1.HttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            character_detail_component_1.CharacterDetailComponent,
            historical_characters_component_1.HistoricalCharactersComponent,
            dashboard_component_1.DashboardComponent,
            character_preview_component_1.CharacterPreviewComponent,
            create_form_component_1.CreateCharacterComponent,
            ng2_file_upload_1.FileSelectDirective,
            character_detail_name_component_1.CharacterDetailNameComponent,
            update_form_component_1.UpdateCharacterComponent
        ],
        providers: [
            character_service_1.CharacterService,
            user_service_1.UserService,
            auth_service_1.AuthService,
            data_1.dtoData
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map