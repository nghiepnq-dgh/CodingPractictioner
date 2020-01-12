class Peoples {
    constructor(name) {
        this._name = name;
    }
    eat() {
        console.log("Eat");
    }
    ;
    sleep() {
        console.log("Sleep 8 hours");
    }
    strong() {
        console.log("You are best");
    }
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }
}
let supperMan = new Peoples("Me");
supperMan.name;
