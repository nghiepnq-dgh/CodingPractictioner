class Prouct {
    id: number;
    name: string;
    state: string;

    constructor(id: number, name: string, state: string) {
        this.id = id;
        this.name = name;
        this.state = state;
    }

    // Phuong thuc 
    ShowInfo(){
        console.log(`${this.id} - ${this.name} - ${this.state}`)
    }    
}


//product 1 dc khoi tao theo class Product nen se co 3 pargam
let product1 = new Prouct(1, "Food", "Hot")
product1.ShowInfo()

console.log("DEBUG-CODE: product1", product1)
//1 - Food - Hot