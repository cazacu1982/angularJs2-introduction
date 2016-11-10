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
var router_1 = require('@angular/router');
var HeroListComponent = (function () {
    function HeroListComponent(router) {
        this.router = router;
        this.heroes = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
    }
    HeroListComponent.prototype.onSelect = function (hero) {
        this.router.navigate(['/hero', hero.id]);
    };
    HeroListComponent = __decorate([
        core_1.Component({
            template: "\n    <div class=\"container\" style=\"text-align: center; margin-top: 5%; max-width: 320px;\">\n        <h2>HEROES</h2>\n        <ul class=\"items\" style=\" width: 100%; text-align: left; padding-left: 0\">\n            <li *ngFor=\"let hero of heroes\"\n             \n             (click)=\"onSelect(hero)\"\n             style=\"list-style-type: none; cursor: pointer\">\n             <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n            </li>\n        </ul>\n        <button style=\"background-color: red; border-radius: 5px\"><a routerLink=\"/route\" routerLinkActive=\"active\">Back</a></button>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], HeroListComponent);
    return HeroListComponent;
}());
exports.HeroListComponent = HeroListComponent;
//# sourceMappingURL=heroes-list.component.js.map