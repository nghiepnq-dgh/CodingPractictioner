function Cong(x) {
    return `${x}`;
}
function Generic(a) {
    return a;
}
Generic("this is generic");
class Student {
    static printArr(param) {
        console.log(param);
    }
}
Student.printArr(["1", 2, 4, 5, 9]);
class Dog {
    constructor(id, name, age) {
        this.id = id,
            this.name = name,
            this.age = age;
    }
}
let huskey = new Dog(1, "Be Bum", 3);
