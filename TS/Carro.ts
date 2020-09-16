export default class Carro {

    //#region Atributos
    public readonly marca: string;
    public readonly modelo: string;
    private readonly placa: string;
    public velocidade: number;
    public readonly velocidadeMaxima: number;
    //#endregion

    //#region Construtor
    constructor(marca: string, modelo: string, placa: string,
        velocidade: number, velocidadeMaxima: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.placa = placa;
        this.velocidade = velocidade;
        this.velocidadeMaxima = velocidadeMaxima;
    }
    //#endregion

    //#region Métodos
    public acelerar(velocidade: number): void {

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
    }

    public frear(): number {
        return (this.velocidade / 10);
    }

    public imprimirDados(): void {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Placa: ${this.placa}`);
        console.log(`Velocidade atual: ${this.velocidade}`);
        console.log(`Velocidade máxima: ${this.velocidadeMaxima}`);
    }
    //#endregion
}
