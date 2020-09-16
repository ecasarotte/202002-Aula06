"use strict";
exports.__esModule = true;
var Carro_1 = require("./Carro");
var carro1 = new Carro_1["default"]('Chevrolet', 'Onix', 'HBH - 3458', 0, 220);
for (var i = 0; i <= carro1.velocidadeMaxima / 10; i++) {
    carro1.acelerar(10);
}
console.log("O tempo necess\u00E1rio para frear \u00E9 de " + carro1.frear() + " segundos!");
carro1.imprimirDados();
