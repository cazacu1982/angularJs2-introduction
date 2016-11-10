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
var CrisisCenterComponent = (function () {
    function CrisisCenterComponent() {
        this.crises = [
            { id: 1, name: 'Dragon Burning Cities' },
            { id: 2, name: 'Sky Rains Great White Sharks' },
            { id: 3, name: 'Giant Asteroid Heading For Earth' },
            { id: 4, name: 'Procrastinators Meeting Delayed Again' }
        ];
    }
    CrisisCenterComponent.prototype.onSelect = function (index) {
    };
    CrisisCenterComponent = __decorate([
        core_1.Component({
            template: "\n        <div class=\"container\"  style=\"text-align: center; margin-top: 5%; max-width: 320px;\">\n            <h2>CRISIS CENTER</h2>\n             <ul class=\"items\" style=\" width: 100%; text-align: left; padding-left: 0\">\n            <li *ngFor=\"let crisis of crises; let i = index\"\n             (click)=\"onSelect(i)\" \n            style=\"list-style-type: none; cursor: pointer\">\n            <span class=\"badge\">{{crisis.id}}</span> <a [routerLink]=\"[crisis.id]\">{{ crisis.name }}</a>\n            </li>\n        </ul>\n         <button style=\"background-color: red; border-radius: 5px\"><a routerLink=\"/route\" routerLinkActive=\"active\">Back</a></button>\n        <p>Welcome to the Crisis Center</p>\n        \n        </div>\n      "
        }), 
        __metadata('design:paramtypes', [])
    ], CrisisCenterComponent);
    return CrisisCenterComponent;
}());
exports.CrisisCenterComponent = CrisisCenterComponent;
//# sourceMappingURL=crisis-center.component.js.map