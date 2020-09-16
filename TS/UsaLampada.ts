import { Lampada } from "./Lampada";

const lampada1: Lampada = new Lampada(true);
console.log('lampada 1: ' + lampada1.observar());

const lampada2: Lampada = new Lampada(false);
console.log('lampada 2: ' + lampada2.observar());

lampada1.desligar();
console.log('lampada 1: ' + lampada1.observar());

lampada2.ligar();
console.log('lampada 2: ' + lampada2.observar());