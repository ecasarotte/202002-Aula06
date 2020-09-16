export class Produto {

    constructor(
        private readonly codigo: number,
        private readonly descricao: string,
        private unidadeDeMedida: string,
        private quantidadeEstoque: number = 0,
    ) { };

    public retornaEstoque(): number {
        return this.quantidadeEstoque;
    }

    public implantaEstoque(numeroItens: number): void {
        this.quantidadeEstoque += numeroItens;
        console.log('Quantdade adicionada com sucesso!');
    }

    public baixaEstoque(numeroItens: number): boolean {

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
    }

    public imprimeDados(): void {
        console.log(`Código: ${this.codigo}`);
        console.log(`Descrição: ${this.descricao}`);
        console.log(`Unidade de medida: ${this.unidadeDeMedida}`);
        console.log(`Quantidade em estoque: ${this.quantidadeEstoque}`);
    }
}