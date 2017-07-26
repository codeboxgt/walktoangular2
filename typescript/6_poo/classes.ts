
class CreditCard {
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

class Test {
    static main():void {
        let wallets = new Array<CreditCard>();
        wallets[0] = new CreditCard("5391 00375 9387 5309", "John Bowman", "California Savings", 0.0, 2500);
        wallets[1] = new CreditCard("3485 0399 3395 1954", "John Bowman", "California Federal", 0.0, 3500);
        wallets[2] = new CreditCard("6011 4902 3294 2994", "John Bowman", "California Finance", 0.0, 5000);

        for(let i = 1; i<=16; i++) {
            wallets[0].chargelt(i);
            wallets[1].chargelt(2*i);
            wallets[2].chargelt(3*i);
        }

        console.log("%cPAGOS DE TARJETA", "color:blue");
        
        for(let i=0; i<3; i++) {
            CreditCard.printCard(wallets[i]);
            while(wallets[i].getBalance > 100) {
                wallets[i].makePayment(100);
                console.log(`%cNuevo Saldo: ${wallets[i].getBalance}`, "color:red");
            }
        }

    }
}

Test.main();