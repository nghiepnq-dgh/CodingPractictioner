function Cong(x: number): string{
    return `${x}`
}

// generic se ko biet dc truyen param va return ve cai gi

function Generic <T>(a: T) : T{
    return a
}

Generic<string>("this is generic")

class Student {
    static printArr<T>(param: T[]): void{
        console.log(param)
    }
}

//nho vao static ma ta k can tao ra 1 obj moi tu class ma co the goi truc tiep

Student.printArr<any>(["1",2,4,5,9])

class Dog<A,B,C> {
    id: A;
    name: B;
    age: C;

    constructor(id: A, name: B, age: C){
        this.id = id,
        this.name = name,
        this.age = age
    }
}

let huskey = new Dog<number, string, number>(1,"Be Bum",3)