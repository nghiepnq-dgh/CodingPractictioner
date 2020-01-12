/*
Access modifiers
                    Inside   Outside  ChildClass
    public:           ok        ok        ok
    private:          ok        no        no
    protected:        ok        no        ok
*/



class Cat {
    // Khong dat bat ky Access modifiers nao nghia la no public
    public id: number;
    private name: string;
    protected age: number;

    constructor(id: number, name:string, age:number) {
        this.id = id,
        this.name = name,
        this.age = age
    }

    methodShowInfo(): void {
        console.log(`${this.id} - ${this.name} - ${this.age}`)
    }
}

class BeBo extends Cat {
    author: string;
    constructor(id: number, name:string, age:number, author: string){
        //supper se goi lai contructor cua cha no
        super(id,name,age);
        this.author = author
    }
    methodShowInfoOfBeBo () {
        super.methodShowInfo
        console.log(this.author)
    }
}

const objCat = new Cat(1,"Cat",100)
objCat.methodShowInfo()

const objBo = new BeBo(1,"Bo",20,"Cat of Nghiep")
objBo.methodShowInfoOfBeBo()