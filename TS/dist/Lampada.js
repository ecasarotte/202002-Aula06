"use strict";
exports.__esModule = true;
exports.Lampada = void 0;
var Lampada = /** @class */ (function () {
    function Lampada(status) {
        this.status = status;
    }
    Lampada.prototype.ligar = function () { this.status = true; };
    ;
    Lampada.prototype.desligar = function () { this.status = false; };
    ;
    Lampada.prototype.observar = function () {
        var result = '';
        this.status ? result = 'Ligado' : result = 'Desligado';
        return result;
    };
    return Lampada;
}());
exports.Lampada = Lampada;
