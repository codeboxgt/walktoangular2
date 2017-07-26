//Interfaces

interface Point {
    x:number,
    y?:number
}

let point:Point = {
    x : 5,
    y : 4
}

function printPoint(_point:Point){
    console.log(`el punto en el plano es (${_point.x},${_point.y})`);
}

printPoint(point);