"use strict";
exports.__esModule = true;
var Lampada_1 = require("./Lampada");
var lampada1 = new Lampada_1.Lampada(true);
console.log('lampada 1: ' + lampada1.observar());
var lampada2 = new Lampada_1.Lampada(false);
console.log('lampada 2: ' + lampada2.observar());
lampada1.desligar();
console.log('lampada 1: ' + lampada1.observar());
lampada2.ligar();
console.log('lampada 2: ' + lampada2.observar());
