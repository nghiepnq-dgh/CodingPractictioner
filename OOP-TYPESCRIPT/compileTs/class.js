class Prouct {
    constructor(id, name, state) {
        this.id = id;
        this.name = name;
        this.state = state;
    }
    ShowInfo() {
        console.log(`${this.id} - ${this.name} - ${this.state}`);
    }
}
let product1 = new Prouct(1, "Food", "Hot");
product1.ShowInfo();
console.log("DEBUG-CODE: product1", product1);
