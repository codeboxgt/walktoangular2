export class CreditCard {
    private number:string;
    private name:string;
    private bank:string;
    private balance:number;
    private limit:number;

    constructor(no:string, nm:string, bk:string, bl:number,lm:number) {
        this.number = no;
        this.name = nm;
        this.bank = bk;
        this.balance = bl;
        this.limit = lm;
    }

    get getNumber():string {
        return this.number;
    }

    get getName():string {
        return this.name;
    }

    get getBank():string {
        return this.bank;
    }

    get getBalance():number {
        return Math.round(this.balance*100)/100;
    }

    get getLimit():number {
        return Math.round(this.limit);
    }

    chargelt(price:number):boolean {
        if(price + this.balance > this.limit) {
            return false;
        }else {
            this.balance += price;
            return true;
        }
    }

    makePayment(payment:number):void {
        this.balance -= payment;
    }

    static printCard(c:CreditCard):void {
        console.log("%cINFORMACION TARJETA CREDITO", "color:darkorange");
        console.log(`Número de Tarjeta: ${c.getNumber}
Nombre: ${c.getName}
Banco: ${c.getBank}
Saldo Tarjeta: ${c.getBalance}
Límite Tarjeta: ${c.getLimit}`)
    }
}