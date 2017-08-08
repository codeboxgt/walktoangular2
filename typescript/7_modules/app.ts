import { CreditCard } from './classes/creditCard.js';

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