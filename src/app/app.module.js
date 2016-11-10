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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var RoutesApp_component_1 = require('./RoutesApp.component');
var app_component_1 = require('./app.component');
var form_component_1 = require('./form/form.component');
var animation_component_1 = require('./animation/animation.component');
var background_directive_1 = require('./attribute-directives/background.directive');
var background_component_1 = require('./attribute-directives/background.component');
var hero_birthday_component_1 = require('./pipes/hero-birthday.component');
var route_component_1 = require('./routing/route.component');
var route_module_1 = require('./routing/route.module');
var crisis_center_module_1 = require('./routing/crisis-center/crisis-center.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                route_module_1.RouteModule,
                crisis_center_module_1.CrisisCenterModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    { path: '', redirectTo: 'app', pathMatch: 'full' },
                    { path: 'app', component: app_component_1.AppComponent },
                    {
                        path: 'form/form',
                        component: form_component_1.FormComponent
                    },
                    {
                        path: 'animation/animation',
                        component: animation_component_1.AnimationComponent
                    },
                    {
                        path: 'attribute-directives/background',
                        component: background_component_1.BackgroundComponent
                    },
                    {
                        path: 'pipes/hero-birthday',
                        component: hero_birthday_component_1.HeroBirthdayComponent
                    },
                    {
                        path: 'routing/route',
                        component: route_component_1.RouteComponent
                    }
                ])
            ],
            providers: [
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
            ],
            declarations: [
                app_component_1.AppComponent,
                form_component_1.FormComponent,
                animation_component_1.AnimationComponent,
                background_directive_1.BackgroundDirective,
                background_component_1.BackgroundComponent,
                hero_birthday_component_1.HeroBirthdayComponent,
                RoutesApp_component_1.RoutesAppComponent
            ],
            bootstrap: [RoutesApp_component_1.RoutesAppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map