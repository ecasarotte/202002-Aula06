"use strict";
exports.__esModule = true;
exports.Produto = void 0;
var Produto = /** @class */ (function () {
    function Produto(codigo, descricao, unidadeDeMedida, quantidadeEstoque) {
        if (quantidadeEstoque === void 0) { quantidadeEstoque = 0; }
        this.codigo = codigo;
        this.descricao = descricao;
        this.unidadeDeMedida = unidadeDeMedida;
        this.quantidadeEstoque = quantidadeEstoque;
    }
    ;
    Produto.prototype.retornaEstoque = function () {
        return this.quantidadeEstoque;
    };
    Produto.prototype.implantaEstoque = function (numeroItens) {
        this.quantidadeEstoque += numeroItens;
        console.log('Quantdade adicionada com sucesso!');
    };
    Produto.prototype.baixaEstoque = function (numeroItens) {
        if (numeroItens > 0) {
            if (numeroItens <= this.quantidadeEstoque) {
                this.quantidadeEstoque -= numeroItens;
                console.log('Baixa executada com sucesso!');
                return true;
            }
            else {
                console.log('Baixa não pode ser realizada, pois o número de itens solicitados é maior do que a quantidade em estoque.');
                return false;
            }
        }
        else
            console.log('Informe um número maior que 0 para realizar essa ação.');
    };
    Produto.prototype.imprimeDados = function () {
        console.log("C\u00F3digo: " + this.codigo);
        console.log("Descri\u00E7\u00E3o: " + this.descricao);
        console.log("Unidade de medida: " + this.unidadeDeMedida);
        console.log("Quantidade em estoque: " + this.quantidadeEstoque);
    };
    return Produto;
}());
exports.Produto = Produto;
