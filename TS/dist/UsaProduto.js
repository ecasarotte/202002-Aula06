"use strict";
exports.__esModule = true;
var Produto_1 = require("./Produto");
var UsaProduto = /** @class */ (function () {
    function UsaProduto() {
        this.produto = new Produto_1.Produto(1, 'Chave de fenda', 'CM');
        this.produto.imprimeDados();
        console.log('\n');
        this.produto.baixaEstoque(0);
        this.produto.baixaEstoque(1500);
        this.produto.implantaEstoque(100);
        this.produto.baixaEstoque(10);
        this.produto.imprimeDados();
    }
    ;
    return UsaProduto;
}());
var teste = new UsaProduto();
