import Carro from "./Carro";

const carro1: Carro = new Carro('Chevrolet', 'Onix', 'HBH - 3458', 0, 220);

for (let i = 0; i <= carro1.velocidadeMaxima / 10; i++) {
    carro1.acelerar(10);
}

console.log(`O tempo necessário para frear é de ${carro1.frear()} segundos!`);
carro1.imprimirDados();