"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var historical_characters_component_1 = require("../components/historical-characters.component");
var character_detail_component_1 = require("../components/character-detail.component");
var dashboard_component_1 = require("../components/dashboard.component");
var create_form_component_1 = require("../components/create-form.component");
var character_detail_name_component_1 = require("../components/character-detail-name.component");
var update_form_component_1 = require("../components/update-form.component");
var routes = [
    {
        path: 'characters',
        component: historical_characters_component_1.HistoricalCharactersComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'character/detail/:name',
        component: character_detail_name_component_1.CharacterDetailNameComponent
    },
    {
        path: 'detail/:id',
        component: character_detail_component_1.CharacterDetailComponent
    },
    {
        path: 'create',
        component: create_form_component_1.CreateCharacterComponent
    },
    {
        path: 'update/:name/:id',
        component: update_form_component_1.UpdateCharacterComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: dashboard_component_1.DashboardComponent
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map