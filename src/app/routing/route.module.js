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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var route_component_1 = require('./route.component');
var crisis_center_component_1 = require('./crisis-center/crisis-center.component');
var heroes_list_component_1 = require('./heroes/heroes-list.component');
var hero_detail_component_1 = require('./heroes/hero-detail.component');
var RouteModule = (function () {
    function RouteModule() {
    }
    RouteModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild([
                    { path: 'heroes', component: heroes_list_component_1.HeroListComponent },
                    { path: 'hero/:id', component: hero_detail_component_1.HeroDetailComponent },
                    { path: 'route', component: route_component_1.RouteComponent },
                    {
                        path: 'crisis-center',
                        component: crisis_center_component_1.CrisisCenterComponent,
                    }
                ])
            ],
            declarations: [
                route_component_1.RouteComponent,
                heroes_list_component_1.HeroListComponent,
                hero_detail_component_1.HeroDetailComponent
            ],
            exports: [route_component_1.RouteComponent, heroes_list_component_1.HeroListComponent, hero_detail_component_1.HeroDetailComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], RouteModule);
    return RouteModule;
}());
exports.RouteModule = RouteModule;
//# sourceMappingURL=route.module.js.map