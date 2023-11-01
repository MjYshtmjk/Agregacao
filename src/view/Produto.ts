export class Produto{

    public nome: string;
    public preco: number;

    constructor(_nome:string, _preco:number){
        this.nome = _nome;
        this.preco = _preco;
    }

    public setNome(_nome:string):void{
        this.nome = _nome;
    }

    public getNome(): string{
        return this.nome;
    }
    
    public setpreco(_preco:number):void{
        this.preco = _preco;
    }

    public getpreco(): number{
        return this.preco;
    }
}