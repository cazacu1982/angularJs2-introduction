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
require('../../public/css/styles.css');
var RoutesAppComponent = (function () {
    function RoutesAppComponent() {
    }
    RoutesAppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<nav>\n                    <a [routerLink]=\"['app']\" routerLinkActive=\"active\">Home</a>\n                    <a routerLink=\"/form/form\" routerLinkActive=\"active\">Form</a>\n                    <a routerLink=\"/animation/animation\" routerLinkActive=\"active\">Animation</a>\n                    <a routerLink=\"/attribute-directives/background\" routerLinkActive=\"active\">Attribute Directives</a>\n                    <a routerLink=\"/pipes/hero-birthday\" routerLinkActive=\"active\">Pipes</a>\n                    <a routerLink=\"/routing/route\" routerLinkActive=\"active\">Routing</a>\n                    \n               </nav>\n               <router-outlet></router-outlet>",
            styles: ['nav {text-align: center; margin-top: 5%; font-size: 2vw;}']
        }), 
        __metadata('design:paramtypes', [])
    ], RoutesAppComponent);
    return RoutesAppComponent;
}());
exports.RoutesAppComponent = RoutesAppComponent;
//# sourceMappingURL=RoutesApp.component.js.map