export class Lampada {

    constructor(public status?: boolean) { }

    public ligar(): void { this.status = true; };

    public desligar(): void { this.status = false; };

    public observar(): string {

        let result: string = '';

        this.status ? result = 'Ligado' : result = 'Desligado';

        return result;
    }
}
