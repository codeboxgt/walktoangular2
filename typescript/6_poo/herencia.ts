// Herencia en clases

class Progression {
    protected first:number;
    protected current:number;

    constructor() {
        this.first = this.current = 0;
    }

    protected firstValue():number {
        this.current = this.first;
        return this.current;
    }

    protected nextValue():number {
        return ++this.current;        
    }

    printLine(num:number):string {
        let _builder:string = "";
        for(let i = 2; i <= num; i++){
            _builder += `${this.nextValue()} `;
            // console.log(`%c ${this.nextValue()}`, "color:blue");
        }
        return _builder;
    }

    printProgression(n:number):void {
        console.log(`%c${this.firstValue()}`, "color:red");
        for(let i = 2; i <= n; i++){
            console.log(`%c ${this.nextValue()}`, "color:blue");
        }
    }
}

// Serie Aritmetica extiende de Progression

class ArithProgression extends Progression {
    protected increment:number;

    constructor(inc:number = 1) {
        super();
        this.increment = inc;
    }

    protected nextValue():number {
        this.current += this.increment;
        return this.current;
    }
}

// Serie Geometrica extiende de Progression

class GeomProgression extends Progression {

    constructor(base:number = 2) {
        super();
        this.first = base;
        this.current = this.first;
    }

    protected nextValue():number {
        this.current *= this.first;
        return this.current;
    }

}

class Tester {
    
    static main():void {
        let progression:Progression;

        console.log("%cSerie Aritmetica con incremento Predeterminado: ", "color:darkorange");
        progression = new ArithProgression();
        progression.printProgression(10);
        console.log("\n");
        console.log("%cSerie Aritmetica con incremento 5: ", "color:darkred");           
        progression = new ArithProgression(5);
        progression.printProgression(10);
        console.log("\n");
        console.log("%cSerie Geometrica con base Predeterminada: ", "color:blueviolet");
        progression = new GeomProgression();
        progression.printProgression(10);
        console.log("\n");
        console.log("%cSerie Geometrica con base 3: ", "color:coral");   
        progression = new GeomProgression(5);
        progression.printProgression(10);
    }
}

Tester.main();