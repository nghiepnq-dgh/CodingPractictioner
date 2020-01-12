class Teacher {
    constructor(name) {
        this._name = name;
    }
    mothodShowName() {
        console.log(`${this._name}`);
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
}
let NguyenVanA = new Teacher("Nguyen Van A");
console.log("DEBUG-CODE: NguyenVanA.name", NguyenVanA.name);
NguyenVanA.name = "Nguyen Van Anh";
console.log("DEBUG-CODE: NguyenVanA.name", NguyenVanA.name);
