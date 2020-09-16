import { Produto } from "./Produto";

class UsaProduto{

    public produto: Produto = new Produto(1, 'Chave de fenda', 'CM');

    constructor() {
        this.produto.imprimeDados();
        console.log('\n');
        this.produto.baixaEstoque(0);
        this.produto.baixaEstoque(1500);
        this.produto.implantaEstoque(100);
        this.produto.baixaEstoque(10);
        this.produto.imprimeDados();
     };
}

const teste: UsaProduto = new UsaProduto();