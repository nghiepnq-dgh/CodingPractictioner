class Cat {
    constructor(id, name, age) {
        this.id = id,
            this.name = name,
            this.age = age;
    }
    methodShowInfo() {
        console.log(`${this.id} - ${this.name} - ${this.age}`);
    }
}
class BeBo extends Cat {
    constructor(id, name, age, author) {
        super(id, name, age);
        this.author = author;
    }
    methodShowInfoOfBeBo() {
        super.methodShowInfo;
        console.log(this.author);
    }
}
const objCat = new Cat(1, "Cat", 100);
objCat.methodShowInfo();
const objBo = new BeBo(1, "Bo", 20, "Cat of Nghiep");
objBo.methodShowInfoOfBeBo();
