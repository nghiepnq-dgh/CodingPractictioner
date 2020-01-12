interface People {
    name:string;
    eat():void;
    sleep?():void;
}
interface SupperMan {
    strong?():void
}

class Peoples implements People, SupperMan {
    private _name: string;
    constructor(name:string){
        this._name = name
    }
    eat():void{
        console.log("Eat")
    };
    sleep():any{
        console.log("Sleep 8 hours")
    }
    strong():void{
        console.log("You are best")
    }
    
    public get name() : string {
        return this._name
    }
    
    public set name(v : string) {
        this._name = v;
    } 
}

let supperMan = new Peoples("Me")
supperMan.name