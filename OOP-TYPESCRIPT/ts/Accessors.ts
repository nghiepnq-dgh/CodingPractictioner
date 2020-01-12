class Teacher {

    //nen dat bien la _name de tranh nham
    private _name:string
    constructor(name:string){
        this._name = name
    }

    mothodShowName():void{
        console.log(`${this._name}`)
    }

    //vi bien name la prive nen can tao method de co the truy cap tu ben ngoai
    public get name() : string {
        return this._name;
    }
    
    public set name(newName : string) {
        this._name = newName;
    }
    
    
}


let NguyenVanA = new Teacher("Nguyen Van A")

//getter se giup lay dung name cua Teacher
console.log("DEBUG-CODE: NguyenVanA.name", NguyenVanA.name)

//setter se cho phep sua ten, neu khong co setter doan code phia duoi se ko work

NguyenVanA.name = "Nguyen Van Anh"

console.log("DEBUG-CODE: NguyenVanA.name", NguyenVanA.name)