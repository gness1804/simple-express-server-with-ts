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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
        this.color = 'green';
        this.isVertebrate = true;
    }
    Object.defineProperty(Animal.prototype, "vertebrate", {
        get: function () {
            return this.isVertebrate;
        },
        enumerable: false,
        configurable: true
    });
    Animal.prototype.vocalize = function () {
        console.log("The " + this.name + " made a sound.");
        throw new Error('The vocalize method failed!');
    };
    __decorate([
        logError('The animal died!'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Animal.prototype, "vocalize", null);
    return Animal;
}());
function logError(errorMessage) {
    return function (target, key, desc) {
        var method = desc.value;
        desc.value = function () {
            if (!(method instanceof Function))
                throw new Error('Error: the method must be a function.');
            try {
                method();
            }
            catch (err) {
                console.error("Damn, there was an error! " + errorMessage);
            }
        };
    };
}
var puck = new Animal('Puck');
puck.vocalize();
