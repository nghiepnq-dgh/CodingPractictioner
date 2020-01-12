const obj: any = {}

interface ObjectDog {
    name : string;
    age: number;
    cost? : string
}

let newDog : ObjectDog;
newDog = {
    name: 'Daiment',
    age: 1
}

let newDog2 : ObjectDog = {
    name: 'Lisa',
    age: 5,
    cost: "free1"
}