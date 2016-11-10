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
var HeroBirthdayComponent = (function () {
    function HeroBirthdayComponent() {
        this.birthday = new Date(1982, 1, 27);
        this.toggle = true;
    }
    Object.defineProperty(HeroBirthdayComponent.prototype, "format", {
        get: function () { return this.toggle ? 'shortDate' : 'fullDate'; },
        enumerable: true,
        configurable: true
    });
    HeroBirthdayComponent.prototype.toggleFormat = function () { this.toggle = !this.toggle; };
    HeroBirthdayComponent = __decorate([
        core_1.Component({
            selector: 'hero-birthday',
            template: " <div class=\"container\">\n                <h1>A pipe takes in data as input and transforms it to a desired output. </h1>\n                <p>The hero's birthday is {{ birthday | date:format | uppercase}}</p>\n                <button (click)=\"toggleFormat()\" style=\"background-color: #8a4182\">Toggle Format</button>\n                </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], HeroBirthdayComponent);
    return HeroBirthdayComponent;
}());
exports.HeroBirthdayComponent = HeroBirthdayComponent;
//# sourceMappingURL=hero-birthday.component.js.map