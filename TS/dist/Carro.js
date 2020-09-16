"use strict";
exports.__esModule = true;
var Carro = /** @class */ (function () {
    //#endregion
    //#region Construtor
    function Carro(marca, modelo, placa, velocidade, velocidadeMaxima) {
        this.marca = marca;
        this.modelo = modelo;
        this.placa = placa;
        this.velocidade = velocidade;
        this.velocidadeMaxima = velocidadeMaxima;
    }
    //#endregion
    //#region Métodos
    Carro.prototype.acelerar = function (velocidade) {
        if (velocidade <= 10) {
            if (this.velocidade <= this.velocidadeMaxima) {
                this.velocidade += velocidade;
                if (this.velocidade > this.velocidadeMaxima) {
                    console.log('O carro já atingiu a velocidade máxima!');
                    this.velocidade = this.velocidadeMaxima;
                }
            }
        }
        else
            console.log('O limite de aceleração é de 10 KM/h');
    };
    Carro.prototype.frear = function () {
        return (this.velocidade / 10);
    };
    Carro.prototype.imprimirDados = function () {
        console.log("Marca: " + this.marca);
        console.log("Modelo: " + this.modelo);
        console.log("Placa: " + this.placa);
        console.log("Velocidade atual: " + this.velocidade);
        console.log("Velocidade m\u00E1xima: " + this.velocidadeMaxima);
    };
    return Carro;
}());
exports["default"] = Carro;
